// *Contenedor para Oscurecer Pantalla 
const darkeningContainer = document.querySelector('#darkening-container');

// *navEmail existe solo en la versión desktop, es la variable a cargo para recibir el evento del mouse y desktopMenu es el menu o ventana desplegable que muestran las opciones de 'My order', 'My account' y 'Sign out' 
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// *navMenuIcon existe solo en la versión de mobile, es la variable a cargo de recibir el evento 'click' y mobileMenu es la variable a vargo de desplegar el menu o ventana que muestran las categorias de productos a mostrar e incluye las opciones de la variable desktopMenu (dado a que este no existe en la versión mobile) 
const navMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

// *navShoppingIcon es la variable con el icono de carrito de compras presente en todas las versiones de pantalla, este recibe el evento 'click' y containerShoppingCart es el menu desplegable que muestra un resumen de la lista de productos añadidos hasta ese momento en el carrito de compras
const navShoppingIcon = document.querySelector('.navbar-shopping-cart');
const containerShoppingCart = document.querySelector('.container-shopping-cart');

// *Es quien contiene la lista de productos que se muestran en la pantalla principal
const cardsContainer = document.querySelector('.cards-container');

// *productDetail es la ventana a mostrar para ver los detalles de un producto cuando este es 'clickeado' y productDetailIconClose cierra la ventana de productDetail
const productDetail = document.querySelector('.product-detail');
const productDetailIconClose = document.querySelector('.product-detail-close');

// *productDetailButtonAdd se encarga de recibir el evento de agregar producto al carrito de compras y myOrderContent es el contenido de resumen de los productos agregados al carrito de compras
const productDetailButtonAdd = document.querySelector('.product-detail--primary-button');
const myOrderContent = document.querySelector('.my-order-content');

// *totalPurchase Amount representa el monto total de los productos añadidos al carrito
const totalOrderAmount = document.querySelector('.order');

// *Eventos de Click de algunas variables claves
navEmail.addEventListener('click', toggleDesktopMenu);
navMenuIcon.addEventListener('click', toggleMobileMenu);
navShoppingIcon.addEventListener('click', toggleContainerShoppingCart);
productDetailIconClose.addEventListener('click', closeProductDetail);
productDetailButtonAdd.addEventListener('click', addProductShoppingCart);

/** 
 ** Description: Cierra las ventanas desplegables que no deberian estar abiertas
 * @param window Ventana desplegable que quedará abierta
*/ 
function closeDropdownsWindows(window) {
    const windows = [desktopMenu, mobileMenu, containerShoppingCart, productDetail];

    for(w of windows) {
        if(w == window) {
            continue;
        }
        w.classList.add('inactive');
    }
}

/**
 ** Description: Toma una ventana como referencia para oscurecer la pantalla del navegador. Desliga demás ventanas desplegables que hayan activado el oscurecedor de pantalla. De esta manera, evita errores dado que al tomar como referencia la ventana actual si esta se cierra el oscucedor de pantalla se desactiva y viceversa. 
 * @param window Ventana a tomar como referencia 
 */
function activeDarkeningContainer(window) {
    if(window.classList.contains('inactive')) {
        darkeningContainer.classList.remove('darken');
    } else {
        darkeningContainer.classList.add('darken');
    }
}

/**
 ** Description: Función encargada de realizar el desplegamiento de desktopMenu
 * @param null 
 */
function toggleDesktopMenu() {
    closeDropdownsWindows(desktopMenu);
    desktopMenu.classList.toggle('inactive');
    activeDarkeningContainer(desktopMenu);
}

/**
 ** Description: Función encargada de realizar el desplegamiento de mobileMenu
 * @param null 
 */
function toggleMobileMenu() {
    closeDropdownsWindows(mobileMenu);
    mobileMenu.classList.toggle('inactive');
    activeDarkeningContainer(mobileMenu);
}

/**
 ** Description:  Función encargada de realizar el desplegamiento del carrito de compras
 * @param null 
 */
function toggleContainerShoppingCart() {
    closeDropdownsWindows(containerShoppingCart);
    containerShoppingCart.classList.toggle('inactive');
    activeDarkeningContainer(containerShoppingCart);
}

/**
 ** Description:  Función encargada de aperturar la ventana que muestra los detalles de un producto
 * @param null 
 */
function showProductDetail(event) {
    closeDropdownsWindows(productDetail)
    productDetail.classList.remove('inactive');
    darkeningContainer.classList.add('darken');

    
    const image = event.currentTarget.getAttribute('src');
    const currentProductInfo = event.currentTarget.parentNode
    const price = Number(currentProductInfo.children[1].children[0].children[0].innerText.slice(1));
    const name = currentProductInfo.children[1].children[0].children[1].innerText;    
    
    productDetail.children[1].setAttribute('src', image);
    productDetail.children[2].children[0].innerText = '$' + price;
    productDetail.children[2].children[1].innerText = name;
}

