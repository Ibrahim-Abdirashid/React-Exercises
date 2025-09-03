import { useState } from "react";
const Counter = ()=>{
    const [count, setCount] = useState(0)
    const handleIncrease = ()=> {
        setCount(count +1)
    }
    const handleDecrease = () =>{
        setCount(count -1)
    }
    return(
        <>
    <h1>Count: {count}</h1>
    <button disabled={count === 0 } onClick={handleDecrease}>Decrease</button>
    <button  onClick={handleIncrease}>increament</button>
        </>
    )
}

export default Counter;