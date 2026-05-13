// importar librería de Mongo para acceder a la DB.
import mongoose from "mongoose";

// Constante que almacena el modelo  de la DB.

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    stock: {
      type: Number,
      default: 0,
    },

    image: {
      type: String,
    },

    category: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model(
    "Product",
    productSchema
);
