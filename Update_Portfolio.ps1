# Update_Portfolio.ps1 - Local Portfolio Excel-to-Web Sync Script
# This script runs locally on your machine. It unzips your Excel sheet, parses the rows,
# automatically downloads missing thumbnails (Google Drive / Facebook), and updates app.js.

$xlsxPath = Join-Path $PSScriptRoot "My portfolio.xlsx"
$appJsPath = Join-Path $PSScriptRoot "app.js"
$thumbnailsDir = Join-Path $PSScriptRoot "thumbnails"

if (-not (Test-Path $xlsxPath)) {
    Write-Error "Could not find 'My portfolio.xlsx' in $PSScriptRoot"
    Exit
}

Write-Output "=================================================="
Write-Output "Starting Excel Sync for Islam's Portfolio"
Write-Output "Excel Sheet: $xlsxPath"
Write-Output "=================================================="

# 1. Parse Excel Sheet (.xlsx) using native XML extraction
$tempDir = Join-Path $env:TEMP ([Guid]::NewGuid().ToString())
New-Item -ItemType Directory -Path $tempDir | Out-Null

try {
    $zipPath = Join-Path $tempDir "temp.zip"
    Copy-Item $xlsxPath $zipPath -Force
    Expand-Archive -Path $zipPath -DestinationPath $tempDir -Force

    $sharedStringsPath = Join-Path $tempDir "xl/sharedStrings.xml"
    $sheetPath = Join-Path $tempDir "xl/worksheets/sheet1.xml"

    # Load Shared Strings
    $sharedStrings = @()
    if (Test-Path $sharedStringsPath) {
        [xml]$ssXml = Get-Content $sharedStringsPath -Encoding UTF8
        $siNodes = $ssXml.SelectNodes("//*[local-name()='si']")
        foreach ($si in $siNodes) {
            $tNode = $si.SelectSingleNode(".//*[local-name()='t']")
            if ($tNode) {
                $sharedStrings += $tNode.InnerText
            } else {
                $rNodes = $si.SelectNodes(".//*[local-name()='r']/*[local-name()='t']")
                if ($rNodes.Count -gt 0) {
                    $text = ($rNodes | ForEach-Object { $_.InnerText }) -join ""
                    $sharedStrings += $text
                } else {
                    $sharedStrings += ""
                }
            }
        }
    }

    # Load Worksheet Rows
    $projects = @()
    if (Test-Path $sheetPath) {
        [xml]$sheetXml = Get-Content $sheetPath -Encoding UTF8
        $rows = $sheetXml.SelectNodes("//*[local-name()='row']")
        
        foreach ($r in $rows) {
            $rowData = [ordered]@{ "Row" = $r.r }
            $cells = $r.SelectNodes(".//*[local-name()='c']")
            foreach ($c in $cells) {
                $colRef = $c.r -replace '\d+'
                $vNode = $c.SelectSingleNode(".//*[local-name()='v']")
                $val = ""
                if ($vNode) {
                    $rawVal = $vNode.InnerText
                    if ($c.t -eq "s") {
                        $val = $sharedStrings[[int]$rawVal]
                    } else {
                        $val = $rawVal
                    }
                }
                $rowData[$colRef] = $val
            }
            $projects += [PSCustomObject]$rowData
        }
    } else {
        Write-Error "Worksheet sheet1.xml not found inside zip structure!"
        Exit
    }
} finally {
    if (Test-Path $tempDir) {
        Remove-Item -Recurse -Force $tempDir
    }
}

# 2. Process rows and compile projectsData array
$jsBlocks = @()
$id = 1
$newThumbnailsDownloaded = 0

# Set browser headers for scraping Facebook og:image tags
$userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

