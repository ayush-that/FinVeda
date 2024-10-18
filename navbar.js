// Mobile Menu and Trigger Selectors
const mobile_menu = document.querySelector(".mobile-menu"),
      mobile_trigger = document.querySelector(".mobile-menu__trigger");

let initialPoint, finalPoint;

// Touch Start Event to detect swipe gestures
document.addEventListener("touchstart", function(event) {
	initialPoint = event.changedTouches[0];
});

document.addEventListener("touchend", function(event) {
	finalPoint = event.changedTouches[0];
	
	let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX),
	    yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
	
	// Detect Swipe Width and Direction
	if(xAbs > 120 || yAbs > 120) { // 120 - SWIPE WIDTH
		if(xAbs > yAbs) {
			if(finalPoint.pageX < initialPoint.pageX) {
				// SWIPE LEFT - Close the mobile menu
				mobile_menu.classList.remove("mobile-menu_open");
			} else {
				// SWIPE RIGHT - Open the mobile menu
				mobile_menu.classList.add("mobile-menu_open");
			}
		} else {
			// Swipe Up or Down Detected (Not used in this case)
		}
	}
});

// Toggle Mobile Menu on Click
document.addEventListener("click", function(event) {
	const target = event.target.closest(".mobile-menu__trigger");
	if(target && target == mobile_trigger) {
		// Toggle mobile menu visibility
		mobile_menu.classList.toggle("mobile-menu_open");
	} else if(event.target !== mobile_trigger && !mobile_menu.contains(event.target)) {
		// Close the mobile menu if clicking outside
		if( mobile_menu.classList.contains("mobile-menu_open") ) {
			mobile_menu.classList.remove("mobile-menu_open");
		}
	}
});

// Handle Smooth Scroll for Anchor Links in the Menu
mobile_menu.querySelectorAll("a").forEach(function(element) {
	element.addEventListener("click", function(event) {
		const anchor_href = event.currentTarget.getAttribute("href");
		if(anchor_href.charAt(0) === "#") {
			event.preventDefault();
			if(anchor_href.length > 1) { // Check if #hash is not empty
				const scroll_to_node = document.querySelector(event.currentTarget.hash);
				if(scroll_to_node) {
					SmoothScrollTo(scroll_to_node);
				}
			}
		}
	});
});

// Smooth Scrolling Function
function SmoothScrollTo(element) {
	if(element) {
		element.scrollIntoView({
			behavior: "smooth"
		});
	}
}

// Navbar Visibility and Style on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-collapse'); // Make sure .navbar-collapse exists in the HTML
    const navLinks = document.querySelectorAll('.navbar-nav .nav-item a'); // Select all nav links
    
    if (window.scrollY > 50) { 
      // If scroll is greater than 50px, change navbar style
      navbar.style.backgroundColor = "#1a1c29"; // Darker background for better visibility
      navLinks.forEach(link => {
        link.style.color = "#ffffff"; // White text color for better contrast
      });
    } else {
      // Reset to original colors when scrolled to the top
      navbar.style.backgroundColor = "transparent"; // Transparent background when at top
      navLinks.forEach(link => {
        link.style.color = "#edf2f4"; // Original link color
      });
    }
});
