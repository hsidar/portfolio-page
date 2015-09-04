//html to imbed: 

<div id="cats"><iframe id="ytplayer" src="https://www.youtube-nocookie.com/embed/TObWvD2xI0I?autoplay=1&enablejsapi=1"></iframe></div>
<div id=music><img class= "speaker" src="/images/speaker.png"></div>
<div id=music-off><img class= "speaker" src="/images/speaker_off.png"></div>

//css to imbed:

#cats {
  position: fixed;
  bottom:0;
  right: 0;
  width: 20%;
  opacity: 0;
  z-index: -5;
}

#music {
  position: fixed;
  bottom: 0;
  left: 1.5%;
  z-index: 5;
}

#music-off {
  position: fixed;
  bottom: 0;
  left: 1.5%;
  display: none;
  z-index: 5;
}

.speaker {
  height: 5vh;
  width: 5vh;
}

(function(){
  
  
  var i=document.createElement(element);
  document.body.appendChild(i);

  var tag = document.createElement('script');
  tag.src = "//www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubeIframeAPIReady() {
      player = new YT.Player('ytplayer', {
        events: {
              'onReady': onPlayerReady}
      });
  }

  function onPlayerReady(event) {
    player.unMute();
    player.setVolume(50);
  }



    $('#music').on('click', function(){
      $('#music').fadeOut(0);
      $('#music-off').fadeIn(0);
      player.mute();
    });

      $('#music-off').on('click', function(){
      $('#music-off').fadeOut(0);
      $('#music').fadeIn(0);
      player.unMute();
    });

  });
})();
