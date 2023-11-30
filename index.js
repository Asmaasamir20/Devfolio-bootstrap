var typed = new Typed("#element", {
  strings: ["Designer", "Developer", "Freelancer", "Photographer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});

// jqueeru
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    dots: true,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000
  });
});

// ------ dark mood -----//
var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
};

// -------- nav --------//
document.addEventListener("DOMContentLoaded", () => {
  const navbarLinks = document.getElementsByClassName("nav-link");
  const navbar = document.getElementById("header");
  let prevActiveLink = null;

  const updateNavbar = () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    for (let i = 0; i < navbarLinks.length; i++) {
      const section = document.querySelector(navbarLinks[i].hash);
      const offset = section.offsetHeight > 80 ? 80 : section.offsetHeight - 1;

      if (
        section.offsetTop - offset <= currentScroll &&
        section.offsetTop + section.offsetHeight > currentScroll
      ) {
        navbarLinks[i].classList.add("active");
        // إذا كان هناك لينك سابق نشط، قم بإزالة الاكتف منه
        if (prevActiveLink && prevActiveLink !== navbarLinks[i]) {
          prevActiveLink.classList.remove("active");
        }
        prevActiveLink = navbarLinks[i];
      } else {
        navbarLinks[i].classList.remove("active");
      }
    }
  };

  window.addEventListener("scroll", updateNavbar);

  // تحديث حالة الناف بار عند تحميل الصفحة
  updateNavbar();
});

// Counter
var counters = document.querySelectorAll(".counter-num p");

// سرعة العداد 25
var speed25 = 300;

// سرعة العدادات الباقية
var speedOthers = 1000;

function animateCounter(target) {
  var count = 0;
  var targetNumber = parseInt(target.dataset.target);
  var increment;

  if (targetNumber === 25) {
    increment = Math.ceil(targetNumber / (speed25 / 1));
  } else {
    increment = Math.ceil(targetNumber / (speedOthers / 16));
  }

  var animation = setInterval(function () {
    count += increment;
    target.innerText = count;

    if (count >= targetNumber) {
      target.innerText = targetNumber; // Ensure final value is accurate
      clearInterval(animation);
    }
  }, 16);
}

function startCounters() {
  counters.forEach(function (counter) {
    animateCounter(counter);
  });
}

// Intersection Observer
var counterSection = document.querySelector(".counter");

var observerOptions = {
  threshold: 0
};

var resetObserver = new IntersectionObserver(function (resetEntries, observer) {
  resetEntries.forEach(function (resetEntry) {
    if (resetEntry.intersectionRatio === 0) {
      resetEntry.target.dataset.animated = "false";
    }
  });
}, observerOptions);

var counterObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting && entry.target.dataset.animated !== "true") {
      startCounters();
      entry.target.dataset.animated = "true";
    }
  });
}, observerOptions);

counterObserver.observe(counterSection);
resetObserver.observe(counterSection);

lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  showImageNumberLabel: true
});
