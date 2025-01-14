import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import productStore from '../stores/ProductStore';
import {Link} from 'react-router-dom';

const ProductList = observer(() => {
    useEffect(() => {
        productStore.fetchProducts();
    }, []);
    return (
        <div className="App-catalog">
            <h1>Каталог</h1>
            <div className="App-catalog-items">
                {productStore.products.map(product => (
                    <div key={product.id} className="App-catalog-item">
                        <Link to={`/product/${product.id}`} className="App-link">
                            {product.colors[0]?.images[0] && (
                                <img src={product.colors[0].images[0]} alt={product.name}/>
                            )}
                            <p className="product-name">{product.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
});
export default ProductList;
