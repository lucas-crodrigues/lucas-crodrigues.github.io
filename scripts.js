const { url } = require("inspector");

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

const projects = [{
  id: 1, 
  projectTitle: 'Multi Post Stories', 
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
  "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, "+
  "when an unknown printer took a galley of type and scrambled it to make a type specimen book. "+
  "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  image: 'Art/popup-image.png',
  linktolive: ['See Live', 'Art/Icon-Live.svg'],
  linktosource: ['See Source', 'Art/Icon-Source.svg']
},
{
  id: 2, 
  projectTitle: 'Multi Post Stories', 
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
  "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, "+
  "when an unknown printer took a galley of type and scrambled it to make a type specimen book. "+
  "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  image: 'Art/popup-image.png',
  linktolive: ['See Live', 'Art/Icon-Live.svg'],
  linktosource: ['See Source', 'Art/Icon-Source.svg']
},
{
  id: 3, 
  projectTitle: 'Multi Post Stories', 
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
  "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, "+
  "when an unknown printer took a galley of type and scrambled it to make a type specimen book. "+
  "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  image: 'Art/popup-image.png',
  linktolive: ['See Live', 'Art/Icon-Live.svg'],
  linktosource: ['See Source', 'Art/Icon-Source.svg']
},
{
  id: 4, 
  projectTitle: 'Multi Post Stories', 
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
  "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, "+
  "when an unknown printer took a galley of type and scrambled it to make a type specimen book. "+
  "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  image: 'Art/popup-image.png',
  linktolive: ['See Live', 'Art/Icon-Live.svg'],
  linktosource: ['See Source', 'Art/Icon-Source.svg']
},
{
  id: 5, 
  projectTitle: 'Multi Post Stories', 
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
  "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, "+
  "when an unknown printer took a galley of type and scrambled it to make a type specimen book. "+
  "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  image: 'Art/popup-image.png',
  linktolive: ['See Live', 'Art/Icon-Live.svg'],
  linktosource: ['See Source', 'Art/Icon-Source.svg']
},
{
  id: 6, 
  projectTitle: 'Multi Post Stories', 
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
  "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, "+
  "when an unknown printer took a galley of type and scrambled it to make a type specimen book. "+
  "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  image: 'Art/popup-image.png',
  linktolive: ['See Live', 'Art/Icon-Live.svg'],
  linktosource: ['See Source', 'Art/Icon-Source.svg']
}
];

let html = document.querySelector("popup-top").innerHTML;
document.querySelector("popup-top").innerHTML = `<h4>${projects.id[1].projectTitle}</h4>`;
