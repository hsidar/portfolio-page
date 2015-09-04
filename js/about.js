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



$(document).ready(function(){
  
   $("#quote")
  .html('"I was a victim of a series of accidents, as are we all." - Kurt Vonnegut, The Sirens of Titan')
  .fadeIn(2000).delay(5500)
  .fadeOut(2000);
  
  setTimeout(function(){
    $(".link").each(function(i){
      $(this).delay((i++) * 1500).fadeIn(1000);
    });
  }, 9500);
  
  setTimeout(function(){
    
    $( "#eyelid" ).animate({borderWidth: 0}, 1000, function(){
      $( "#eyelid" ).animate({borderWidth: 20}, 1000);
    });
    
    $( "#lower-eyelid" ).delay( 700 ).animate({opacity: 1}, 2000);
    $( "#upper-eyelid" ).delay( 700 ).animate({opacity: 1}, 1000);
    $("#cornea img").animate({'top': '40%', 'left' : '60%'},500, function(){
      $("#cornea img").animate({'top': '52%', 'left' : '53%'},1000, function(){
        $( "#eyelid" ).animate({borderWidth: 440}, 200, function(){
          $( "#eyelid" ).animate({borderWidth: 0}, 200, function(){
            $('#pupil').animate({'opacity' : '1', 'height' : '10vh', 'width' : '10vh'}, 200, function(){
              $('#pupil').animate({'opacity' : '0', 'height' : '5vh', 'width' : '5vh'}, 400);
            });
          });
        });
      });
    });
    
  }, 16000);
  
  $('#upper-left').on('click', function(){
    $( ".link" ).css({'color' : 'yellow'});
    $("#content").fadeOut(500);
    $( "#eyelid" ).animate({borderWidth: 440}, 300, function(){
      $( "#eyeball" ).animate({opacity: 0}, function(){
        $.ajax({url: "upper-left.html", success: function(data){$("#stuff").html(data);}});
        $("#content").css({'z-index': '2'}).fadeIn(500);
      });
    });
  });
  
  $('#upper-right').on('click', function(){
    $("#content").fadeOut(500);
    $( ".link" ).css({'color' : 'yellow'});
    $( "#eyelid" ).animate({borderWidth: 440}, 300, function(){
      $( "#eyeball" ).animate({opacity: 0}, function(){
        $.ajax({url: "upper-right.html", success: function(data){$("#stuff").html(data);}});
        $("#content").css({'z-index': '2'}).fadeIn(500);
      });
    });
  });
  
  
  
  $('#lower-left').on('click', function(){
    $( ".link" ).css({'color' : 'yellow'});
    $("#content").fadeOut(500);
    $( "#eyelid" ).animate({borderWidth: 440}, 300, function(){
      $( "#eyeball" ).animate({opacity: 0}, function(){
        $.ajax({url: "upper-right.html", success: function(data){$("#stuff").html(data);}});
        $("#content").css({'z-index': '2'}).fadeIn(500);
      });
    });
    window.open('https://p-cubed.herokuapp.com', '_blank');
  });
  
  
  $('#lower-right').on('click', function(){
    $( ".link" ).css({'color' : 'yellow'});
    $("#content").fadeOut(500);
    $( "#eyelid" ).animate({borderWidth: 440}, 300, function(){
      $( "#eyeball" ).animate({opacity: 0}, function(){
        $.ajax({url: "upper-right.html", success: function(data){$("#stuff").html(data);}});
        $("#content").css({'z-index': '2'}).fadeIn(500);
      });
    });
    window.open('https://www.facebook.com/marcus.estremera/photos', '_blank');
  });
  
  
  
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

  