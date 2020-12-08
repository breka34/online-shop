import React, {useState, useContext} from 'react'
import './Header.css';
import {Link,Switch,Route} from 'react-router-dom';
import {FaShoppingCart } from "react-icons/fa";
// import Items from './Items';
import products from './Data';
import { CartContext } from './CartContext';


// import ItemsInCart from './ItemsInCart';
const Header = (props) => {
    return (
        <header>
            <div className="header-items">
            {/* <div className="icon-absolute">
            <Link to="/ShoppingCart" ><FaShoppingCart  className="icon"/></Link>
            <span ></span>
            </div> */}
                <h2>Online Shop</h2>
                <div className="header-btn">
                   <Link  exact to="/AllItems" > <button  type="button">All Items</button></Link>
                    <Link to="/MenItemsTitle" ><button className="second-btn" type="button">Men</button></Link>
                    <Link to="/WomenItemsTitle"><button className="third-btn" type="button">Women</button></Link>
                </div>
            </div>
            
            
        </header>
        
    )
}

export default Header
