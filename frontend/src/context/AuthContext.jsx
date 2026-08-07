import {
  createContext,
  useState,
  useEffect
} from "react";

import {
  loginUser,
  registerUser
} from "../services/authService.js";

// CONTEXTO

export const AuthContext = createContext();

// PROVIDER

function AuthProvider({ children }) {

  // USER

  const [user, setUser] = useState(null);

  // LOADING

  const [loading, setLoading] = useState(true);

  // RECUPERAR SESIÓN

  useEffect(() => {

    const token = localStorage.getItem("token");

    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {

      setUser(JSON.parse(storedUser));
    }

    setLoading(false);

  }, []);

  // LOGIN

  const login = async(formData) => {

    try {

      const response = await loginUser(formData);

      console.log("LOGIN RESPONSE:", response);
      // TOKEN

      localStorage.setItem(
        "token",
        response.token
      );

      // USER

      localStorage.setItem(
        "user",
        JSON.stringify(response.user)
      );

      // STATE

      setUser(response.user);

      return response;

    } catch(error) {

      console.error(error);

      throw error;
    }
  };

  // REGISTER

  const register = async(formData) => {

    try {

      return await registerUser(formData);

    } catch(error) {

      console.error(error);

      throw error;
    }
  };

  // LOGOUT

  const logout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    setUser(null);
  };

  return (

    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout
      }}
    >

      {children}

    </AuthContext.Provider>
  );
}

export default AuthProvider;