export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) cart = [];

export function saveToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
    let increment = false;

    cart.forEach((cartItem) => {
        if (cartItem.productId === productId) {
            increment = true;
            cartItem = { ...cartItem, quantity: cartItem.quantity++ };
        }
    });

    if (!increment) {
        cart.push({
            productId,
            quantity: 1,
        });
    }
    saveToLocalStorage();
}

export function incrementCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });
    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}

export function removeFromCart(id) {
    cart = cart.filter((cartItem) => cartItem.productId !== id);
    saveToLocalStorage();
}
