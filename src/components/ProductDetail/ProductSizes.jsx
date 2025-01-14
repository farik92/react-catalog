import React from 'react';

const ProductSizes = ({ availableSizes, selectedColor, selectedSize, setSelectedSize }) => {
    if (!selectedColor) {
        return <p>Выберите цвет, чтобы увидеть доступные размеры.</p>;
    }

    const sizeOptions = availableSizes.map(size => ({
        ...size,
        available: selectedColor?.sizes.includes(size.id),
    }));

    return (
        <div className="product-sizes product-attrs">
            <h3>Выберите размер:</h3>
            {sizeOptions.map(size => (
                <button
                    key={size.id}
                    onClick={() => setSelectedSize(size)}
                    disabled={!size.available}
                    className={
                        selectedSize?.id === size.id && size.available ? 'active' : ''
                    }
                >
                    {size.label} ({size.number})
                </button>
            ))}
        </div>
    );
};

export default ProductSizes;
