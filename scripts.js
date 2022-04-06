const hamburger = document.querySelector('.menuicon');
const dropdown = document.querySelector('.dropdown-menu');
const close = document.querySelector('.close');
const closeOption = document.querySelector('.mobile-menu-options');

hamburger.addEventListener('click', () => {
  dropdown.classList.remove('hide');
});

close.addEventListener('click', () => {
  dropdown.classList.add('hide');
});

closeOption.addEventListener('click', () => {
  dropdown.classList.add('hide');
});

const projects = {
project1: {
  id: 1, 
  projectTitle: 'Multi Post Stories', 
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
  "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, "+
  "when an unknown printer took a galley of type and scrambled it to make a type specimen book. "+
  "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  image: 'Art/popup-image.png',
  imageAlt: 'Popup project image',
  linktolive: ['See Live', 'Art/Icon-Live.svg'],
  linktosource: ['See Source', 'Art/Icon-Source.svg']
},
project2: {
  id: 2, 
  projectTitle: 'Multi Post Stories', 
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
  "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, "+
  "when an unknown printer took a galley of type and scrambled it to make a type specimen book. "+
  "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  image: 'Art/popup-image.png',
  imageAlt: 'Popup project image',
  linktolive: ['See Live', 'Art/Icon-Live.svg'],
  linktosource: ['See Source', 'Art/Icon-Source.svg']
},
project3: {
  id: 3, 
  projectTitle: 'Multi Post Stories', 
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
  "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, "+
  "when an unknown printer took a galley of type and scrambled it to make a type specimen book. "+
  "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  image: 'Art/popup-image.png',
  imageAlt: 'Popup project image',
  linktolive: ['See Live', 'Art/Icon-Live.svg'],
  linktosource: ['See Source', 'Art/Icon-Source.svg']
},
project4: {
  id: 4, 
  projectTitle: 'Multi Post Stories', 
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
  "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, "+
  "when an unknown printer took a galley of type and scrambled it to make a type specimen book. "+
  "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  image: 'Art/popup-image.png',
  linktolive: ['See Live', 'Art/Icon-Live.svg'],
  imageAlt: 'Popup project image',
  linktosource: ['See Source', 'Art/Icon-Source.svg']
},
project5: {
  id: 5, 
  projectTitle: 'Multi Post Stories', 
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
  "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, "+
  "when an unknown printer took a galley of type and scrambled it to make a type specimen book. "+
  "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  image: 'Art/popup-image.png',
  linktolive: ['See Live', 'Art/Icon-Live.svg'],
  imageAlt: 'Popup project image',
  linktosource: ['See Source', 'Art/Icon-Source.svg']
},
project6: {
  id: 6, 
  projectTitle: 'Multi Post Stories', 
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
  "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, "+
  "when an unknown printer took a galley of type and scrambled it to make a type specimen book. "+
  "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  image: 'Art/popup-image.png',
  imageAlt: 'Popup project image',
  linktolive: ['See Live', 'Art/Icon-Live.svg'],
  linktosource: ['See Source', 'Art/Icon-Source.svg']
}};

const tags = {
  tagHtml: 'html' ,
  tagBootstrap: 'Bootstrap', 
  tagRubyOnRails: 'Ruby on rails'
}

document.getElementById('popupHeader').innerHTML = projects.project1.projectTitle;
document.getElementById('popup1tag1').innerHTML = tags.tagHtml;
document.getElementById('popup1tag2').innerHTML = tags.tagBootstrap;
document.getElementById('popup1tag3').innerHTML = tags.tagRubyOnRails;
document.getElementById('popup-content-img').src = projects.project1.image;
document.getElementById('popup-content-img').alt = projects.project1.imageAlt;
document.getElementById('popup-content-p').innerHTML = projects.project1.description;
document.getElementById('popup-live').innerHTML = projects.project1.linktolive[0];
document.getElementById('linktolive').src = projects.project1.linktolive[1];

