// Importar axios
import axios from "axios";

console.log(import.meta.env.VITE_API_URL);

// Crear instancia axios
const api = axios.create({
    baseURL:import.meta.env.VITE_API_URL
})

// ==================
// INTERCEPTOR DE AUTENTICACIÓN

api.interceptors.request.use(
    (config)=>{
    
        // Obtener token del localStorage
        const token = localStorage.getItem("token");

        // Agregar token al header de la petición
        if(token){

            // Agregar token al header de la petición
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error)=>{

        // Manejar error de la petición
        return Promise.reject(error);
    }
);

export default api;