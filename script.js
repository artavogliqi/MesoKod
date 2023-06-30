// ================================SLIDER========================================
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  slides.forEach((slide) => slide.classList.remove('active'));
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(showSlide, 3000);


// ================================= HEADER =================================
const head = `
<div class="logo">
<a href="index.html"> <img src="images/logo.png" alt="Logo" class="logo-image"> </a>
</div>
<div class="menu-items">
<ul>
  <li class="menu-item"><a href="index.html">Ballina</a></li>
  <li class="menu-item"><a href="aboutus.html" target="_blank">Rreth nesh</a></li>
  <li class="menu-item">
    <a href="#">Trajnimet</a>
    <ul class="submenu">
      <li><a href="java-python.html">JAVA</a></li>
      <li><a href="html-c.html">HTML</a></li>
      <li><a href="java-python.html">PYTHON</a></li>
      <li><a href="html-c.html">C#</a></li>
    </ul>
    
  </li>
  <li class="menu-item"><a href="contactus.html" target="_blank">Kontakti</a></li>
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
<a href="index.html">   <img src="images/logo.png" alt="Logo" class="logo"> </a>
        <p class="logo-text">Shkollë digjitale e cila qëllim kryesor ka edukimin dhe motivimin e të rinjve të qasen në botën e programimit!</p>
      </div>
      <div class="footer-part menu-part">
        <h3 class="footer-titles">Menu</h3>
        <ul class="menu-list">
          <li><a href="index.html">Ballina</a></li>
          <li><a href="aboutus.html">Rreth Nesh</a></li>
          <li><a href="#">Trajnimet</a></li>
          <li><a href="contactus.html">Kontakti</a></li>
        </ul>
      </div>
      <div class="footer-part training-part">
        <h3 class="footer-titles">Trajnimet</h3>
        <ul class="training-options">
          <li><a href="java-python.html">Java</a></li>
          <li><a href="java-python.html">Python</a></li>
          <li><a href="html-c.html">HTML</a></li>
          <li><a href="html-c.html">C#</a></li>
        </ul>
      </div>
      <div class="footer-part findus-part">
        <h3 class="footer-titles">Na gjeni</h3>
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