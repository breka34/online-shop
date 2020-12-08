import React, { useState } from 'react';
import products from './Data';
export const CartContext = React.createContext()

export const CartProvider = (props) => {
    return(
        <CartContext.Provider >
             {props.childern}
        </CartContext.Provider>
       
    )
}
    
