import CartContext  from "./CartContext";
import CartSummary from "./CartSummary";
import ProductItem from "./ProductItem";
import { useState } from "react";



function App() {
  const [cartItems , setCarItems] = useState([]);

  const addToCart = (item) => {
    setCarItems([...cartItems , item]);
  }

  const removeFromCart = (itemId) => {
    setCarItems(cartItems.filter(item => item.id !== itemId));
  }

  const value={cartItems , addToCart , removeFromCart}

  return (
    <CartContext.Provider value={value}>
      <ProductItem itemId={1} name="Product 1" price={100}  />
      <ProductItem itemId={2} name="Product 2" price={200}  />
      <ProductItem itemId={2} name="Product 3" price={500}  />
      <CartSummary />
    </CartContext.Provider>
  );
}

export default App;