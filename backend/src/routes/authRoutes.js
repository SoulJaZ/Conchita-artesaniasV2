// Impotar express
import express from "express";

// Importar controllers
import { register, login } from "../controllers/authController.js"

// crear router
const router = express.Router();

// Ruta registro.
router.post("/register",register);
// Ruta login.
router.post("/login", login);

// exportar.
export default router;