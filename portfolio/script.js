  // 내용 펼치기/접기 전환
const button = document.getElementById("toggleButton");
const moreContent = document.querySelector(".more-content");

button.addEventListener("click", () => {
  moreContent.classList.toggle("hidden");
  button.textContent = moreContent.classList.contains("hidden") ? "Read more" : "Read less";
});


// portfolio/script.js
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });
});





