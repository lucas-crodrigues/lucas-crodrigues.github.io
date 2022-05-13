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
    projectTitle: 'To-Do list',
    description: 'A simple to-do list application, very lightweight, its simple UI makes it very easy to understand it, it comes with an input for you to write your tasks in and add it to the list, and functions to add task, remove task, check completed tasks, and a button to clear all tasks completed. The task list is stored in local storage.',
    image: 'Art/todolist_ss.PNG',
    imageAlt: 'To-Do list project image',
    linktolive: ['See Live', 'Art/Icon-Live.svg', 'https://lucas-crodrigues.github.io/to-do-list/dist/'],
    linktosource: ['See Source', 'Art/Icon-Source.svg', 'https://github.com/lucas-crodrigues/to-do-list'],
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
  tagHtml: 'HTML/CSS',
  tagBootstrap: 'JavaScript',
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
  document.querySelector('.toolbar').classList.add('blur');
  document.querySelector('.headline').classList.add('blur');
  document.querySelector('.aboutme').classList.add('blur');

  let selectedProjects;

  Object.keys(projects).forEach((project) => {
    if (event.target.id === projects[project].id.toString()) {
      selectedProjects = projects[project];
    }
  });

  popupProjectMobile.innerHTML = `
  <div class="popup-top" id="popup-top">
    <h4 class="popup-header" id="popupHeader">${selectedProjects.projectTitle}</h4>
    <button class="close closePopup" onclick="bgBlur.classList.remove('blur'); 
      popupProjectMobile.classList.add('popup'); lockScroll.classList.remove('lockScroll'); 
      document.querySelector('.toolbar').classList.remove('blur'); document.querySelector('.headline').classList.remove('blur'); 
      document.querySelector('.aboutme').classList.remove('blur');">&times;
    </button>
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
    <li class="rubybuttp hide">
        <p class="icontextp" id="popup1tag3">${tags.tagRubyOnRails}</p>
        <a></a>
    </li>
  </ul>
  <div class="popup-content">
    <img id="popup-content-img" src="${selectedProjects.image}" alt="${selectedProjects.imageAlt}">
    <p class="popup-content-p" id="popup-content-p">${selectedProjects.description}</p>
    <div class="popup-bottom">
      <a href="${selectedProjects.linktolive[2]}" target="_blank"><button class="popup-live" id="popup-live">${selectedProjects.linktolive[0]}<img src="${selectedProjects.linktolive[1]}"></button></a>
      <a href="${selectedProjects.linktosource[2]}" target="_blank"><button class="popup-source">${selectedProjects.linktosource[0]} <img src="${selectedProjects.linktosource[1]}"></button></a>
    </div>
  </div>`;
}

popupProjectDetails.forEach((button) => { button.addEventListener('click', (event) => { displayProject1(event); }); });

const form = document.getElementById('contactme-form');
const formEmail = document.getElementById('useremail');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  if (formEmail.value !== formEmail.value.toLowerCase()) {
    e.preventDefault();
    errorMessage.classList.remove('hideError');
    errorMessage.innerHTML = 'Email should be all lowercase';
  }
});

const formName = document.getElementById('userfullname');
const formMessage = document.getElementById('userMessage');

Array.from(form.elements).forEach((input) => input.addEventListener('input', () => {
  const storeInformation = { Name: formName.value, Email: formEmail.value };
  const storeString = JSON.stringify(storeInformation);
  localStorage.setItem('userInfo', storeString);
}));

Array.from(form.elements).forEach((textarea) => textarea.addEventListener('input', () => {
  const storeMessage = { Message: formMessage.value };
  const storeMessageString = JSON.stringify(storeMessage);
  localStorage.setItem('userMessage', storeMessageString);
}));

const storedInfo = JSON.parse(localStorage.getItem('userInfo'));
const storedMessage = JSON.parse(localStorage.getItem('userMessage'));

formName.value = storedInfo.Name;
formEmail.value = storedInfo.Email;
formMessage.value = storedMessage.Message;
