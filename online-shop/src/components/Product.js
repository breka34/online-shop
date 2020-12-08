import React from 'react'
import products from './Data'
import {FaShoppingCart } from "react-icons/fa";

const Product = ({addToCart}) => {
   
    return (
        <>
        <h1>All Items</h1>
            <div className="items">
                {products.map((product,id) => (
                    <div className="item" key={id}>
                   <div className="item-img">
                   <img src={product.img} alt={product.name} />  
                   </div> 
                   <div className="item-details">
                   <h5>{product.name}</h5>
                   <span>{product.description}</span>
                   <p>${product.price}</p>
                   <button onClick={() => addToCart(product)} ><FaShoppingCart  className="fa-icon"/>Add Item</button>
                   </div>
                  </div>
                ))}
            </div>
            </>
    )
}

export default Product
