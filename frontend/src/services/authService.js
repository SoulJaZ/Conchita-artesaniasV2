// Importar api axios
import api from "./api.js";

// REGISTRAR

export const registerUser = async(data)=>{

    // Petición POST al backend.
    const response = await api.post(
        "/auth/register",
        data
    );
    return response.data;
};

// LOGIN
export const loginUser = async(data)=>{
    const response = await api.post(
        "/auth/login",
        data
    );
    return response.data;
};