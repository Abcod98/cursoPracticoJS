const menuEmail = document.querySelector('.navbar-email')
const menuListIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const carritoAside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuListIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
    carritoAside.classList.add('inactive')
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
    carritoAside.classList.add('inactive')
}

function toggleCarritoAside() {
    carritoAside.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
}