export function getFirefoxVersion(): number {
    const match = navigator.userAgent.match(/Firefox\/([0-9]+)\./);

    return match ? (parseInt(match[1], 10) || -1) : -1;
}
