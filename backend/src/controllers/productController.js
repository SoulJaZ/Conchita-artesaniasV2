// MODELO PRODUCTO

import Product from "../models/Product.js";
// OBTENER TODOS LOS PRODUCTOS

export const getProducts = async (req, res) => {
  try {
    // Buscar productos
    const products = await Product.find();

    // Respuesta
    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// OBTENER PRODUCTO POR ID

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    // Validar existencia
    if (!product) {
      return res.status(404).json({
        message: "Producto no encontrado",
      });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// CREAR PRODUCTO

export const createProduct = async (req, res) => {
  try {
    const { name, price, image, description, category, stock } = req.body;

    const product = await Product.create({
      name,
      price,
      image,
      description,
      category,
      stock,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
