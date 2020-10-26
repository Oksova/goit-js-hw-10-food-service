import './css/styles.css'
import menuTpl from '../src/templates/menuTpl.hbs'
import menu from './menu.json'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
}

const refs = {
  menuEl: document.querySelector('.js-menu'),
  bodeEl: document.querySelector('body'),
  switchEl: document.querySelector('#theme-switch-toggle'),
}

const menuContainer = refs.menuEl
const menuMarkup = menuCardsMarkup(menu)

menuContainer.insertAdjacentHTML('beforeend', menuMarkup)

function menuCardsMarkup(menu) {
  return menu
}

console.log(menuCardsMarkup)
