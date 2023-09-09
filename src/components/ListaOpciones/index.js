import "./ListaOpciones.css"

const ListaOpciones = (props) => {


//Metodo para recorrer el arreglo equipo y no es una funcion es un metodo de los arreglos
// Metodo map -> arreglo.map((arreglo, index) =>{
//     return <option></option>
// })

const manejarCambio = (e) => {
    console.log("cambio", e.target.value)
    props.actualizarEquipo(e.target.value)
}


    return <div className="lista-opciones">
        <label htmlFor="">Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            { props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>
            )}
        </select>
    </div>
}

export default ListaOpciones