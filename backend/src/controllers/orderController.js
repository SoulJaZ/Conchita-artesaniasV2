import Cart from "../models/Cart.js";

import Order from "../models/Order.js";


// ============================
// CREAR ORDEN
// ============================

export const createOrder = async(req,res)=>{

  try{

    // Buscar carrito usuario
    const cart = await Cart.findOne({

      user:req.user._id

    }).populate("items.product");


    // Validar carrito
    if(!cart || cart.items.length === 0){

      return res.status(400).json({

        message:"Carrito vacío"
      });
    }


    // Calcular total
    const totalPrice = cart.items.reduce(

      (acc,item)=>

        acc +

        item.product.price *

        item.quantity,

      0
    );


    // Crear orden
    const order = await Order.create({

      user:req.user._id,

      items:cart.items.map(item=>({

        product:item.product._id,

        quantity:item.quantity,

        price:item.product.price

      })),

      totalPrice
    });


    // Vaciar carrito
    cart.items = [];

    await cart.save();


    // Respuesta
    res.status(201).json({

      message:"Orden creada",

      order
    });

  }catch(error){

    res.status(500).json({

      message:error.message
    });
  }
};