var CPlayer = function (source, parentId, width, height) {
    /* Clappr.Player */
    var player = new Clappr.Player({
        source: source,
        parentId: parentId,
        poster: "icon/logo.png",
        mute: true,
        autoPlay: false,
        hideMediaControl: true,
        disableVideoTagContextMenu: true,
        watermark: "icon/logo.png", position: 'top-right',
        watermarkLink: "http://example.net/",
        width: width,
        height: height,
        playbackNotSupportedMessage: "이 브라우저에서는 동영상을 지원하지 않습니다, 다른 브라우저를 이용해주세요"
    });

    return player;
};