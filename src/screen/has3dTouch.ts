export function has3DTouch(): boolean {
    try {
        return window.matchMedia && window.matchMedia('(force: 3d)').matches;
    } catch {
        return false;
    }
}
