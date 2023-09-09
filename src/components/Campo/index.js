// import { useState } from "react";
import "./Campo.css"

const Campo = (props) =>{

    const placeholderModificado = `${props.placeholder}...`

    //Destructuracion
    const { type = "text" } = props

    

    const cambio = (e) => {
        console.log("Cambio", e.target.value)
        props.actulizarValor(e.target.value)
    }    
    
    return <div className={`campo campo-${type}`}>
        <label htmlFor="">{props.titulo}</label>
        <input 
        placeholder={placeholderModificado}
         required={props.required} 
         value={props.valor} 
         onChange={cambio}
         type={type}
         />         
    </div>
}

export default Campo