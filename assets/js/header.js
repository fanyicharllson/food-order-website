/// Get the current page's URL
const currentLocation = window.location.href;

// Get all the links in the navbar
const navLinks = document.querySelectorAll("nav ul li a");

//get body
// const body = document.querySelector("")

// Loop through the links and add the 'active-color' class to the link that matches the current URL
navLinks.forEach((link) => {
  if (link.href === currentLocation) {
    link.classList.add("active-color");
  }
});


// **************************
//TOGGLING LINKS FUNCTINALITY 
// **************************
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
  document.getElementById('menuOverlay').style.display = 'block';

});
document.getElementById('menuOverlay').addEventListener('click', function () {
  links.classList.remove("show-links");
  document.getElementById('menuOverlay').style.display = 'none';
  

})
window.addEventListener("click", function (event) {
  if (!event.target.closest(".nav-toggle,.links")) {
    links.classList.remove("show-links");

  }
});

