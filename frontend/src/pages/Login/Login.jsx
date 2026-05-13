import {
 useState,
 useContext
} from "react";

import { useNavigate } from "react-router-dom";

import {
 AuthContext
} from "../../context/authContext";


// Componente Login
function Login(){

 // Navegación
 const navigate = useNavigate();

 // Contexto auth
 const {login} = useContext(AuthContext);


 // ============================
 // ESTADOS FORMULARIO
 // ============================

 const [formData,setFormData] = useState({

   email:"",
   password:""

 });


 // ============================
 // MANEJAR INPUTS
 // ============================

 const handleChange = (e)=>{

   setFormData({

     ...formData,

     [e.target.name]:e.target.value

   });
 };


 // ============================
 // ENVIAR LOGIN
 // ============================

 const handleSubmit = async(e)=>{

   e.preventDefault();

   try{

     // Login backend
     await login(formData);

     // Redirigir
     navigate("/dashboard");

   }catch(error){

     console.error(error);

     alert("Error login");
   }
 };


 return(

  <main>

    <h1>Login</h1>

    <form onSubmit={handleSubmit}>

      <input
        type="email"
        name="email"
        placeholder="Correo"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        onChange={handleChange}
      />

      <button type="submit">

        Iniciar sesión

      </button>

    </form>

  </main>
 )
}

export default Login;