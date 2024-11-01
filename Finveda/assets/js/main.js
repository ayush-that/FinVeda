$(function () {
  "use strict";

  // Constants for frequently used values
  const SCROLL_THRESHOLD = 20;
  const PRELOADER_DELAY = 500;
  const PARTICLE_COLOR = "#FFFFFF";
  const PARTICLE_SIZE = 50;

  // Helper function to initialize particle effects
  function initializeParticles(elementId) {
    if (document.getElementById(elementId)) {
      particlesJS(elementId, {
        particles: {
          number: { value: 40, density: { enable: true, value_area: 4000 } },
          color: { value: [PARTICLE_COLOR] },
          shape: {
            type: "circle",
            stroke: { width: 0, color: PARTICLE_COLOR },
            polygon: { nb_sides: 5 },
          },
          opacity: {
            value: 0.15,
            random: true,
            anim: { enable: true, speed: 0.2, opacity_min: 0.15, sync: false },
          },
          size: {
            value: PARTICLE_SIZE,
            random: true,
            anim: { enable: true, speed: 2, size_min: 5, sync: false },
          },
          line_linked: { enable: false, distance: 150, color: PARTICLE_COLOR, opacity: 0.4, width: 1 },
          move: {
            enable: true,
            speed: 1,
            direction: "top",
            random: true,
            out_mode: "out",
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: { onhover: { enable: false }, onclick: { enable: false }, resize: true },
          modes: { grab: { distance: 400, line_linked: { opacity: 1 } } },
        },
        retina_detect: true,
      });
    }
  }

  // Preloader
  function handlePreloader() {
    $(".preloader").delay(PRELOADER_DELAY).fadeOut(PRELOADER_DELAY);
  }

  // Navbar scroll behavior
  function handleNavbarScroll() {
    const scroll = $(window).scrollTop();
    const isSticky = scroll >= SCROLL_THRESHOLD;
    $(".navbar-area").toggleClass("sticky", isSticky);
    $(".navbar .navbar-brand img").attr("src", isSticky ? "assets/images/logo-2.svg" : "assets/images/logo.svg");
  }

  // Page scroll navigation
  function handlePageScroll() {
    const scrollbarLocation = $(window).scrollTop();
    $(".page-scroll").each(function () {
      const sectionOffset = Math.floor($(this).offset().top - 73);
      $(this).parent().toggleClass("active", sectionOffset <= scrollbarLocation).siblings().removeClass("active");
    });
  }

  // Initialize popup settings
  function initializePopups() {
    $(".video-popup").magnificPopup({ type: "iframe" });
    $(".image-popup").magnificPopup({ type: "image", gallery: { enabled: true } });
  }

  // Initialize counter
  function initializeCounter() {
    $(".counter").counterUp({ delay: 10, time: 3000 });
  }

  // Initialize testimonials carousel
  function initializeCarousel() {
    $(".testimonial-active").slick({
      dots: true,
      speed: 800,
      arrows: false,
      centerMode: true,
      centerPadding: "0",
      slidesToShow: 3,
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3 } },
        { breakpoint: 992, settings: { slidesToShow: 2, centerMode: false } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
        { breakpoint: 576, settings: { slidesToShow: 1 } },
      ],
    });
  }

  // Navbar click event using event delegation
  function handleNavbarClick(event) {
    if (event.target.closest(".navbar-nav a")) {
      $(".navbar-collapse").removeClass("show");
      $(".navbar-toggler").removeClass("active");
    }
  }

  // Throttle function for mouse move event
  function throttle(fn, delay) {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) return;
      lastCall = now;
      return fn(...args);
    };
  }

  // Mouse movement animation for circles
  function initializeCircleAnimation() {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    circles.forEach((circle) => {
      circle.x = 0;
      circle.y = 0;
    });

    window.addEventListener(
      "mousemove",
      throttle((e) => {
        coords.x = e.pageX;
        coords.y = e.pageY - window.scrollY; // Adjust for vertical scroll position
      }, 20)
    );

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;
      circles.forEach((circle, index) => {
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
        const nextCircle = circles[index + 1] || circles[0];
        circle.x = x;
        circle.y = y;
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });
      requestAnimationFrame(animateCircles);
    }
    animateCircles();
  }

  // Initialization functions
  $(window).on("load", handlePreloader);
  $(window).on("scroll", handleNavbarScroll);
  $(window).on("scroll", handlePageScroll);
  $(document).on("click", handleNavbarClick);

  initializePopups();
  initializeCounter();
  initializeCarousel();
  initializeParticles("particles-1");
  initializeParticles("particles-2");
  new WOW().init();
  initializeCircleAnimation();
});
