import products from './Data';
import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {FaShoppingCart,FaPlus} from 'react-icons/fa';
import Product from './Product';
import ProductWomen from './ProductWomen'
import './menWomenItems.css';

const WomenItems = () => {
  const [cart,setCart] = useState([]);
    const PAGE_PRODUCTS = 'products';
    const [page,setPage] = useState(PAGE_PRODUCTS);
    const PAGE_CART = 'cart';
    
    const navTo = (nextPage) => {
        setPage(nextPage)
    }
    const getTotalSum = () =>{
        return cart.reduce(
            (sum, {price}) => sum + price,0
        )
    }
    const addToCart = (product) => {
        setCart([...cart,{ ...product}])
    }
    const removeItem = (productRemove) => {
        setCart(cart.filter(product => product !== productRemove
        ));
}
const renderCart = () => (   
  <>
  <h1>Cart</h1>
      <div className="items">
          {cart.map((product,id) => (
              <div className="item" key={id}>
             <div className="item-img">
             <img src={product.img} alt={product.name} />  
             </div> 
             <div className="item-details">
             <h5>{product.name}</h5>
             <span>{product.description}</span>
             <p>${product.price}</p>
             <button onClick={()=>removeItem(product)}>Remove</button>
             </div>
            </div>
             
          ))}
          
      </div>
      <div className="total">Total Cost: ${getTotalSum().toFixed(2)}</div>
    
      </>
)
return(
  <main>
      <div className="header">
      <button onClick={() => navTo(PAGE_CART)}><FaShoppingCart className="fa" />{cart.length}</button>
      <button onClick={() => navTo(PAGE_PRODUCTS)}><FaPlus className="fa"/></button>
      </div>
      {page === PAGE_PRODUCTS && <ProductWomen 
      addToCart={addToCart} />}
      {page === PAGE_CART && renderCart() }
      </main>
)
}


export default WomenItems
