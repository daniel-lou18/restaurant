import logo from './serve-food.png';
import {Element, createHeader, createPage, addToDescr} from './myModules';


function pageArray() {
  const header = createHeader("OUR MENU");
  
  const menuElem = new Element('div', 'div', 'menu-content');
  menuElem.parentElem.classList.add('description');
  menuElem.append('div');

  const foodList = "arrowhead arrowroot artichokes artificial arugula ascidians asparagus avocados baby babyfood bacon bagel bagels baking balls balsam-pear bamboo bananas bar barbecue"
  const priceList = "8 24 15 15 40 26 14 22 21 43 12 25 43 12 35 21 35 42 7 10"
  addToDescr(menuElem.childElem, foodList, 'food', " ");
  addToDescr(menuElem.childElem1, priceList, 'price', " ");

  return [header.logoElem.parentElem, header.titleElem.parentElem, menuElem.parentElem];
}

const menu = createPage(pageArray());

export default menu;