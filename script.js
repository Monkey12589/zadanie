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
      break
}
    case'j125r':{
      var x = document.getElementById("j125r");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgj125r").style.rotate="180deg"
        document.getElementById("divj125r").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgj125r").style.rotate="0deg"
        document.getElementById("divj125r").style.height="320px"
      }
      break
    }
    case'j125s':{
      var x = document.getElementById("j125s");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgj125s").style.rotate="180deg"
        document.getElementById("divj125s").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgj125s").style.rotate="0deg"
        document.getElementById("divj125s").style.height="320px"
      }
      break
    }
    case'jadv':{
      var x = document.getElementById("jadv");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjadv").style.rotate="180deg"
        document.getElementById("divjadv").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjadv").style.rotate="0deg"
        document.getElementById("divjadv").style.height="320px"
      }
      break
    }
    case"jm11":{
      var x = document.getElementById("jm11");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjm11").style.rotate="180deg"
        document.getElementById("divjm11").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjm11").style.rotate="0deg"
        document.getElementById("divjm11").style.height="320px"
      }
      break
    }
    case"jm11c":{
      var x = document.getElementById("jm11c");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjm11c").style.rotate="180deg"
        document.getElementById("divjm11c").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjm11c").style.rotate="0deg"
        document.getElementById("divjm11c").style.height="320px"
      }
      break
    }
    case"jm12":{
      var x = document.getElementById("jm12");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjm12").style.rotate="180deg"
        document.getElementById("divjm12").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjm12").style.rotate="0deg"
        document.getElementById("divjm12").style.height="320px"
      }
      break
    }
    case"jm12c":{
      var x = document.getElementById("jm12c");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjm12c").style.rotate="180deg"
        document.getElementById("divjm12c").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjm12c").style.rotate="0deg"
        document.getElementById("divjm12c").style.height="320px"
      }
      break
    }
    case"jm12v":{
      var x = document.getElementById("jm12v");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjm12v").style.rotate="180deg"
        document.getElementById("divjm12v").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjm12v").style.rotate="0deg"
        document.getElementById("divjm12v").style.height="320px"
      }
      break
    }
    case"jm13":{
      var x = document.getElementById("jm13");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjm13").style.rotate="180deg"
        document.getElementById("divjm13").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjm13").style.rotate="0deg"
        document.getElementById("divjm13").style.height="320px"
      }
      break
    }
    case"jm15":{
      var x = document.getElementById("jm15");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjm15").style.rotate="180deg"
        document.getElementById("divjm15").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjm15").style.rotate="0deg"
        document.getElementById("divjm15").style.height="320px"
      }
      break
    }
    case"jm16":{
      var x = document.getElementById("jm16");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjm16").style.rotate="180deg"
        document.getElementById("divjm16").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjm16").style.rotate="0deg"
        document.getElementById("divjm16").style.height="320px"
      }
      break
    }
    case"jrsl125":{
      var x = document.getElementById("jrsl125");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjrsl125").style.rotate="180deg"
        document.getElementById("divjrsl125").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjrsl125").style.rotate="0deg"
        document.getElementById("divjrsl125").style.height="320px"
      }
      break
    }
    case"jrx401":{
      var x = document.getElementById("jrx401");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjrx401").style.rotate="180deg"
        document.getElementById("divjrx401").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjrx401").style.rotate="0deg"
        document.getElementById("divjrx401").style.height="320px"
      }
      break
    }
    case"jrxone":{
      var x = document.getElementById("jrxone");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjrxone").style.rotate="180deg"
        document.getElementById("divjrxone").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjrxone").style.rotate="0deg"
        document.getElementById("divjrxone").style.height="320px"
      }
      break
    }
    case"jsc125":{
      var x = document.getElementById("jsc125");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjsc125").style.rotate="180deg"
        document.getElementById("divjsc125").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjsc125").style.rotate="0deg"
        document.getElementById("divjsc125").style.height="320px"
      }
      break
    }
    case"jsc300":{
      var x = document.getElementById("jsc300");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjsc300").style.rotate="180deg"
        document.getElementById("divjsc300").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjsc300").style.rotate="0deg"
        document.getElementById("divjsc300").style.height="320px"
      }
      break
    }
    case"jsr400":{
      var x = document.getElementById("jsr400");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjsr400").style.rotate="180deg"
        document.getElementById("divjsr400").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjsr400").style.rotate="0deg"
        document.getElementById("divjsr400").style.height="320px"
      }
      break
    }
    case"jxray125":{
      var x = document.getElementById("jxray125");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjxray125").style.rotate="180deg"
        document.getElementById("divjxray125").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjxray125").style.rotate="0deg"
        document.getElementById("divjxray125").style.height="320px"
      }
      break
    }
    case"j901":{
      var x = document.getElementById("j901");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgj901").style.rotate="180deg"
        document.getElementById("divj901").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgj901").style.rotate="0deg"
        document.getElementById("divj901").style.height="320px"
      }
      break
    }
    case"j902":{
      var x = document.getElementById("j902");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgj902").style.rotate="180deg"
        document.getElementById("divj902").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgj902").style.rotate="0deg"
        document.getElementById("divj902").style.height="320px"
      }
      break
    }
    case"j905":{
      var x = document.getElementById("j905");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgj905").style.rotate="180deg"
        document.getElementById("divj905").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgj905").style.rotate="0deg"
        document.getElementById("divj905").style.height="320px"
      }
      break
    }
    case"j906":{
      var x = document.getElementById("j906");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgj906").style.rotate="180deg"
        document.getElementById("divj906").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgj906").style.rotate="0deg"
        document.getElementById("divj906").style.height="320px"
      }
      break
    }
    case"j907":{
      var x = document.getElementById("j907");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgj907").style.rotate="180deg"
        document.getElementById("divj907").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgj907").style.rotate="0deg"
        document.getElementById("divj907").style.height="320px"
      }
      break
    }
    case"jadv50":{
      var x = document.getElementById("jadv50");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjadv50").style.rotate="180deg"
        document.getElementById("divjadv50").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjadv50").style.rotate="0deg"
        document.getElementById("divjadv50").style.height="320px"
      }
      break
    }
    case"jfutious":{
      var x = document.getElementById("jfutious");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjfutious").style.rotate="180deg"
        document.getElementById("divjfutious").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjfutious").style.rotate="0deg"
        document.getElementById("divjfutious").style.height="320px"
      }
      break
    }
    case"jraw50":{
      var x = document.getElementById("jraw50");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjraw50").style.rotate="180deg"
        document.getElementById("divjraw50").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjraw50").style.rotate="0deg"
        document.getElementById("divjraw50").style.height="320px"
      }
      break
    }
    case"jxray50":{
      var x = document.getElementById("jxray50");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjxray50").style.rotate="180deg"
        document.getElementById("divjxray50").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjxray50").style.rotate="0deg"
        document.getElementById("divjxray50").style.height="320px"
      }
      break
    }
    case"j103":{
      var x = document.getElementById("j103");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgj103").style.rotate="180deg"
        document.getElementById("divj103").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgj103").style.rotate="0deg"
        document.getElementById("divj103").style.height="320px"
      }
      break
    }
    case"j104":{
      var x = document.getElementById("j104");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgj104").style.rotate="180deg"
        document.getElementById("divj104").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgj104").style.rotate="0deg"
        document.getElementById("divj104").style.height="320px"
      }
      break
    }
    case"j106":{
      var x = document.getElementById("j106");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgj106").style.rotate="180deg"
        document.getElementById("divj106").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgj106").style.rotate="0deg"
        document.getElementById("divj106").style.height="320px"
      }
      break
    }
    case"j108":{
      var x = document.getElementById("j108");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgj108").style.rotate="180deg"
        document.getElementById("divj108").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgj108").style.rotate="0deg"
        document.getElementById("divj108").style.height="320px"
      }
      break
    }
    case"j607":{
      var x = document.getElementById("j607");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgj607").style.rotate="180deg"
        document.getElementById("divj607").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgj607").style.rotate="0deg"
        document.getElementById("divj607").style.height="320px"
      }
      break
    }
    case"j805":{
      var x = document.getElementById("j805");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgj805").style.rotate="180deg"
        document.getElementById("divj805").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgj805").style.rotate="0deg"
        document.getElementById("divj805").style.height="320px"
      }
      break
    }
    case"j806":{
      var x = document.getElementById("j806");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgj806").style.rotate="180deg"
        document.getElementById("divj806").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgj806").style.rotate="0deg"
        document.getElementById("divj806").style.height="320px"
      }
      break
    }
    case"jclassico50":{
      var x = document.getElementById("jclassico50");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjclassico50").style.rotate="180deg"
        document.getElementById("divjclassico50").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjclassico50").style.rotate="0deg"
        document.getElementById("divjclassico50").style.height="320px"
      }
      break
    }
    case"jvintage50":{
      var x = document.getElementById("jvintage50");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjvintage50").style.rotate="180deg"
        document.getElementById("divjvintage50").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjvintage50").style.rotate="0deg"
        document.getElementById("divjvintage50").style.height="320px"
      }
      break
    }
    case"j711":{
      var x = document.getElementById("j711");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgj711").style.rotate="180deg"
        document.getElementById("divj711").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgj711").style.rotate="0deg"
        document.getElementById("divj711").style.height="320px"
      }
      break
    }
    case"j8061":{
      var x = document.getElementById("j8061");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgj8061").style.rotate="180deg"
        document.getElementById("divj8061").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgj8061").style.rotate="0deg"
        document.getElementById("divj8061").style.height="320px"
      }
      break
    }
    case"jclassico125":{
      var x = document.getElementById("jclassico125");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjclassico125").style.rotate="180deg"
        document.getElementById("divjclassico125").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjclassico125").style.rotate="0deg"
        document.getElementById("divjclassico125").style.height="320px"
      }
      break
    }
    case"jvintage125":{
      var x = document.getElementById("jvintage125");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjvintage125").style.rotate="180deg"
        document.getElementById("divjvintage125").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjvintage125").style.rotate="0deg"
        document.getElementById("divjvintage125").style.height="320px"
      }
      break
    }
    case"jxdv125":{
      var x = document.getElementById("jxdv125");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("imgjxdv125").style.rotate="180deg"
        document.getElementById("divjxdv125").style.height="650px"
      } 
      else{
        x.style.display = "none";
        document.getElementById("imgjxdv125").style.rotate="0deg"
        document.getElementById("divjxdv125").style.height="320px"
      }
      break
    }
    
    }
  }
  function mopis(a){
    switch(a){
      case'mj121':{
        var x = document.getElementById("mj121");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("mimgj121").style.rotate="180deg"
          document.getElementById("mdivj121").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("mimgj121").style.rotate="0deg"
          document.getElementById("mdivj121").style.height="320px"
        }
        break
      }
      case'mj125r':{
        var x = document.getElementById("mj125r");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("mimgj125r").style.rotate="180deg"
          document.getElementById("mdivj125r").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("mimgj125r").style.rotate="0deg"
          document.getElementById("mdivj125r").style.height="320px"
        }
        break
      }
      case'mj125s':{
        var x = document.getElementById("mj125s");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("mimgj125s").style.rotate="180deg"
          document.getElementById("mdivj125s").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("mimgj125s").style.rotate="0deg"
          document.getElementById("mdivj125s").style.height="320px"
        }
        break
      }
      case'mjadv':{
        var x = document.getElementById("mjadv");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("mimgjadv").style.rotate="180deg"
          document.getElementById("mdivjadv").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("mimgjadv").style.rotate="0deg"
          document.getElementById("mdivjadv").style.height="320px"
        }
        break
      }
      case"mjm11":{
        var x = document.getElementById("mjm11");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("mimgjm11").style.rotate="180deg"
          document.getElementById("mdivjm11").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("mimgjm11").style.rotate="0deg"
          document.getElementById("mdivjm11").style.height="320px"
        }
        break
      }
      case"mjm11c":{
        var x = document.getElementById("mjm11c");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("mimgjm11c").style.rotate="180deg"
          document.getElementById("mdivjm11c").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("mimgjm11c").style.rotate="0deg"
          document.getElementById("mdivjm11c").style.height="320px"
        }
        break
      }
      case"mjm12":{
        var x = document.getElementById("mjm12");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("mimgjm12").style.rotate="180deg"
          document.getElementById("mdivjm12").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("mimgjm12").style.rotate="0deg"
          document.getElementById("mdivjm12").style.height="320px"
        }
        break
      }
      case"mjm12c":{
        var x = document.getElementById("mjm12c");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("mimgjm12c").style.rotate="180deg"
          document.getElementById("mdivjm12c").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("mimgjm12c").style.rotate="0deg"
          document.getElementById("mdivjm12c").style.height="320px"
        }
        break
      }
      case"mjm12v":{
        var x = document.getElementById("mjm12v");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("mimgjm12v").style.rotate="180deg"
          document.getElementById("mdivjm12v").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("mimgjm12v").style.rotate="0deg"
          document.getElementById("mdivjm12v").style.height="320px"
        }
        break
      }
      case"mjm13":{
        var x = document.getElementById("mjm13");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("mimgjm13").style.rotate="180deg"
          document.getElementById("mdivjm13").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("mimgjm13").style.rotate="0deg"
          document.getElementById("mdivjm13").style.height="320px"
        }
        break
      }
      case"mjm15":{
        var x = document.getElementById("mjm15");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("mimgjm15").style.rotate="180deg"
          document.getElementById("mdivjm15").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("mimgjm15").style.rotate="0deg"
          document.getElementById("mdivjm15").style.height="320px"
        }
        break
      }
      case"mjm16":{
        var x = document.getElementById("mjm16");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("mimgjm16").style.rotate="180deg"
          document.getElementById("mdivjm16").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("mimgjm16").style.rotate="0deg"
          document.getElementById("mdivjm16").style.height="320px"
        }
        break
      }
      case"mjrsl125":{
        var x = document.getElementById("mjrsl125");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("mimgjrsl125").style.rotate="180deg"
          document.getElementById("mdivjrsl125").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("mimgjrsl125").style.rotate="0deg"
          document.getElementById("mdivjrsl125").style.height="320px"
        }
        break
      }
      case"mjrx401":{
        var x = document.getElementById("mjrx401");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("mimgjrx401").style.rotate="180deg"
          document.getElementById("mdivjrx401").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("mimgjrx401").style.rotate="0deg"
          document.getElementById("mdivjrx401").style.height="320px"
        }
        break
      }
      case"mjrxone":{
        var x = document.getElementById("mjrxone");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("mimgjrxone").style.rotate="180deg"
          document.getElementById("mdivjrxone").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("mimgjrxone").style.rotate="0deg"
          document.getElementById("mdivjrxone").style.height="320px"
        }
        break
      }
      case"mjsc125":{
        var x = document.getElementById("mjsc125");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("mimgjsc125").style.rotate="180deg"
          document.getElementById("mdivjsc125").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("mimgjsc125").style.rotate="0deg"
          document.getElementById("mdivjsc125").style.height="320px"
        }
        break
      }
      case"mjsc300":{
        var x = document.getElementById("mjsc300");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("mimgjsc300").style.rotate="180deg"
          document.getElementById("mdivjsc300").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("mimgjsc300").style.rotate="0deg"
          document.getElementById("mdivjsc300").style.height="320px"
        }
        break
      }
      case"mjsr400":{
        var x = document.getElementById("mjsr400");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("mimgjsr400").style.rotate="180deg"
          document.getElementById("mdivjsr400").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("mimgjsr400").style.rotate="0deg"
          document.getElementById("mdivjsr400").style.height="320px"
        }
        break
      }
      case"mjxray125":{
        var x = document.getElementById("mjxray125");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("mimgjxray125").style.rotate="180deg"
          document.getElementById("mdivjxray125").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("mimgjxray125").style.rotate="0deg"
          document.getElementById("mdivjxray125").style.height="320px"
        }
        break
      }
    }
  }

  function nopis(b){
    switch(b){
      case"nj901":{
        var x = document.getElementById("nj901");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("nimgj901").style.rotate="180deg"
          document.getElementById("ndivj901").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("nimgj901").style.rotate="0deg"
          document.getElementById("ndivj901").style.height="320px"
        }
        break
      }
      case"nj902":{
        var x = document.getElementById("nj902");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("nimgj902").style.rotate="180deg"
          document.getElementById("ndivj902").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("nimgj902").style.rotate="0deg"
          document.getElementById("ndivj902").style.height="320px"
        }
        break
      }
      case"nj905":{
        var x = document.getElementById("nj905");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("nimgj905").style.rotate="180deg"
          document.getElementById("ndivj905").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("nimgj905").style.rotate="0deg"
          document.getElementById("ndivj905").style.height="320px"
        }
        break
      }
      case"nj906":{
        var x = document.getElementById("nj906");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("nimgj906").style.rotate="180deg"
          document.getElementById("ndivj906").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("nimgj906").style.rotate="0deg"
          document.getElementById("ndivj906").style.height="320px"
        }
        break
      }
      case"nj907":{
        var x = document.getElementById("nj907");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("nimgj907").style.rotate="180deg"
          document.getElementById("ndivj907").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("nimgj907").style.rotate="0deg"
          document.getElementById("ndivj907").style.height="320px"
        }
        break
      }
      case"njadv50":{
        var x = document.getElementById("njadv50");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("nimgjadv50").style.rotate="180deg"
          document.getElementById("ndivjadv50").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("nimgjadv50").style.rotate="0deg"
          document.getElementById("ndivjadv50").style.height="320px"
        }
        break
      }
      case"njfutious":{
        var x = document.getElementById("njfutious");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("nimgjfutious").style.rotate="180deg"
          document.getElementById("ndivjfutious").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("nimgjfutious").style.rotate="0deg"
          document.getElementById("ndivjfutious").style.height="320px"
        }
        break
      }
      case"njraw50":{
        var x = document.getElementById("njraw50");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("nimgjraw50").style.rotate="180deg"
          document.getElementById("ndivjraw50").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("nimgjraw50").style.rotate="0deg"
          document.getElementById("ndivjraw50").style.height="320px"
        }
        break
      }
      case"njxray50":{
        var x = document.getElementById("njxray50");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("nimgjxray50").style.rotate="180deg"
          document.getElementById("ndivjxray50").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("nimgjxray50").style.rotate="0deg"
          document.getElementById("ndivjxray50").style.height="320px"
        }
        break
      }
    }
  }

  function sopis(c){
    switch(c){
      case"sj103":{
        var x = document.getElementById("sj103");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("simgj103").style.rotate="180deg"
          document.getElementById("sdivj103").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("simgj103").style.rotate="0deg"
          document.getElementById("sdivj103").style.height="320px"
        }
        break
      }
      case"sj104":{
        var x = document.getElementById("sj104");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("simgj104").style.rotate="180deg"
          document.getElementById("sdivj104").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("simgj104").style.rotate="0deg"
          document.getElementById("sdivj104").style.height="320px"
        }
        break
      }
      case"sj106":{
        var x = document.getElementById("sj106");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("simgj106").style.rotate="180deg"
          document.getElementById("sdivj106").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("simgj106").style.rotate="0deg"
          document.getElementById("sdivj106").style.height="320px"
        }
        break
      }
      case"sj108":{
        var x = document.getElementById("sj108");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("simgj108").style.rotate="180deg"
          document.getElementById("sdivj108").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("simgj108").style.rotate="0deg"
          document.getElementById("sdivj108").style.height="320px"
        }
        break
      }
      case"sj607":{
        var x = document.getElementById("sj607");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("simgj607").style.rotate="180deg"
          document.getElementById("sdivj607").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("simgj607").style.rotate="0deg"
          document.getElementById("sdivj607").style.height="320px"
        }
        break
      }
      case"sj805":{
        var x = document.getElementById("sj805");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("simgj805").style.rotate="180deg"
          document.getElementById("sdivj805").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("simgj805").style.rotate="0deg"
          document.getElementById("sdivj805").style.height="320px"
        }
        break
      }
      case"sj806":{
        var x = document.getElementById("sj806");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("simgj806").style.rotate="180deg"
          document.getElementById("sdivj806").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("simgj806").style.rotate="0deg"
          document.getElementById("sdivj806").style.height="320px"
        }
        break
      }
      case"sjclassico50":{
        var x = document.getElementById("sjclassico50");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("simgjclassico50").style.rotate="180deg"
          document.getElementById("sdivjclassico50").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("simgjclassico50").style.rotate="0deg"
          document.getElementById("sdivjclassico50").style.height="320px"
        }
        break
      }
      case"sjvintage50":{
        var x = document.getElementById("sjvintage50");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("simgjvintage50").style.rotate="180deg"
          document.getElementById("sdivjvintage50").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("simgjvintage50").style.rotate="0deg"
          document.getElementById("sdivjvintage50").style.height="320px"
        }
        break
      }
    }
  }

  function dopis(d){
    switch(d){
      case"dj711":{
        var x = document.getElementById("dj711");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("dimgj711").style.rotate="180deg"
          document.getElementById("ddivj711").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("dimgj711").style.rotate="0deg"
          document.getElementById("ddivj711").style.height="320px"
        }
        break
      }
      case"dj8061":{
        var x = document.getElementById("dj8061");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("dimgj8061").style.rotate="180deg"
          document.getElementById("ddivj8061").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("dimgj8061").style.rotate="0deg"
          document.getElementById("ddivj8061").style.height="320px"
        }
        break
      }
      case"djclassico125":{
        var x = document.getElementById("djclassico125");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("dimgjclassico125").style.rotate="180deg"
          document.getElementById("ddivjclassico125").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("dimgjclassico125").style.rotate="0deg"
          document.getElementById("ddivjclassico125").style.height="320px"
        }
        break
      }
      case"djvintage125":{
        var x = document.getElementById("djvintage125");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("dimgjvintage125").style.rotate="180deg"
          document.getElementById("ddivjvintage125").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("dimgjvintage125").style.rotate="0deg"
          document.getElementById("ddivjvintage125").style.height="320px"
        }
        break
      }
      case"djxdv125":{
        var x = document.getElementById("djxdv125");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("dimgjxdv125").style.rotate="180deg"
          document.getElementById("ddivjxdv125").style.height="650px"
        } 
        else{
          x.style.display = "none";
          document.getElementById("dimgjxdv125").style.rotate="0deg"
          document.getElementById("ddivjxdv125").style.height="320px"
        }
        break
      }
    }
  }