// Importar bcrypt
import bcrypt from "bcryptjs";

// Importar modelo User.
import User from "../models/User.js";

// Importar generador de JWT
import generateToken from "../utils/generateToken.js";

// Importar servicio.
import { registerUser } from "../services/authService.js";

// ==================================================
// REGISTRO
// ==================================================

export const register = async (req, res) => {
  try {
    // Registrar usuario
    const user = await registerUser(req.body);

    // Generar token.
    const token = generateToken(user._id);

    // Respondemos al cliente
    res.status(201).json({
      message: "Usuario registrado.",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: user.token,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// =====================================================
// LOGIN
// =====================================================
export const login = async (req, res) => {
  try {
    // Obtener email y password
    const { email, password } = req.body;

    // buscar usuario.
    const user = await User.findOne({ email });

    // Validamos si existe.
    if (!user) {
      return res.status(404).json({
        message: "Usuario no encontrado.",
      });
    }

    // Comparar contraseñas
    const validPassword = await bcrypt.compare(password, user.password);

    // Si contraseña es incorrecta.
    if (!validPassword) {
      return res.status(401).json({
        message: "Contraseña Incorrecta.",
      });
    }

    // Generar token.
    const token = generateToken(user._id);

    // Responder
    res.json({
      message: "Login Exitoso.",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};
