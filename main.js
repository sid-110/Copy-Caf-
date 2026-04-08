// Menu Open Close //
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu");
};

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  if (!navbar.contains(event.target) && !menu.contains(event.target)) {
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");  // Optionally close the hamburger icon animation too
  }
});

// Swiper
var swiper = new Swiper(".services-content", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 20000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Header
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

// Loader
onload = () => {
  const load = document.getElementById('loader');

  setTimeout(() => {
    load.style.display = 'none';
  }, 500);
};


// Form Submission- Newsletter

document.addEventListener('DOMContentLoaded', function () {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwfayMaai2-K6u4M07jL-VWuwxUphTdIqPU4S1xa-ybxd8fmvgsS54rv_glllTu1a_c/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('form-message')

  if (!form) {
    console.warn("Form 'submit-to-google-sheet' not found on this page.");
    return;
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        console.log('Success!', response);
        msg.innerHTML = "Thanks for signing up!";
        form.reset();
        setTimeout(() => msg.innerHTML = "", 2000);
      })
      .catch(error => {
        console.error('Error!', error.message);
        msg.innerHTML = "There was an error. Please try again.";
      });
  });
});


  