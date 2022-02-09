
// Code for mobile menu
const hamburger = document.querySelector(".fa-bars");
const mobileMenu = document.querySelector(".mobile-navigation");

hamburger.addEventListener("click", function() {
  console.log("hamburger clicked");
  console.log(mobileMenu);
  mobileMenu.classList.toggle("hide");
  mobileMenu.classList.toggle("show");

})