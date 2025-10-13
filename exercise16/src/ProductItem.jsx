import React from 'react';
import  CartContext  from "./CartContext";
import { useContext } from 'react';


function ProductItem({itemId , name , price}) {

    const {addToCart} = useContext(CartContext);
    const handleAdd = () => {
        addToCart( {id: itemId, name: name, price: price});
    }
    return (
        <div>
            <h1>{name}</h1>
            <p>${price}</p>
            <button onClick={handleAdd}>Add to Cart</button>
        </div>
    )
}

export default ProductItem;