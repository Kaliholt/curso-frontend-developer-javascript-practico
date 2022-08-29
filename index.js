const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const navMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const navShoppingIcon = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
navMenuIcon.addEventListener('click', toggleMobileMenu);
navShoppingIcon.addEventListener('click', toggleProductDetail);

function toggleDesktopMenu() {
    productDetail.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    productDetail.classList.add('inactive')
    mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive')
    productDetail.classList.toggle('inactive');
}