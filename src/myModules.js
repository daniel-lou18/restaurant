import logo from './serve-food.png';

const generateLogo = function() {
  const logoElem = document.createElement('div');
  const foodLogo = new Image();
  foodLogo.src = logo;
  logoElem.appendChild(foodLogo);
  logoElem.classList.add('logo');
  return logoElem;
};

const generateTitle = function(titleText) {
  const titleElem = document.createElement('div');
  const title = document.createElement('h1');
  title.textContent = titleText;
  titleElem.appendChild(title);
  titleElem.classList.add('title');
  return titleElem;
};

const createPage = function(elem1, elem2, elem3) {
  const elemArray = [];
  elemArray.push(elem1, elem2, elem3);
  return function(selector) {
    const content = document.querySelector(selector);
    elemArray.forEach(elem => content.appendChild(elem));
  };
};

const addToDescr = function(elem, list, className, separator) {
  let array = list.split(separator);
  array.forEach(function(item) {
    let para = document.createElement('p');
    para.textContent = item;
    para.classList.add(className);
    elem.appendChild(para);
  })
};

export { generateLogo, generateTitle, createPage, addToDescr };