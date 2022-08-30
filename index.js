// *Contenedor para Oscurecer Pantalla 
const darkeningContainer = document.querySelector('#darkening-container');

// *navEmail existe solo en la versión desktop, es la variable a cargo para recibir el evento del mouse y desktopMenu es la variable encargada de desplegar el menu o ventana que muestran las opciones de 'My order', 'My account' y 'Sign out' 
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

// *Eventos de Click de algunas variables claves
navEmail.addEventListener('click', toggleDesktopMenu);
navMenuIcon.addEventListener('click', toggleMobileMenu);
navShoppingIcon.addEventListener('click', toggleContainerShoppingCart);
productDetailIconClose.addEventListener('click', closeProductDetail);

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
function showProductDetail() {
    closeDropdownsWindows(productDetail)
    productDetail.classList.remove('inactive');
    darkeningContainer.classList.add('darken');
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