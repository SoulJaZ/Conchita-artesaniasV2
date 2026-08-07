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

  image: String,
  price: String,

});

// ============================
// ORDEN
// ============================

const orderSchema = new mongoose.Schema({

  // Usuario
  user:{

    type:mongoose.Schema.Types.ObjectId,

    ref:"User",
    required:true

  },

  // Productos comprados
  items:[orderItemSchema],

  // Total
  totalPrice: {
    type:Number,
    required:true
  },

  // Estado orden
  status:{

    type:String,
    enum: [

            "pending",
            "paid",
            "shipped",
            "delivered",
            "cancelled"
        ],

    default:"pending"
  }

},{
  timestamps:true
});

export default mongoose.model(
    "Order",
    orderSchema
);

