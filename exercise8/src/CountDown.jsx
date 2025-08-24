
import { useState, useEffect } from "react";  

const CountDown = ()=>{
    const [ initialTime, setInitialTime] = useState(30);
    const [timeLeft, setTimeLeft] = useState(30);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(()=>{
        let timerId;
        if(isRunning && timeLeft > 0){
          timerId=  setInterval(() => {
                setTimeLeft((prev)=> prev -1)
            }, 1000);
        }

        return()=> clearInterval(timerId)
    }, [isRunning, timeLeft])
   


    const handleStart = ()=>{
        if(timeLeft > 0){

            setIsRunning(true)
        }
    }
    const handleStop = ()=>{
        setIsRunning(false)
    }

    const handleReset = ()=>{
        setIsRunning(false);
        setTimeLeft(initialTime)
    }
    const handleChange=(e)=>{
        const value = Number(e.target.value);
        setInitialTime(value)
        setIsRunning(value)
        setTimeLeft(value)
    }
    return(
        <div>
            <span>set time (seconds):</span> <input type="number" name="" value={initialTime} id="" onChange={handleChange} />
            <h1>Time Left: {timeLeft} seconds</h1>
            <button onClick={handleStart}  disabled={isRunning || timeLeft ===0}>start</button>
            <button onClick={handleStop} disabled={!isRunning}>stop</button>
            <button onClick={handleReset}>reset</button>
        </div>

    )
}
export default CountDown;