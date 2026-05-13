// Importar axios
import axios from "axios";

// Crear instancia axios
const api = axios.create({
    baseURL:"http://localhost:4000/api"
})

export default api;