# Header is row 1, skip it
foreach ($p in $projects) {
    if ($p.Row -eq "1" -or [string]::IsNullOrEmpty($p.B) -or [string]::IsNullOrEmpty($p.A)) {
        continue
    }

    $rowNum = [int]$p.Row
    $title = $p.A
    $link = $p.B
    $catStr = $p.C
    $desc = $p.D
    $role = $p.E
    $toolsStr = $p.F

    # Standardize Title names for cinematic shorts
    switch ($rowNum) {
        2 { $title = "Strang Lila Short Film" }
        3 { $title = "Lonely Mother Short Film" }
        4 { $title = "Cancer Heroes" }
        5 { $title = "Out of Z Box" }
        6 { $title = "Strang Lila Short Film Trailer" }
        7 { $title = "The Ballet Girls" }
        8 { $title = "Nubian Short Film" }
        9 { $title = "Masrya Short Film" }
        10 { $title = "BS Perfumes" }
        11 { $title = "BS Hospitality" }
        12 { $title = "BS Perfumes 2" }
        Default {
            $title = $p.A
        }
    }

    # Aspect Ratio logic
    $aspect = "landscape"
    if ($title -like "*Mohammed Shami*" -or $link -like "*/reel/*" -or $title -like "*Teleperformance*" -or $link -like "*/shorts/*") {
        $aspect = "portrait"
    }
    if ($title -like "*Campus Career Fair*") {
        $aspect = "landscape"
    }

    # Ensure thumbnail folder exists
    if (-not (Test-Path $thumbnailsDir)) {
        New-Item -ItemType Directory -Path $thumbnailsDir -Force | Out-Null
    }

    $thumbnailName = "project$id.jpg"
    $thumbnailLocalPath = Join-Path $thumbnailsDir $thumbnailName
    $thumbnailUrlPath = "thumbnails/$thumbnailName"

    # Download thumbnail if missing
    if (-not (Test-Path $thumbnailLocalPath)) {
        Write-Output "-> Download missing thumbnail for project $id - $title"
        if ($link -like "*drive.google.com*") {
            # Extract Drive file ID and fetch from public thumbnail CDN
            if ($link -match "/file/d/([^/]+)") {
                $fileId = $Matches[1]
                $driveThumbUrl = "https://drive.google.com/thumbnail?id=$fileId&sz=w800"
                try {
                    Invoke-WebRequest -Uri $driveThumbUrl -OutFile $thumbnailLocalPath -UserAgent $userAgent -TimeoutSec 15
                    $newThumbnailsDownloaded++
                    Write-Output "   Successfully downloaded Drive thumbnail."
                } catch {
                    Write-Warning "   Failed to download Drive thumbnail. Saving fallback."
                }
            }
        } elseif ($link -like "*facebook.com*") {
            try {
                # Scrape reel/video page to extract og:image meta content
                $html = Invoke-WebRequest -Uri $link -UserAgent $userAgent -TimeoutSec 15
                $htmlStr = $html.Content
                if ($htmlStr -match '<meta property="og:image" content="([^"]+)"' -or $htmlStr -match 'property="og:image" content="([^"]+)"') {
                    $imgUrl = $Matches[1]
                    # Decode HTML entities (e.g. &amp; -> &)
                    $imgUrl = [System.Net.WebUtility]::HtmlDecode($imgUrl)
                    Invoke-WebRequest -Uri $imgUrl -OutFile $thumbnailLocalPath -UserAgent $userAgent -TimeoutSec 15
                    $newThumbnailsDownloaded++
                    Write-Output "   Successfully downloaded Facebook thumbnail."
                } else {
                    Write-Warning "   Could not find og:image on Facebook page."
                }
            } catch {
                Write-Warning "   Failed to scrape Facebook page."
            }
        } elseif ($link -like "*youtube.com*" -or $link -like "*youtu.be*") {
            try {
                if ($link -match "(?:v=|\/v\/|embed\/|youtu\.be\/|\/shorts\/)([^?&]+)") {
                    $ytId = $Matches[1]
                    $ytThumbUrl = "https://img.youtube.com/vi/$ytId/maxresdefault.jpg"
                    Invoke-WebRequest -Uri $ytThumbUrl -OutFile $thumbnailLocalPath -UserAgent $userAgent -TimeoutSec 15
                    $newThumbnailsDownloaded++
                    Write-Output "   Successfully downloaded YouTube thumbnail."
                }
            } catch {
                # Fallback to hqdefault if maxresdefault is not available
                try {
                    $ytThumbUrlFallback = "https://img.youtube.com/vi/$ytId/hqdefault.jpg"
                    Invoke-WebRequest -Uri $ytThumbUrlFallback -OutFile $thumbnailLocalPath -UserAgent $userAgent -TimeoutSec 15
                    $newThumbnailsDownloaded++
                    Write-Output "   Successfully downloaded fallback YouTube thumbnail."
                } catch {
                    Write-Warning "   Failed to download YouTube thumbnail."
                }
            }
        }

        # If download failed or it's a fallback placeholder
        if (-not (Test-Path $thumbnailLocalPath)) {
            # Copy a default placeholder (using Unsplash food picture or similar)
            $placeholderUrl = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800"
            try {
                Invoke-WebRequest -Uri $placeholderUrl -OutFile $thumbnailLocalPath -UserAgent $userAgent -TimeoutSec 10
                Write-Output "   Used default placeholder image."
            } catch {
                Write-Warning "   Could not download placeholder."
            }
        }
    }

    # Categories
    $categories = @()
    if ($catStr -like "*Video Editing*") { $categories += '"editing"' }
    if ($catStr -like "*Color Grading*") { $categories += '"color"' }
    if ($catStr -like "*Translation*") { $categories += '"translation"' }
    if ($categories.Count -eq 0) { $categories += '"editing"' }
    
    # 10 Featured "Best of the Best" projects (mapped by original spreadsheet row number)
    $featuredRows = @(3, 4, 6, 7, 8, 10, 11, 26, 33, 34)
    if ($featuredRows -contains $rowNum) {
        $categories += '"featured"'
    }
    $categoriesJs = "[" + ($categories -join ", ") + "]"

    # Tools
    $tools = @()
    if (-not [string]::IsNullOrEmpty($toolsStr)) {
        $parts = $toolsStr -split "\s*-\s*|\s*,\s*"
        foreach ($part in $parts) {
            $cleaned = $part.Trim()
            if ($cleaned) { $tools += "`"$cleaned`"" }
        }
    }
    $toolsJs = "[" + ($tools -join ", ") + "]"

    # Convert Media Sharing URL to Direct Embedded Player URL
    $mediaUrl = $link
    if ($link -like "*drive.google.com*") {
        if ($link -match "/file/d/([^/]+)") {
            $fileId = $Matches[1]
            $mediaUrl = "https://drive.google.com/file/d/$fileId/preview"
        }
    } elseif ($link -like "*facebook.com*") {
        $encodedLink = [uri]::EscapeDataString($link)
        $mediaUrl = "https://www.facebook.com/plugins/video.php?href=$encodedLink&show_text=0"
    } elseif ($link -like "*youtube.com*" -or $link -like "*youtu.be*") {
        if ($link -match "(?:v=|\/v\/|embed\/|youtu\.be\/|\/shorts\/)([^?&]+)") {
            $ytId = $Matches[1]
            $mediaUrl = "https://www.youtube.com/embed/$ytId?rel=0&modestbranding=1"
        }
    } elseif ($link -like "*dropbox.com*") {
        $mediaUrl = $link -replace 'dl=0', 'raw=1' -replace 'dl=1', 'raw=1'
    }

    # Format description for JS template literals
    $escapedDesc = $desc.Replace("\", "\\").Replace('"', '\"').Replace("`n", "\n").Replace("`r", "")

    # Construct single JS block
    $jsProject = @"
    {
        id: $id,
        title: "$title",
        category: $categoriesJs,
        thumbnail: "$thumbnailUrlPath",
        description: "$escapedDesc",
        role: "$role",
        tools: $toolsJs,
        mediaType: "video",
        mediaUrl: "$mediaUrl",
        aspect: "$aspect"
    }
"@
    $jsBlocks += $jsProject
    $id++
}

# 3. Replace projectsData in app.js
$allProjectsJs = "const projectsData = [`r`n" + ($jsBlocks -join ",`r`n") + "`r`n];"

if (Test-Path $appJsPath) {
    $appJsContent = Get-Content $appJsPath -Raw
    $pattern = '(?s)const projectsData = \[.*?\r?\n\];'
    if ($appJsContent -match $pattern) {
        $updatedAppJsContent = $appJsContent -replace $pattern, $allProjectsJs
        Set-Content $appJsPath $updatedAppJsContent -NoNewline -Encoding UTF8
        Write-Output "=================================================="
        Write-Output "SUCCESS: Compiled $($jsBlocks.Count) projects into app.js!"
        Write-Output "Downloaded $newThumbnailsDownloaded new project thumbnails."
        Write-Output "=================================================="
    } else {
        Write-Error "Could not find 'const projectsData = [...]' pattern inside app.js!"
    }
} else {
    Write-Error "app.js not found in $appJsPath"
}
