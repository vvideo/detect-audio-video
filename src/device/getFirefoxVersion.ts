export function getFirefoxVersion(): number {
    const match = navigator.userAgent.match(/Firefox\/([0-9]+)\./);

    return match ? (parseFloat(match[1]) || -1) : -1;
}
