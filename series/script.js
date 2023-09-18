var player;
    function onYouTubeIframeAPIReady() {
        var videoId = "cSSsYgIL8fU"; // Replace with your desired YouTube video ID

        player =new YT.Player('player', {
            height: '315',      
            width: '560',
            videoId: videoId,
            playerVars: {
                'autoplay': 1,
                'controls': 0,    // Disable player controls
                'rel': 0,         // Disable related videos at the end
                'showinfo': 0,    // Disable video title and uploader info
                'modestbranding': 1, // Remove YouTube logo from the control bar
                'iv_load_policy': 3, // Disable video annotations
                'autohide': 1      // Hide player controls after a few seconds
            },
            events: {
                'onReady': onPlayerReady,
            }
        });
    }

    function onPlayerReady(event) {
        event.target.playVideo();
    }