import React from 'react'
import {FaShoppingCart } from "react-icons/fa";
import products from './Data'

const ProductWomen = ({addToCart}) => (
    <div className="items">
    {products.map((product) => {
        if(product.gender === 'women') {
            return(
                <div className="item">
                <div className="product-img">
              <img alt={product.name} src={product.img} />
            </div>
            <div className="product-details">
              <h1 id="product-name">{product.name}</h1>
              <h4 id="product-description">{product.description}</h4>
            </div>
            <div className="price-add">
              <span id="product-price">${product.price}</span>
            </div>
            <button onClick={() => addToCart(product)}><FaShoppingCart  className="fa-icon"/>Add Item</button>
                </div>
            )
        }
    })}
    </div>
    
)

    

export default ProductWomen;
