import {makeAutoObservable} from 'mobx';

class CartStore {
    cartItems = [];

    constructor() {
        makeAutoObservable(this);
        this.loadCart();
    }

    addToCart({ product, color, size }) {
        if (!product || !color || !size) {
            console.error('addToCart: отсутствуют обязательные параметры', { product, color, size });
            return;
        }

        const exists = this.cartItems.find(
            (item) => item.product.id === product.id && item.color.id === color.id && item.size.id === size.id
        );

        if (exists) {
            alert('Выберите другой цвет или размер');
            return;
        }

        this.cartItems.push({ product, color, size });
        this.saveCart();
    }

    removeFromCart(index) {
        this.cartItems.splice(index, 1);
        this.saveCart();
    }

    get cartCount() {
        return this.cartItems.length;
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }

    loadCart() {
        const savedCart = localStorage.getItem('cart');

        if (savedCart) {
            this.cartItems = JSON.parse(savedCart);
        }
    }
}

const cartStore = new CartStore();
export default cartStore;
