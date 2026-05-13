import express from "express";

import protect from "../middleware/authMiddleware.js"

import {

  createOrder

} from "../controllers/orderController.js";


const router = express.Router();


// Crear orden
router.post(
  "/",
  protect,
  createOrder
);


export default router;