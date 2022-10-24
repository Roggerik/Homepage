const menuH = document.querySelector('.img__hamburguer');
const containerH = document.querySelector('.menu__hamburguer');

menuH.addEventListener('click',()=>{
  containerH.classList.toggle('menuActivo');
})