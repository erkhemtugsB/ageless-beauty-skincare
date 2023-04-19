(function () {
  const video = document.getElementById("video");
  const play = document.querySelector(".video-btn");

  function playVid() {
    video.play();
    play.style.display = "none";
  }

  function pauseVid() {
    video.pause();
    play.style.display = "block";
  }
  play.addEventListener('click', playVid);
  video.addEventListener('click', pauseVid);
})();