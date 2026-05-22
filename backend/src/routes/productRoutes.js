import express from "express";

import protect from "../middleware/authMiddleware.js";

import admin from "../middleware/adminMiddleware.js";

import {

  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct

} from "../controllers/productController.js";
// ROUTER

const router = express.Router();
// OBTENER TODOS LOS PRODUCTOS
// GET /api/products

router.get(

  "/",
  getProducts
);
// OBTENER PRODUCTO POR ID
// GET /api/products/:id

router.get(

  "/:id",

  getProductById
);

// CREAR PRODUCTO
// POST /api/products

router.post(

  "/",

  protect,

  admin,

  createProduct
);

// ACTUALIZAR PRODUCTO
// ============================

router.put(
  "/:id",
  protect,
  admin,
  updateProduct
);

// ELIMINAR PRODUCTO
// ============================

router.delete(
  "/:id",
  protect,
  admin,
  deleteProduct
);


export default router;