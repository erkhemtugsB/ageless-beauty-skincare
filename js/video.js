(function () {
  const video = document.getElementById("video");
  function videoStatus() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
  video.addEventListener('click', videoStatus);
})();