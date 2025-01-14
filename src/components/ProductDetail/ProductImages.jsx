import React from 'react';

const ProductImages = ({ selectedColor, currentImageIndex, handleNextImage, handlePrevImage }) => {
    return (
        <div className="product-imgs">
            <img
                src={selectedColor.images[currentImageIndex]}
                alt={selectedColor.name}
            />
            <div className="imgs-navs">
                <button
                    onClick={handlePrevImage}
                    disabled={currentImageIndex === 0}
                    className="nav-prev nav-arrow"
                >
                    &#10229;
                </button>
                <button
                    onClick={handleNextImage}
                    disabled={currentImageIndex === selectedColor.images.length - 1}
                    className="nav-next nav-arrow"
                >
                    &#10230;
                </button>
            </div>
        </div>
    );
};

export default ProductImages;