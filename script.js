function scrollWinD(){
    window.scrollBy(0, 950);
  }

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
