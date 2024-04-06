const hamburgerBtn = document.getElementById('btn-hamburger');
const showHamburgerMenu = () => {
  const navbar = document.querySelector('.nav');
  navbar.classList.toggle('show');
};
hamburgerBtn.addEventListener('click', showHamburgerMenu);

// Create count up timer
const setTotalTime = () => {
  let getDay = 352;
  let getHour = 5;
  let getMinute = 18;
  let getSecond = 1;

  const timer = document.querySelector('.space__timer');

  setInterval(() => {
    getSecond++;

    if (getSecond == 59) {
      getMinute++;
      getSecond = 0;
    }

    if (getMinute == 59) {
      getHour++;
      getMinute = 0;
    }

    if (getHour == 23) {
      getDay++;
      getHour = 0;
    }

    timer.innerHTML = `
        <span id="day">${getDay}D</span>
        <span id="hour">${getHour}H</span>
        <span id="minute" style="width: fit-content">${getMinute}M</span>
        <span id="second" style="width: 45px;">${getSecond}S</span>`;
  }, 1000);
};

setTotalTime();

// Force close hamburger menu when user scroll down
const closeHamburgerMenu = () => {
  let scroll = window.scrollY;

  if (scroll > 120) {
    const navbar = document.querySelector('.nav');
    navbar.classList.remove('show');
  }
};

window.onscroll = () => {
  closeHamburgerMenu();
};
