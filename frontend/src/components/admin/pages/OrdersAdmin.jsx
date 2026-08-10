import {
    useEffect,
    useState
} from "react";

import api from "../../../services/api.js";

// ADMIN ÓRDENES
function OrdersAdmin(){
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        getOrders();
    }, []);

    // OBTENER ÓRDENES
    const getOrders = async()=>{
        try {

            const { data } = await api.get(
                "/orders",
            );

            setOrders(data);
        } catch (error) {
            console.log(error);
        }
    };
    // CAMBIAR ESTADO
    const updateStatus = async(id,status)=>{
        try {

            // Actualizar estado de la orden
            await api.put(
                `/orders/${id}`,
                { status },
            );
            // Actualizar la lista de órdenes
            getOrders();
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <section>
            <h1 className="
                text-3xl
                font-bold
                mb-8
            ">
                Órdenes
            </h1>
            <div className="
                bg-white
                rouded-3xl
                shadow-lg
                overflow-hidden
            ">
                <table className="w-full">
                    <thead className="
                        bg-[#f8f5f2]
                    ">
                        <tr>
                            <th className="p-5">
                                Cliente
                            </th>
                            <th className="p-5">
                                Total
                            </th>
                            <th className="p-5">
                                Estado
                            </th>
                            <th className="p-5">
                                Fecha
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order =>(
                                <tr
                                    key={order._id}
                                    className="border-t"
                                >
                                    <td className="p-5">
                                        {
                                            order.user?.name
                                        }
                                    </td>
                                    <td className="p-5">
                                        $
                                        {order.totalPrice}
                                    </td>
                                    <td className="p-5">
                                        <select
                                            value={order.status}
                                            onChange={(e)=>
                                                updateStatus(
                                                    order._id,
                                                    e.target.value
                                                )
                                            }
                                            className="
                                                border
                                                rounded-lg
                                                px-3
                                                py-2
                                            "
                                        >
                                            <option value="pending">
                                                Pendiente
                                            </option>
                                            <option value="paid">
                                                Pagado
                                            </option>
                                            <option value="shipped">
                                                Enviada
                                            </option>
                                            <option value="delivered">
                                                Entregada
                                            </option>
                                            <option value="cancelled">
                                                Cancelada
                                            </option>
                                        </select>
                                    </td>
                                    <td className="p-5">
                                            {
                                                new Date(
                                                    order.createdAt
                                                ).toLocaleDateString()
                                            }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )

}
export default OrdersAdmin;