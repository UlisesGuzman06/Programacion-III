import { FC } from "react"

interface IPropsMiPrimerComponenet{
    text:string
    color:string
    fontsize?:number
}


export const MiPrimerComponent : FC<IPropsMiPrimerComponenet> = ({text,color,fontsize}) => {
    return (
    <div style={{color: `${color}`,fontSize: `${fontsize || 1}rem`}}>
        <p>{text}</p>
    </div>
    )
}

export default MiPrimerComponent
