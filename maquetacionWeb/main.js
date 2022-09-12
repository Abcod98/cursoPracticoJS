const menuEmail = document.querySelector('.navbar-email')
const menuListIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuListIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
    shoppingCartContainer.classList.add('inactive')
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
    shoppingCartContainer.classList.add('inactive')
}

function toggleCarritoAside() {
    shoppingCartContainer.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
})
productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
})
productList.push({
    name: "Laptop",
    price: 320,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
})

/*< div class="product-card" >
    <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="">
    <div class="product-info">
        <div>
            <p>Q120.00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>

  </div>*/

function rendersProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = 'Q' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.append(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.append(productCard);
    }
}
rendersProducts(productList);