import React from 'react'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Formulario from '../components/Formulario'

const EditarCliente = () => {
  const [cliente, setCliente] = useState({})
  const [cargando, setCargando] = useState(true)
  const { id } = useParams()
  useEffect(() => {
    const obtenerClienteApi = async () => {
        try {
            const url= `http://localhost:4000/clientes/${id}`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            setCliente(resultado)
        } catch (error) {
            console.error(error)
        }
       // setTimeout(() => setCargando(!cargando), 1000)
      setCargando(!cargando) //negacion false
    }
    obtenerClienteApi()
}, [])


  return (
    <>
    <h1 className='font-black text-4xl text-blue-900'>Editar  Cliente</h1> 
    <p className="mt-3">Utiliza este formulario para editar datos del cliente</p>
    {cliente?.nombre ? (
      <Formulario 
          cliente={cliente}
          cargando={cargando}
      />
      ) :
        <p>Cliente ID no válido</p>
    }
  </>
  )
}

export default EditarCliente