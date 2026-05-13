// Importar bcrypt para encriptar constraseñas.
import bcrypt from "bcryptjs";

// Importar modelo User
import User from "../models/User.js";

// Función para registrar usuarios.
export const registerUser = async (data) => {
  // Desestructurar los datos.
  const { name, email, password } = data;

  // Verificar si el usuario existe.
  const usuerExists = await User.findOne({ email });

  // Si existe, se lanza error.
  if (usuerExists) {
    throw new Error("El usuario ya existe.");
  }

  // Encriptar la constraseña.
  const hashedPassword = await bcrypt.hash(password, 10);

  // Crear usuario.
  const user = await User.create({
    name,
    email,

    // guardar constraseña encriptada.
    password: hashedPassword,
  });

  return user;
};
