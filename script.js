const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window.scrollY > 100);
});


const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menu-icon.addEventListener('click', () => {
  menu.classList.toggle('show');
});
