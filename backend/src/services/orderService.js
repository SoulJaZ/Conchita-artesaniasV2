import Order from "../models/Order.js";

// CREAR ORDEN
export const createOrderService = async (orderData) => {
  console.log("===== ORDER SERVICE =====");
  console.log(orderData);
  const order = new Order(orderData);
  return await order.save();
};

// OBTENER ÓRDENES
export const getOrdersService = async () => {
  return await Order.find()

    .populate("user", "name email")
    .sort({ createdAt: -1 });
};
// OBTENER ÓRDENES DE UN USUARIO
export const getOrdersByUserService = async (userId) => {
  return await Order.find({ user: userId })
    .populate("user", "name email")
    .sort({ createdAt: -1 });
}

// OBTENER ORDEN POR ID
export const getOrderByIdService = async (orderId) => {
  return await Order.findById(orderId).populate("user", "name email");
};

// ACTUALIZAR ESTADO DE ORDEN
export const updateOrderStatusService = async (orderId, status) => {
  return await Order.findByIdAndUpdate(orderId, { status }, { new: true });
};

// ELIMINAR ORDEN
export const deleteOrderService = async (orderId) => {
  return await Order.findByIdAndDelete(orderId);
};
