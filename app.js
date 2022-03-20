const themeSwitch = document.getElementById('theme-switch');
const body = document.querySelector('body');

window.addEventListener('load', () => {
  let currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'dark') {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');    
    themeSwitch.checked = false;
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');    
    themeSwitch.checked = true;
  }

});

themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    let theme = "light";
    localStorage.setItem('theme', theme);    
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    let theme = "dark";
    localStorage.setItem('theme', theme);
  }
});