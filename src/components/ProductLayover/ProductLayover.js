import React from 'react';
import '../../styles/productLayover.css';

export const ProductLayover = ((product) => {
    return (
        <div className="productContainer shoe">
            <div className="productImage shoeImg">
                <img
                    className="products-shoe-image"
                    alt={product.product.name}
                    src={product.product.img}
                />
            </div>
            <div className="size shoeSize">
                <h4>SIZE</h4>
                <ul>
                    {product.product.size.map((size) => {
                        return (
                            <li>{size}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="price shoePrice">
                <h4>PRICE</h4>
                <span>${product.product.price}</span>
            </div>
            <div className="color shoeColor">
                <h4>COLORS</h4>
                <span>{product.product.color}</span>
            </div>
            <div className="productName shoeName">
                {product.product.name}
            </div>
        </div>
    )
});
