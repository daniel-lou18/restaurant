import logo from './serve-food.png';
import { Element, createHeader, elements, addContent, createPage } from './myModules';

const header = createHeader("Restaurant Chez Lou");
const descrElem1 = addContent(elements().descrElem, elements().description, "We specialize in delicious food featuring fresh ingredients and masterful preparation by our culinary team. Whether you\’re ordering a multi-course meal or grabbing a drink and pizza at the bar, our lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates.", 'description');
const descrElem2 = addContent(elements().descrElem, elements().description2, "The approach to the menu was easy. We had no interest in trying to reinvent food. We went with choices that were popular catering requests — basic, down-home style — just from a wide range of regions. We are known for our generous portions of BBQ, Southern, Cajun/Creole meals, plus a touch of Caribbean fun. We will tell you now \– save room for dessert!", 'description');

// const generateDescription = function() {
//   description.textContent = "We specialize in delicious food featuring fresh ingredients and masterful preparation by our culinary team. Whether you\’re ordering a multi-course meal or grabbing a drink and pizza at the bar, our lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates."
//   description2.textContent = "The approach to the menu was easy. We had no interest in trying to reinvent food. We went with choices that were popular catering requests — basic, down-home style — just from a wide range of regions. We are known for our generous portions of BBQ, Southern, Cajun/Creole meals, plus a touch of Caribbean fun. We will tell you now \– save room for dessert!"
//   descrElem.appendChild(description);
//   descrElem.appendChild(description2);
//   descrElem.classList.add('home-content', 'description');
//   return descrElem;
// };

const home = createPage(header.logoElem.parentElem, header.titleElem.parentElem, descrElem1, descrElem2);

export default home;