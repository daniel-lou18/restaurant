import logo from './serve-food.png';

class Element {
  constructor(parentType, childType, className) {
    this.parentType = parentType;
    this.childType = childType;
    this.className = className;
    this.create();
  }

  create() {
    this.parentElem = document.createElement(this.parentType);
    this.childElem = document.createElement((this.childType));
    this.parentElem.appendChild(this.childElem);
    this.parentElem.classList.add(this.className);
  }

  append(childType) {
    if (!this.parentElem) {
      alert("Please create parentElem first!");
      return
    };
    const nameChild = `childElem${this.parentElem.children.length}`;
    this[nameChild] = document.createElement(childType);
    this.parentElem.appendChild(this[nameChild]);
  }
}

function createHeader(title) {
  const logoElem = new Element('div', 'img', 'logo');
  logoElem.childElem.src = logo;

  const titleElem = new Element('div', 'h1', 'title');
  titleElem.childElem.textContent = title;

  return {logoElem, titleElem};
}

const createPage = function(elemArray) {
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

export { Element, createHeader, createPage, addToDescr };