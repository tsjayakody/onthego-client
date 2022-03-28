import { atom } from "recoil";

export  const episodeCategorySluglistState = atom({
    key: "episodeCategorySluglistState",
    default: {
        "id": 7,
        "name": "Comedy",
        "slug": "comedy",
        "created_at": "2022-03-04T06:27:32.000000Z",
        "updated_at": "2022-03-04T06:27:32.000000Z",
        "cover_image": "https://app.onthego.lk/storage/41/Comedy-Category-Cover.jpg",
        "episode_count": 17,
        "media": [
            {
                "id": 41,
                "model_type": "App\\Models\\Category",
                "model_id": 7,
                "uuid": "2beba827-06fe-4bc2-ab33-2121310b146d",
                "collection_name": "cover-image-collection",
                "name": "Comedy Category Cover",
                "file_name": "Comedy-Category-Cover.jpg",
                "mime_type": "image/jpeg",
                "disk": "public",
                "conversions_disk": "public",
                "size": 126048,
                "manipulations": [],
                "custom_properties": [],
                "generated_conversions": [],
                "responsive_images": [],
                "order_column": 37,
                "created_at": "2022-03-04T06:27:32.000000Z",
                "updated_at": "2022-03-04T06:27:32.000000Z",
                "original_url": "https://app.onthego.lk/storage/41/Comedy-Category-Cover.jpg",
                "preview_url": ""
            }
        ]
    }
});

