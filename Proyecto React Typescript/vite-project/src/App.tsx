import { useState } from "react"
import ComponentCounter from "./components/ComponentCounter/ComponentCounter"
import MiPrimerComponent from "./components/MiPrimerComponent"
import ComponentUseEffect from "./components/ComponentUseEffect/ComponentUseEffect"
import FormComponent from "./components/FormComponent/FormComponent"
import AppProduct from "./components/AppProduct/AppProduct"



export const App = () => {

    return (
    <div style={{display:'flex', flexDirection:"column",gap: "2vh"}}>
        {/* <MiPrimerComponent
        text={"Texte desde propiedades"} 
        color='red'
        fontsize={3}
        />
        <ComponentCounter />
        <ComponentUseEffect /> */}
        {/* <FormComponent/> */}
        <AppProduct/>
        
    </div>
    )
}

export default App
