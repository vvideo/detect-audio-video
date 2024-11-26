// Detect if system supports WebRTC 1.0 or WebRTC 1.1.
export function isWebRTCSupported() {
    return [
        'RTCPeerConnection',
        'webkitRTCPeerConnection',
        'mozRTCPeerConnection',
        'RTCIceGatherer'
    ].some(item => item in window);
}

function mediaFilter(codec: RTCRtpCodec): boolean {
    return codec.mimeType.search('(red|fec|rtx|telephone-event)$') === -1
}

// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/WebRTC_codecs#supported_video_codecs
export function getWebRTCVideoCodecs(onlyMedia?: boolean): RTCRtpCodec[] {
    const codecs = window.RTCRtpSender?.getCapabilities('video')?.codecs || [];

    return onlyMedia ? codecs.filter(mediaFilter) : codecs;
};

// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/WebRTC_codecs#supported_audio_codecs
export function getWebRTCAudioCodecs(onlyMedia?: boolean): RTCRtpCodec[] {
    const codecs = window.RTCRtpSender?.getCapabilities('audio')?.codecs || [];

    return onlyMedia ? codecs.filter(mediaFilter) : codecs
};
