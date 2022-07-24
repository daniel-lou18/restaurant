import logo from './serve-food.png';
import {elements, addContent, createPage, addToDescr} from './myModules';

const logoElem = addContent(elements().logoElem, elements().foodLogo, '', 'logo');
const titleElem = addContent(elements().titleElem, elements().title, 'OUR MENU', 'title');

const generateMenu = function() {
  const descrElem = elements().descrElem;
  const food = elements().food;
  const price = elements().price;
  descrElem.appendChild(food);
  descrElem.appendChild(price);
  descrElem.classList.add('menu-content', 'description');

  let foodList = "arrowhead arrowroot artichokes artificial arugula ascidians asparagus avocados baby babyfood bacon bagel bagels baking balls balsam-pear bamboo bananas bar barbecue"
  let priceList = "8 24 15 15 40 26 14 22 21 43 12 25 43 12 35 21 35 42 7 10"
  addToDescr(food, foodList, 'food', " ");
  addToDescr(price, priceList, 'price', " ");

  return descrElem;
};

const menu = createPage(logoElem, titleElem, generateMenu());

export default menu;