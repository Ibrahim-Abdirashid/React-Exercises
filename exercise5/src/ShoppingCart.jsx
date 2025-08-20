import { useState } from "react"

const ShoppingCart = ()=>{
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");

   const handleAddProduct= ()=>{
    if(productName.trim() !== "" && productPrice.trim() !== ""){
        const newProduct = {
            id : Date.now(),
            name : productName,
            price : parseFloat(productPrice),
            quantity : 1,
        }
        setProducts([...products, newProduct])
    }
    setProductName('')
    setProductPrice('')
   }

   const removeProduct =(id)=>{
        const updatedProduct = products.filter(product => product.id !== id);
        setProducts(updatedProduct)
    }
    const increaseQuantity = (id)=>{
        const updatedProducts = products.map(product =>(
            product.id === id? {...product, quantity : product.quantity +1} : product
        ))
        setProducts(updatedProducts)
    }
    const DeccreaseQuantity = (id)=>{
        const updatedProducts = products.map(product =>(
            product.id === id && product.quantity > 1 ? {...product, quantity : product.quantity -1}: product));
            setProducts(updatedProducts)
    }
    const totalPrice  = products.reduce((total , product)=> total + product.price * product.quantity ,0)

    return(
        <div>
            <h2>Simple Shopping Cart</h2>
            <div >
                <input type="text" name="" id="" value={productName} onChange={(e)=> setProductName(e.target.value)} placeholder="product Name" />
                <input type="number" name="" id="" value={productPrice} min="0" onChange={(e)=> setProductPrice(e.target.value)} placeholder="price"/>

                <button onClick={handleAddProduct}>Add to cart</button>
            </div>
            <div>
                {
                    products.length > 0 ?(
                        <div>
                        <h3>Products in cart</h3>
                        {/* list of the products */}
                        <ul>
                        {
                            products.map(product =>(
                                <li key={product.id}>
                                    <strong>{product.name}</strong> - ${product.price.toFixed(2)}
                                    <div>
                                        quantity:
                                        <button onClick={() => DeccreaseQuantity(product.id)}>-</button>
                                        {product.quantity}
                                        <button onClick={() => increaseQuantity(product.id)}>+</button>
                                        <div>
                                            <button onClick={()=> removeProduct(product.id)}>Remove</button>
                                        </div>
                                    </div>
                                </li>
                            ))
                        } 
                        </ul>
                        <h3>Total Price: ${totalPrice}</h3>
                        </div>
                    ): <p>this cart is empty</p>
                }
            </div>
        </div>
    )
}

export default ShoppingCart;