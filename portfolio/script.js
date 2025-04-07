// portfolio/script.js

document.addEventListener("DOMContentLoaded", function () {
  // 햄버거 메뉴
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Read more 버튼 (index.html에만 존재)
  const button = document.getElementById("toggleButton");
  const moreContent = document.querySelector(".more-content");

  if (button && moreContent) {
    button.addEventListener("click", () => {
      moreContent.classList.toggle("hidden");
      button.textContent = moreContent.classList.contains("hidden")
        ? "Read more"
        : "Read less";
    });
  }
});
