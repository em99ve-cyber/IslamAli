/* app.js - Interactive Portfolio Functionality */

// --- 1. Dynamic Projects Data ---
// You can easily modify, add or delete projects here.
// For Google Drive videos, use a direct stream/download link or embed link.
// If using YouTube/Vimeo, use their embed URL (e.g., https://www.youtube.com/embed/VIDEO_ID)
const projectsData = [
    {
        id: 1,
        title: "Strang Lila Short Film",
        category: ["editing", "translation"],
        thumbnail: "thumbnails/project1.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/7c4debd8-c75a-4184-ade8-53ad10bc0cf1/preview.webp",
        description: "One of my most rewarding cinematic projects. \"Strang Lila\" is a moving short drama about a young woman imprisoned over financial debt, exploring the harsh social abandonment she faces after her release.\n\nAs the sole editor, my focus was entirely on crafting the narrative structure and a compelling dramatic pace that captures her isolation. Through precise cutting and meticulous scene transitions, I shaped the emotional arc of the story to keep the audience deeply gripped with every frame.",
        role: "Editor & Colorist",
        tools: ["Adobe Premiere Pro", "Subtitle Edit"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/7c4debd8-c75a-4184-ade8-53ad10bc0cf1",
        aspect: "landscape",
        originalPost: ""
    },
    {
        id: 2,
        title: "Lonely Mother Short Film",
        category: ["editing", "color", "featured"],
        thumbnail: "thumbnails/project2.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/21a98d76-9ef0-4359-ac95-7a6cb7d9ebfe/preview.webp",
        description: "A silent musical short film exploring the profound isolation of a woman living completely alone in a vast, empty apartment. With no dialogue, the entire narrative relies purely on visual expression and emotional cadence.\nEditing: Crafted a slow, deliberate pace to emphasize the heavy silence and emotional weight.\n\nColor Grading: Used a cold, desaturated palette to reflect her internal loneliness within the void.",
        role: "Editor & Colorist",
        tools: ["Adobe Premiere Pro", "Color correction"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/21a98d76-9ef0-4359-ac95-7a6cb7d9ebfe",
        aspect: "landscape",
        originalPost: ""
    },
    {
        id: 3,
        title: "Cancer Heroes",
        category: ["editing", "color", "featured"],
        thumbnail: "thumbnails/project3.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/ca795e15-fa6c-4460-9566-d0cc605cb02c/preview.webp",
        description: "A touching music video dedicated to children battling cancer, portraying them as resilient heroes through creative play like boxing or acting as doctors. The video highlights their inspiring strength and fighting spirit.\n\nEditing: Balanced the musical rhythm with energetic cuts, focusing on the children's uplifting expressions.\n\nColor Grading: Designed a vibrant, warm color palette to reflect hope, life, and heroic energy.",
        role: "Editor & Colorist",
        tools: ["Adobe Premiere Pro", "Color correction"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/ca795e15-fa6c-4460-9566-d0cc605cb02c",
        aspect: "landscape",
        originalPost: ""
    },
    {
        id: 4,
        title: "Out of Z Box",
        category: ["editing", "color"],
        thumbnail: "thumbnails/project4.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/af8fd05e-0728-4afe-b95b-4a11ee7ed629/preview.webp",
        description: "A high-energy corporate video created for an internal company event, designed entirely to inspire and motivate employees. Built 100% from curated stock footage, the project aimed to drive innovative thinking.\n\nFootage Curation: Handpicked and seamlessly stitched together high-quality clips to build a narrative from scratch.\n\nDynamic Pacing: Synced fast-paced editing with powerful sound to elevate energy and leave a lasting impression.",
        role: "Editor & Colorist",
        tools: ["Adobe Premiere Pro", "Color correction"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/af8fd05e-0728-4afe-b95b-4a11ee7ed629",
        aspect: "landscape",
        originalPost: ""
    },
    {
        id: 5,
        title: "Strang Lila Short Film Trailer",
        category: ["editing", "translation", "featured"],
        thumbnail: "thumbnails/project5.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/233f4e7e-9851-4df5-9a19-994f477c825f/preview.webp",
        description: "A high-tension, fast-paced trailer designed to tease the emotional and dramatic arc of the short film \"Layla.\" The goal was to build intense curiosity around her imprisonment and the social isolation she faces upon release.\nMy Role: Video Editor\n\nTeaser Pacing: Crafted a compelling, sharp sequence using quick cuts and high-impact transitions to grip the audience from the first second.\n\nSuspense Building: Structured the narrative fragments perfectly to highlight the conflict and create anticipation without spoiling the story.",
        role: "Film editor / Translator",
        tools: ["Adobe Premiere Pro", "Subtitle Edit"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/233f4e7e-9851-4df5-9a19-994f477c825f",
        aspect: "landscape",
        originalPost: ""
    },
    {
        id: 6,
        title: "The Ballet Girls",
        category: ["editing", "color", "featured"],
        thumbnail: "thumbnails/project6.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/b94151ec-a59e-445f-a5c2-1d9cd05972f0/preview.webp",
        description: "A captivating visual piece that pulls back the curtain on the world of ballet, capturing the dedication, intense exhaustion, and physical struggles dancers endure during training.\n\nRhythmic Editing: Crafted a compelling pace that contrasts their elegant movements with the heavy physical toll of rehearsals.\n\nDramatic Grading: Blended soft, graceful tones for performances with harsh, high-contrast looks to amplify the sweat and strain.",
        role: "Editor & Colorist",
        tools: ["Adobe Premiere Pro", "Color correction"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/b94151ec-a59e-445f-a5c2-1d9cd05972f0",
        aspect: "landscape",
        originalPost: ""
    },
    {
        id: 7,
        title: "Nubian Short Film",
        category: ["translation", "featured"],
        thumbnail: "thumbnails/project7.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/a8213a9f-32bd-4bfb-92d8-facbb3dc4cd1/preview.webp",
        description: "A cultural documentary exploring the ancient stories, lifestyle, and historical struggles of the Nubian people in Egypt to preserve their unique heritage.\n\nCultural Translation: Translated dialogue and testimonies from Arabic to English, preserving cultural nuances and emotional depth.\n\nSubtitle Timing: Programmed precise subtitle syncing to ensure seamless readability without distracting from the visual storytelling.",
        role: "Subtitler & Translator",
        tools: ["Adobe Premiere Pro", "Subtitle Edit"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/a8213a9f-32bd-4bfb-92d8-facbb3dc4cd1",
        aspect: "landscape",
        originalPost: ""
    },
    {
        id: 8,
        title: "Masrya Short Film",
        category: ["translation"],
        thumbnail: "thumbnails/project8.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/7c29b697-852d-4707-b815-991546159184/preview.webp",
        description: "A compelling anthology short film that highlights the vital role of women in Egyptian society by weaving together the distinct stories of multiple unique characters.\nMy Role: Subtitler & Translator\n\nDialogue Translation: Translated the diverse stories and dialogue into English, ensuring the local Egyptian cultural context and emotional depth were accurately conveyed.\n\nSubtitle Engineering: Managed precise timing and synchronization for the text to provide an easy, distraction-free reading experience for international viewers.",
        role: "Subtitler & Translator",
        tools: ["Adobe Premiere Pro", "Subtitle Edit"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/7c29b697-852d-4707-b815-991546159184",
        aspect: "landscape",
        originalPost: ""
    },
    {
        id: 9,
        title: "BS Perfumes",
        category: ["editing", "color", "featured"],
        thumbnail: "thumbnails/project9.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/50475a6c-98b6-4cf5-9962-3b1a2eb8d7c1/preview.webp",
        description: "A cinematic and high-end commercial video showcasing the luxurious fragrance collection of an Emirati brand, designed with a sophisticated and premium visual aesthetic.\nMy Role: Editor, Colorist & Music Supervisor\n\nCinematic Editing & Pacing: Crafted sleek, elegant cuts synced perfectly with a premium soundtrack to elevate the brand's luxurious image.\n\nLuxury Color Grading: Applied a rich, polished color grade to highlight the product design, glass textures, and premium feel of the perfumes.",
        role: "Editor, Colorist & Music Supervisor",
        tools: ["Adobe Premiere Pro", "Color correction"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/50475a6c-98b6-4cf5-9962-3b1a2eb8d7c1",
        aspect: "landscape",
        originalPost: ""
    },
    {
        id: 10,
        title: "BS Hospitality",
        category: ["editing", "color", "featured"],
        thumbnail: "thumbnails/project10.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/5b4073b6-ab28-4253-8d58-2667dffa0090/preview.webp",
        description: "A sophisticated promotional video showcasing an Emirati company specializing in premium wedding and event hospitality, designed to reflect their high-end service and luxury standards.\nMy Role: Editor, Colorist & Music Supervisor\n\nCinematic Pacing: Combined seamless, elegant editing with a carefully curated soundtrack to highlight the premium and welcoming atmosphere of the events.\n\nLuxury Color Grading: Applied a warm, polished, and high-end color grade to enhance the beauty of the setups, lighting, and hospitality details.",
        role: "Editor, Colorist & Music Supervisor",
        tools: ["Adobe Premiere Pro", "Color correction"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/5b4073b6-ab28-4253-8d58-2667dffa0090",
        aspect: "landscape",
        originalPost: ""
    },
    {
        id: 11,
        title: "BS Perfumes 2",
        category: ["editing", "color"],
        thumbnail: "thumbnails/project11.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/196b0ab0-a7f1-4ac8-9ec4-bad50496e590/preview.webp",
        description: "A cinematic and high-end commercial video showcasing the luxurious fragrance collection of an Emirati brand, designed with a sophisticated and premium visual aesthetic.\nMy Role: Editor, Colorist & Music Supervisor\n\nCinematic Editing & Pacing: Crafted sleek, elegant cuts synced perfectly with a premium soundtrack to elevate the brand's luxurious image.\n\nLuxury Color Grading: Applied a rich, polished color grade to highlight the product design, glass textures, and premium feel of the perfumes.",
        role: "Editor, Colorist & Music Supervisor",
        tools: ["Adobe Premiere Pro", "Color correction"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/196b0ab0-a7f1-4ac8-9ec4-bad50496e590",
        aspect: "landscape",
        originalPost: ""
    },
    {
        id: 12,
        title: "Mohammed Shami – Influencer Content (Translation)",
        category: ["translation"],
        thumbnail: "thumbnails/project12.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/80c0398f-1035-4a20-a642-2779f98bb0fc/preview.webp",
        description: "A series of engaging food vlogs for the well-known Egyptian influencer Mohammed Shami, reviewing diverse restaurants across the United States with the goal of expanding his audience and breaking into the US market.\n\nArabic to English Translation: Translated vibrant street-food reviews and dialogue from Egyptian Arabic to English, maintaining his comedic timing, energetic tone, and unique personality.\n\nAudience Growth Strategy: Engineered precise and dynamic subtitle timing optimized for social media, ensuring the content is accessible and highly engaging for American viewers.",
        role: "Subtitler & Translator",
        tools: ["Adobe Premiere Pro", "Subtitle Edit"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/80c0398f-1035-4a20-a642-2779f98bb0fc",
        aspect: "portrait",
        originalPost: "https://www.facebook.com/share/v/18gtEfcuSt/"
    },
    {
        id: 13,
        title: "Mohammed Shami – Influencer Content (Translation)",
        category: ["translation"],
        thumbnail: "thumbnails/project13.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/7a00fe47-0f2e-40a3-aac1-d0a84a16dfb8/preview.webp",
        description: "A series of engaging food vlogs for the well-known Egyptian influencer Mohammed Shami, reviewing diverse restaurants across the United States with the goal of expanding his audience and breaking into the US market.\nArabic to English Translation: Translated vibrant street-food reviews and dialogue from Egyptian Arabic to English, maintaining his comedic timing, energetic tone, and unique personality.\n\nAudience Growth Strategy: Engineered precise and dynamic subtitle timing optimized for social media, ensuring the content is accessible and highly engaging for American viewers.",
        role: "Subtitler & Translator",
        tools: ["Adobe Premiere Pro", "Subtitle Edit"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/7a00fe47-0f2e-40a3-aac1-d0a84a16dfb8",
        aspect: "portrait",
        originalPost: "https://www.facebook.com/share/v/17d3jqvn3V/"
    },
    {
        id: 14,
        title: "Mohammed Shami – Influencer Content (Translation)",
        category: ["translation"],
        thumbnail: "thumbnails/project14.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/43ae99b2-5b2e-43ed-9319-ab13e8ede555/preview.webp",
        description: "A series of engaging food vlogs for the well-known Egyptian influencer Mohammed Shami, reviewing diverse restaurants across the United States with the goal of expanding his audience and breaking into the US market.\n\nArabic to English Translation: Translated vibrant street-food reviews and dialogue from Egyptian Arabic to English, maintaining his comedic timing, energetic tone, and unique personality.\n\nAudience Growth Strategy: Engineered precise and dynamic subtitle timing optimized for social media, ensuring the content is accessible and highly engaging for American viewers.",
        role: "Subtitler & Translator",
        tools: ["Adobe Premiere Pro", "Subtitle Edit"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/43ae99b2-5b2e-43ed-9319-ab13e8ede555",
        aspect: "portrait",
        originalPost: "https://www.facebook.com/share/v/1D71ChjMrU/"
    },
    {
        id: 15,
        title: "Mohammed Shami – Influencer Content (Translation)",
        category: ["translation"],
        thumbnail: "thumbnails/project15.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/19621351-7aea-497c-a091-4ae5a3cd495c/preview.webp",
        description: "A series of engaging food vlogs for the well-known Egyptian influencer Mohammed Shami, reviewing diverse restaurants across the United States with the goal of expanding his audience and breaking into the US market.\n\nArabic to English Translation: Translated vibrant street-food reviews and dialogue from Egyptian Arabic to English, maintaining his comedic timing, energetic tone, and unique personality.\n\nAudience Growth Strategy: Engineered precise and dynamic subtitle timing optimized for social media, ensuring the content is accessible and highly engaging for American viewers.",
        role: "Subtitler & Translator",
        tools: ["Adobe Premiere Pro", "Subtitle Edit"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/19621351-7aea-497c-a091-4ae5a3cd495c",
        aspect: "portrait",
        originalPost: "https://www.facebook.com/share/v/1FAQ27dsoX/"
    },
    {
        id: 16,
        title: "Mohammed Shami – Influencer Content (Translation)",
        category: ["translation"],
        thumbnail: "thumbnails/project16.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/1c7b994f-93f0-4fb6-8b5b-046a2787ac25/preview.webp",
        description: "A series of engaging food vlogs for the well-known Egyptian influencer Mohammed Shami, reviewing diverse restaurants across the United States with the goal of expanding his audience and breaking into the US market.\n\nArabic to English Translation: Translated vibrant street-food reviews and dialogue from Egyptian Arabic to English, maintaining his comedic timing, energetic tone, and unique personality.\n\nAudience Growth Strategy: Engineered precise and dynamic subtitle timing optimized for social media, ensuring the content is accessible and highly engaging for American viewers.",
        role: "Subtitler & Translator",
        tools: ["Adobe Premiere Pro", "Subtitle Edit"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/1c7b994f-93f0-4fb6-8b5b-046a2787ac25",
        aspect: "portrait",
        originalPost: "https://www.facebook.com/reel/938147480875096"
    },
    {
        id: 17,
        title: "Mohammed Shami – Influencer Content (Translation)",
        category: ["translation"],
        thumbnail: "thumbnails/project17.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/061ac5b8-139d-45c7-9275-80622c5e064d/preview.webp",
        description: "A series of engaging food vlogs for the well-known Egyptian influencer Mohammed Shami, reviewing diverse restaurants across the United States with the goal of expanding his audience and breaking into the US market.\n\nArabic to English Translation: Translated vibrant street-food reviews and dialogue from Egyptian Arabic to English, maintaining his comedic timing, energetic tone, and unique personality.\n\nAudience Growth Strategy: Engineered precise and dynamic subtitle timing optimized for social media, ensuring the content is accessible and highly engaging for American viewers.",
        role: "Subtitler & Translator",
        tools: ["Adobe Premiere Pro", "Subtitle Edit"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/061ac5b8-139d-45c7-9275-80622c5e064d",
        aspect: "portrait",
        originalPost: "https://www.facebook.com/reel/1763089927546647"
    },
    {
        id: 18,
        title: "Mohammed Shami – Influencer Content (Translation)",
        category: ["translation"],
        thumbnail: "thumbnails/project18.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/5c1fcdec-fe01-4ec2-82e6-a4c17e407bab/preview.webp",
        description: "A series of engaging food vlogs for the well-known Egyptian influencer Mohammed Shami, reviewing diverse restaurants across the United States with the goal of expanding his audience and breaking into the US market.\n\nArabic to English Translation: Translated vibrant street-food reviews and dialogue from Egyptian Arabic to English, maintaining his comedic timing, energetic tone, and unique personality.\n\nAudience Growth Strategy: Engineered precise and dynamic subtitle timing optimized for social media, ensuring the content is accessible and highly engaging for American viewers.",
        role: "Subtitler & Translator",
        tools: ["Adobe Premiere Pro", "Subtitle Edit"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/5c1fcdec-fe01-4ec2-82e6-a4c17e407bab",
        aspect: "portrait",
        originalPost: "https://www.facebook.com/share/v/17cchSfkc1/"
    },
    {
        id: 19,
        title: "Mohammed Shami – Influencer Content (Translation)",
        category: ["translation"],
        thumbnail: "thumbnails/project19.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/bad791a7-f157-4c8c-9243-fbb45ed4e648/preview.webp",
        description: "A series of engaging food vlogs for the well-known Egyptian influencer Mohammed Shami, reviewing diverse restaurants across the United States with the goal of expanding his audience and breaking into the US market.\n\nArabic to English Translation: Translated vibrant street-food reviews and dialogue from Egyptian Arabic to English, maintaining his comedic timing, energetic tone, and unique personality.\n\nAudience Growth Strategy: Engineered precise and dynamic subtitle timing optimized for social media, ensuring the content is accessible and highly engaging for American viewers.",
        role: "Subtitler & Translator",
        tools: ["Adobe Premiere Pro", "Subtitle Edit"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/bad791a7-f157-4c8c-9243-fbb45ed4e648",
        aspect: "portrait",
        originalPost: "https://www.facebook.com/reel/397823062876992"
    },
    {
        id: 20,
        title: "Mohammed Shami – Influencer Content (Translation)",
        category: ["translation"],
        thumbnail: "thumbnails/project20.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/3146f189-8a95-4f2b-b480-3fb197dea58b/preview.webp",
        description: "A series of engaging food vlogs for the well-known Egyptian influencer Mohammed Shami, reviewing diverse restaurants across the United States with the goal of expanding his audience and breaking into the US market.\n\nArabic to English Translation: Translated vibrant street-food reviews and dialogue from Egyptian Arabic to English, maintaining his comedic timing, energetic tone, and unique personality.\n\nAudience Growth Strategy: Engineered precise and dynamic subtitle timing optimized for social media, ensuring the content is accessible and highly engaging for American viewers.",
        role: "Subtitler & Translator",
        tools: ["Adobe Premiere Pro", "Subtitle Edit"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/3146f189-8a95-4f2b-b480-3fb197dea58b",
        aspect: "portrait",
        originalPost: "https://www.facebook.com/share/v/1JU66mVZfz/"
    },
    {
        id: 21,
        title: "Mohammed Shami – Influencer Content (Translation)",
        category: ["translation"],
        thumbnail: "thumbnails/project21.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/fbe8887b-afb0-4a76-9419-d7f086f8a1c3/preview.webp",
        description: "A series of engaging food vlogs for the well-known Egyptian influencer Mohammed Shami, reviewing diverse restaurants across the United States with the goal of expanding his audience and breaking into the US market.\n\nArabic to English Translation: Translated vibrant street-food reviews and dialogue from Egyptian Arabic to English, maintaining his comedic timing, energetic tone, and unique personality.\n\nAudience Growth Strategy: Engineered precise and dynamic subtitle timing optimized for social media, ensuring the content is accessible and highly engaging for American viewers.",
        role: "Subtitler & Translator",
        tools: ["Adobe Premiere Pro", "Subtitle Edit"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/fbe8887b-afb0-4a76-9419-d7f086f8a1c3",
        aspect: "portrait",
        originalPost: "https://www.facebook.com/share/v/1W6B1PPbt9/"
    },
    {
        id: 22,
        title: "Mohammed Shami – Influencer Content (Translation)",
        category: ["translation"],
        thumbnail: "thumbnails/project22.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/af10350f-558d-451a-8811-4a28f9edcd22/preview.webp",
        description: "A series of engaging food vlogs for the well-known Egyptian influencer Mohammed Shami, reviewing diverse restaurants across the United States with the goal of expanding his audience and breaking into the US market.\n\nArabic to English Translation: Translated vibrant street-food reviews and dialogue from Egyptian Arabic to English, maintaining his comedic timing, energetic tone, and unique personality.\n\nAudience Growth Strategy: Engineered precise and dynamic subtitle timing optimized for social media, ensuring the content is accessible and highly engaging for American viewers.",
        role: "Subtitler & Translator",
        tools: ["Adobe Premiere Pro", "Subtitle Edit"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/af10350f-558d-451a-8811-4a28f9edcd22",
        aspect: "portrait",
        originalPost: "https://www.facebook.com/reel/887708776538856"
    },
    {
        id: 23,
        title: "Mohammed Shami – Influencer Content (Translation)",
        category: ["translation"],
        thumbnail: "thumbnails/project23.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/df3765b9-2148-412f-ada4-f3a4de0a27b5/preview.webp",
        description: "A series of engaging food vlogs for the well-known Egyptian influencer Mohammed Shami, reviewing diverse restaurants across the United States with the goal of expanding his audience and breaking into the US market.\nArabic to English Translation: Translated vibrant street-food reviews and dialogue from Egyptian Arabic to English, maintaining his comedic timing, energetic tone, and unique personality.\n\nAudience Growth Strategy: Engineered precise and dynamic subtitle timing optimized for social media, ensuring the content is accessible and highly engaging for American viewers.",
        role: "Subtitler & Translator",
        tools: ["Adobe Premiere Pro", "Subtitle Edit"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/df3765b9-2148-412f-ada4-f3a4de0a27b5",
        aspect: "portrait",
        originalPost: "https://www.facebook.com/share/v/1ChG1sZPHc/"
    },
    {
        id: 24,
        title: "Mohammed Shami – Influencer Content (Translation)",
        category: ["translation"],
        thumbnail: "thumbnails/project24.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/22799f6b-a0f1-4cd6-8b95-2debe25976e0/preview.webp",
        description: "A series of engaging food vlogs for the well-known Egyptian influencer Mohammed Shami, reviewing diverse restaurants across the United States with the goal of expanding his audience and breaking into the US market.\n\nArabic to English Translation: Translated vibrant street-food reviews and dialogue from Egyptian Arabic to English, maintaining his comedic timing, energetic tone, and unique personality.\n\nAudience Growth Strategy: Engineered precise and dynamic subtitle timing optimized for social media, ensuring the content is accessible and highly engaging for American viewers.",
        role: "Subtitler & Translator",
        tools: ["Adobe Premiere Pro", "Subtitle Edit"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/22799f6b-a0f1-4cd6-8b95-2debe25976e0",
        aspect: "portrait",
        originalPost: "https://www.facebook.com/share/v/18MCDBAe9j/"
    },
    {
        id: 25,
        title: "Mohammed Shami – Influencer Content (Translation)",
        category: ["translation", "featured"],
        thumbnail: "thumbnails/project25.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/a6b37e75-beb2-40fe-8b89-5085be7d2d5b/preview.webp",
        description: "A series of engaging food vlogs for the well-known Egyptian influencer Mohammed Shami, reviewing diverse restaurants across the United States with the goal of expanding his audience and breaking into the US market.\n\nArabic to English Translation: Translated vibrant street-food reviews and dialogue from Egyptian Arabic to English, maintaining his comedic timing, energetic tone, and unique personality.\n\nAudience Growth Strategy: Engineered precise and dynamic subtitle timing optimized for social media, ensuring the content is accessible and highly engaging for American viewers.",
        role: "Subtitler & Translator",
        tools: ["Adobe Premiere Pro", "Subtitle Edit"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/a6b37e75-beb2-40fe-8b89-5085be7d2d5b",
        aspect: "portrait",
        originalPost: "https://www.facebook.com/reel/357597543504090"
    },
    {
        id: 26,
        title: "Mohammed Shami – Influencer Content (Translation)",
        category: ["translation"],
        thumbnail: "thumbnails/project26.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/2d746e7e-4715-4005-939f-98312b43ad3b/preview.webp",
        description: "A series of engaging food vlogs for the well-known Egyptian influencer Mohammed Shami, reviewing diverse restaurants across the United States with the goal of expanding his audience and breaking into the US market.\n\nArabic to English Translation: Translated vibrant street-food reviews and dialogue from Egyptian Arabic to English, maintaining his comedic timing, energetic tone, and unique personality.\n\nAudience Growth Strategy: Engineered precise and dynamic subtitle timing optimized for social media, ensuring the content is accessible and highly engaging for American viewers.",
        role: "Subtitler & Translator",
        tools: ["Adobe Premiere Pro", "Subtitle Edit"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/2d746e7e-4715-4005-939f-98312b43ad3b",
        aspect: "portrait",
        originalPost: "https://www.facebook.com/share/v/193MWbSZWN/"
    },
    {
        id: 27,
        title: "Mohammed Shami – Influencer Content (Translation)",
        category: ["translation"],
        thumbnail: "thumbnails/project27.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/316500bc-45b2-4f1f-aca6-82ddbf5c4dcc/preview.webp",
        description: "A series of engaging food vlogs for the well-known Egyptian influencer Mohammed Shami, reviewing diverse restaurants across the United States with the goal of expanding his audience and breaking into the US market.\n\nArabic to English Translation: Translated vibrant street-food reviews and dialogue from Egyptian Arabic to English, maintaining his comedic timing, energetic tone, and unique personality.\n\nAudience Growth Strategy: Engineered precise and dynamic subtitle timing optimized for social media, ensuring the content is accessible and highly engaging for American viewers.",
        role: "Subtitler & Translator",
        tools: ["Adobe Premiere Pro", "Subtitle Edit"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/316500bc-45b2-4f1f-aca6-82ddbf5c4dcc",
        aspect: "portrait",
        originalPost: "https://www.facebook.com/reel/940250344253167"
    },
    {
        id: 28,
        title: "Mohammed Shami – Influencer Content (Translation)",
        category: ["translation"],
        thumbnail: "thumbnails/project28.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/21344783-ce27-45d4-8d35-eec56cf1f075/preview.webp",
        description: "A series of engaging food vlogs for the well-known Egyptian influencer Mohammed Shami, reviewing diverse restaurants across the United States with the goal of expanding his audience and breaking into the US market.\n\nArabic to English Translation: Translated vibrant street-food reviews and dialogue from Egyptian Arabic to English, maintaining his comedic timing, energetic tone, and unique personality.\n\nAudience Growth Strategy: Engineered precise and dynamic subtitle timing optimized for social media, ensuring the content is accessible and highly engaging for American viewers.",
        role: "Subtitler & Translator",
        tools: ["Adobe Premiere Pro", "Subtitle Edit"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/21344783-ce27-45d4-8d35-eec56cf1f075",
        aspect: "portrait",
        originalPost: "https://www.facebook.com/reel/414288234542459"
    },
    {
        id: 29,
        title: "Teleperformance Egypt – Eid Al-Fitr Campaign",
        category: ["editing", "color"],
        thumbnail: "thumbnails/project29.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/3f795113-f5d9-4283-a223-dd9aa052c402/preview.webp",
        description: "A unique, fully AI-generated festive video created for Teleperformance Egypt to celebrate Eid Al-Fitr, designed to capture the holiday's joyful spirit through cutting-edge technology.\n\nAI Footage & Pacing: Seamlessly matched cuts and synchronized the AI-generated visuals to create a cohesive, energetic, and engaging festive rhythm.\n\nStylized Grading & Sound: Enhanced the digital assets with vibrant color grading and a curated soundtrack to elevate the video's emotional and cinematic impact.",
        role: "Video Editor,AI animation, sound design& Colorist ",
        tools: ["Adobe Premiere Pro", "Color correction", "AI generation"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/3f795113-f5d9-4283-a223-dd9aa052c402",
        aspect: "portrait",
        originalPost: "https://www.facebook.com/share/r/1QZJkQPaGy/"
    },
    {
        id: 30,
        title: "Teleperformance Egypt – Ramadan Charity Campaign",
        category: ["editing", "color"],
        thumbnail: "thumbnails/project30.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/909c2496-b7fd-42cb-9629-563ab5c55dee/preview.webp",
        description: "A heartwarming corporate social responsibility (CSR) video documenting Teleperformance Egypt's charity event, where employees gathered to pack Ramadan food boxes for families in need.\n\nProduction & Editing: Filmed the live charity event and crafted an uplifting, fast-paced narrative that highlights teamwork and community spirit.\n\nCinematic Color & Sound: Applied warm, inspiring color grading and paired it with an emotional soundtrack to enhance the video's positive and impactful message.",
        role: "Videographer,Video Editor, sound design& Colorist ",
        tools: ["Adobe Premiere Pro", "Color correction"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/909c2496-b7fd-42cb-9629-563ab5c55dee",
        aspect: "portrait",
        originalPost: "https://www.facebook.com/share/r/15vDdLCXCBx/"
    },
    {
        id: 31,
        title: "Teleperformance Egypt – Sports Tournament",
        category: ["editing", "color"],
        thumbnail: "thumbnails/project31.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/abeb1252-2108-4871-ab50-c16e9565db07/preview.webp",
        description: "An energetic corporate sports video documenting Teleperformance Egypt's exciting football and padel tournament organized for company employees.\n\nAction Videography: Captured high-intensity, fast-paced match footage, securing the best angles of employee goals, rallies, and team celebrations.\n\nVibrant Color Grading: Applied a dynamic, punchy color grade to enhance the green fields, court textures, and athletic energy of the event.",
        role: "Videographer,Video Editor, sound design& Colorist ",
        tools: ["Adobe Premiere Pro", "Color correction"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/abeb1252-2108-4871-ab50-c16e9565db07",
        aspect: "portrait",
        originalPost: "https://www.facebook.com/share/r/1DvqCytLYj/"
    },
    {
        id: 32,
        title: "Teleperformance Egypt – Campus Career Fair",
        category: ["editing", "color", "featured"],
        thumbnail: "thumbnails/project32.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/0665e2c5-5788-40fa-a7de-e0843b8ae2f4/preview.webp",
        description: "A dynamic promotional video capturing Teleperformance Egypt's recruitment presence and engagement across multiple university career fairs throughout Egypt.\n\nOn-Campus Videography: Filmed live interactions, student interviews, and booth activity across various university campuses to showcase the company's youth recruitment drive.\n\nEnergetic Color & Sound: Applied a bright, professional color grade and paired it with an upbeat soundtrack to reflect a vibrant, corporate, and career-focused atmosphere.",
        role: "Videographer,Video Editor, sound design& Colorist ",
        tools: ["Adobe Premiere Pro", "Color correction"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/0665e2c5-5788-40fa-a7de-e0843b8ae2f4",
        aspect: "landscape",
        originalPost: "https://www.facebook.com/share/v/1BSQ8GWDCV/"
    },
    {
        id: 33,
        title: "Teleperformance Egypt – Alexandria Eid Al-Adha Celebration",
        category: ["editing", "color", "featured"],
        thumbnail: "thumbnails/project33.jpg",
        previewUrl: "https://vz-7c791b2c-154.b-cdn.net/df72f952-88e2-40b4-b07a-7375dc98fde8/preview.webp",
        description: "A festive corporate video capturing the high-energy Eid Al-Adha celebrations held for employees across Teleperformance branches in Alexandria.\nMy Role: Videographer, Editor, Colorist & Music Supervisor\n\nAlexandria Production: Filmed the live celebrations on-site at the Alexandria branches, capturing employee interactions, festive decorations, and joyful moments.\n\nCreative Post-Production: Edited the footage with rhythmic cuts, applied a vibrant color grade, and selected an upbeat soundtrack to highlight the holiday spirit and corporate culture.",
        role: "Videographer,Video Editor, sound design& Colorist ",
        tools: ["Adobe Premiere Pro", "Color correction"],
        mediaType: "video",
        mediaUrl: "https://iframe.mediadelivery.net/embed/705832/df72f952-88e2-40b4-b07a-7375dc98fde8",
        aspect: "portrait",
        originalPost: "https://www.facebook.com/100064726327101/videos/pcb.1429993362501528/1801425011215899"
    }
];

// --- 2. Interactive Page Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    initLoader();
    initTheme();
    initNavbarScroll();
    initCursor();
    initAmbientGlow();
    initBuxelParticles();
    initTiltEffect();
    initPortfolio();
    initRequestTool();
    initPortraitSlider();
    initScrollReveal();
});

// --- 3. Intro Loader with Smooth Page Sync ---
function initLoader() {
    const loader = document.getElementById("introLoader");
    const progressText = document.getElementById("loadingProgress");
    
    if (!loader) return;

    let progress = 0;
    let pageLoaded = false;

    if (document.readyState === "complete") {
        pageLoaded = true;
    } else {
        window.addEventListener("load", () => {
            pageLoaded = true;
        });
    }

    const interval = setInterval(() => {
        let step = 1;
        if (progress < 45) {
            step = Math.floor(Math.random() * 3) + 1;
        } else if (progress < 85) {
            step = Math.floor(Math.random() * 2) + 1;
        } else if (progress < 96) {
            step = pageLoaded ? 2 : (Math.random() < 0.35 ? 1 : 0);
        } else {
            step = pageLoaded ? 2 : 0;
        }
        progress = Math.min(progress + step, 100);
        
        if (progressText) {
            progressText.textContent = `${progress}%`;
        }
        
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add("fade-out");
            }, 450);
        }
    }, 45);
}

// --- 4. Enforce Dark Theme ---
function initTheme() {
    document.documentElement.setAttribute("data-theme", "dark");
}

// --- 4.5 Navbar Scroll Opacity Control ---
function initNavbarScroll() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }, { passive: true });

    // Tap on navbar to temporarily restore full visibility on mobile
    navbar.addEventListener("touchstart", () => {
        navbar.classList.remove("scrolled");
    }, { passive: true });
}

// --- 5. Custom Cursor (Lerping/Following) ---
// --- 5. Custom Cursor (Lerping/Following & Event Delegation) ---
function initCursor() {
    const dot = document.getElementById("cursorDot");
    const ring = document.getElementById("cursorRing");
    
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    
    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Immediate position for dot
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
    });

    window.addEventListener("mouseout", () => {
        dot.style.opacity = "0";
        ring.style.opacity = "0";
    });

    // Custom ring animation using requestAnimationFrame for smooth lag effect
    function animateRing() {
        const lerp = 0.12; // spotlight lag speed
        ringX += (mouseX - ringX) * lerp;
        ringY += (mouseY - ringY) * lerp;
        
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
        
        requestAnimationFrame(animateRing);
    }
    animateRing();

    // Event delegation: dynamic hover scaling over all current and future interactive elements
    document.addEventListener("mouseover", (e) => {
        if (e.target.closest(".interactive-el")) {
            ring.classList.add("cursor-hover");
        }
    });

    document.addEventListener("mouseout", (e) => {
        if (e.target.closest(".interactive-el")) {
            ring.classList.remove("cursor-hover");
        }
    });
}

// --- 6. Ambient Glow Mouse Tracker (Performance Optimized) ---
// --- 6. Ambient Glow Mouse Tracker & Parallax Blobs ---
function initAmbientGlow() {
    const glow = document.getElementById("cursorGlow");
    const blob1 = document.getElementById("blob1");
    const blob2 = document.getElementById("blob2");
    const blob3 = document.getElementById("blob3");
    
    if (!glow) return;

    let ticking = false;

    window.addEventListener("mousemove", (e) => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                // Move the ambient glow following the cursor
                glow.style.left = `${e.clientX}px`;
                glow.style.top = `${e.clientY}px`;
                
                // Parallax shift background blobs based on viewport center offset
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;
                const offsetX = (e.clientX - centerX) / centerX;
                const offsetY = (e.clientY - centerY) / centerY;
                
                if (blob1) blob1.style.transform = `translate3d(${offsetX * 25}px, ${offsetY * 25}px, 0)`;
                if (blob2) blob2.style.transform = `translate3d(${offsetX * -35}px, ${offsetY * -35}px, 0)`;
                if (blob3) blob3.style.transform = `translate3d(${offsetX * 20}px, ${offsetY * -20}px, 0)`;
                
                ticking = false;
            });
            ticking = true;
        }
    });
}

// --- 6.5 Glowing Circular Particles Background (Scroll-Aware & Synthwave Colors) ---
// Helper to convert hex to RGB
function hexToRgb(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const fullHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
}

function initBuxelParticles() {
    const canvas = document.getElementById("particlesCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const isMobileDevice = window.innerWidth < 768;

    // Grid settings for fluid velocity field
    const spacing = isMobileDevice ? 150 : 100; // cell size in pixels (larger on mobile for performance)
    let cols = Math.ceil(width / spacing) + 2;
    let rows = Math.ceil(height / spacing) + 2;
    let grid = [];

    function initGrid() {
        cols = Math.ceil(width / spacing) + 2;
        rows = Math.ceil(height / spacing) + 2;
        grid = [];
        for (let x = 0; x < cols; x++) {
            grid[x] = [];
            for (let y = 0; y < rows; y++) {
                grid[x][y] = { vx: 0, vy: 0 };
            }
        }
    }
    initGrid();

    // Mouse tracking
    let mouse = { x: 0, y: 0, px: 0, py: 0, active: false };

    // Fluid particles
    let particles = [];
    const particleCount = isMobileDevice ? 35 : 100; // Optimized particle count for lower-end CPUs
    const colors = ["#00f0ff", "#ff00a0", "#7b00ff"]; // Premium Cyan, Sunset Magenta, Deep Violet

    // Large Nebula Blobs
    let nebulae = [];
    const nebulaCount = isMobileDevice ? 2 : 4; // Optimized nebula count for lower-end CPUs

    // Pre-render a soft glow sprite sheet for particles to make rendering ultra-lightweight
    const glowCanvas = document.createElement("canvas");
    glowCanvas.width = 240; // 3 colors * 80px
    glowCanvas.height = 80;
    const glowCtx = glowCanvas.getContext("2d");

    colors.forEach((color, index) => {
        const cx = index * 80 + 40;
        const cy = 40;
        const radius = 38;
        const rgb = hexToRgb(color);

        const grad = glowCtx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0, "rgba(255, 255, 255, 1)");
        grad.addColorStop(0.1, `rgba(${rgb}, 0.8)`);
        grad.addColorStop(0.3, `rgba(${rgb}, 0.25)`);
        grad.addColorStop(0.6, `rgba(${rgb}, 0.08)`);
        grad.addColorStop(1, "rgba(0,0,0,0)");

        glowCtx.fillStyle = grad;
        glowCtx.beginPath();
        glowCtx.arc(cx, cy, radius, 0, Math.PI * 2);
        glowCtx.fill();
    });

    // Pre-render large soft nebula glows (caching radial gradients to avoid heavy runtime math)
    const nebulaCanvases = colors.map(color => {
        const nc = document.createElement("canvas");
        nc.width = 500;
        nc.height = 500;
        const nctx = nc.getContext("2d");
        const rgb = hexToRgb(color);
        
        const grad = nctx.createRadialGradient(250, 250, 0, 250, 250, 250);
        grad.addColorStop(0, `rgba(${rgb}, 1.0)`);
        grad.addColorStop(0.5, `rgba(${rgb}, 0.5)`);
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        
        nctx.fillStyle = grad;
        nctx.beginPath();
        nctx.arc(250, 250, 250, 0, Math.PI * 2);
        nctx.fill();
        return nc;
    });

    // Create particles
    function createParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: 0,
                vy: 0,
                size: Math.random() * 1.4 + 0.4,
                colorIndex: Math.floor(Math.random() * colors.length),
                alpha: Math.random() * 0.4 + 0.2, // Increased visibility
                decay: Math.random() * 0.0015 + 0.0008
            });
        }
    }

    // Create large nebula blobs
    function createNebulae() {
        nebulae = [];
        for (let i = 0; i < nebulaCount; i++) {
            const colorIdx = i % colors.length;
            nebulae.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: 0,
                vy: 0,
                radius: Math.random() * 250 + 220, // Larger soft radius for seamless clouds
                colorIndex: colorIdx,
                alpha: Math.random() * 0.04 + 0.02, // Subtle noticeable but low opacity
                angle: Math.random() * Math.PI * 2,
                speed: Math.random() * 0.15 + 0.05
            });
        }
    }

    createParticles();
    createNebulae();

    // Event listeners
    let lastWidth = window.innerWidth;
    window.addEventListener("resize", () => {
        if (window.innerWidth === lastWidth) return; // Skip resize on mobile scroll (address bar hide/show)
        lastWidth = window.innerWidth;
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initGrid();
        createParticles();
        createNebulae();
    });

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.active = true;
    });

    window.addEventListener("mouseleave", () => {
        mouse.active = false;
    });

    // Track scroll
    let lastScrollY = window.scrollY;

    // Simulation loop
    function animate() {
        ctx.clearRect(0, 0, width, height);
        ctx.globalCompositeOperation = "screen";

        const scrollY = window.scrollY;
        const dScrollY = scrollY - lastScrollY;
        lastScrollY = scrollY;

        // 1. Add forces to the grid from mouse movement
        if (mouse.active) {
            const dx = mouse.x - mouse.px;
            const dy = mouse.y - mouse.py;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist > 0.5) {
                // Find cell
                const gridX = Math.floor(mouse.x / spacing);
                const gridY = Math.floor(mouse.y / spacing);

                // Add force to a 3x3 block around the mouse
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        const cx = gridX + i;
                        const cy = gridY + j;
                        if (cx >= 0 && cx < cols && cy >= 0 && cy < rows) {
                            const weight = 1 / (1 + i*i + j*j);
                            grid[cx][cy].vx += dx * 0.16 * weight;
                            grid[cx][cy].vy += dy * 0.16 * weight;
                        }
                    }
                }
            }
        }

        // Add scroll force to grid (pushes fluid upwards when scrolling down)
        if (Math.abs(dScrollY) > 0.1) {
            const forceY = -dScrollY * 0.08;
            for (let x = 0; x < cols; x++) {
                for (let y = 0; y < rows; y++) {
                    grid[x][y].vy += forceY * (Math.random() * 0.5 + 0.5);
                }
            }
        }

        // Update mouse previous positions
        mouse.px = mouse.x;
        mouse.py = mouse.y;

        // 2. Decay grid velocities
        for (let x = 0; x < cols; x++) {
            for (let y = 0; y < rows; y++) {
                grid[x][y].vx *= 0.94;
                grid[x][y].vy *= 0.94;
            }
        }

        // 3. Draw and Update Large Nebula Blobs
        const time = Date.now() * 0.001;
        nebulae.forEach(n => {
            // Get local grid velocity
            const gx = Math.max(0, Math.min(cols - 1, Math.floor(n.x / spacing)));
            const gy = Math.max(0, Math.min(rows - 1, Math.floor(n.y / spacing)));
            const cell = grid[gx][gy];

            n.vx += cell.vx * 0.03;
            n.vy += cell.vy * 0.03;

            // Slowly drift organically
            n.vx += Math.sin(time * n.speed + n.angle) * 0.05;
            n.vy += Math.cos(time * n.speed + n.angle) * 0.05;

            // Apply damping
            n.vx *= 0.95;
            n.vy *= 0.95;

            n.x += n.vx;
            n.y += n.vy;

            // Keep within bounds with smooth wrap
            if (n.x < -n.radius) n.x = width + n.radius;
            else if (n.x > width + n.radius) n.x = -n.radius;
            if (n.y < -n.radius) n.y = height + n.radius;
            else if (n.y > height + n.radius) n.y = -n.radius;

            // Draw nebula using pre-rendered canvas sprite (super fast!)
            ctx.globalAlpha = n.alpha;
            ctx.drawImage(nebulaCanvases[n.colorIndex], n.x - n.radius, n.y - n.radius, n.radius * 2, n.radius * 2);
        });

        // 4. Update and Draw Fluid Particles (Stardust)
        particles.forEach(p => {
            const gx = Math.max(0, Math.min(cols - 1, Math.floor(p.x / spacing)));
            const gy = Math.max(0, Math.min(rows - 1, Math.floor(p.y / spacing)));
            const cell = grid[gx][gy];

            p.vx += cell.vx * 0.08;
            p.vy += cell.vy * 0.08;

            // Slow organic drift
            p.vx += (Math.random() - 0.5) * 0.05;
            p.vy += (Math.random() - 0.5) * 0.05;

            // Apply damping
            p.vx *= 0.94;
            p.vy *= 0.94;

            p.x += p.vx;
            p.y += p.vy;

            // Fade in/out particle organically
            p.alpha -= p.decay;
            if (p.alpha <= 0 || p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
                // Regenerate
                p.x = Math.random() * width;
                p.y = Math.random() * height;
                p.vx = 0;
                p.vy = 0;
                p.alpha = Math.random() * 0.4 + 0.2; // Brighter regenerated stardust
            }

            // Draw particle using the offscreen canvas sprite sheet (super fast!)
            ctx.globalAlpha = p.alpha;
            const srcX = p.colorIndex * 80 + 1;
            const srcY = 1;
            const size = p.size * 12.0; // Draw size
            ctx.drawImage(glowCanvas, srcX, srcY, 78, 78, p.x - size/2, p.y - size/2, size, size);
        });

        ctx.globalAlpha = 1.0;
        if (!window.bgAnimationPaused) {
            requestAnimationFrame(animate);
        }
    }

    window.bgAnimationPaused = false;
    window.pauseBgAnimation = function() {
        window.bgAnimationPaused = true;
        // Keep elements visible to show through the transparent modal, but freeze the animation loops to save CPU/GPU cycles
    };

    window.resumeBgAnimation = function() {
        if (window.bgAnimationPaused) {
            window.bgAnimationPaused = false;
            requestAnimationFrame(animate);
        }
    };

    animate();
}

// --- 7. Lightweight 3D Tilt Effect ---
// --- 7. Lightweight 3D Tilt Effect ---
function initTiltEffect() {
    if (window.innerWidth < 768) return; // Disable tilt on mobile for performance
    // Only target elements that haven't been initialized yet to avoid duplicate listeners
    const tiltCards = document.querySelectorAll(".tilt:not(.tilt-initialized)");
    
    tiltCards.forEach(card => {
        card.classList.add("tilt-initialized");
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x coordinate inside element
            const y = e.clientY - rect.top;  // y coordinate inside element
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Maximum tilt angle (in degrees) - check data-tilt-max attribute or default to 6
            const maxTiltAttr = card.getAttribute("data-tilt-max");
            const maxTilt = maxTiltAttr ? parseFloat(maxTiltAttr) : 6;
            const rotateX = ((centerY - y) / centerY) * maxTilt;
            const rotateY = ((x - centerX) / centerX) * maxTilt;
            
            // Get scale factor from data attribute (default to 1.02)
            const scale = card.getAttribute("data-tilt-scale") || "1.02";

            card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`;
            card.style.transition = "none";
        });
        
        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
            card.style.transition = "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        });
    });
}

// --- 8. Dynamic Portfolio Filtering & Modal ---
function initPortfolio() {
    const grid = document.getElementById("portfolio-grid");
    const track = document.getElementById("portfolio-track");
    const tabs = document.querySelectorAll(".portfolio-tab-btn");
    const prevBtn = document.getElementById("prevProjectBtn");
    const nextBtn = document.getElementById("nextProjectBtn");
    
    if (!grid || !track) return;

    let isHovered = false;
    let scrollPos = 0;
    let autoScrollActive = true;
    let isTransitioning = false;
    const scrollSpeed = 0.5; // Butter smooth slow marquee offset per frame
    let loopWidth = 0;
    let renderListLength = 0;
    let hasDragged = false;
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    let dragStartScrollPos = 0;
    let autoScrollResumeTimeout = null;
    let preloadTimeout = null;
    let preloadedProjectId = null;

    // Initial render
    renderProjectsList("all");

    // Tab filtering clicks
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Toggle active classes
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            
            // Fade out grid, filter, then fade in
            grid.style.opacity = "0";
            setTimeout(() => {
                renderProjectsList(tab.dataset.category);
                // Reset scroll
                scrollPos = 0;
                track.style.transition = "none";
                track.style.transform = `translate3d(0px, 0, 0)`;
                grid.style.opacity = "1";
                
                // Recalculate loop bounds
                setTimeout(() => {
                    updateLoopBounds();
                    initTiltEffect();
                }, 50);
            }, 300);
        });
    });

    function renderProjectsList(category) {
        track.innerHTML = "";
        
        const filtered = category === "all" 
            ? projectsData 
            : projectsData.filter(p => {
                if (Array.isArray(p.category)) {
                    return p.category.includes(category);
                }
                return p.category === category;
            });
            
        if (filtered.length === 0) return;

        // Build duplicates until list is at least 8 items
        let renderList = [...filtered];
        while (renderList.length < 8) {
            renderList = renderList.concat(filtered);
        }
        renderListLength = renderList.length;

        // Double the final cards array to create a seamless seamless loop wrap
        const finalCards = renderList.concat(renderList);

        finalCards.forEach((project, idx) => {
            const card = document.createElement("article");
            card.className = "project-card glass tilt interactive-el";
            card.dataset.id = project.id;
            
            // Render top 3 tools as tag pills
            const tagsHTML = project.tools.slice(0, 3)
                .map(tool => `<span class="project-tag-pill">${tool}</span>`)
                .join('');

            const catNameMap = {
                editing: 'Video Editing',
                color: 'Color Grading',
                translation: 'Translation'
            };
            if (Array.isArray(project.category)) {
                catText = project.category.filter(cat => cat !== 'featured').map(cat => catNameMap[cat]).join(" & ");
            } else {
                catText = catNameMap[project.category] || 'Video Editing';
            }

            const isPortrait = project.aspect === "portrait";
            const imageWrapClass = isPortrait ? "card-image-wrap aspect-portrait" : "card-image-wrap aspect-landscape";
            const imageWrapStyle = isPortrait ? `style="--bg-image: url('${project.thumbnail}');"` : '';
            
            const badgeHTML = isPortrait 
                ? `<div class="ratio-badge portrait">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><rect x="1" y="1" width="6" height="10" rx="1"/></svg>
                    <span>9:16 Reel</span>
                   </div>`
                : `<div class="ratio-badge landscape">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><rect x="1" y="1" width="10" height="6" rx="1"/></svg>
                    <span>16:9 Film</span>
                   </div>`;

            card.innerHTML = `
                <div class="${imageWrapClass}" ${imageWrapStyle}>
                    ${badgeHTML}
                    <img class="card-thumbnail-static" src="${project.thumbnail}" alt="${project.title}" loading="lazy">
                    ${project.previewUrl ? `<img class="card-thumbnail-preview" src="${project.previewUrl}" alt="${project.title} Preview" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transition: opacity 0.35s ease; pointer-events: none; z-index: 2;">` : ''}
                    <div class="play-hover-indicator" style="z-index: 3;">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                </div>
                <div class="project-category">${catText}</div>
                <h3 class="project-card-title">${project.title}</h3>
                <p class="project-card-excerpt">${project.description}</p>
                <div class="project-tags-wrap">${tagsHTML}</div>
            `;
            
            // Hover play preview fade effect
            const previewImg = card.querySelector(".card-thumbnail-preview");
            if (previewImg) {
                card.addEventListener("mouseenter", () => {
                    previewImg.style.opacity = "1";
                });
                card.addEventListener("mouseleave", () => {
                    previewImg.style.opacity = "0";
                });
            }
            
            // Open modal on click
            card.addEventListener("click", (e) => {
                if (hasDragged) {
                    return;
                }
                openModal(project.id);
            });

            track.appendChild(card);
        });

        updateLoopBounds();
    }

    function updateLoopBounds() {
        if (track.children.length === 0) return;
        const halfIdx = renderListLength;
        if (track.children[halfIdx]) {
            loopWidth = track.children[halfIdx].offsetLeft;
        }
    }

    window.addEventListener("resize", () => {
        updateLoopBounds();
    });

    const getScrollStep = () => {
        const card = track.querySelector(".project-card");
        return card ? card.clientWidth + 24 : 384; // Card width + gap
    };

    window.carouselPaused = false;
    function smoothScroll() {
        if (autoScrollActive && !isHovered && !isTransitioning && loopWidth > 0 && !window.carouselPaused) {
            scrollPos += scrollSpeed;
            if (scrollPos >= loopWidth) {
                scrollPos -= loopWidth; // Seamless wrap-around
            }
            track.style.transition = "none";
            track.style.transform = `translate3d(${-scrollPos}px, 0, 0)`;
        }
        requestAnimationFrame(smoothScroll);
    }

    // Start the marquee-style loop
    requestAnimationFrame(smoothScroll);

    // Hover detection to pause scrolling
    grid.addEventListener("mouseenter", () => { isHovered = true; });
    grid.addEventListener("mouseleave", () => {
        if (!isMouseDown && !isDragging) {
            isHovered = false;
        }
    });

    // Touch support for mobile devices (swipe carousel)
    grid.addEventListener("touchstart", (e) => {
        isHovered = true; // Pause auto scroll
        isDragging = true;
        hasDragged = false;
        startX = e.touches[0].clientX;
        dragStartScrollPos = scrollPos;
        track.style.transition = "none";
        
        if (autoScrollResumeTimeout) {
            clearTimeout(autoScrollResumeTimeout);
        }
    }, { passive: true });

    grid.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
        const diffX = currentX - startX;
        
        if (Math.abs(diffX) > 8) {
            hasDragged = true;
        }
        
        // Calculate new scroll position
        let newScrollPos = dragStartScrollPos - diffX;
        
        // Handle wrap around for loopWidth
        if (loopWidth > 0) {
            if (newScrollPos < 0) {
                newScrollPos += loopWidth;
            } else if (newScrollPos >= loopWidth) {
                newScrollPos -= loopWidth;
            }
        }
        
        scrollPos = newScrollPos;
        track.style.transform = `translate3d(${-scrollPos}px, 0, 0)`;
    }, { passive: true });

    grid.addEventListener("touchend", () => {
        isDragging = false;
        // Resume auto-scroll after 2.5 seconds of inactivity
        autoScrollResumeTimeout = setTimeout(() => {
            isHovered = false;
        }, 2500);
    });

    // Mouse drag support for desktop devices
    let isMouseDown = false;
    grid.addEventListener("mousedown", (e) => {
        // Only drag with left mouse click and not on interactive buttons/links
        if (e.button !== 0 || e.target.closest("a, button, select, textarea")) return;
        isHovered = true;
        isMouseDown = true;
        hasDragged = false;
        startX = e.clientX;
        dragStartScrollPos = scrollPos;
        track.style.transition = "none";
        grid.style.cursor = "grabbing";
        
        if (autoScrollResumeTimeout) {
            clearTimeout(autoScrollResumeTimeout);
        }
    });

    window.addEventListener("mousemove", (e) => {
        if (!isMouseDown) return;
        currentX = e.clientX;
        const diffX = currentX - startX;
        
        if (Math.abs(diffX) > 8) {
            hasDragged = true;
        }
        
        let newScrollPos = dragStartScrollPos - diffX;
        
        if (loopWidth > 0) {
            if (newScrollPos < 0) {
                newScrollPos += loopWidth;
            } else if (newScrollPos >= loopWidth) {
                newScrollPos -= loopWidth;
            }
        }
        scrollPos = newScrollPos;
        track.style.transform = `translate3d(${-scrollPos}px, 0, 0)`;
    });

    window.addEventListener("mouseup", () => {
        if (isMouseDown) {
            isMouseDown = false;
            grid.style.cursor = "";
            autoScrollResumeTimeout = setTimeout(() => {
                isHovered = false;
            }, 2500);
        }
    });

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("mouseenter", () => { isHovered = true; });
        prevBtn.addEventListener("mouseleave", () => { isHovered = false; });
        nextBtn.addEventListener("mouseenter", () => { isHovered = true; });
        nextBtn.addEventListener("mouseleave", () => { isHovered = false; });

        // Manual scroll clicks using smooth CSS transitions on translate3d
        prevBtn.addEventListener("click", () => {
            if (loopWidth === 0 || isTransitioning) return;
            
            isTransitioning = true;
            const step = getScrollStep();
            
            // Seamless boundary wrap before transition
            if (scrollPos <= 0) {
                scrollPos += loopWidth;
                track.style.transition = "none";
                track.style.transform = `translate3d(${-scrollPos}px, 0, 0)`;
                track.offsetHeight; // Force layout recalculation
            }
            
            const targetScrollPos = scrollPos - step;
            track.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
            track.style.transform = `translate3d(${-targetScrollPos}px, 0, 0)`;
            scrollPos = targetScrollPos;

            setTimeout(() => {
                isTransitioning = false;
            }, 400);
        });

        nextBtn.addEventListener("click", () => {
            if (loopWidth === 0 || isTransitioning) return;
            
            isTransitioning = true;
            const step = getScrollStep();
            
            // Seamless boundary wrap before transition
            if (scrollPos >= loopWidth) {
                scrollPos -= loopWidth;
                track.style.transition = "none";
                track.style.transform = `translate3d(${-scrollPos}px, 0, 0)`;
                track.offsetHeight; // Force layout recalculation
            }
            
            const targetScrollPos = scrollPos + step;
            track.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
            track.style.transform = `translate3d(${-targetScrollPos}px, 0, 0)`;
            scrollPos = targetScrollPos;

            setTimeout(() => {
                isTransitioning = false;
            }, 400);
        });
    }

    // Modal Control Logic
    const modal = document.getElementById("projectModal");
    const closeBtn = document.querySelector(".close-modal");
    const backdrop = document.querySelector(".modal-backdrop");
    
    function loadProjectMedia(project, mediaContainer, externalLink, projectId) {
        // Clear previous content
        mediaContainer.innerHTML = "";
        externalLink.href = project.mediaUrl;

        // Set aspect ratio class
        if (project.aspect === "portrait") {
            mediaContainer.classList.add("aspect-portrait");
            mediaContainer.classList.remove("aspect-landscape");
        } else {
            mediaContainer.classList.add("aspect-landscape");
            mediaContainer.classList.remove("aspect-portrait");
        }

        if (project.mediaType === "video") {
            const url = project.mediaUrl;
            const isEmbedBlocked = ((projectId >= 22 && projectId <= 28) || projectId === 31 || projectId === 32) && url.includes("facebook.com");

            if (isEmbedBlocked) {
                mediaContainer.innerHTML = `
                    <div class="blocked-embed-placeholder">
                        <div class="blocked-embed-blur-backdrop" style="background-image: url('${project.thumbnail}');"></div>
                        <div class="blocked-embed-content">
                            <a href="${project.mediaUrl}" target="_blank" rel="noopener" class="blocked-play-btn interactive-el">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                            </a>
                            <span class="blocked-embed-note">Play on Facebook</span>
                            <span class="blocked-embed-subnote">Embedding restricted by Facebook settings</span>
                        </div>
                    </div>
                `;
            } else {
                let iframeAttrs = 'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen';
                let embedUrl = url;

                if (url.includes("facebook.com")) {
                    iframeAttrs = 'scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"';
                }

                let htmlContent = "";
                let isGoogleDrive = url.includes("drive.google.com") || url.includes("drive.usercontent.google.com");

                if (isGoogleDrive) {
                    const fileIdMatch = url.match(/\/file\/d\/([^/]+)/) || url.match(/[?&]id=([^&]+)/);
                    if (fileIdMatch) {
                        const fileId = fileIdMatch[1];
                        const iframeUrl = `https://drive.google.com/file/d/${fileId}/preview`;
                        htmlContent = `<iframe src="${iframeUrl}" ${iframeAttrs} id="activeVideoPlayer" style="width:100%; height:100%; border:none;"></iframe>`;
                    } else {
                        htmlContent = `<iframe src="${url}" ${iframeAttrs} id="activeVideoPlayer" style="width:100%; height:100%; border:none;"></iframe>`;
                    }
                } else if (url.includes("youtube.com") || url.includes("youtu.be") || url.includes("facebook.com") || url.includes("mediadelivery.net")) {
                    if (url.includes("youtube.com/embed/")) {
                        embedUrl = url.includes("?") ? `${url}&autoplay=1` : `${url}?autoplay=1`;
                    }
                    htmlContent = `<iframe src="${embedUrl}" ${iframeAttrs} id="activeVideoPlayer" style="width:100%; height:100%; border:none;"></iframe>`;
                } else {
                    htmlContent = `<video src="${url}" controls autoplay playsinline id="activeVideoPlayer" style="width:100%; height:100%; border-radius:12px;"></video>`;
                }

                mediaContainer.innerHTML = htmlContent;
            }
        } else {
            mediaContainer.innerHTML = `<img src="${project.mediaUrl}" alt="${project.title}" style="width:100%; height:100%; object-fit:contain; border-radius:12px;">`;
        }
    }

    function preloadProject(projectId) {
        const project = projectsData.find(p => p.id === projectId);
        if (!project || project.mediaType !== "video") return;

        // Skip if already preloaded
        if (preloadedProjectId === projectId) return;

        const mediaContainer = document.getElementById("modalMediaContainer");
        const externalLink = document.getElementById("modalExternalLink");
        if (!mediaContainer || !externalLink) return;

        loadProjectMedia(project, mediaContainer, externalLink, projectId);
        preloadedProjectId = projectId;
    }

    function openModal(projectId) {
        const project = projectsData.find(p => p.id === projectId);
        if (!project || !modal) return;

        // Populate Modal Fields
        const catNameMap = {
            editing: 'Video Editing',
            color: 'Color Grading',
            translation: 'Translation'
        };
        let catText = "";
        if (Array.isArray(project.category)) {
            catText = project.category.filter(cat => cat !== 'featured').map(cat => catNameMap[cat]).join(" & ");
        } else {
            catText = catNameMap[project.category] || 'Video Editing';
        }
        document.getElementById("modalCategory").textContent = catText;
        document.getElementById("modalTitle").textContent = project.title;
        document.getElementById("modalDesc").textContent = project.description;
        document.getElementById("modalRole").textContent = project.role;
        document.getElementById("modalTools").textContent = project.tools.join(", ");

        // Handle View Original Post button
        const actionWrapper = document.getElementById("modalActionWrapper");
        const originalPostLink = document.getElementById("modalOriginalPostLink");
        if (actionWrapper && originalPostLink) {
            if (project.originalPost && project.originalPost.trim() !== "") {
                originalPostLink.href = project.originalPost;
                actionWrapper.style.display = "flex";
            } else {
                actionWrapper.style.display = "none";
                originalPostLink.href = "#";
            }
        }

        const mediaContainer = document.getElementById("modalMediaContainer");
        const externalLink = document.getElementById("modalExternalLink");

        // Always load media fresh for the opened modal
        loadProjectMedia(project, mediaContainer, externalLink, projectId);

        // Pause background rendering to allocate 100% CPU/GPU resources to the video!
        if (typeof window.pauseBgAnimation === "function") {
            window.pauseBgAnimation();
        }
        window.carouselPaused = true;

        // Show Modal
        modal.classList.add("active");
        document.body.classList.add("modal-open");
    }

    function closeModal() {
        if (!modal) return;
        
        // Thoroughly stop any playing video & iframe to prevent background audio bugs on all browsers
        const mediaContainer = document.getElementById("modalMediaContainer");
        if (mediaContainer) {
            const iframes = mediaContainer.querySelectorAll("iframe");
            iframes.forEach(iframe => {
                try {
                    iframe.contentWindow.postMessage('pause', '*');
                    iframe.contentWindow.postMessage(JSON.stringify({ method: 'pause' }), '*');
                    iframe.contentWindow.postMessage(JSON.stringify({ type: 'pause' }), '*');
                    iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo', args: '' }), '*');
                } catch (e) {}
                try {
                    iframe.src = "about:blank";
                    iframe.removeAttribute("src");
                } catch (e) {}
                try {
                    iframe.remove();
                } catch (e) {}
            });

            const videos = mediaContainer.querySelectorAll("video");
            videos.forEach(video => {
                try {
                    video.pause();
                    video.src = "";
                    video.removeAttribute("src");
                    video.load();
                } catch (e) {}
                try {
                    video.remove();
                } catch (e) {}
            });

            mediaContainer.innerHTML = "";
        }

        modal.classList.remove("active");
        document.body.classList.remove("modal-open");
        window.carouselPaused = false;

        // Resume background rendering when modal is closed
        if (typeof window.resumeBgAnimation === "function") {
            window.resumeBgAnimation();
        }
    }

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (backdrop) backdrop.addEventListener("click", closeModal);

    // Universal click & touch listener: close modal if clicking/tapping anywhere outside .modal-card
    if (modal) {
        const handleOutsideDismiss = (e) => {
            if (modal.classList.contains("active") && !e.target.closest(".modal-card")) {
                closeModal();
            }
        };

        modal.addEventListener("click", handleOutsideDismiss);
        modal.addEventListener("touchend", handleOutsideDismiss);
    }

    // Stop audio when tab is hidden or user switches window
    document.addEventListener("visibilitychange", () => {
        if (document.hidden && modal && modal.classList.contains("active")) {
            closeModal();
        }
    });

    // Stop modal video when user clicks external fullscreen link
    const extLink = document.getElementById("modalExternalLink");
    if (extLink) {
        extLink.addEventListener("click", () => {
            setTimeout(closeModal, 150);
        });
    }
    
    // Close modal on Escape key
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModal();
        }
    });
}

// --- 9. Request / Collaboration Tool Handler (Ezz Tantawy Style) ---
function initRequestTool() {
    const wrapper = document.getElementById("requestTool");
    if (!wrapper) return;

    const badgeBtn = document.getElementById("requestBadgeBtn");
    const formBody = document.getElementById("requestFormBody");
    const laneBtns = document.querySelectorAll(".request-lane-btn");
    const focusHeader = document.getElementById("requestFocusHeader");
    const focusGroup = document.getElementById("focusSelectorGroup");
    const selectFocus = document.getElementById("requestTypeSelect");

    const sendBtn = document.getElementById("sendRequestBtn");
    const providerDropdown = document.getElementById("providerDropdown");
    const copyMsg = document.getElementById("copyMessage");

    let currentLane = "editing";
    let activeFocusVal = "";

    // Toggle reveal form choices on Make a Request click
    if (badgeBtn && formBody) {
        badgeBtn.addEventListener("click", () => {
            const isShown = formBody.classList.toggle("show");
            if (isShown) {
                badgeBtn.style.boxShadow = "0 0 35px rgba(189, 0, 255, 0.4), 0 0 15px rgba(0, 240, 255, 0.2)";
                setTimeout(() => {
                    formBody.scrollIntoView({ behavior: "smooth", block: "nearest" });
                }, 200);
            } else {
                badgeBtn.style.boxShadow = "";
                // Reset subContent style when collapsing
                const sub = document.getElementById("requestSubContent");
                if (sub) {
                    sub.style.display = "none";
                    sub.style.maxHeight = "0";
                    sub.style.opacity = "0";
                    sub.style.overflow = "hidden";
                }
            }
        });
    }

    // Request options templates
    const laneOptions = {
        editing: [
            { text: "Short-Form & Reels", val: "Short-Form & Reels" },
            { text: "Cinematic Films & Promos", val: "Cinematic Films & Promos" },
            { text: "Long-Form Video Editing", val: "Long-Form Video Editing" }
        ],
        color: [
            { text: "Color Correction & Exposure Matching", val: "Color Correction Only" },
            { text: "Cinematic Stylized Color Grading", val: "Cinematic Grading" },
            { text: "Multi-Camera Project Grading", val: "Multi-Cam Matching" }
        ],
        translation: [
            { text: "Video Subtitling (English/Arabic Sync)", val: "Video Subtitling" },
            { text: "Document & Script Translation", val: "Script Translation" },
            { text: "Localization & Cultural Proofreading", val: "Localization Proofreading" }
        ],
        longterm: [
            { text: "1-3 Months", val: "1-3 Months" },
            { text: "3-6 Months", val: "3-6 Months" },
            { text: "6+ Months", val: "6+ Months" }
        ]
    };

    const focusHeaders = {
        editing: "CHOOSE A VIDEO FOCUS",
        color: "CHOOSE A COLOR FOCUS",
        translation: "CHOOSE A TRANSLATION FOCUS",
        longterm: "CHOOSE A COLLABORATION WINDOW"
    };

    // Populate the form elements based on selected lane
    function updateLaneUI(lane) {
        currentLane = lane;

        // Update active class on lane buttons
        laneBtns.forEach(btn => {
            if (btn.dataset.lane === lane) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });

        // Update focus header text
        focusHeader.textContent = focusHeaders[lane];

        // Populate focus group buttons
        focusGroup.innerHTML = "";
        const options = laneOptions[lane];

        options.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.className = "request-focus-btn interactive-el";
            if (idx === 0) {
                btn.classList.add("active");
                activeFocusVal = opt.val;
            }
            btn.textContent = opt.text;
            btn.dataset.val = opt.val;

            btn.addEventListener("click", () => {
                document.querySelectorAll(".request-focus-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                activeFocusVal = opt.val;
                selectFocus.value = opt.val;
            });

            focusGroup.appendChild(btn);
        });

        // Populate select element
        selectFocus.innerHTML = "";
        options.forEach(opt => {
            const o = document.createElement("option");
            o.value = opt.val;
            o.textContent = opt.text;
            selectFocus.appendChild(o);
        });

        selectFocus.value = activeFocusVal;
    }

    // Sync dropdown changes back to focus buttons active state
    selectFocus.addEventListener("change", () => {
        const focusVal = selectFocus.value;
        activeFocusVal = focusVal;

        document.querySelectorAll(".request-focus-btn").forEach(btn => {
            if (btn.dataset.val === focusVal) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
    });

    // Setup lane button event listeners
    laneBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            updateLaneUI(btn.dataset.lane);
            showSubContent();
        });
    });

    function showSubContent() {
        const sub = document.getElementById("requestSubContent");
        if (sub && (sub.style.display === "none" || !sub.style.display)) {
            sub.style.display = "block";
            setTimeout(() => {
                sub.style.maxHeight = "500px";
                sub.style.opacity = "1";
                // Set overflow to visible after transition completes to prevent clipping the dropdown
                setTimeout(() => {
                    sub.style.overflow = "visible";
                }, 650);
            }, 10);
        }
    }

    // Toggle dropdown visibility on clicking "Send request"
    sendBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        providerDropdown.classList.toggle("show");
    });

    // Close dropdown on click outside
    document.addEventListener("click", () => {
        providerDropdown.classList.remove("show");
    });

    // Prevent closing when clicking inside the dropdown
    providerDropdown.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    // Send redirects
    const providerOpts = providerDropdown.querySelectorAll(".provider-opt");
    providerOpts.forEach(btn => {
        btn.addEventListener("click", () => {
            const provider = btn.dataset.provider;
            const selectedFocus = selectFocus.value;
            
            // Construct simple brief text dynamically
            let laneName = 'Long-Term Project Request';
            if (currentLane === 'editing') laneName = 'Video Editing';
            else if (currentLane === 'color') laneName = 'Color Grading';
            else if (currentLane === 'translation') laneName = 'Subtitling & Translation';

            const focusLabel = currentLane === 'longterm' ? 'Collaboration Window' : 'Specific Service Focus';
            const projectBrief = `Hello Islam,

I am visiting your portfolio and I would like to request a project with you.

Service Category: ${laneName}
${focusLabel}: ${selectedFocus}

Please get in touch with me to discuss the details, scope, and pricing of the project.

Thank you!`;
            
            const emailRecipient = "em99ve@gmail.com";
            const emailSubject = encodeURIComponent(`Project Inquiry: ${selectedFocus}`);
            const emailBody = encodeURIComponent(projectBrief);

            if (provider === "copy") {
                const fullText = `Request: ${selectedFocus}\n\nBrief:\n${projectBrief}`;
                navigator.clipboard.writeText(fullText).then(() => {
                    copyMsg.classList.add("show");
                    setTimeout(() => {
                        copyMsg.classList.remove("show");
                    }, 2500);
                });
                providerDropdown.classList.remove("show");
                return;
            }

            let mailUrl = "";
            if (provider === "gmail") {
                mailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailRecipient}&su=${emailSubject}&body=${emailBody}`;
            } else if (provider === "outlook") {
                mailUrl = `https://outlook.live.com/default.aspx?rru=compose&to=${emailRecipient}&subject=${emailSubject}&body=${emailBody}`;
            } else {
                // Default System mail client
                mailUrl = `mailto:${emailRecipient}?subject=${emailSubject}&body=${emailBody}`;
            }

            window.open(mailUrl, "_blank");
            providerDropdown.classList.remove("show");
        });
    });

    // Ready for user category selection
}

