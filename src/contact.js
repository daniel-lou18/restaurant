import logo from './serve-food.png';
import {elements, addContent, createPage, addToDescr} from './myModules';

const logoElem = addContent(elements().logoElem, elements().foodLogo, '', 'logo');
const titleElem = addContent(elements().titleElem, elements().title, 'CONTACT US', 'title');

const generateContact = function() {
  const descrElem = elements().descrElem;
  const contact = elements().contact;
  descrElem.appendChild(contact);
  descrElem.classList.add('contact-content', 'description');
  
  let contactList = "Villard Restaurant; At Lotte New York Palace; 455 Madison Avenue at 50th St.; New York, NY 10022; (212) 891-8100;  For general inquiries, contact concierge@lottenypalace.com"
  addToDescr(contact, contactList, 'contact', ";")

  return descrElem;
};

const contact = createPage(logoElem, titleElem, generateContact());

export default contact;