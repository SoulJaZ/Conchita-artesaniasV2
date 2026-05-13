// Importar mongoose
import mongoose from "mongoose";

// ============================
// ITEMS ORDEN
// ============================

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,

    ref: "Product",
  },

  quantity: Number,

  price: Number,
});

// ============================
// ORDEN
// ============================

const orderSchema = new mongoose.Schema({

  // Usuario
  user:{

    type:mongoose.Schema.Types.ObjectId,

    ref:"User"
  },

  // Productos comprados
  items:[orderItemSchema],

  // Total
  totalPrice:Number,

  // Estado orden
  status:{

    type:String,

    default:"pendiente"
  }

},{
  timestamps:true
});

export default mongoose.model(
    "Order",
    orderSchema
);

