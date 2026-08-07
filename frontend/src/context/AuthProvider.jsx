import {

  useState,
  useEffect

} from "react";


// Context
import {

  AuthContext

} from "./AuthContext.jsx";


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

  const [user, setUser] = useState(null);

  const [loading,setLoading] = useState(true);
  // RECUPERAR SESIÓN
  useEffect(()=>{

    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");


    if(token && storedUser){
      setUser(JSON.parse(storedUser));  
    }

    setLoading(false);

  },[]);
  // LOGIN
  const login = async(data)=>{

    const response = await loginUser(data);

    console.log("LOGIN RESPONSE:", response);


    // Guardar usuario
    // Guardar token
    localStorage.setItem(
        "token",
        response.token
    );


    // Persistencia
    localStorage.setItem(

      "user",

      JSON.stringify(response.user)
    );

    setUser(response.user);

    return response;
  };
  // REGISTRO

  const register = async(data)=>{

    return await registerUser(data);
  };
  // LOGOUT

  const logout = ()=>{

    setUser(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
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