import logo from './serve-food.png';
import { generateLogo, generateTitle, createPage } from './myModules';

const generateDescription = function() {
  const descrElem = document.createElement('div');
  const description = document.createElement('p');
  const description2 = document.createElement('p');
  description.textContent = "We specialize in delicious food featuring fresh ingredients and masterful preparation by our culinary team. Whether you\’re ordering a multi-course meal or grabbing a drink and pizza at the bar, our lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates."
  description2.textContent = "The approach to the menu was easy. We had no interest in trying to reinvent food. We went with choices that were popular catering requests — basic, down-home style — just from a wide range of regions. We are known for our generous portions of BBQ, Southern, Cajun/Creole meals, plus a touch of Caribbean fun. We will tell you now \– save room for dessert!"
  descrElem.appendChild(description);
  descrElem.appendChild(description2);
  descrElem.classList.add('home-content', 'description');
  return descrElem;
};

const home = createPage(generateLogo(), generateTitle('Restaurant Chez Loutje'), generateDescription());

export default home;