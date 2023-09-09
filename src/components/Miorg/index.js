// import { useState } from "react"
import "./Miorg.css"

const MiOrg = (props) => {
    // Estado - Hooks
    //Funcion useState
    // const [nombre, FuncionQueActualiza] = useState(valorinicial)

    // const [mostrar, actualizarMostrar]= useState(true)
    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar Elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection" >
        <h3 className="tittle">Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />

    </section>
}

export default MiOrg