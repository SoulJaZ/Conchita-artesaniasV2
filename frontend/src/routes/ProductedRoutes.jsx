import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ProductedRoutes({
  children
}){
  const {
    user, 
    loading
  } = useContext(AuthContext);

  // Si se está cargando, mostrar un mensaje de carga.
  if(loading){
    return <h2>Cargando...</h2>
  }

  // Si el usuario no está autenticado, redirigir a la página de inicio de sesión.
  if(!user){
    return <Navigate to="/login" />
  }

  // Si el usuario está autenticado, mostrar las rutas protegidas.
  return children ? children : <Outlet />
}
export default ProductedRoutes;