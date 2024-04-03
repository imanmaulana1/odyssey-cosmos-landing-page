const hamburgerBtn = document.getElementById('btn-hamburger');
const showHamburgerMenu = () => {
  const navbar = document.querySelector('.nav');
  navbar.classList.toggle('show');
};
hamburgerBtn.addEventListener('click', showHamburgerMenu);
