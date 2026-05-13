// Importar JWT
import jwt from "jsonwebtoken";

// Importar modelo usuario
import User from "../models/User.js";

// Middleware protección.
const protect = async (req, res, next) => {
  try {
    let token;

    // Verificar encabezado Authorization
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      // Extrar token.
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Buscar usuario.
      req.user = await User.findById(decoded.id).select("-password");

      // Continuar.
      next();
    } else {
      return res.status(401).json({
        message: "No autorizado.",
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Token inválid.",
    });
  }
};

export default protect;
