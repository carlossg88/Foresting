const menuHamIcon = document.querySelector('.menu-Container');
const mobileMenu = document.querySelector('.navbar-mobile');

menuHamIcon.addEventListener('click',toggleMobileMenu);

function toggleMobileMenu(){
  mobileMenu.classList.toggle('inactive');
  console.log('click')
}