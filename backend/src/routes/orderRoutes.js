import express from "express"

import protect from "../middleware/authMiddleware.js"
import admin from "../middleware/adminMiddleware.js"

import {
  createOrder, 
  getOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder
} from "../controllers/orderController.js"

const router = express.Router();

// CREAR ORDEN
router.post(
  "/",
  protect,
  createOrder
);

// OBTENER ÓRDENES ADMIN
router.get(
  "/",
  protect,
  admin,
  getOrders
);

// OBTENER ORDEN POR ID
router.get(
  "/:id",
  protect,
  admin,
  getOrderById
);

// ACTUALIZAR ESTADO
router.put(
  "/:id",
  protect,
  admin,
  updateOrderStatus
)

// ELIMINAR
router.delete(
  "/:id",
  protect,
  admin,
  deleteOrder
)

export default router;