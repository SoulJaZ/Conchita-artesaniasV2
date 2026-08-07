import {
  createOrderService,
  getOrdersService,
  getOrderByIdService,
  updateOrderStatusService,
  deleteOrderService,
} from "../services/orderService.js";

// CREAR ORDEN
export const createOrder = async (req, res) => {
  try {
    console.log("===== CREATE ORDER =====");
    console.log("USER:", req.user);
    console.log("BODY:", JSON.stringify(req.body, null, 2));
    const { items, totalPrice } = req.body;

    const order = await createOrderService({
      user: req.user._id,
      items,
      totalPrice,
    });


    console.log("ORDER CREADA:", order);
    res.status(201).json(order);
  } catch (error) {
    console.error("ERROR CREATE ORDER:");
    console.error(error);
    res.status(500).json({
        message:error.message
    });

}
};

// OBTENER ÓRDENES
export const getOrders = async (req, res) => {
  try {
    const orders = await getOrdersService();
    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// OBTENER ORDEN
export const getOrderById = async (req, res) => {
  try {
    const order = await getOrderByIdService(req.params.id);
    if (!order) {
      return res.status(404).json({
        message: "Orden no encontrada.",
      });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ACTUALIZAR ESTADO DE ORDEN
export const updateOrderStatus = async (req, res) => {
  try {
    const order = await updateOrderStatusService(
      req.params.id,
      req.body.status,
    );
    if (!order) {
      return res.status(404).json({
        message: "Orden no encontrada.",
      });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ELIMINAR ORDEN
export const deleteOrder = async (req, res) => {
  try {
    const order = await deleteOrderService(req.params.id);
    if (!order) {
      return res.status(404).json({
        message: "Orden no encontrada.",
      });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
