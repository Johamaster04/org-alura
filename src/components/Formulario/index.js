import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../boton"

const Formulario = (props) => {
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const[titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) =>{
        e.preventDefault()
        console.log("Manejar Envio")
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }

        registrarColaborador(datosEnviar)
        
    }

    const manejarNuevoEquipo= (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return (
      <section className="formulario">
        <form onSubmit={manejarEnvio}>
          <h2>Rellena el formulario para crear el colaborador.</h2>
          <Campo
            titulo="Nombre"
            placeholder="Ingresa tu Nombre"
            required={true}
            valor={nombre}
            actulizarValor={actualizarNombre}
          />
          <Campo
            titulo="Puesto"
            placeholder="Ingresa tu Puesto"
            required
            valor={puesto}
            actulizarValor={actualizarPuesto}
          />
          <Campo
            titulo="Foto"
            placeholder="Ingresar enlace de Foto"
            required
            valor={foto}
            actulizarValor={actualizarFoto}
          />
          <ListaOpciones
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
          />
          <Boton>Crear</Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
          <h2>Rellena el formulario para crear el equipo.</h2>
          <Campo
            titulo="Titulo"
            placeholder="Ingresa tu Titulo"
            required={true}
            valor={titulo}
            actulizarValor={actualizarTitulo}
          />
          <Campo
            titulo="Color"
            placeholder="Ingresar color Hex"
            required
            valor={color}
            actulizarValor={actualizarColor}
            type="color"
          />

          <Boton>Registrar Equipo</Boton>
        </form>
      </section>
    );
}

export default Formulario