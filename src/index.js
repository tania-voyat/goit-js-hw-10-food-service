import './styles.css';
import menu from './menu.json';
import menuTemplate from './template.hbs';

console.log(menuTemplate);

const markup = menuTemplate(menu);
console.log(markup);

const refs = {
  switchInput: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
  menu: document.querySelector('.js-menu'),
};

refs.switchInput.addEventListener('change', onInputChange);
refs.menu.insertAdjacentHTML('beforeend', markup);

function onInputChange(e) {
  refs.body.classList.add('light-theme');
  if (e.target.checked) {
    refs.body.classList.add('dark-theme');
    refs.body.classList.remove('light-theme');
  } else refs.body.classList.remove('dark-theme');

  localStorage.setItem('theme', refs.body.classList);
}

getCurrentheme();

function getCurrentheme() {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark-theme') {
    refs.body.classList.add('dark-theme');
    refs.switchInput.checked = true;
  }
}
