const mobileMenu = document.querySelector(".mobile-menu");
const mobileTrigger = document.querySelector(".mobile-menu__trigger");
const overlay = document.querySelector(".overlay");

let initialPoint, finalPoint;

document.addEventListener("touchstart", function(event) {
    initialPoint = event.changedTouches[0];
});

document.addEventListener("touchend", function(event) {
    finalPoint = event.changedTouches[0];
    let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX),
        yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);

    if (xAbs > 120 || yAbs > 120) {
        if (xAbs > yAbs) {
            if (finalPoint.pageX < initialPoint.pageX) {
                // Swipe left
                mobileMenu.classList.remove("mobile-menu_open");
                overlay.style.visibility = "hidden";
            } else {
                // Swipe right
                mobileMenu.classList.add("mobile-menu_open");
                overlay.style.visibility = "visible";
            }
        }
    }
});

mobileTrigger.addEventListener("click", function() {
    mobileMenu.classList.toggle("mobile-menu_open");
    overlay.style.visibility = mobileMenu.classList.contains("mobile-menu_open") ? "visible" : "hidden";
});

overlay.addEventListener("click", function() {
    mobileMenu.classList.remove("mobile-menu_open");
    overlay.style.visibility = "hidden";
});

window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar-collapse");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-item a");

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#1a1c29";
        navLinks.forEach(link => {
            link.style.color = "#ffffff";
        });
    } else {
        navbar.style.backgroundColor = "#2b2d42";
        navLinks.forEach(link => {
            link.style.color = "#edf2f4";
        });
    }
});
function toggleDropdown(show) {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (show) {
      dropdownMenu.style.display = 'block';
    } else {
      dropdownMenu.style.display = 'none';
    }
  }
  
  