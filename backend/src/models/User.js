// Importar mongoose para crear el modelo.
import mongoose from "mongoose";

// Crear el esquema del usuario.
const userSchema = new mongoose.Schema(
  {
    // Nombre del usuario
    name: {
      type: String,
      required: true,
    },

    // Correo electrónico
    email: {
      type: String,
      required: true,

      // Evita correos duplicados
      unique: true,
    },

    // Contraseña encriptada
    password: {
      type: String,
      required: true,
    },

    // Rol del usuario
    // Más adelante permitirá:
    // admin
    // customer
    role: {
      type: String,
      default: "customer",
    },
  },
  {
    // Guarda fecha de creación y actualización
    timestamps: true,
  },
);
// Exportat el modelo. 
export default mongoose.model(
    "User",
    userSchema
);