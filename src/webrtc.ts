// Detect if system supports WebRTC 1.0 or WebRTC 1.1.
export const isWebRTCSupported = [
    'RTCPeerConnection',
    'webkitRTCPeerConnection',
    'mozRTCPeerConnection',
    'RTCIceGatherer'
].some(item => item in window);

// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/WebRTC_codecs#supported_video_codecs
export function geWebRTCVideoCodecs(onlyMedia?: boolean): RTCRtpCodec[] {
    const codecs = window.RTCRtpSender?.getCapabilities('video')?.codecs || [];

    return onlyMedia ?
        codecs.filter(item => item.mimeType.search('(red|fec|rtx)$') === -1) :
        codecs;
};

// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/WebRTC_codecs#supported_audio_codecs
export function geWebRTCAudioCodecs(): RTCRtpCodec[] {
    return window.RTCRtpSender?.getCapabilities('audio')?.codecs || [];
};
