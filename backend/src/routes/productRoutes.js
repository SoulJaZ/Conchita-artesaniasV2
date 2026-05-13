import express from 'express'

import protect from "../middleware/authMiddleware.js"
import { getProduct } from '../controllers/productController.js';
import admin from "../middleware/adminMiddleware.js";
import { getAllProducts } from '../services/productService.js';


// ============================
// CREAR PRODUCTO
// ============================
const router = express.Router();

router.post(

  "/",

  protect,

  admin,


  async(req,res)=>{

    res.json({

      message:"Producto creado"
    });
  }
);


export default router;