import { useState } from "react"

export const ComponentCounter = () => {
    const [counter,setCounter] = useState<number>(0)
    
    const IncrementarCounter = ()=>{
        setCounter((prev)=>prev+1)
    }
    const DecrementarCounter = ()=>{
        if(counter >0)
            setCounter((prev)=>prev-1)
    }
    
    
    return (
        <div>   
            <h2>valor de counter: {counter}</h2>
            <button onClick={IncrementarCounter}>Incrementar</button>
            <button onClick={DecrementarCounter}>Decrementar</button>
        </div>
    )
}

export default ComponentCounter
