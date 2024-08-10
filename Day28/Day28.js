// Day 28: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197484

const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');
const cartBtn = document.querySelector('.cart');
const cartBox = document.getElementById('shopping-cart');
const cartCloseBtn = document.querySelector('.closeBtn');
const closeCheckout = document.querySelector('.closeCheckout');
const checkoutBox = document.getElementById('checkout-form');
const form = document.getElementById('form');
const name = document.getElementById('name');
const address = document.getElementById('address');
const payment = document.getElementById('payment');

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

let products = []
let cart = [];

async function fetchData(moreData = 1) {
    try {
        const totalData = 6 * moreData
        const response = await fetch('https://fakestoreapi.com/products?limit=' + totalData)

        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const data = await response.json();
        products = data

        displayData()

    } catch (err) {
        console.log('Fetching data failed', err.message)
    }
}

function displayData() {

    productList.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product';
        productCard.innerHTML = `
            <div class="image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div>
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p>Rs.${product.price}</p>
                <button class="addCart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const cartItem = cart.find(item => item.product.id === productId);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ product, quantity: 1 });
        }
        updateCart();
    }
}

function updateCart() {
    cartBtn.textContent = `Cart: ${cart.length}`;
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.product.price * item.quantity;
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            ➡️ ${item.product.title} - Rs.${item.product.price} x ${item.quantity}
            <button onclick="removeFromCart(${item.product.id})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });
    totalPrice.textContent = total.toFixed(2);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    updateCart()
}

function Checkout() {
    cartBox.style.display = 'none';
    cartBox.close();

    checkoutBox.style.display = 'block';
    checkoutBox.showModal();
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameVal = name.value;
    const addressVal = address.value;
    const paymentVal = payment.value

    const data = [nameVal, addressVal, paymentVal]
    window.alert(data);
})

function openCart() {
    cartBox.style.display = 'block';
    cartBox.showModal();
}

cartCloseBtn.addEventListener('click', () => {
    cartBox.style.display = 'none';
    cartBox.close();
})

closeCheckout.addEventListener('click', () => {
    checkoutBox.style.display = 'none';
    checkoutBox.close();
})