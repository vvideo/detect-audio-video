export function isTypeSupported(value: string): boolean {
    if (!window.MediaSource) {
        return false;
    }

    let result = false;

    try {
        result = MediaSource.isTypeSupported(value);
    } catch(e) {}

    return result;
}
