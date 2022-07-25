import logo from './serve-food.png';
import {Element, createHeader, createPage, addToDescr} from './myModules';


function pageArray() {
  const header = createHeader("CONTACT US");

  const contactElem = new Element('div', 'div', 'contact-content');
  contactElem.parentElem.classList.add('description');

  const contactText = "Villard Restaurant; At Lotte New York Palace; 455 Madison Avenue at 50th St.; New York, NY 10022; (212) 891-8100; For general inquiries, contact concierge@lottenypalace.com";
  addToDescr(contactElem.childElem, contactText, 'contact', ";");
  
  return [header.logoElem.parentElem, header.titleElem.parentElem, contactElem.parentElem]
}

const contact = createPage(pageArray());

export default contact;