// --- 10. Before/After Portrait Image Slider ---
function initPortraitSlider() {
    const slider = document.getElementById("portraitSlider");
    if (!slider) return;

    const side = document.querySelector(".hero-portrait-side");
    const trackTarget = side || slider;

    function updateSliderWidth() {
        const width = slider.offsetWidth;
        slider.style.setProperty('--slider-width', `${width}px`);
    }

    // Set initial width
    updateSliderWidth();

    // Listen to resize
    window.addEventListener("resize", updateSliderWidth);

    let isHovered = false;
    let targetPos = 50;
    let currentPos = 50;
    let time = 0;

    // Mouse move logic on the larger column container
    trackTarget.addEventListener("mousemove", (e) => {
        isHovered = true;
        const rect = slider.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percent = (x / rect.width) * 100;
        targetPos = Math.max(0, Math.min(100, percent));
    });

    trackTarget.addEventListener("mouseleave", () => {
        isHovered = false;
        // Resume time smoothly from the current split position
        const val = (currentPos - 50) / 22;
        time = Math.asin(Math.max(-1, Math.min(1, val)));
    });

    // Touch support for mobile devices
    trackTarget.addEventListener("touchmove", (e) => {
        if (e.touches.length > 0) {
            isHovered = true;
            const rect = slider.getBoundingClientRect();
            const x = e.touches[0].clientX - rect.left;
            const percent = (x / rect.width) * 100;
            targetPos = Math.max(0, Math.min(100, percent));
        }
    }, { passive: true });

    trackTarget.addEventListener("touchend", () => {
        isHovered = false;
        const val = (currentPos - 50) / 22;
        time = Math.asin(Math.max(-1, Math.min(1, val)));
    });

    // Smooth animation loop using requestAnimationFrame
    function animate() {
        if (!isHovered) {
            time += 0.012; // slow breathing speed
            targetPos = 50 + 22 * Math.sin(time);
        }

        const easeFactor = isHovered ? 0.25 : 0.04;
        currentPos += (targetPos - currentPos) * easeFactor;

        slider.style.setProperty('--slider-pos', `${currentPos}%`);
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}

// --- 11. Scroll Reveal Animations (Intersection Observer & Dynamic Stagger) ---
function initScrollReveal() {
    // 1. Tag all static elements for reveal
    const staticElements = document.querySelectorAll(
        ".section-label, .section-title, .about-header-grid, .portfolio-header, " +
        ".request-tool-wrapper, .skills-marquee, .carousel-container, .contact-card"
    );
    staticElements.forEach(el => el.classList.add("reveal"));

    // 2. Tag and stagger grid children
    const grids = [
        { selector: ".core-pillars", delay: 0.08 },
        { selector: ".about-cards-grid", delay: 0.12 },
        { selector: ".process-grid", delay: 0.08 },
        { selector: ".contact-links", delay: 0.1 }
    ];

    grids.forEach(g => {
        const container = document.querySelector(g.selector);
        if (container) {
            Array.from(container.children).forEach((child, idx) => {
                child.classList.add("reveal");
                child.style.transitionDelay = `${idx * g.delay}s`;
            });
        }
    });

    // 3. Tag and stagger Hero elements (so they slide up beautifully on page entry)
    const heroPortrait = document.querySelector(".hero-portrait-side");
    if (heroPortrait) {
        heroPortrait.classList.add("reveal");
        heroPortrait.style.transitionDelay = "0.3s";
    }

    const heroContent = document.querySelector(".hero-content");
    if (heroContent) {
        Array.from(heroContent.children).forEach((child, idx) => {
            child.classList.add("reveal");
            child.style.transitionDelay = `${0.35 + idx * 0.08}s`;
        });
    }

    // 4. Create Intersection Observer
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                // Remove observer to avoid running animations repeatedly on scroll
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.05, // Trigger as soon as 5% of element is in view
        rootMargin: "0px 0px -40px 0px" // Trigger slightly before it enters the viewport
    });

    revealElements.forEach(el => {
        observer.observe(el);
    });

    // 5. Clapperboard scroll follower and timeline reveal
    const processTimeline = document.getElementById("processTimeline");
    const clapperboard = document.getElementById("clapperboard");
    
    if (processTimeline && clapperboard) {
        // Cache layout measurements to avoid layout thrashing (forces synchronous layout reflow) in 60fps loop
        let cachedTimelineTop = 0;
        let cachedTimelineHeight = 0;
        let cachedTimelineWidth = 0;
        let cachedTimelineLeft = 0;
        let cachedBadgeY = 0;
        let cachedBadgeX = 0;
        let cachedRequestToolWidth = 0;
        let cachedRequestToolCenterX = 0;
        let cachedRequestToolCenterY = 0;
        let cachedDocHeight = 0;
        
        function cacheLayoutDimensions() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const winW = window.innerWidth;
            
            if (processTimeline) {
                const rect = processTimeline.getBoundingClientRect();
                cachedTimelineTop = rect.top + scrollTop;
                cachedTimelineHeight = rect.height;
                cachedTimelineWidth = rect.width;
                cachedTimelineLeft = rect.left;
            }
            
            const badge = document.getElementById("requestBadgeBtn");
            if (badge) {
                const badgeRect = badge.getBoundingClientRect();
                cachedBadgeY = badgeRect.top + scrollTop + badgeRect.height * 0.5;
                cachedBadgeX = badgeRect.left + badgeRect.width * 0.5;
            } else {
                cachedBadgeY = cachedTimelineTop + cachedTimelineHeight + 250;
                cachedBadgeX = winW * 0.5;
            }

            const requestToolEl = document.getElementById("requestTool");
            if (requestToolEl) {
                // Use offsetWidth to get unscaled true layout width
                cachedRequestToolWidth = requestToolEl.offsetWidth;
                
                // Calculate scale-invariant center coordinates
                const rect = requestToolEl.getBoundingClientRect();
                cachedRequestToolCenterX = rect.left + rect.width * 0.5;
                cachedRequestToolCenterY = rect.top + rect.height * 0.5 + scrollTop;
            }
            
            cachedDocHeight = document.documentElement.scrollHeight;
        }
        
        // Run cache layout immediately
        cacheLayoutDimensions();
        
        // Update cache on image load or full content load to ensure final positions are correct
        window.addEventListener("load", cacheLayoutDimensions);
        
        function updateClapperboard() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const winH = window.innerHeight;
            const winW = window.innerWidth;
            
            // Get elapsed time in seconds for active floating animation
            const time = performance.now() * 0.001;
            
            // Set base vertical position always centered in the viewport
            const targetY = scrollTop + winH * 0.5;
            
            // Define global key points in actual pixel coordinates using cached layout boundaries
            const keyPoints = [
                { y: 0, x: winW * 0.5 },                                              // Top center
                { y: cachedTimelineTop * 0.3, x: winW * 0.62 },                       // Hero right (Narrower)
                { y: cachedTimelineTop * 0.6, x: winW * 0.38 },                       // About left (Narrower)
                { y: cachedTimelineTop * 0.85, x: winW * 0.62 },                      // Work right (Narrower)
                
                // Process Section (Aligned with cards)
                { y: cachedTimelineTop, x: cachedTimelineLeft + cachedTimelineWidth * 0.5 },            // Enter timeline (center)
                { y: cachedTimelineTop + cachedTimelineHeight * 0.125, x: cachedTimelineLeft + cachedTimelineWidth * 0.22 }, // Step 1
                { y: cachedTimelineTop + cachedTimelineHeight * 0.375, x: cachedTimelineLeft + cachedTimelineWidth * 0.78 }, // Step 2
                { y: cachedTimelineTop + cachedTimelineHeight * 0.625, x: cachedTimelineLeft + cachedTimelineWidth * 0.22 }, // Step 3
                { y: cachedTimelineTop + cachedTimelineHeight * 0.875, x: cachedTimelineLeft + cachedTimelineWidth * 0.78 }, // Step 4
                { y: cachedTimelineTop + cachedTimelineHeight, x: cachedTimelineLeft + cachedTimelineWidth * 0.5 },          // Exit timeline (center)
                
                // Make a Request Badge (Interactive click)
                { y: cachedBadgeY, x: cachedBadgeX },
                
                // Contact & Footer
                { y: cachedTimelineTop + cachedTimelineHeight + (cachedDocHeight - cachedTimelineTop - cachedTimelineHeight) * 0.75, x: winW * 0.5 },
                { y: cachedDocHeight, x: winW * 0.5 }                                 // End center
            ];
            
            // Find current segment in keyPoints
            const yVal = Math.max(0, Math.min(keyPoints[keyPoints.length - 1].y, targetY));
            let i = 0;
            for (i = 0; i < keyPoints.length - 1; i++) {
                if (yVal >= keyPoints[i].y && yVal <= keyPoints[i + 1].y) {
                    break;
                }
            }
            
            const p1 = keyPoints[i];
            const p2 = keyPoints[i + 1];
            
            // Calculate progress inside the segment
            const t = (yVal - p1.y) / (p2.y - p1.y);
            const smoothT = t * t * (3 - 2 * t); // Smoothstep curve
            
            // Interpolate base X coordinate
            const targetX = p1.x + (p2.x - p1.x) * smoothT;
            
            // Scale wobble orbit based on device screen width (much narrower/tighter orbit on mobile)
            const isMobile = winW < 768;
            const scaleFactor = isMobile ? 0.3 : 0.55; // 70% reduction on mobile, 45% reduction on desktop
            
            // 1. Continuous Time-Based Floating Wobble (Runs at 60fps even when stationary!)
            const timeX = scaleFactor * (14 * Math.sin(time * 1.8) + 6 * Math.sin(time * 3.7));
            const timeY = scaleFactor * (8 * Math.cos(time * 1.4) + 4 * Math.sin(time * 2.9));
            const timeR = scaleFactor * (4.5 * Math.sin(time * 2.1) + 2.5 * Math.cos(time * 4.3));
            
            // 2. Scroll-Based Curve Wobble (adds extra drag movement as we scroll)
            const scrollWobbleX = scaleFactor * (8 * Math.sin(targetY * 0.0022) + 4 * Math.sin(targetY * 0.0053));
            
            // Combine all coordinates
            const finalX = targetX + scrollWobbleX + timeX;
            const finalY = targetY + timeY;
            
            // Rotate clapperboard to align with the slope of travel + add organic tilt wobble
            let baseTiltZ = timeR;
            if (!isMobile) {
                const deltaX = p2.x - p1.x;
                const deltaY = p2.y - p1.y;
                let tiltZ = (deltaX / deltaY) * 32; // Scale tilt based on slope steepness (max +/- 18deg)
                tiltZ = Math.max(-18, Math.min(18, tiltZ));
                
                // Add minor organic rotational wobble (simulating aerodynamic drag / float)
                const wobbleR = scaleFactor * (4 * Math.sin(targetY * 0.0028) + 2 * Math.cos(targetY * 0.0067));
                baseTiltZ = tiltZ + wobbleR + timeR;
            }

            // Check if we are entering the PROJECT REQUEST transition zone
            const timelineEnd = cachedTimelineTop + cachedTimelineHeight;
            const transitionStart = timelineEnd - 180;
            const transitionEnd = timelineEnd + 80;
            
            // Use cached center coordinates of the Request Tool panel
            const requestToolCenterX = cachedRequestToolCenterX;
            const requestToolCenterY = cachedRequestToolCenterY;
            
            // Dynamically calculate scale factor so the clapperboard becomes EXACTLY as big as the panel
            const clapperBaseWidth = isMobile ? 34 : 44;
            const targetMaxScale = cachedRequestToolWidth / clapperBaseWidth;
            
            // Declare clapperOpacity as a window-level or loop-level variable to be used later
            window.currentClapperOpacity = 0.75;
            const requestTool = document.getElementById("requestTool");
            
            if (targetY >= transitionStart && targetY <= transitionEnd) {
                const progress = (targetY - transitionStart) / (transitionEnd - transitionStart); // 0 to 1
                
                // 1. Scale up to EXACTLY targetMaxScale (matching requestTool panel dimensions)
                const animScale = 1.0 + ((targetMaxScale - 1.0) * progress);
                
                // 2. Rotate a full 360-degree spin + base tilt
                const animRotation = baseTiltZ + (360 * progress);
                
                // 3. Morph coordinate to fly directly into the center of the requestTool panel
                const animX = finalX + (requestToolCenterX - finalX) * progress;
                const animY = finalY + (requestToolCenterY - finalY) * progress;
                
                clapperboard.style.left = `${animX}px`;
                clapperboard.style.top = `${animY}px`;
                clapperboard.style.transform = `translate(-50%, -50%) scale(${animScale}) rotate(${animRotation}deg)`;
                clapperboard.style.zIndex = "-1"; // Keep behind content
                
                // 4. Hide panel content until clapperboard reaches perfect sizing at >= 96% progress
                if (progress >= 0.96) {
                    window.currentClapperOpacity = 0; // Seamless hand-off
                    if (requestTool) requestTool.classList.add("content-ready");
                } else {
                    window.currentClapperOpacity = 0.75;
                    if (requestTool) requestTool.classList.remove("content-ready");
                }
            } else if (targetY > transitionEnd) {
                window.currentClapperOpacity = 0;
                if (requestTool) requestTool.classList.add("content-ready");
                clapperboard.style.left = `${finalX}px`;
                clapperboard.style.top = `${finalY}px`;
                clapperboard.style.transform = `translate(-50%, -50%) rotate(${baseTiltZ}deg)`;
                clapperboard.style.zIndex = "-1";
            } else {
                // Normal floating behavior
                if (requestTool) requestTool.classList.remove("content-ready");
                clapperboard.style.left = `${finalX}px`;
                clapperboard.style.top = `${finalY}px`;
                clapperboard.style.transform = `translate(-50%, -50%) rotate(${baseTiltZ}deg)`;
                clapperboard.style.zIndex = "-1";
            }
            
            // Handle local timeline events (SVG fade, clacking, card reveal)
            const inTimeline = (targetY >= cachedTimelineTop && targetY <= cachedTimelineTop + cachedTimelineHeight);
            if (inTimeline) {
                const localProgress = (targetY - cachedTimelineTop) / cachedTimelineHeight;
                
                // Show SVG path inside timeline section
                const timelineSvg = processTimeline.querySelector(".timeline-svg");
                if (timelineSvg) {
                    let svgOpacity = 1;
                    if (localProgress < 0.1) {
                        svgOpacity = localProgress / 0.1;
                    } else if (localProgress > 0.9) {
                        svgOpacity = (1 - localProgress) / 0.1;
                    }
                    timelineSvg.style.opacity = svgOpacity.toString();
                    timelineSvg.style.transition = "opacity 0.25s ease-out";
                }
                
                // Trigger clack snap-down animation when clapperboard passes step levels
                const stepThresholds = [0.125, 0.375, 0.625, 0.875];
                stepThresholds.forEach(t => {
                    const diff = Math.abs(localProgress - t);
                    if (diff < 0.018) {
                        if (!clapperboard.dataset.lastClack || Math.abs(parseFloat(clapperboard.dataset.lastClack) - t) > 0.05) {
                            clapperboard.classList.add("clacking");
                            if (!isMobile) {
                                playClackSound();
                            }
                            setTimeout(() => {
                                clapperboard.classList.remove("clacking");
                            }, 280);
                            clapperboard.dataset.lastClack = t.toString();
                        }
                    }
                });
                
                // Reveal cards and light up nodes as clapperboard passes them
                const items = processTimeline.querySelectorAll(".timeline-item");
                items.forEach((item, idx) => {
                    const targetCenter = 0.125 + idx * 0.25;
                    
                    if (localProgress >= targetCenter - 0.08) {
                        item.classList.add("revealed");
                    }
                    
                    const distance = Math.abs(localProgress - targetCenter);
                    if (distance <= 0.12) {
                        item.classList.add("active-passing");
                    } else {
                        item.classList.remove("active-passing");
                    }
                });
            } else {
                // Remove active-passing classes if outside timeline
                const items = processTimeline.querySelectorAll(".timeline-item");
                items.forEach(item => item.classList.remove("active-passing"));
                
                // Hide SVG path inside timeline section when clapperboard is not there
                const timelineSvg = processTimeline.querySelector(".timeline-svg");
                if (timelineSvg) {
                    timelineSvg.style.opacity = "0";
                }
            }
            
            const badgeElement = document.getElementById("requestBadgeBtn");
            
            if (badgeElement) {
                const distanceToBadge = Math.abs(targetY - cachedBadgeY);
                if (distanceToBadge < 80) {
                    badgeElement.classList.add("glow-active");
                } else {
                    badgeElement.classList.remove("glow-active");
                }
                
                // Trigger dynamic clack snap on the giant clapperboard when scroll Y aligns with it and panel is ready
                if (distanceToBadge < 55 && requestTool && requestTool.classList.contains("content-ready")) {
                    if (!requestTool.classList.contains("clacking") && !requestTool.dataset.clacked) {
                        requestTool.classList.add("clacking");
                        if (!isMobile) {
                            playClackSound();
                        }
                        requestTool.dataset.clacked = "true";
                        setTimeout(() => {
                            requestTool.classList.remove("clacking");
                        }, 280);
                    }
                } else if (distanceToBadge > 160 && requestTool) {
                    requestTool.dataset.clacked = ""; // Reset clack flag when scrolled away
                }
            }
            
            // Fade out clapperboard completely at the very top (0-150px) and very bottom of the page
            if (scrollTop <= 150 || scrollTop >= cachedDocHeight - winH - 150) {
                clapperboard.style.opacity = "0";
            } else {
                clapperboard.style.opacity = window.currentClapperOpacity.toString();
            }
        }
        
        // Global AudioContext for clack sound (initialized once)
        const clackAudioContext = new (window.AudioContext || window.webkitAudioContext)();

        // Play realistic synthesized wooden clack sound using shared AudioContext
        function playClackSound() {
            try {
                // Resume context if suspended (required after user interaction on some browsers)
                if (clackAudioContext.state === 'suspended') {
                    clackAudioContext.resume();
                }
                const ctx = clackAudioContext;

                // 1. Wood body resonance oscillator sweep
                const osc = ctx.createOscillator();
                const gainOsc = ctx.createGain();
                osc.type = "sine";
                osc.frequency.setValueAtTime(1400, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.07);
                gainOsc.gain.setValueAtTime(0.35, ctx.currentTime);
                gainOsc.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);
                osc.connect(gainOsc);
                gainOsc.connect(ctx.destination);

                // 2. High frequency sharp click (wooden impact crackle)
                const bufferSize = ctx.sampleRate * 0.04; // 40ms buffer
                const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
                const data = buffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) {
                    data[i] = Math.random() * 2 - 1;
                }
                const noise = ctx.createBufferSource();
                noise.buffer = buffer;

                const filter = ctx.createBiquadFilter();
                filter.type = "bandpass";
                filter.frequency.setValueAtTime(1100, ctx.currentTime);
                filter.Q.setValueAtTime(5, ctx.currentTime);

                const gainNoise = ctx.createGain();
                gainNoise.gain.setValueAtTime(0.28, ctx.currentTime);
                gainNoise.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);
                noise.connect(filter);
                filter.connect(gainNoise);
                gainNoise.connect(ctx.destination);

                // Fire synthesizer nodes
                osc.start();
                osc.stop(ctx.currentTime + 0.08);
                noise.start();
                noise.stop(ctx.currentTime + 0.05);
            } catch (e) {
                console.warn("Web Audio API blocked or not supported:", e);
            }
        }
        
        // Listen for global clicks to snap clapperboard closed and play click-clack sound
        window.addEventListener("mousedown", () => {
            let soundPlayed = false;
            
            const modalClap = document.getElementById("modalClapperboard");
            const modalOpen = document.body.classList.contains("modal-open");
            const requestTool = document.getElementById("requestTool");
            
            // 1. Snap modal clapperboard if open
            if (modalOpen && modalClap) {
                modalClap.classList.add("clacking");
                if (!soundPlayed) {
                    playClackSound();
                    soundPlayed = true;
                }
                setTimeout(() => {
                    modalClap.classList.remove("clacking");
                }, 280);
            }
            
            // 2. Snap giant clapperboard request tool wrapper
            if (requestTool) {
                requestTool.classList.add("clacking");
                if (!soundPlayed) {
                    playClackSound();
                    soundPlayed = true;
                }
                setTimeout(() => {
                    requestTool.classList.remove("clacking");
                }, 280);
            }
            
            // 3. Snap global background clapperboard
            if (clapperboard && clapperboard.style.opacity !== "0") {
                clapperboard.classList.add("clacking");
                if (!soundPlayed) {
                    playClackSound();
                    soundPlayed = true;
                }
                setTimeout(() => {
                    clapperboard.classList.remove("clacking");
                }, 280);
            }
        });
        
        // Continuous requestAnimationFrame loop to update clapperboard floating & scrolling at 60fps
        function tickClapperboard() {
            updateClapperboard();
            requestAnimationFrame(tickClapperboard);
        }
        requestAnimationFrame(tickClapperboard);
        
        window.addEventListener("resize", () => {
            cacheLayoutDimensions();
            updateClapperboard();
        });
    }
}
