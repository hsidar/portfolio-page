window.onload = function(){
  
 $("#quote")
.html('"I was a victim of a series of accidents, as are we all." - Kurt Vonnegut, The Sirens of Titan')
.fadeIn(2000).delay(5500)
.fadeOut(2000);  

var tl = new TimelineLite();

tl.to("#eyelid", 3, { 
    borderLeftWidth: "75", 
    borderTopWidth: "75", 
    borderBottomWidth: "25", 
    borderRightWidth: "25",
    ease: Back.easeOut
  },
  "poop")
  .from("#sclera", 1.5, {
    top: "90%",
    left: "70%"
  }, 
  "poop")
  .to("#pupil", 1.5, {
    top: "51%",
    left: "49%",
  },
  "poop")
  .to("#pupil", 4, {
    height: 0,
    width: 0,
  }, 
  "poop")
  .to("#pupil", 2, {
    height: "10vh",
    width: "10vh",
  }, 
  "widening")
  .to("#eyelid", 2, { 
    borderLeftWidth: "0", 
    borderTopWidth: "0", 
    borderBottomWidth: "0", 
    borderRightWidth: "0"
  },
  "widening")
  .to("#orbicularis, #oculi", 2, {
    opacity: 1
  },
  "widening")
  .to("#pupil", 0.5, {
    height: 0,
    width: 0,
  },
  "blink")
  .to("#eyelid", 0.5, { 
    borderLeftWidth: "700", 
    borderTopWidth: "700", 
    borderBottomWidth: "300", 
    borderRightWidth: "300"
  },
  "blink")
  .to("#orbicularis, #oculi", 0.5, {
    opacity: 0
  }, 
  "blink")
  .to("#eyelid", 0.5, { 
    borderLeftWidth: "0", 
    borderTopWidth: "0", 
    borderBottomWidth: "0", 
    borderRightWidth: "0"
  },
  "open")
  .to("#orbicularis, #oculi", 0.5, {
    opacity: 1
  }, 
  "open")
  .to("#sclera", 1, {
    top: "75%",
    left: "30%",
  })
  .to("#sclera", 1, {
    top: "32%",
    left: "76%",
  })
  .to("#sclera", 1, {
    top: "20%",
    left: "50%"
  })
  .to("#sclera", 1, {
    top: "53%",
    left: "53%",
    ease: Back.easeOut
  })
  .to("#eyelid", 1, { 
    borderLeftWidth: "700", 
    borderTopWidth: "700", 
    borderBottomWidth: "300", 
    borderRightWidth: "300"
  }, 
  "preface")
  .to("#orbicularis, #oculi", 1, {
    opacity: 0
  }, 
  "preface")
  .to("#pupil", 1, {
    height: "15vh",
    width: "15vh",
  },
  "preface")
  .to("#eyelid", 2, { 
    borderLeftWidth: "0", 
    borderTopWidth: "0", 
    borderBottomWidth: "0", 
    borderRightWidth: "0"
  },
  "fin")
  .to("#orbicularis, #oculi", 3.5, {
    opacity: 1
  }, 
  "fin")
  .to("#pupil", 5, {
    height: 0,
    width: 0,
  },
  "fin"
);

tl.timeScale(1.5);

};
