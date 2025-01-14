import React from 'react';
import {observer} from 'mobx-react-lite';
import cartStore from '../stores/CartStore';
import {Link} from 'react-router-dom';

const Cart = observer(() => (
    <div className="App-cart">
        <h1>Корзина</h1>
        <div className="App-cart-items">
            {cartStore.cartItems.map((item, index) => {
                const colorDetails = item.product.colors.find((c) => c.id === item.color.id);

                return (
                    <div key={index} className="App-cart-item">
                        <Link to={`/product/${item.product.id}?colorId=${item.color.id}&sizeId=${item.size.id}`} className="App-link">
                            <img
                                src={colorDetails.images[0]}  // Первое изображение цвета
                                alt={`${item.product.name} ${colorDetails.name} ${item.size.label}`}
                            />
                            <p className="product-name">{item.product.name}</p>
                        </Link>
                        <p className="product-color product-attr">Цвет: {colorDetails.name}</p>
                        <p className="product-size product-attr">Размер: {item.size.label}</p>
                        <p className="product-price product-attr">Цена: {colorDetails.price} ₽</p>
                        <button
                            onClick={() => cartStore.removeFromCart(index)}
                            className="product-remove"
                        >
                            Удалить
                        </button>
                    </div>
                );
            })}

        </div>
    </div>
));

export default Cart;
