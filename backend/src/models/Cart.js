// importar mongoose
import mongoose from "mongoose";

// ============================
// ITEM CARRITO
// ============================

const cartItemSchema = new mongoose.Schema({
  // Producto relacionado
  product: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
    required: true,
  },

  // Cantidad
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});
// ============================
// CARRITO
// ============================

const cartSchema = new mongoose.Schema(
  {
    // Usuario propietario
    user: {
      type: mongoose.Schema.Types.ObjectId,

      ref: "User",

      required: true,
    },

    // Lista productos
    items: [cartItemSchema],
  },
  {
    timestamps: true,
  },
);

// Exportar modelo
export default mongoose.model("Cart", cartSchema);
