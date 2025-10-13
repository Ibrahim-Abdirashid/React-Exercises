
import React from 'react';
import  CartContext  from "./CartContext";
import { useContext } from 'react';



function CartSummary() {

    const {cartItems, removeFromCart} = useContext(CartContext);
    return (
        <div>
            <h1>Cart Summary</h1>
            <p>total itmes in cart: {cartItems.length}</p>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CartSummary;