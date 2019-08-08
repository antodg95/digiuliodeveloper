/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("navbar").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("navbar").style.width = "0%";
}

document.getElementById('overlay-navbar').addEventListener("click", closeNav);