/**
 ** Description: Funcion encargada de cerrar la ventana de muestra los detalles de un producto
 * @param null 
 */
function closeProductDetail() {
    productDetail.classList.add('inactive');
    darkeningContainer.classList.remove('darken');
}

// *Se crea la lista de productos (array) a mostrar en la pantalla principal 
const productList = [];

productList.push({
    name: 'Bike',
    price: 60,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Television',
    price: 360,
    image: 'https://www.lg.com/pe/images/televisores/md07529157/gallery/Z1.jpg'
});
productList.push({
    name: 'Computer',
    price: 760,
    image: 'https://liquimarcas.co/wp-content/uploads/2021/06/computador-barato-powergroup-j4040-1.jpg'
});

/**
 ** Description: Crea un elemento para mostrar un nuevo producto en la pantalla principal, donde se divisa la imagen, precio y nombre de producto  
 * @param array Lista de productos que mostrará la tienda
 */
function renderProducts(array) {
    for(product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);

        productImage.addEventListener('click', showProductDetail);
    
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
    
        cardsContainer.appendChild(productCard);
        productCard.append(productImage, productInfo);
        productInfo.append(productInfoDiv, productInfoFigure);
        productInfoDiv.append(productInfoPrice, productInfoName);
        productInfoFigure.appendChild(productInfoFigureImage);
    }
}

// *Llamada a función para crear productos
renderProducts(productList);
renderProducts(productList);
renderProducts(productList);

/**
 ** Description: Agrega el producto seleccioando al carrito de compras
 * @param event Parámetro por defecto que establece el método .addEventListener  
 */
function addProductShoppingCart(event) {
    const currentProduct = event.currentTarget.parentNode.children[1].innerText;

    let i = {};
    for(p of productList) {
        if(currentProduct == p.name) {
            i = p;
        }
    }
    const shoppingCart = document.createElement('div');
    shoppingCart.classList.add('shopping-cart');
    
    const shoppingCartFigure = document.createElement('figure');
    const shoppingCartFigureImg = document.createElement('img');
    shoppingCartFigureImg.setAttribute('src', i.image);
    
    const shoppingCartName = document.createElement('p');
    shoppingCartName.innerText = i.name;
    
    const shoppingCartPrice = document.createElement('p');
    shoppingCartPrice.innerText = '$' + i.price;

    const shoppingCartIconClose = document.createElement('img');
    shoppingCartIconClose.src = './icons/icon_close.png';
    shoppingCartIconClose.alt = 'close';
    shoppingCartIconClose.classList.add('shopping-cart__icon-close');
    shoppingCartIconClose.addEventListener('click', removeProductShoppingCart);

    
    shoppingCartFigure.appendChild(shoppingCartFigureImg);
    shoppingCart.append(shoppingCartFigure, shoppingCartName, shoppingCartPrice, shoppingCartIconClose);
    myOrderContent.insertBefore(shoppingCart, totalOrderAmount);

    updateTotalOrderAmount(i.price);
}

// *Variables que se usarán en la siguiente función
let total = 0;
let i = 0;
/**
 ** Description: Actualiza el precio total de la orden del carrito de compras cada vez que se añada un nuevo producto 
 * @param {*} price Es el precio del producto que se añadirá al carrito 
 */
function updateTotalOrderAmount(price) {
    if(price > 0) {
        navShoppingIcon.children[1].innerText = ++i;
    } else {
        navShoppingIcon.children[1].innerText = --i;
    }

    total = total + price;

    totalOrderAmount.children[1].innerText = '$' + total;
}

/**
 ** Description: Elimina el producto seleccionado del carrito de compras 
 * @param event Parámetro por defecto que establece el método .addEventListener
 */
function removeProductShoppingCart(event) {
    const shoppingCart = event.currentTarget.parentNode;
    const price = Number(shoppingCart.children[2].innerText.slice(1));
    
    shoppingCart.replaceWith('');
    updateTotalOrderAmount(-price);
}

/******************************************Login****************************************/

const navLogin = document.querySelector('.navbar-login');
const scriptLogin = document.querySelector('.script-login');

navLogin.addEventListener('click', addScriptLogin);

function addScriptLogin() {
    scriptLogin.setAttribute('src', './login/login.js');
    console.log('desde index.js');
    // window.history.pushState(null, '', './login/login.html');
    console.log('aqui en index.js');
}