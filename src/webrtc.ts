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
    return codec.mimeType.search('(CN|red|fec|rtx|telephone-event|flexfec-03)$') === -1
}

// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/WebRTC_codecs#supported_video_codecs
export function getWebRTCVideoCodecs(onlyMedia?: boolean): { encoding: RTCRtpCodec[]; decoding: RTCRtpCodec[]; } {
    const senderCodecs = window.RTCRtpSender?.getCapabilities('video')?.codecs || [];
    const receiverCodecs = window.RTCRtpReceiver?.getCapabilities('video')?.codecs || [];

    return {
        encoding: onlyMedia ? senderCodecs.filter(mediaFilter) : senderCodecs,
        decoding: onlyMedia ? receiverCodecs.filter(mediaFilter) : receiverCodecs,
    };
};

// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/WebRTC_codecs#supported_audio_codecs
export function getWebRTCAudioCodecs(onlyMedia?: boolean): { encoding: RTCRtpCodec[]; decoding: RTCRtpCodec[]; } {
    const senderCodecs = window.RTCRtpSender?.getCapabilities('audio')?.codecs || [];
    const receiverCodecs = window.RTCRtpReceiver?.getCapabilities('audio')?.codecs || [];

    return {
        encoding: onlyMedia ? senderCodecs.filter(mediaFilter) : senderCodecs,
        decoding: onlyMedia ? receiverCodecs.filter(mediaFilter) : receiverCodecs,
    };
};
