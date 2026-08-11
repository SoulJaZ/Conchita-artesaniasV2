import api from "./api.js";

// OBTENER ÓRDENES
export const getOrders = async () => {
  try {
    const { data } = await api.get("/orders/my-orders");
    return data;
  } catch (error) {
    console.error("ERROR GET ORDERS SERVICE:");
    console.error(error);
    throw error;
  }
};
