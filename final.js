// Select the button
let btn = document.querySelector(".accordion-button");

// Add click event listener to the button
btn.addEventListener("click", () => {
  // Toggle the aria-expanded attribute
  const isExpanded = btn.getAttribute("aria-expanded") === "true";
  btn.setAttribute("aria-expanded", !isExpanded);
  btn.classList.toggle("collapsed");

  // Get the corresponding accordion body
  const collapseElement = btn.closest("h2").nextElementSibling;

  // Toggle the display of the accordion body
  if (isExpanded) {
    collapseElement.querySelector(".accordion-body").classList.remove("show");
    collapseElement.querySelector(".accordion-body").style.display = "none"; // Hide the content
  } else {
    collapseElement.querySelector(".accordion-body").classList.add("show");
    collapseElement.querySelector(".accordion-body").style.display = "block"; // Show the content
  }
});
