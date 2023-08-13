const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window.scrollY > 100);
});


const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menu-icon.addEventListener('click', () => {
  menu.classList.toggle('show');
});

/*
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
*/
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove();
    navlist.classList.remove('open');
};


/*Toggle Button*/
// JavaScript function to toggle academic and curriculum content visibility
function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
  
   
   
   
   
        content.style.display = 'none';
    }
  }

