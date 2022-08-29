const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const navMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const navShoppingIcon = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

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

const productList = [];

productList.push({
    name: 'Bike',
    price: 60,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Television',
    price: 360,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computer',
    price: 760,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function renderProducts(array) {
    for(product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productInfoPrice = document.createElement('p');
        productInfoPrice.innerText = '$' + product.price;
    
        const productInfoName = document.createElement('p');
        productInfoName.innerText = product.name;
        
        const productInfoFigure = document.createElement('figure');
        
        const productInfoFigureImage = document.createElement('img');
        productInfoFigureImage.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        cardsContainer.append(productCard);
        productCard.append(productImage, productInfo);
        productInfo.append(productInfoDiv, productInfoFigure);
        productInfoDiv.append(productInfoPrice, productInfoName);
        productInfoFigure.appendChild(productInfoFigureImage);
    }
}

renderProducts(productList);
renderProducts(productList);
renderProducts(productList);