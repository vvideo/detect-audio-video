import { isFairPlaySupported, isPlayReadySL150Supported, isPlayReadySL2000Supported, isPlayReadySL3000Supported, isPlayReadySupported, isWidevineL1Supported, isWidevineL3Supported } from '../src/drm/index';
import { getDevicePixelRatio, getScreenHeight, getScreenWidth, isHighDynamicRangeSupported } from '../src/screen';
import { isWidevineSupported } from '../src/drm/widevine';
import { isPrimetimeSupported } from '../src/drm/primetime';
import { getGpuRenderer, getGpuVendor } from '../src/gpu';
import { isNativeHlsSupported, isNativeMpdSupported, isNativeMssSupported } from '../src/stream';
import { isEmeSupported, isMseSupported, isMmsSupported } from '../src/dom';
import { isPipSupported, isDocumentPipSupported } from '../src/videoelement';

const pre = document.createElement('pre');
document.body.appendChild(pre);

Promise.all([
    isPlayReadySupported(),
    isPlayReadySL150Supported(),
    isPlayReadySL2000Supported(),
    isPlayReadySL3000Supported(),
    isWidevineSupported(),
    isWidevineL1Supported(),
    isWidevineL3Supported(),
    isFairPlaySupported(),
    isPrimetimeSupported(),
]).then(data => {
    const [
        playready,
        playreadySL150, playreadySL2000, playreadySL3000,
        widevine,
        widevineL1, widevineL3,
        fairplay,
        primetime,
    ] = data;

    const screenWidth = getScreenWidth();
    const screenHeight = getScreenHeight();
    const result = [
        { title: 'Screen size', result: `${screenWidth}×${screenHeight}` },
        { title: 'Color depth', result: `${screen.colorDepth} bit` },
        { title: 'HDR', result: isHighDynamicRangeSupported() },
        { title: 'Device pixel ratio', result: getDevicePixelRatio() },
        { title: 'GPU vendor', result: getGpuVendor() },
        { title: 'GPU renderer', result: getGpuRenderer() },
        {
            title: 'PlayReady', result: playready,
        },
        {
            title: 'PlayReady SL150', result: playreadySL150,
        },
        {
            title: 'PlayReady SL2000', result: playreadySL2000,
        },
        {
            title: 'PlayReady SL3000', result: playreadySL3000,
        },
        {
            title: 'Widevine', result: widevine,
        },
        {
            title: 'Widevine L1', result: widevineL1,
        },
        {
            title: 'Widevine L3', result: widevineL3,
        },
        {
            title: 'FairPlay', result: fairplay,
        },
        {
            title: 'Primetime', result: primetime,
        },
        {
            title: 'Native HLS', result: isNativeHlsSupported(),
        },
        {
            title: 'Native MPD', result: isNativeMpdSupported(),
        },
        {
            title: 'Native MSS', result: isNativeMssSupported(),
        },
        {
            title: 'MSE', result: isMseSupported(),
        },
        {
            title: 'MMS', result: isMmsSupported(),
        },
        {
            title: 'EME', result: isEmeSupported(),
        },
        {
            title: 'Pip', result: isPipSupported(),
        },
        {
            title: 'Document Pip', result: isDocumentPipSupported(),
        },
    ];

    pre.innerHTML = result.map((item) => {
        return item.title + ': ' + item.result;
    }).join('<br/>');
});
