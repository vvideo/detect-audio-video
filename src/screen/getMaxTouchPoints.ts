export function getMaxTouchPoints(): number | undefined {
    return navigator.maxTouchPoints ??
        // @ts-ignore
        navigator.msMaxTouchPoints;
}
