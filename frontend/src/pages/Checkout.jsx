import {
  useContext
} from "react";

import {
  CartContext
} from "../context/cartContext";

// CHECKOUT PAGE

function Checkout() {

  const { cart } = useContext(CartContext);

  // TOTAL

  const total = cart.reduce(

    (acc, item) =>

      acc + (item.price * item.quantity),

    0
  );

  return (

    <main className="
      bg-[#faf7f2]
      min-h-screen
      py-16
    ">

      <div className="
        max-w-4xl
        mx-auto
        px-6
      ">

        <div className="
          bg-white
          rounded-3xl
          shadow-xl
          p-10
        ">

          <h1 className="
            text-4xl
            font-bold
            text-gray-900
            mb-10
          ">

            Finalizar compra

          </h1>

          {/* PRODUCTOS */}

          <div className="space-y-6 mb-10">

            {
              cart.map(item => (

                <div
                  key={item._id}
                  className="
                    flex
                    justify-between
                    border-b
                    pb-4
                  "
                >

                  <div>

                    <h3 className="
                      font-semibold
                      text-lg
                    ">

                      {item.name}

                    </h3>

                    <p className="text-gray-500">

                      Cantidad:
                      {" "}
                      {item.quantity}

                    </p>

                  </div>

                  <p className="font-bold">

                    $
                    {item.price * item.quantity}

                  </p>

                </div>
              ))
            }

          </div>

          {/* TOTAL */}

          <div className="
            flex
            justify-between
            items-center
            mb-10
          ">

            <h2 className="
              text-2xl
              font-bold
            ">

              Total

            </h2>

            <p className="
              text-3xl
              font-bold
              text-[#8b5e3c]
            ">

              ${total}

            </p>

          </div>

          {/* BOTÓN */}

          <button
            className="
              w-full
              bg-[#8b5e3c]
              hover:bg-[#6f472d]
              text-white
              py-4
              rounded-xl
              font-semibold
              transition
            "
          >

            Finalizar compra

          </button>

        </div>

      </div>

    </main>
  );
}

export default Checkout;