import { getGpuRenderer } from "../gpu";
import { getScreenHeight, getScreenWidth } from "../screen";

export function isMacBookNeo() {
    const isApple = /Macintosh|MacIntel/.test(navigator.userAgent);
    if (!isApple) {
        return false;
    }
    
    const hasNeoResolution = getScreenWidth() === 2408 && getScreenHeight() === 1506;
    const hasSixCores = (navigator.hardwareConcurrency === 6);
    const renderer = getGpuRenderer();
    const hasA18GPU = renderer && (renderer.includes('Apple A18') || (renderer.includes('Apple GPU') && hasSixCores));    
    const score = (hasNeoResolution ? 1 : 0) + (hasSixCores ? 1 : 0) + (hasA18GPU ? 1 : 0);

    return score >= 2;
}
