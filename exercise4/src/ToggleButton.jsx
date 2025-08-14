import { useState } from "react";

function ToggleButton(){
    const [isOn , setIsOn] = useState(false);
    const handleToggle = ()=>{
        setIsOn(!isOn)
    }
    return(
        <>
        <p>THE BUTTON IS {isOn ? "ON" : "OF"}</p>
        <button onClick={handleToggle}>TURN {isOn ? "OF" : "ON"}</button>
        </>
    )
}

export default ToggleButton;