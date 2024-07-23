export function isStandalone() {
    return Boolean(
        typeof window !== 'undefined' &&
        // @ts-ignore
        window.navigator.standalone === true || // Apple Safari
        // https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app
        (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches)
    );
}
