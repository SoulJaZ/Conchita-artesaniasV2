// Importamos express
import express from "express";

// Middleware JWT
import protect from "../middleware/authMiddleware.js";

// Controllers carrito
import {

  getCart,
  addToCart

} from "../controllers/cartController.js";


// Creamos router
const router = express.Router();


// ============================
// OBTENER CARRITO
// ============================

router.get(
  "/",
  protect,
  getCart
);


// ============================
// AGREGAR PRODUCTO
// ============================

router.post(
  "/add",
  protect,
  addToCart
);


// Exportamos
export default router;