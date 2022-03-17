const themeSwitch = document.getElementById('theme-switch');
const body = document.querySelector('body');

// TODO check to make sure theme stays same color on page refresh

themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  }
});