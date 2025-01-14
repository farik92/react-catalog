import React from 'react';

const ProductColors = ({ product, selectedColor, setSelectedColor, setSelectedSize, setCurrentImageIndex }) => {
    return (
        <div className="product-colors product-attrs">
            <h3>Выберите цвет:</h3>
            {product.colors.map(color => (
                <button
                    key={color.id}
                    onClick={() => {
                        setSelectedColor(color);
                        setSelectedSize(null);
                        setCurrentImageIndex(0);
                    }}
                    className={selectedColor?.id === color.id ? 'active' : ''}
                >
                    {color.name}
                </button>
            ))}
        </div>
    );
};

export default ProductColors;