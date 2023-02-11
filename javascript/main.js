const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart')


const navbarHamMenu = document.querySelector('.hamburguer-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart  = document.querySelector('.shopping-cart')

navBarEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu() {
    // if the shopping cart is open, close it    
    if(!shoppingCart.classList.contains('inactive')){
        shoppingCart.classList.toggle('inactive');
    }
    // if the mobile menu is open, then close it
    if(!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.toggle('inactive');
    }

    // show or close the desktop menu
    desktopMenu.classList.toggle('inactive');
}

navbarHamMenu.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu() {
    // if the shopping cart is open, close it    
    if(!shoppingCart.classList.contains('inactive')){
        shoppingCart.classList.toggle('inactive');
    }

    // if the desktop menu is open, then close it
    if (!desktopMenu.classList.contains('inactive')){
        !desktopMenu.classList.toggle('inactive');
    }

    // show or close the mobile menu
    mobileMenu.classList.toggle('inactive');
}

navbarShoppingCart.addEventListener('click', toggleShoppingCart);
function toggleShoppingCart() {

    // if the mobile menu is open, then close it
    if(!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.toggle('inactive');
    }

    // if the desktop menu is open, then close it
    if(!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.toggle('inactive');
    }

    // Show or close the cart
    shoppingCart.classList.toggle('inactive');
}

const cardContainer = document.querySelector('.card-container')
const productList = [];

function fillProductList () {
    productList.push(
        {
            name: 'Bike',
            price: 120.00,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            alt: 'New brand bike'
        }
    )
    
    productList.push(
        {
            name: 'Clock',
            price: 150.5,
            image: 'https://images.pexels.com/photos/14668285/pexels-photo-14668285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'The finnest clock'
        }
    )
    
    productList.push(
        {
            name: 'Coffee',
            price: 25,
            image: 'https://images.pexels.com/photos/14255782/pexels-photo-14255782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'Coffee just made'
        }
    )
    
    productList.push(
        {
            name: 'Bike',
            price: 120.00,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            alt: 'New brand bike'
        }
    )
    
    productList.push(
        {
            name: 'Clock',
            price: 150.5,
            image: 'https://images.pexels.com/photos/14668285/pexels-photo-14668285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'The finnest clock'
        }
    )
    
    productList.push(
        {
            name: 'Coffee',
            price: 25,
            image: 'https://images.pexels.com/photos/14255782/pexels-photo-14255782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'Coffee just made'
        }
    )
    productList.push(
        {
            name: 'Bike',
            price: 120.00,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            alt: 'New brand bike'
        }
    )
    
    productList.push(
        {
            name: 'Clock',
            price: 150.5,
            image: 'https://images.pexels.com/photos/14668285/pexels-photo-14668285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'The finnest clock'
        }
    )
    
    productList.push(
        {
            name: 'Coffee',
            price: 25,
            image: 'https://images.pexels.com/photos/14255782/pexels-photo-14255782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'Coffee just made'
        }
    )
    productList.push(
        {
            name: 'Bike',
            price: 120.00,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            alt: 'New brand bike'
        }
    )
    
    productList.push(
        {
            name: 'Clock',
            price: 150.5,
            image: 'https://images.pexels.com/photos/14668285/pexels-photo-14668285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'The finnest clock'
        }
    )
    
    productList.push(
        {
            name: 'Coffee',
            price: 25,
            image: 'https://images.pexels.com/photos/14255782/pexels-photo-14255782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'Coffee just made'
        }
    )    
}

fillProductList();

function renderProduct(productArray) {
    for (product of productArray){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.setAttribute('alt', product.alt);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const textsDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+ product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        textsDiv.appendChild(productPrice);
        textsDiv.appendChild(productName);
        
        const figureForImage = document.createElement('figure');
        const imgAddToCart = document.createElement('img');
        imgAddToCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        imgAddToCart.setAttribute('alt', 'Add to shopping cart');

        figureForImage.appendChild(imgAddToCart);

        productInfo.appendChild(textsDiv);
        productInfo.appendChild(figureForImage);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardContainer.appendChild(productCard)

    }
}

renderProduct(productList);