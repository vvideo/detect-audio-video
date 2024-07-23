
import {
    APNG_CONTENT_TYPE,
    GIF_CONTENT_TYPE,
    JPEG_CONTENT_TYPE,
    JPEG_XL_CONTENT_TYPE,
    PNG_CONTENT_TYPE,
    WEBP_CONTENT_TYPE,
    HEIF_CONTENT_TYPE,
    HEIC_CONTENT_TYPE,
    AVIF_CONTENT_TYPE,
} from './contentTypes/image';

export function isGifSupported() {
    return isImageSupported(GIF_CONTENT_TYPE);
}

export function isJpegSupported() {
    return isImageSupported(JPEG_CONTENT_TYPE);
}

export function isJpegXlSupported() {
    return isImageSupported(JPEG_XL_CONTENT_TYPE);
}

export function isPngSupported() {
    return isImageSupported(PNG_CONTENT_TYPE);
}

export function isAPngSupported() {
    return isImageSupported(APNG_CONTENT_TYPE);
}

export function isSvgSupported() {
    return Boolean(
        typeof window !== 'undefined' &&
        document.createElementNS &&
        document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect
    );
}

export function isWebpSupported() {
    return isImageSupported(WEBP_CONTENT_TYPE);
}

export function isHeifSupported() {
    return isImageSupported(HEIF_CONTENT_TYPE);
}

export function isHeicSupported() {
    return isImageSupported(HEIC_CONTENT_TYPE);
}

export function isAvifSupported() {
    return isImageSupported(AVIF_CONTENT_TYPE);
}

export function isImageSupported(type: string): Promise<boolean> {
    if (typeof window === 'undefined') {
        return Promise.resolve(false);
    }

    return new Promise((resolve) => {
        const picture = document.createElement('picture');
        const source = document.createElement('source');
        source.srcset = 'data:,x';
        source.type = type;
        picture.appendChild(source);

        const img = document.createElement('img');
        picture.appendChild(img);

        Promise.resolve().then(() => {
            resolve(Boolean(img.currentSrc));
        });
    });
}
