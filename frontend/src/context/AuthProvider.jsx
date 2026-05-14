import {

  useState,
  useEffect

} from "react";


// Context
import {

  AuthContext

} from "./AuthContext";


// Servicios auth
import {

  loginUser,
  registerUser

} from "../services/authService";

// PROVIDER AUTH GLOBAL
function AuthProvider({

  children

}){
  // ESTADO USUARIO

  const [user,setUser] = useState(null);

  const [loading,setLoading] = useState(true);
  // RECUPERAR SESIÓN
  useEffect(()=>{

    const storedUser = localStorage.getItem("user");


    if(storedUser){

      setUser(

        JSON.parse(storedUser)
      );
    }

    setLoading(false);

  },[]);
  // LOGIN
  const login = async(data)=>{

    const response = await loginUser(data);


    // Guardar usuario
    setUser(response);


    // Persistencia
    localStorage.setItem(

      "user",

      JSON.stringify(response)
    );
  };
  // REGISTRO

  const register = async(data)=>{

    return await registerUser(data);
  };
  // LOGOUT

  const logout = ()=>{

    setUser(null);

    localStorage.removeItem("user");
  };
  // PROVIDER

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