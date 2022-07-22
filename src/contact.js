import logo from './serve-food.png';
import {generateLogo, generateTitle, createPage, addToDescr} from './myModules';

const generateContact = function() {
  const descrElem = document.createElement('div');
  const contact = document.createElement('div');
  descrElem.appendChild(contact);
  descrElem.classList.add('contact-content', 'description');
  
  let contactList = "Villard Restaurant; At Lotte New York Palace; 455 Madison Avenue at 50th St.; New York, NY 10022; (212) 891-8100;  For general inquiries, contact concierge@lottenypalace.com"
  addToDescr(contact, contactList, 'contact', ";")

  return descrElem;
};

const contact = createPage(generateLogo(), generateTitle("CONTACT US"), generateContact());

export default contact;