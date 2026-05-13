// Importar Zod.
import { email, z } from "zod";

// VALIDACIÓN REGISTRO.

export const registerSchema = z.object({

    // Nombre usuario
    name:z.string().min(3, "Nombre mínimo 3 carácteres").max(50),

    // Correo usuario
    email:z.string().email("cooreo inválido"),

    // Contrasela usuario
    password:z.string().min(8, "Contraseña mínimo 8 carácteres")
});