import {
  useEffect,
  useState
} from "react";

import api from "../services/api.js";

import { toast } from "react-toastify";


// =======================================
// MIS PEDIDOS - CUSTOMER
// =======================================

function MyOrders() {

  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);


  // =======================================
  // OBTENER ÓRDENES DEL USUARIO
  // =======================================

  const getOrders = async () => {

    try {

      const token = localStorage.getItem("token");


      // =======================================
      // VALIDAR TOKEN
      // =======================================

      if (!token) {

        toast.warning(
          "No se encontró token de autenticación."
        );

        return;
      }


      // =======================================
      // PETICIÓN AL BACKEND
      // =======================================

      const { data } = await api.get(

        "/orders/my-orders",

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

      );


      // =======================================
      // GUARDAR ÓRDENES
      // =======================================

      setOrders(data);

    }

    catch (error) {

      console.error(
        "ERROR OBTENIENDO PEDIDOS:",
        error
      );

      toast.error(
        "No fue posible cargar tus pedidos."
      );

    }

    finally {

      setLoading(false);

    }

  };


  // =======================================
  // CARGAR PEDIDOS
  // =======================================

  useEffect(() => {

    getOrders();

  }, []);


  // =======================================
  // LOADING
  // =======================================

  if (loading) {

    return (

      <main className="
        min-h-screen
        bg-[#faf7f2]
        py-16
      ">

        <div className="
          max-w-6xl
          mx-auto
          px-6
        ">

          <h1 className="
            text-3xl
            font-bold
          ">

            Cargando tus pedidos...

          </h1>

        </div>

      </main>

    );

  }


  // =======================================
  // VISTA
  // =======================================

  return (

    <main className="
      min-h-screen
      bg-[#faf7f2]
      py-16
    ">

      <div className="
        max-w-6xl
        mx-auto
        px-6
      ">


        {/* ===================================
            TÍTULO
        =================================== */}

        <h1 className="
          text-4xl
          font-bold
          text-gray-900
          mb-10
        ">

          Mis pedidos

        </h1>


        {/* ===================================
            SIN PEDIDOS
        =================================== */}

        {orders.length === 0 ? (

          <div className="
            bg-white
            rounded-3xl
            shadow-lg
            p-10
            text-center
          ">

            <h2 className="
              text-2xl
              font-semibold
              mb-3
            ">

              Aún no tienes pedidos

            </h2>

            <p className="
              text-gray-500
            ">

              Cuando realices una compra,
              aparecerá aquí.

            </p>

          </div>

        ) : (


          /* ===================================
             PEDIDOS
          =================================== */

          <div className="
            space-y-6
          ">

            {

              orders.map(order => (

                <div
                  key={order._id}
                  className="
                    bg-white
                    rounded-3xl
                    shadow-lg
                    p-8
                  "
                >


                  {/* ==========================
                      CABECERA
                  ========================== */}

                  <div className="
                    flex
                    justify-between
                    items-center
                    border-b
                    pb-5
                    mb-5
                  ">


                    {/* ID */}

                    <div>

                      <p className="
                        text-sm
                        text-gray-500
                      ">

                        Pedido

                      </p>

                      <p className="
                        font-semibold
                      ">

                        #{order._id}

                      </p>

                    </div>


                    {/* ESTADO */}

                    <div className="
                      text-right
                    ">

                      <p className="
                        text-sm
                        text-gray-500
                      ">

                        Estado

                      </p>

                      <span className="
                        inline-block
                        mt-1
                        px-4
                        py-2
                        rounded-full
                        bg-[#f5e6da]
                        text-[#8b5e3c]
                        font-semibold
                      ">

                        {order.status}

                      </span>

                    </div>

                  </div>


                  {/* ==========================
                      PRODUCTOS
                  ========================== */}

                  <div className="
                    space-y-4
                  ">

                    {

                      order.items.map(item => (

                        <div
                          key={item._id}
                          className="
                            flex
                            items-center
                            justify-between
                            gap-4
                          "
                        >


                          {/* PRODUCTO */}

                          <div className="
                            flex
                            items-center
                            gap-4
                          ">

                            <img
                              src={item.image}
                              alt={item.name || "Producto"}
                              className="
                                w-20
                                h-20
                                object-cover
                                rounded-xl
                              "
                            />

                            <div>

                              <h3 className="
                                font-semibold
                              ">

                                {item.name ||
                                  "Producto"}

                              </h3>

                              <p className="
                                text-gray-500
                              ">

                                Cantidad:{" "}
                                {item.quantity}

                              </p>

                            </div>

                          </div>


                          {/* PRECIO */}

                          <p className="
                            font-semibold
                          ">

                            ${item.price}

                          </p>

                        </div>

                      ))

                    }

                  </div>


                  {/* ==========================
                      TOTAL
                  ========================== */}

                  <div className="
                    border-t
                    mt-6
                    pt-5
                    flex
                    justify-between
                    items-center
                  ">

                    <span className="
                      text-lg
                      font-semibold
                    ">

                      Total

                    </span>

                    <span className="
                      text-2xl
                      font-bold
                      text-[#8b5e3c]
                    ">

                      ${order.totalPrice}

                    </span>

                  </div>


                  {/* ==========================
                      FECHA
                  ========================== */}

                  <p className="
                    text-sm
                    text-gray-500
                    mt-4
                  ">

                    Realizado el{" "}

                    {new Date(
                      order.createdAt
                    ).toLocaleDateString()}

                  </p>

                </div>

              ))

            }

          </div>

        )}

      </div>

    </main>

  );

}


export default MyOrders;