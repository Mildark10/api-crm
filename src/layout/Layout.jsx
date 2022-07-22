import { Outlet, Link, useLocation } from "react-router-dom"

const Layout = () => {
  const location = useLocation()//obtiene un objeto de tipo location
  const ulActual = location.pathname//obtiene el pathname de la location
//  console.log(location);
  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w1-4 bg-blue-500 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CrM-Clientes
        </h2>
        <nav className="mt-10">
          <Link className= {`${ulActual ==='/clientes' ? 'text-blue-300' :'text-white' }  text-2xl block mt-2 hover:text-blue-300`}
            to="/clientes">
            Clientes
          </Link>
          <Link className= {`${ulActual ==='/clientes/nuevo' ? 'text-blue-300' :'text-white' }  text-2xl block mt-2 hover:text-blue-300`}
            to="/clientes/nuevo">
            Nuevo Cliente
          </Link>
        </nav>
      </div>
      <div className="md:w-3/4 p-10 md:h-screen" >
        <Outlet />
      </div>
      
    </div>
    
  )
}
export default Layout