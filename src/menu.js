import logo from './serve-food.png';
import {generateLogo, generateTitle, createPage, addToDescr} from './myModules';

const generateMenu = function() {
  const descrElem = document.createElement('div');
  const food = document.createElement('div');
  const price = document.createElement('div');
  descrElem.appendChild(food);
  descrElem.appendChild(price);
  descrElem.classList.add('menu-content', 'description');

  let foodList = "arrowhead arrowroot artichokes artificial arugula ascidians asparagus avocados baby babyfood bacon bagel bagels baking balls balsam-pear bamboo bananas bar barbecue"
  let priceList = "8 24 15 15 40 26 14 22 21 43 12 25 43 12 35 21 35 42 7 10"
  addToDescr(food, foodList, 'food', " ");
  addToDescr(price, priceList, 'price', " ");

  return descrElem;
};

const menu = createPage(generateLogo(), generateTitle("OUR MENU"), generateMenu());

export default menu;