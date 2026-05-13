// Hooks React
import {
 createContext,
 useState,
 useEffect
} from "react";


// Servicios auth
import {
 loginUser,
 registerUser
} from "../services/authService";


// Crear contexto
export const AuthContext = createContext();


// Provider global
function AuthProvider({children}){


 // ============================
 // ESTADO USUARIO
 // ============================

 const [user,setUser] = useState(null);

 // Estado loading
 const [loading,setLoading] = useState(true);


 // ============================
 // RECUPERAR SESIÓN
 // ============================

 useEffect(()=>{

   // Obtenemos usuario guardado
   const storedUser = localStorage.getItem("user");

   // Si existe
   if(storedUser){

     setUser(
       JSON.parse(storedUser)
     );
   }

   setLoading(false);

 },[]);


 // ============================
 // LOGIN
 // ============================

 const login = async(data)=>{

   // Llamamos backend
   const response = await loginUser(data);

   // Guardamos usuario
   setUser(response);

   // Persistencia sesión
   localStorage.setItem(
     "user",
     JSON.stringify(response)
   );
 };


 // ============================
 // REGISTRO
 // ============================

 const register = async(data)=>{

   return await registerUser(data);
 };


 // ============================
 // LOGOUT
 // ============================

 const logout = ()=>{

   // Eliminamos usuario
   setUser(null);

   // Limpiamos localStorage
   localStorage.removeItem("user");
 };


 // ============================
 // RETORNO PROVIDER
 // ============================

 return(

  <AuthContext.Provider

    value={{
      user,
      login,
      register,
      logout,
      loading
    }}

  >

    {children}

  </AuthContext.Provider>
 )
}

export default AuthProvider;