// ********************************
//SLIDER FUNCTINALITY IN INDEX.HTML
// ********************************

const slides = [
  "./assets/img/header.jpg",
  "./assets/img/header2.jpg",
  "./assets/img/header3.jpg",
  "./assets/img/header4.jpg",
  "./assets/img/header5.jpg",
];

const sliderContainer = document.querySelector(".slider-container");

let currentSlide = 0;

let autoSlideInterval;

// Function to change the background image with a smooth transition
function changeSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  sliderContainer.style.opacity = 0; // Fade out

  setTimeout(() => {
    sliderContainer.style.backgroundImage = `url(${slides[currentSlide]})`;
    sliderContainer.style.opacity = 1; // Fade back in
  }, 500); // Match fade-out duration
}

// Function for moving to the next slide
function nextSlide() {
  // console.log(currentSlide);
  changeSlide(currentSlide + 1);
}

// Function for moving to the previous slide
function prevSlide() {
  changeSlide(currentSlide - 1);
}
// Auto slide every 5 seconds
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 10000); // Change every 10 seconds
}
// Pause auto slide when user clicks buttons
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}
// Re-start auto sliding after manual control
function resetAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}
// Initial load
document.addEventListener("DOMContentLoaded", () => {
  sliderContainer.style.backgroundImage = `url(${slides[currentSlide]})`;
  startAutoSlide(); // Start automatic sliding
});
// Manual control events
document.querySelector(".next-btn").addEventListener("click", () => {
  nextSlide();
  resetAutoSlide(); // Reset auto slide after manual change
});
document.querySelector(".prev-btn").addEventListener("click", () => {
  prevSlide();
  resetAutoSlide(); // Reset auto slide after manual change
});

// ********************************
//POP UP FUNCTINALITY
// ********************************
function closePopup() {
  document.getElementById("countdown-notification").style.display = "none";
}

// Function to open the popup (after a few seconds of page load)
function showPopup() {
  document.getElementById("countdown-notification").style.display = "block";
}

// Set timer to show popup after 5 seconds
window.onload = function () {
  setTimeout(showPopup, 10000); // Adjust the delay as needed
};

// setInterval(() => {
//   closePopup();
// }, 7000);

// Countdown Timer Logic
var countdownDate = new Date("Dec 30, 2024 23:59:59").getTime(); // Set the offer end date

var countdownFunction = setInterval(function () {
  var now = new Date().getTime();
  var timeLeft = countdownDate - now;

  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is over, stop the timer and hide the popup
  if (timeLeft < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown-notification").style.display = "none";
  }
}, 1000);

window.addEventListener("click", function (event) {
  if (!event.target.closest(".countdown-notification")) {
    document.getElementById("countdown-notification").style.display = "none";
  }
});

//===========================
//submenu
//============================

let menuItems = document.querySelector(".menu-items");
// console.log(menuItems);

getFoodData();

//getting food data from food.json
async function getFoodData() {
  try {
    const response = await fetch("./assets/js/foods.json");
    const data = await response.json();

    if (response.ok) {
      loadSubmenu(data);
    } else {
      throw new Error("Couldn't get food data from food.json");
    }
  } catch (err) {
    console.log("Error fetching food data...", err);
  }
}

//loading submenu img
function loadSubmenu(data) {
  let menuImages = data.slice(25, 31).map((images) => {
    return `<div class="menu-item" data-category="pizza">
            <img src=${images.img} alt="Pizza" class="submenu-img">
            
            <!-- <p>Lorem ipsum dolor sit amet consectetur.</p> -->
            <div class="submenu-img-overlay">
              <h4 class="product-name-overlay">${images.title}</h4>
            </div>
          </div>`;
  });
  menuImages = menuImages.join("");
  menuItems.innerHTML = menuImages;

  const allSubmenus = document.querySelectorAll(".submenu-img-overlay");

  allSubmenus.forEach((menu, index) => {
    menu.addEventListener("click", (e) => {
      e.preventDefault();

      window.location.href = `food_detail.html?id=${index + 25}`;
    });
  });
}
//===========================
//faqs js =================
//============================
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".icon .fas"); // Select the icon inside the current item

    question.addEventListener("click", () => {
      // Close all other open items and reset icons
      faqItems.forEach((i) => {
        if (i !== item) {
          i.classList.remove("active");
          const otherIcon = i.querySelector(".icon .fas");
          if (otherIcon) {
            otherIcon.classList.remove("fa-minus");
            otherIcon.classList.add("fa-plus");
          }
        }
      });

      // Toggle the clicked item and its icon
      item.classList.toggle("active");
      if (icon) {
        icon.classList.toggle("fa-plus");
        icon.classList.toggle("fa-minus");
      }
    });
  });
});

//===========================
//Modal js =================
//============================
const orderBtn = document.getElementById("orderBtn");
const modal = document.getElementById("orderModal");
const closeBtn = document.querySelector(".close-btn-modal");
const orderForm = document.getElementById("orderForm");

const body = document.body;

orderBtn.addEventListener("click", () => {
  modal.classList.add("show");
  body.classList.add("modal-open"); // Disable body scrolling
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  body.classList.remove("modal-open");
});

// Close modal when clicking outside of the modal content
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.classList.remove("show");
    body.classList.remove("modal-open");
  }
});

// Handle form submission (example of event handling, you can customize this)
orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // alert("Order placed successfully!");
  modal.classList.remove("show");
  body.classList.remove("modal-open");
  // Here, you would add your logic for form submission, e.g., sending data to server
});
