// ================================SLIDER========================================
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  slides.forEach((slide) => slide.classList.remove('active'));
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(showSlide, 500);

// ================================= HEADER =================================
const head = `
<div class="logo">
<img src="images/logo.png" alt="Logo" class="logo-image">
</div>
<div class="menu-items">
<ul>
  <li class="menu-item"><a href="index.html">Ballina</a></li>
  <li class="menu-item"><a href="#">Rreth nesh</a></li>
  <li class="menu-item">
    <a href="#">Trajnimet</a>
    <ul class="submenu">
      <li><a href="#">JAVA</a></li>
      <li><a href="#">HTML</a></li>
      <li><a href="#">PYTHON</a></li>
      <li><a href="#">C#</a></li>
    </ul>
    
  </li>
  <li class="menu-item"><a href="contactus.html">Kontakti</a></li>
</ul>
</div>
`;
window.addEventListener('DOMContentLoaded', () => {
  let headerbar = document.querySelector('div[role="headerbar"]');
  headerbar.innerHTML = head;
});

// ================================= FOOTER =================================
const footer = `
<div class="footer-part logo-part">
        <img src="images/logo.png" alt="Logo" class="logo">
        <p class="logo-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quibusdam, expedita at aut hic consectetur!</p>
      </div>
      <div class="footer-part menu-part">
        <h3 class="footer-titles">Menu</h3>
        <ul class="menu-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="footer-part training-part">
        <h3 class="footer-titles">Trajnimet</h3>
        <ul class="training-options">
          <li><a href="#">Java</a></li>
          <li><a href="#">Python</a></li>
          <li><a href="#">HTML</a></li>
          <li><a href="#">C#</a></li>
        </ul>
      </div>
      <div class="footer-part findus-part">
        <h3 class="footer-titles">Find us</h3>
        <ul class="social-media-links">
          <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i class="fab fa-twitter"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
        </ul>
      </div>
`;
window.addEventListener('DOMContentLoaded', () => {
  let footerf = document.querySelector('div[role="footer"]');
  footerf.innerHTML = footer;
});