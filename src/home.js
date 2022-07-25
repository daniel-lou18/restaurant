import logo from './serve-food.png';
import {Element, createHeader, createPage} from './myModules';

function pageArray() {
  const header = createHeader("Restaurant Chez Lou");

  const descrElem = new Element('div', 'p', 'home-content');

  descrElem.childElem.textContent = "We specialize in delicious food featuring fresh ingredients and masterful preparation by our culinary team. Whether you\’re ordering a multi-course meal or grabbing a drink and pizza at the bar, our lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates.";
  descrElem.append('p');
  descrElem.childElem1.textContent = "The approach to the menu was easy. We had no interest in trying to reinvent food. We went with choices that were popular catering requests — basic, down-home style — just from a wide range of regions. We are known for our generous portions of BBQ, Southern, Cajun/Creole meals, plus a touch of Caribbean fun. We will tell you now \– save room for dessert!"
  descrElem.parentElem.classList.add('description');

  return [header.logoElem.parentElem, header.titleElem.parentElem, descrElem.parentElem]
}

const home = createPage(pageArray());

export default home;