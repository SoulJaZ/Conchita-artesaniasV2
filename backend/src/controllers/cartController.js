// Modelo carrito.
import Cart from "../models/Cart.js";

// ============================
// OBTENER CARRITO
// ============================

export const getCart = async (req, res) => {
  try {
    // Buscar caarito usario
    const cart = await Cart.findOne({
      user: req.user._id,
    }).populate("items.product");

    // Respuesta
    res.json(cart);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// ============================
// AGREGAR PRODUCTO
// ============================
export const addToCart = async (req, res) => {
  try {
    // datos request
    const { productId, quantity } = req.body;

    // Buscar carrito usuario
    let cart = await Cart.findOne({
      user: req.user._id,
    });

    // Si no existe carrito.
    if (!cart) {
      // Crear carrito vacío.
      cart = await Cart.create({
        user: req.user._id,
        items: [],
      });
    }

    // VALIDAR PRODUCTO EXISTENTE

    const existingProdcut = cart.items.find(
      (item) => item.product.toString() === productId,
    );

    // SI YA EXISTE
    if (existingProdcut) {
      existingProdcut.quantity += quantity;
    } else {
      // Agregar nuevo producto.
      cart.items.push({
        product: productId,
        quantity,
      });
    }

    // GUARDAR CAMBIOS
    await cart.save();

    // Respuesta
    res.status(201).json({
      message: "Producto agregado!",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
