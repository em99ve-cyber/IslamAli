@echo off
title Portfolio Excel Sync
echo ==================================================
echo Starting Excel-to-Web Sync...
echo ==================================================
echo.

if exist "%~dp0Update_Portfolio.ps1" (
    powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0Update_Portfolio.ps1"
) else (
    echo ERROR: Update_Portfolio.ps1 was not found in the script directory!
)

echo.
echo ==================================================
echo Sync Completed. Press any key to close...
echo ==================================================
pause > nul
