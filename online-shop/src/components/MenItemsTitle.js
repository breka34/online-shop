import React from 'react'
import MenItems from './MenItems';
import './menWomenItems.css';
const MenItemsTitle = () => {
    return (
    <div className="mens-products">
    <div className="mens-title">
    <h4>Men's Items</h4>
    </div>
   
    <MenItems />
  </div>
    )
}

export default MenItemsTitle
