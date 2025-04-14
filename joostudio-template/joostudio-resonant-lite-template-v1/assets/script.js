// script.js — Joo Studio Lite Template

document.addEventListener("DOMContentLoaded", function () {
  // Hamburger menu toggle (mobile)
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Scroll indicator (mobile only)
  if (window.innerWidth <= 768) {
    const scrollIndicator = document.getElementById("scroll-indicator");
    const scrollTarget = document.getElementById("scroll-target");

    if (scrollIndicator && scrollTarget) {
      scrollIndicator.addEventListener("click", function () {
        scrollTarget.scrollIntoView({ behavior: "smooth" });
      });
    }
  }
});
