import React from 'react';
import {observer} from 'mobx-react-lite';
import cartStore from '../stores/CartStore';
import {Link} from 'react-router-dom';

const Header = observer(() => (
    <div className="App-header">
        <Link to="/" className="App-link">
            Список товаров
        </Link>
        <Link to="/cart" className="App-link">
            Корзина ({cartStore.cartCount})
        </Link>
    </div>
));
export default Header;
