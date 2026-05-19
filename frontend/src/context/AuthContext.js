// Hooks React
import {
 createContext,
 useState,
 useEffect

} from "react";

import api from "../services/api";

// Crear contexto
export const AuthContext = createContext();

// Proveedor de contexto
function AuthProvider ({ children }) => {

    // ESTADO DE USUARIO
    const [user, setUser] = useState(null);

    // ESTADO DE TOKEN
    const [token, setToken] = useState(
        localStorage.getItem("token") || null
    );
    // LOADING
    const [loading, setLoading] = useState(true);

    // CARGAR USUARIO DEL STORAGE
    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if(storedUser){
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    },[]);

    // LOGIN
    const login = async (formData) => {
        try {
            const { data } = await api.post("/auth/login", formData); 
            
            // GUARDAR TOKEN Y USUARIO
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            // ESTADOS
            setToken(data.token);
            setUser(data.user);
        }catch (error) {
             console.error(error);
             throw error;
         }
        };

        // REGISTRAR
        const regiter = async (formData) => {
            try {
                const { data } = await api.post("/auth/register", formData);
                // GUARDAR TOKEN Y USUARIO
                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        };

        // LOGOUT
        const logout = () => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            setToken(null);
            setUser(null);
        };

        return (
            <AuthContext.Provider value={{ 
                user, token, loading, login,
                regiter, logout }}>
                {children}
            </AuthContext.Provider>
        )
}
export default AuthProvider;


