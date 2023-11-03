//scroll [main]
function scrollWinD(){
    window.scrollBy(0, 950);
  }

//play pause video [main]
function play(){
    var video = document.getElementById("vid");
    var button = document.getElementById("play");
    if (video.paused || video.ended) {
      button.title = "Wstrzymaj";
      button.innerHTML = "Wstrzymaj";
      video.play();
    }
    else {
      button.title = "Wznów";
      button.innerHTML = "Wznów";
      video.pause();
    }
}

//show/hide div [catalog]
function showhide(p){
  var w = document.getElementById("wszystkie")
  var m = document.getElementById("motocykle")
  var n = document.getElementById("motorowery")
  var s = document.getElementById("skutery")
  var d = document.getElementById("skutery125")
  switch(p){
    case'w':{
      w.style.display = "none"
        if (w.style.display === "none") {
          m.style.display = "none"
          n.style.display = "none"
          s.style.display = "none"
          d.style.display = "none"
          w.style.display = "block"  
          document.getElementById("w1").style.backgroundColor="rgb(100,100,100)"
          document.getElementById("m1").style.backgroundColor="rgba(0,0,0,0)"
          document.getElementById("n1").style.backgroundColor="rgba(0,0,0,0)"
          document.getElementById("s1").style.backgroundColor="rgba(0,0,0,0)"
          document.getElementById("d1").style.backgroundColor="rgba(0,0,0,0)"
	      }
        break
    }

    case'm':{
      m.style.display = "none"
      if (m.style.display === "none") {
        w.style.display = "none"
        n.style.display = "none"
        s.style.display = "none"
        d.style.display = "none"
        m.style.display = "block"  
        document.getElementById("w1").style.backgroundColor="rgba(0,0,0,0)"
        document.getElementById("m1").style.backgroundColor="rgb(100,100,100)"
        document.getElementById("n1").style.backgroundColor="rgba(0,0,0,0)"
        document.getElementById("s1").style.backgroundColor="rgba(0,0,0,0)"
        document.getElementById("d1").style.backgroundColor="rgba(0,0,0,0)"
        }
        break
      }
     

    case'n':{
      n.style.display = "none"
      if (n.style.display === "none") {
        m.style.display = "none"
        w.style.display = "none"
        s.style.display = "none"
        d.style.display = "none"
        n.style.display = "block"  
        document.getElementById("w1").style.backgroundColor="rgba(0,0,0,0)"
        document.getElementById("m1").style.backgroundColor="rgba(0,0,0,0)"
        document.getElementById("n1").style.backgroundColor="rgb(100,100,100)"
        document.getElementById("s1").style.backgroundColor="rgba(0,0,0,0)"
        document.getElementById("d1").style.backgroundColor="rgba(0,0,0,0)"
      }
      break
    }

    case's':{
      s.style.display = "none"
      if (s.style.display === "none") {
        m.style.display = "none"
        n.style.display = "none"
        w.style.display = "none"
        d.style.display = "none"
        s.style.display = "block"  
        document.getElementById("w1").style.backgroundColor="rgba(0,0,0,0)"
        document.getElementById("m1").style.backgroundColor="rgba(0,0,0,0)"
        document.getElementById("n1").style.backgroundColor="rgba(0,0,0,0)"
        document.getElementById("s1").style.backgroundColor="rgb(100,100,100)"
        document.getElementById("d1").style.backgroundColor="rgba(0,0,0,0)"
      }
      break
    }
    case'd':{
      d.style.display = "none"
      if (d.style.display === "none") {
        m.style.display = "none"
        n.style.display = "none"
        s.style.display = "none"
        w.style.display = "none"
        d.style.display = "block"  
        document.getElementById("w1").style.backgroundColor="rgba(0,0,0,0)"
        document.getElementById("m1").style.backgroundColor="rgba(0,0,0,0)"
        document.getElementById("n1").style.backgroundColor="rgba(0,0,0,0)"
        document.getElementById("s1").style.backgroundColor="rgba(0,0,0,0)"
        document.getElementById("d1").style.backgroundColor="rgb(100,100,100)"
      }
      break
    }

  }
}

function opis(l){
  switch(l){
  
    case'j121':{
        var x = document.getElementById("j121");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("imgj121").style.rotate="180deg"
          document.getElementById("divj121").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("imgj121").style.rotate="0deg"
          document.getElementById("divj121").style.height="320px"
        }
}




    }
  }