// Importar estructura de la DB bajo el modelo de "Product".
import Product from "../models/Product.js";
import { getAllProducts } from "../services/productService.js";

export const getProduct = async(req, res)=>{
    const products = await getAllProducts();

    res.json(products);
}