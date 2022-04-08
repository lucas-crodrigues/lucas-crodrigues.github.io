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
  stories: {
    id: 0,
    projectTitle: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'Art/popup-image.png',
    imageAlt: 'Popup project image',
    linktolive: ['See Live', 'Art/Icon-Live.svg'],
    linktosource: ['See Source', 'Art/Icon-Source.svg'],
  },
  project1: {
    id: 1,
    projectTitle: 'Profesional Art Printing Data',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'Art/popup-image.png',
    imageAlt: 'Popup project image',
    linktolive: ['See Live', 'Art/Icon-Live.svg'],
    linktosource: ['See Source', 'Art/Icon-Source.svg'],
  },
  project2: {
    id: 2,
    projectTitle: 'Data Dashboard Healthcare',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'Art/popup-image.png',
    imageAlt: 'Popup project image',
    linktolive: ['See Live', 'Art/Icon-Live.svg'],
    linktosource: ['See Source', 'Art/Icon-Source.svg'],
  },
  project3: {
    id: 3,
    projectTitle: 'Website Protfolio',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'Art/popup-image.png',
    imageAlt: 'Popup project image',
    linktolive: ['See Live', 'Art/Icon-Live.svg'],
    linktosource: ['See Source', 'Art/Icon-Source.svg'],
  },
  project4: {
    id: 4,
    projectTitle: 'Profesional Art Printing Data',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'Art/popup-image.png',
    linktolive: ['See Live', 'Art/Icon-Live.svg'],
    imageAlt: 'Popup project image',
    linktosource: ['See Source', 'Art/Icon-Source.svg'],
  },
  project5: {
    id: 5,
    projectTitle: 'Data Dashboard Healthcare',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'Art/popup-image.png',
    linktolive: ['See Live', 'Art/Icon-Live.svg'],
    imageAlt: 'Popup project image',
    linktosource: ['See Source', 'Art/Icon-Source.svg'],
  },
  project6: {
    id: 6,
    projectTitle: 'Website Protfolio',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'Art/popup-image.png',
    imageAlt: 'Popup project image',
    linktolive: ['See Live', 'Art/Icon-Live.svg'],
    linktosource: ['See Source', 'Art/Icon-Source.svg'],
  },
};

const tags = {
  tagHtml: 'html',
  tagBootstrap: 'Bootstrap',
  tagRubyOnRails: 'Ruby on rails',
};

const popupProjectDetails = document.querySelectorAll('.seeProjectButton');
const popupProjectMobile = document.querySelector('.project-popup-mobile');
const bgBlur = document.querySelector('.works');
const lockScroll = document.querySelector('.content');

function displayProject1(event) {
  popupProjectMobile.classList.remove('popup');
  bgBlur.classList.add('blur');
  lockScroll.classList.add('lockScroll');

  let selectedProjects;

  Object.keys(projects).forEach((project) => {
    if (event.target.id === projects[project].id.toString()) {
      selectedProjects = projects[project];
    }
  });

  popupProjectMobile.innerHTML = `
  <div class="popup-top" id="popup-top">
  <h4 class="popup-header" id="popupHeader">${selectedProjects.projectTitle}</h4>
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
    <img id="popup-content-img" src="${selectedProjects.image}" alt="${selectedProjects.imageAlt}">
    <p class="popup-content-p" id="popup-content-p">${selectedProjects.description}</p>
    <div class="popup-bottom">
      <button class="popup-live" id="popup-live">${selectedProjects.linktolive[0]}<img src="${selectedProjects.linktolive[1]}"></button>
      <button class="popup-source">${selectedProjects.linktosource[0]} <img src="${selectedProjects.linktosource[1]}"></button>
    </div>
  </div>`;
}

popupProjectDetails.forEach((button) => { button.addEventListener('click', (event) => { displayProject1(event); }); });