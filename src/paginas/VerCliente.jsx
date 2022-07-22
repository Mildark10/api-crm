import { useState ,useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner';
const VerCliente = () => {
    const [clientes, setCliente] = useState({})
    //para cuando se llame a nuestra api y no sobre cargargar la pagina se va crear el cargando
    const [cargando, setCargando] = useState(true)

    const { id } = useParams()
    //hacer llamado a la api
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
    }, [])//se ejecuta una vez y cuando sucede una vez se manda []
    
    console.log('VerCliente', id);
    return (
        cargando ? <Spinner /> : 
        Object.keys(clientes).length === 0 ?
                <p className="text-5xl text-gray-900">
                    No Hay Resultados</p> :
            (
                <>
                    <p className='text-5xl  text-gray-500'>
                        <span className='uppercase text-gray-800 font-bold '>Cliente: </span>
                        { clientes.nombre}
                    </p>
                    <p className='text-2xl  text-gray-500'>
                        <span className='uppercase text-gray-800 font-bold mt-4'>Email: </span>
                        { clientes.email}
                    </p>
                    <p className='text-2xl  text-gray-500'>
                        <span className='uppercase text-gray-800 font-bold mt-4'>Teléfono: </span>
                        { clientes.telefono}
                    </p>
                    <p className='text-2xl  text-gray-500'>
                        <span className='uppercase text-gray-800 font-bold mt-4'>Empresa: </span>
                        { clientes.empresa}
                    </p>
                    <p className='text-2xl  text-gray-500'>
                        <span className='uppercase text-gray-800 font-bold mt-4'>Notas: </span>
                        { clientes.notas}
                    </p>
                </>
            )    

    )
}

export default VerCliente
