import { useEffect, useState } from "react"

export const ComponentUseEffect = () => {
    

    const [state,setState] = useState(false)
    useEffect(()=>{
    
        console.log("componente montado")
        return ()=>{
            console.log("componente desmontado")
        }
    },[])
    useEffect(()=>{
    
        console.log(state)

    },[state])



    return (
    <div>
        <p>{state? "Es true": "Es false"}</p>
        <button onClick={()=>{
            setState(!state)
        }}>cambiar state</button>
    </div>
    )
}

export default ComponentUseEffect
