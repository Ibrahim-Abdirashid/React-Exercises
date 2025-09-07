import { useReducer } from "react";

const initialState = {count : 0, counter :0};

const reducer = (state ,action)=>{
    switch (action.type) {
        case "increament":
            return {...state, count: state.count +1}
        case "Decreament" :
            return {...state, count: state.count -1}
        case "increeament":
            return {...state, counter: state.counter +1}
        case "decreeament":
            return {...state, counter: state.counter -1}
        case "reset":
            return initialState
        }
}


const DoubleCounter = ()=>{
    const [state, dispatch] = useReducer(reducer, initialState)


    return(
        <>
        <h1>Double Counter</h1>

        <p>counter A:{state.count}</p>
        <button onClick={()=> dispatch({type: "increament"})}>Increament</button>
        <button onClick={()=> dispatch({type: "Decreament"})}>Decreament</button>

        <p>counter B:{state.counter}</p>
        <button onClick={()=> dispatch({type:"increeament"})}>+B</button>
        <button onClick={()=> dispatch({type: "decreeament"})}>-B</button>
        <div>
        <button onClick={()=> dispatch({type:"reset"})}>reset</button>
        </div>
        </>
    )
}

export default DoubleCounter;