// Importar JWT
import jwt from "jsonwebtoken";

// Función para generar el token.
const generateToken = (id)=>{

    // Sign. Crea el token.
    return jwt.sign(
        
        // Data que transporta el token.
        { id },

        // Clave secreta.
        process.env.JWT_SECRET,

        // Tiempo de expiración. 
        {
            expiresIn: "30d"
        }
    )
};

export default generateToken;