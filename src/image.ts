
import {
    APNG_CONTENT_TYPE,
    JPEG_XL_CONTENT_TYPE,
    WEBP_CONTENT_TYPE,
    HEIF_CONTENT_TYPE,
    AVIF_CONTENT_TYPE,
    BMP_CONTENT_TYPE,
    TIFF_CONTENT_TYPE,
    GIF_CONTENT_TYPE,
    JPEG_CONTENT_TYPE,
    PNG_CONTENT_TYPE,
    ICO_CONTENT_TYPE,
} from './contentTypes/image';
import { isSsr } from './utils/isSsr';

function getPrefix(type: string) {
    return `data:${type};base64,`;
}

export function isGifSupported() {
    return isImageSupported(getPrefix(GIF_CONTENT_TYPE) + 'R0lGODlhAQABAIAAAAAAAP///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw');
}

export function isJpegSupported() {
    return isImageSupported(getPrefix(JPEG_CONTENT_TYPE) + '/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/wAALCAABAAEBAREA/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAD8AKp//2Q==');
}

export function isJpegXlSupported() {
    return isImageSupported(getPrefix(JPEG_XL_CONTENT_TYPE) + 'AAAADEpYTCANCocKAAAAFGZ0eXBqeGwgAAAAAGp4bCAAAAAUanhscAAAAAD/CgAQEBQ3AgAAADpqYnJkwQ0gCC0DAgCEgAgAAADA+D8RAAAAAPwP8AMAAAALCIDgABBKRklGAAEBAQBIAEgAAAMAAADTanhscIAAAAHgWwAQAAADDGQMZAxk/v8OAAAYAAgAAQAAAAAAgIAliUNk3qQHnmaGewCAESkosMMxRsQwIiI2OtqNwSuRFINHAGFoBpQwAQAAIDUAADABAABOADHqBaABIfwgZK7XCBXRhW0iVRh1B8DcL4IfPaIAWIkBMtQBiCJTRQGjL3A2kivYYoXAQzMq4HwBEFE/QPH1RQAQ0QMZ4iZCkQB6aFMlAPbIGHVhpTX/8xVgEwaI0MSiKDAmAIA83w0h+IhIAAAAAAAAQEkC');
}

export function isPngSupported() {
    return isImageSupported(getPrefix(PNG_CONTENT_TYPE) + 'iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII');
}

export function isBmpSupported() {
    return isImageSupported(getPrefix(BMP_CONTENT_TYPE) + 'Qk1xAAAAAAAAAHsAAABsAAAAAQAAAAEAAAABACAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAD/AAD/AAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ==');
}

export function isAPngSupported() {
    return isImageSupported(getPrefix(APNG_CONTENT_TYPE) + 'iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAAE8ahlKAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAACGFjVEwAAAABAAAAALQt6aAAAAAaZmNUTAAAAAAAAAAIAAAACAAAAAAAAAAAAAEAZAEAqRxtCQAAADBJREFUeJxi2L9/P8P///9BGMQEYlQeRAAqBhHGkMGtDIseZMUo+rFIIHOQFeGUAAAAAP//BksYVwAAAAZJREFUAwAYEqdB3PA4KAAAAABJRU5ErkJggg==');
}

export function isTiffSupported() {
    return isImageSupported(getPrefix(TIFF_CONTENT_TYPE) + 'SUkqAAgAAAAPAAABAwABAAAACAAAAAEBAwABAAAACAAAAAIBAwABAAAAAQAAAAMBAwABAAAAAQAAAAYBAwABAAAAAQAAAAoBAwABAAAAAQAAABEBBAABAAAAAgEAABIBAwABAAAAAQAAABUBAwABAAAAAQAAABYBAwABAAAACAAAABcBBAABAAAACAAAABwBAwABAAAAAQAAACkBAwACAAAAAAABAD4BBQACAAAAwgAAAD8BBQAGAAAA0gAAAAAAAACAGw1Q/////wBYOVT/////AArXo/////+A4XpU/////wDNzEz/////AJqZmf////+AZmYm//////AoXA////////////////8=');
}

export function isIcoSupported() {
    return isImageSupported(getPrefix(ICO_CONTENT_TYPE) + 'AAABAAEACAgCAAEAAQBwAAAAFgAAACgAAAAIAAAAEAAAAAEAAQAAAAAAIAAAAAAAAAAAAAAAAgAAAAIAAAD///8Av7+/AA8AAAAPAAAADwAAAA8AAADwAAAA8AAAAPAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=')
}

export function isSvgSupported() {
    return Boolean(
        typeof window !== 'undefined' &&
        document.createElementNS &&
        document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect
    );
}

export function isWebpSupported() {
    return isImageSupported(getPrefix(WEBP_CONTENT_TYPE) + 'UklGRiQAAABXRUJQVlA4TBgAAAAvB8ABAA9w4P8D/x/4f/7jAX+Aj+h/wAM=');
}

export function isHeifSupported() {
    return isImageSupported(getPrefix(HEIF_CONTENT_TYPE) + 'AAAAGGZ0eXBoZWljAAAAAG1pZjFoZWljAAABO21ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAHBpY3QAAAAAAAAAAAAAAAAAAAAADnBpdG0AAAAAAAEAAAA0aWxvYwAAAABEQAACAAIAAAAAAAAAAQAAAVsAAABkAAMAAAAAAAAAAQAAAb8AAArrAAAAYWlpbmYAAAAAAAMAAAAVaW5mZQIAAAAAAQAAaHZjMQAAAAAVaW5mZQIAAAEAAgAARXhpZgAAAAApaW5mZQIAAAEAAwAAbWltZQBhcHBsaWNhdGlvbi9yZGYreG1sAAAAAChpcmVmAAAAAAAAAA5jZHNjAAIAAQABAAAADmNkc2MAAwABAAEAAABDaXBycAAAACdpcGNvAAAAH2h2Y0MAAEDv/+AAAAAAAAAB8AD//Pj4AAQDAAAAABRpcG1hAAAAAAAAAAEAAQGBAAALV21kYXQAAAAGRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAABIAAAAAQAAAEgAAAABPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLycgeDp4bXB0az0nSW1hZ2U6OkV4aWZUb29sIDEyLjQwJz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnRpZmY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvJz4KICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogPC9yZGY6RGVzY3JpcHRpb24+CjwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9J3cnPz4=');
}

export function isAvifSupported() {
    return isImageSupported(getPrefix(AVIF_CONTENT_TYPE) + 'AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAPBtZXRhAAAAAAAAAChoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAbGliYXZpZgAAAAAOcGl0bQAAAAAAAQAAAB5pbG9jAAAAAEQAAAEAAQAAAAEAAAEUAAAAFQAAAChpaW5mAAAAAAABAAAAGmluZmUCAAAAAAEAAGF2MDFDb2xvcgAAAABoaXBycAAAAElpcGNvAAAAFGlzcGUAAAAAAAAAAQAAAAEAAAAOcGl4aQAAAAABCAAAAAxhdjFDgQAcAAAAABNjb2xybmNseAABAAEAAQAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB1tZGF0EgAKBxgADlgICAkyCB/xgAAghQm0');
}

export function isImageSupported(base64: string): Promise<boolean> {
    if (isSsr) {
        return Promise.resolve(false);
    }

    return new Promise((resolve) => {
        const img = new Image();
        img.onerror = img.onabort = () => {
            resolve(false);
        };
        
        img.onload = () => {
            resolve(true);
        };

        img.src = base64;
    });
}
