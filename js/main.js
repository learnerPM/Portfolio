//Select DOM Items
//Document Object model

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBrand = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');

//Initial State
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBrand.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //State of Menu
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBrand.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //State of Menu
        showMenu = false;
    }
}

//Download Resume
$(document).ready(function () {
    $(".download").click(function (e) {
        e.preventDefault();
        window.location.href = "conf-d/Prateek_Mourya_Resume_v5.pdf";
    });
});