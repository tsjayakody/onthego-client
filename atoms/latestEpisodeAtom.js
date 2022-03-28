import { atom } from "recoil";

export  const latestEpisodeState = atom({
    key: "latestEpisodeState",
    default:[],
});

export  const latestEpisodeGridState = atom({
    key: "latestEpisodeGridState",
    default:[
        {
            "id": 135,
            "name": "BIG FOCUS | ‌ඩොලර් හිඟය හමුවේ අවදානමක පවතින ඖෂධ සැපයුම",
            "slug": "big-focus-10",
            "description": "Ada Derana present \"Big Focus\" conversation on current issues in Sri Lanka.",
            "media_url": "https://d3ctxlq1ktw2nl.cloudfront.net/staging/2022-2-11/57bf9314-ce8f-0151-6dbd-0820bc424c37.mp3",
            "tags": [
                {
                    "text": "Ada Derana",
                    "tiClasses": [
                        "ti-valid"
                    ]
                },
                {
                    "text": "Big Focus",
                    "tiClasses": [
                        "ti-valid"
                    ]
                }
            ],
            "featured_hosts": false,
            "is_featured": 0,
            "is_popular": 0,
            "show_id": 11,
            "created_at": "2022-03-16T11:11:20.000000Z",
            "updated_at": "2022-03-16T11:11:20.000000Z",
            "spotify": "https://open.spotify.com/show/5GwnJbUamES5spPiCAzX4d",
            "google_podcast": "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy83N2QyMGU5OC9wb2RjYXN0L3Jzcw",
            "apple_podcast": "https://podcasts.apple.com/us/podcast/big-focus/id1606135543",
            "episode_image": "https://app.onthego.lk/storage/174/BIG-FOCUS-Logo.png",
            "episode_image_thumb": "https://app.onthego.lk/storage/174/conversions/BIG-FOCUS-Logo-thumb.jpg",
            "show": {
                "id": 11,
                "name": "BIG FOCUS",
                "slug": "big-focus",
                "description": "Ada Derana Big Focus Discussion\r\nAda Derana Big Focus Discussion\r\nAda Derana Big Focus Discussion\r\nAda Derana Big Focus Discussion\r\nAda Derana Big Focus Discussion",
                "hoster_id": 12,
                "created_at": "2022-03-04T09:07:51.000000Z",
                "updated_at": "2022-03-04T09:07:51.000000Z",
                "show_image": "https://app.onthego.lk/storage/53/Big-Focus-cover-art.jpg",
                "media": [
                    {
                        "id": 53,
                        "model_type": "App\\Models\\Show",
                        "model_id": 11,
                        "uuid": "4c21749c-4b8f-418f-94b7-ec2a50c4973c",
                        "collection_name": "show-image-collection",
                        "name": "Big Focus cover art",
                        "file_name": "Big-Focus-cover-art.jpg",
                        "mime_type": "image/jpeg",
                        "disk": "public",
                        "conversions_disk": "public",
                        "size": 196431,
                        "manipulations": [],
                        "custom_properties": [],
                        "generated_conversions": [],
                        "responsive_images": [],
                        "order_column": 49,
                        "created_at": "2022-03-04T09:07:51.000000Z",
                        "updated_at": "2022-03-04T09:07:51.000000Z",
                        "original_url": "https://app.onthego.lk/storage/53/Big-Focus-cover-art.jpg",
                        "preview_url": ""
                    }
                ]
            },
            "media": [
                {
                    "id": 174,
                    "model_type": "App\\Models\\Episode",
                    "model_id": 135,
                    "uuid": "be6802af-523e-4251-9654-ae86d31e72bd",
                    "collection_name": "episode-image-collection",
                    "name": "BIG FOCUS Logo",
                    "file_name": "BIG-FOCUS-Logo.png",
                    "mime_type": "image/png",
                    "disk": "public",
                    "conversions_disk": "public",
                    "size": 30283,
                    "manipulations": [],
                    "custom_properties": [],
                    "generated_conversions": {
                        "thumb": true
                    },
                    "responsive_images": [],
                    "order_column": 160,
                    "created_at": "2022-03-16T11:11:20.000000Z",
                    "updated_at": "2022-03-16T11:11:20.000000Z",
                    "original_url": "https://app.onthego.lk/storage/174/BIG-FOCUS-Logo.png",
                    "preview_url": ""
                }
            ]
        },
    ],
});
