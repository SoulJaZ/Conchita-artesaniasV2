// Impotar express
import express from "express";

// Importar validators
import validateProduct from "../middleware/validateMiddleware.js";
import { registerSchema } from "../validators/authValidator.js";

// Importar controllers
import { register, login } from "../controllers/authController.js"

// crear router
const router = express.Router();

// Ruta registro.
router.post("/register", validateProduct(registerSchema), register);
// Ruta login.
router.post("/login", login);

// exportar.
export default router;