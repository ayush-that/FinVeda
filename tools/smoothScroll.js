window.addEventListener("scroll", function () {
  const backToTopButton = document.querySelector(".back-to-top");
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Scroll to the top of the page smoothly when the back-to-top button is clicked
document.querySelector(".back-to-top").addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
