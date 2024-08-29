import { isSsr } from './isSsr';

export function isTypeSupported(value: string): boolean {
    if (isSsr || !window.MediaSource) {
        return false;
    }

    let result = false;

    try {
        result = MediaSource.isTypeSupported(value);
    } catch(e) {}

    return result;
}
