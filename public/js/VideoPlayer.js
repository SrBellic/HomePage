document.addEventListener("DOMContentLoaded", function () {
  const videoWrappers = document.querySelectorAll(".video-wrapper");

  videoWrappers.forEach((wrapper) => {
    const video = wrapper.querySelector(".video");
    const playButton = wrapper.querySelector(".btn-play");
    const overlay = wrapper.querySelector(".video-overlay");
    const thumbnail = wrapper.querySelector(".video-thumbnail");

    // Reproduce el video al hacer clic en el botón
    playButton.addEventListener("click", function () {
      if (video.paused) {
        video.style.display = "block";
        video.play();
        overlay.classList.add("hidden"); // Oculta el overlay
        thumbnail.classList.add("hidden"); // Oculta la imagen
      } else {
        video.pause();
        overlay.classList.remove("hidden"); // Muestra el overlay para pausar
      }
    });

    // Vuelve a mostrar el botón y el overlay al hacer clic en el video
    video.addEventListener("click", function () {
      if (!video.paused) {
        video.pause();
        overlay.classList.remove("hidden"); // Muestra el overlay al pausar
      }
    });
  });
});
