import { atom, selector } from "recoil";

export  const hostState = atom({
    key: "hostState",
    default:[],
});

export  const singleHostState = atom({
    key: "singleHostState",
    default: {
        "id": 11,
    "name": "Chatura Alwis",
    "description": "Journalist/ Working as GM News Derana TV \r\nJournalist/ Working as GM News Derana TV\r\nJournalist/ Working as GM News Derana TV",
    "twitter": null,
    "linkedin": null,
    "facebook": "https://www.facebook.com/chaturaAalwis",
    "instagram": null,
    "youtube": null,
    "slug": "chatura-alwis",
    "designation": "Journalist/ Working as GM News Derana TV",
    "is_approved": true,
    "created_at": "2022-03-04T08:03:32.000000Z",
    "updated_at": "2022-03-04T08:03:32.000000Z",
    "hoster_image": "https://app.onthego.lk/storage/47/Chathura-Alwis.jpg",
    "media": [
        {
            "id": 47,
            "model_type": "App\\Models\\Hoster",
            "model_id": 11,
            "uuid": "5dd23a14-42cf-436e-a67c-507a4a9a5303",
            "collection_name": "hoster-image-collection",
            "name": "Chathura Alwis",
            "file_name": "Chathura-Alwis.jpg",
            "mime_type": "image/jpeg",
            "disk": "public",
            "conversions_disk": "public",
            "size": 116449,
            "manipulations": [],
            "custom_properties": [],
            "generated_conversions": [],
            "responsive_images": [],
            "order_column": 43,
            "created_at": "2022-03-04T08:03:32.000000Z",
            "updated_at": "2022-03-04T08:03:32.000000Z",
            "original_url": "https://app.onthego.lk/storage/47/Chathura-Alwis.jpg",
            "preview_url": ""
        }
    ]
    },
});

export const hostSelector = selector({
    key: "hostSelector",
    get: ({get}) => {
        const hostData = get(singleHostState)
        return hostData
    }
})


