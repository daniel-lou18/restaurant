import logo from './serve-food.png';

const elements = function() {
  const logoElem = document.createElement('div');
  const foodLogo = new Image();
  foodLogo.src = logo;
  const titleElem = document.createElement('div');
  const title = document.createElement('h1');
  const descrElem = document.createElement('div');
  const description = document.createElement('p');
  const description2 = document.createElement('p');
  const food = document.createElement('div');
  const price = document.createElement('div');
  const contact = document.createElement('div');

  return {logoElem, foodLogo, titleElem, title, descrElem, description, description2, food, price, contact};
};

class Element {
  constructor(parentName, parentType, childName, childType, className) {
    this.parentName = parentName;
    this.parentType = parentType;
    this.childName = childName;
    this.childType = childType;
    this.className = className;
  }

  create() {
    this.parentElem = document.createElement(this.parentType);
    this.childElem = document.createElement((this.childType));
    this.parentElem.appendChild(this.childElem);
    this.parentElem.classList.add(this.className);
    return this.parentElem;
  }
}

function createHeader(title) {
  const logoElem = new Element('logoParent', 'div', 'logoChild', 'img', 'logo');
  logoElem.create();
  logoElem.childElem.src = logo;

  const titleElem = new Element('titleParent', 'div', 'titleChild', 'h1', 'title');
  logoElem.create.call(titleElem); //cooooooool
  titleElem.childElem.textContent = title;

  return {logoElem, titleElem};
}

const addContent = function(parent, child, textContent, className) {
  child.textContent = textContent;
  parent.appendChild(child);
  parent.classList.add(className);
  return parent;
}

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

export { Element , createHeader, elements, addContent, createPage, addToDescr };