lottie.loadAnimation({
  container: document.getElementById("lottie-loader"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://lottie.host/ef4a2a21-458a-43c9-b954-ad5ce6bf6c3f/fAJF5Mlmx0.json",
});

function hidePreloader() {
  var preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("hidden");
    setTimeout(function () {
      preloader.style.display = "none";
      document.body.style.overflowY = "auto";
    }, 300);
  }
}

setTimeout(hidePreloader, 3000);
