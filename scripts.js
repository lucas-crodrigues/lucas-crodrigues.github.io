const hamburger = document.querySelector('.menuicon');
const dropdown = document.querySelector('.dropdown-menu');
const close = document.querySelector('.close');
const closeOption = document.querySelector('.mobile-menu-options');


hamburger.addEventListener('click',()=>{
    dropdown.classList.remove('hide');
})


close.addEventListener('click',()=>{
    dropdown.classList.add('hide');
})

closeOption.addEventListener('click',()=>{
  dropdown.classList.add('hide');
})
