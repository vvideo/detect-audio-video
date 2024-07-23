export function isTypeSupported(value: string): boolean {
    if (typeof window === 'undefined' || !window.MediaSource) {
        return false;
    }

    let result = false;

    try {
        result = MediaSource.isTypeSupported(value);
    } catch(e) {}

    return result;
}
