// Importar JWT
import jwt from "jsonwebtoken";

// Importar modelo usuario
import User from "../models/User.js";

// Middleware protección.
const protect = async (req, res, next) => {
  try {

    console.log("Authorization:", req.headers.authorization);
    let token;

    // Verificar encabezado Authorization
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      // Extrar token.
      token = req.headers.authorization.split(" ")[1];
      console.log(req.headers.authorization);

      // Validar token.
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      console.log("DECODED:", decoded);

      // Buscar usuario.
      req.user = await User.findById(decoded.id).select("-password");
      console.log("USER:", req.user);

      // Continuar.
      next();
    } else {
      return res.status(401).json({
        message: "No autorizado.",
      });
    }
  } catch (error) {
    console.error("Error en authMiddleware:", error);
    return res.status(401).json({
      message: "Token inválido.",
    });
  }
};

export default protect;
