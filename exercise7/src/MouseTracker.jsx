import { useState, useEffect } from "react";

const MouseTracker = ()=>{
    const [ position, setPosition]= useState({x:0, y:0});

    useEffect(()=>{
        const handleMouseTracker =(event)=>{
            setPosition({x:event.clientX, y:event.clientY})
        }
        window.addEventListener("mousemove", handleMouseTracker);

        return ()=>{
            window.removeEventListener("mousemove", handleMouseTracker)
        }
    })
    return(
<>
        <h1>Mouse X:{position.x}</h1>
        <h1>Mouse y:{position.y}</h1>
</>
    )
}

export default MouseTracker;