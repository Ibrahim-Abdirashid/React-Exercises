import { useState, useEffect } from "react";
const GreetingTitle = ()=>{

    const [ name, setName] = useState("")
    const [greeting, setGreeting] = useState("Hello")

    useEffect(()=>{
        if(name === ""){
            document.title = "welcome"
        }else{
            document.title = [greeting, name]
        }
    },[name , greeting])

    return(
        <div>
            <h1>Enter Your Name</h1>
            <input type="text" name="" value={name} onChange={(e)=> setName(e.target.value)} />
            <h1>Choose a greeting:</h1>
            <input type="text" name="" value={greeting} onChange={(e)=> setGreeting(e.target.value)} id="" />
        </div>
    )
}

export default GreetingTitle;