import cloudinary from "../models/cloudinary.js";

export function getUrl(public_id) {
    return cloudinary.url(public_id, {
        fetch_format: 'auto',
        quality: 'auto'
    });
}