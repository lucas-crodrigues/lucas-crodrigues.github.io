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

const popupProjectDetails = document.querySelectorAll('.seeProjectButton');
const popupProjectMobile = document.querySelector('.project-popup-mobile');
const bgBlur = document.querySelector('.works');
const lockScroll = document.querySelector('.content');

popupProjectDetails.forEach((button) => {button.addEventListener('click', displayProject1)});

function displayProject1() {
  popupProjectMobile.classList.remove('popup');
  bgBlur.classList.add('blur');
  lockScroll.classList.add('lockScroll');
  popupProjectMobile.innerHTML = `
  <div class="popup-top" id="popup-top">
  <h4 class="popup-header" id="popupHeader">${projects.project1.projectTitle}</h4>
  <button class="close closePopup" onclick="bgBlur.classList.remove('blur'); popupProjectMobile.classList.add('popup'); lockScroll.classList.remove('lockScroll');">&times;</button>
  </div>
  <ul class="project1tags">
    <li class="htmlbuttp">
        <p class="icontextp" id="popup1tag1">${tags.tagHtml}</p>
        <a></a>
    </li>
    <li class="bootstrapbuttp">
        <p class="icontextp" id="popup1tag2">${tags.tagBootstrap}</p>
        <a></a>
    </li>
    <li class="rubybuttp">
        <p class="icontextp" id="popup1tag3">${tags.tagRubyOnRails}</p>
        <a></a>
    </li>
  </ul>
  <div class="popup-content">
    <img id="popup-content-img" src="${projects.project1.image}" alt="${projects.project1.imageAlt}">
    <p class="popup-content-p" id="popup-content-p">${projects.project1.description}</p>
  </div>
  <div class="popup-bottom">
    <button class="popup-live" id="popup-live">${projects.project1.linktolive[0]}<img src="${projects.project1.linktolive[1]}"></button>
    <button class="popup-source">${projects.project1.linktosource[0]} <img src="${projects.project1.linktosource[1]}"></button>
  </div>`;
};
