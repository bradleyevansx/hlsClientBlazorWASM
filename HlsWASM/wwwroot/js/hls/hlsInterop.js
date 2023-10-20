window.initializeHlsPlayer = (videoElementId, streamUrl) => {
    const videoElement = document.getElementById(videoElementId);
    if(Hls.isSupported()){
        const hls = new Hls();
        hls.loadSource(streamUrl);
        hls.attachMedia(videoElement);
    }else if(videoElement.canPlayType('application/vnd.apple.mpegurl')){
        videoElement.src = streamUrl;
    }
};
