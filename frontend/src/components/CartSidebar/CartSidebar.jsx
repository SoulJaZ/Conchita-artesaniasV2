import {
  useContext
} from "react";

import { CartContext } from "../../context/CartContext";


// SIDEBAR CARRITO

function CartSidebar() {

  const {

    cart,
    isCartOpen,
    closeCart,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart

  } = useContext(CartContext);


  return (

    <>

      {/* Overlay */}

      {

        isCartOpen && (

          <div

            onClick={closeCart}

            className="
              fixed
              inset-0
              bg-black/50
              z-40
            "
          />
        )
      }


      {/* Sidebar */}

      <aside
        className={`
          fixed
          top-0
          right-0
          h-full
          w-[400px]
          bg-white
          shadow-2xl
          z-50
          transition-transform
          duration-300
          flex
          flex-col

          ${isCartOpen
            ? "translate-x-0"
            : "translate-x-full"
          }
        `}
      >

        {/* Header */}

        <div
          className="
            flex
            justify-between
            items-center
            p-5
            border-b
          "
        >

          <h2 className="text-2xl font-bold">

            Tu carrito

          </h2>


          <button
            onClick={closeCart}
            className="text-2xl"
          >

            ×

          </button>

        </div>


        {/* Productos */}

        <div className="flex-1 overflow-y-auto p-5">

          {

            cart.length === 0 ? (

              <p>
                Tu carrito está vacío
              </p>

            ) : (

              cart.map(item => (

                <div
                  key={item._id}
                  className="
                    border-b
                    py-4
                  "
                >

                  <h3 className="font-semibold">

                    {item.name}

                  </h3>

                  <p>
                    ${item.price}
                  </p>


                  {/* Quantity */}

                  <div className="flex gap-3 mt-3">

                    <button
                      onClick={() =>
                        decreaseQuantity(item._id)
                      }
                    >

                      -
                    </button>

                    <span>

                      {item.quantity}

                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item._id)
                      }
                    >

                      +

                    </button>

                  </div>


                  {/* Eliminar */}

                  <button
                    onClick={() =>
                      removeFromCart(item._id)
                    }
                    className="
                      text-red-500
                      mt-2
                    "
                  >

                    Eliminar

                  </button>

                </div>
              ))
            )
          }

        </div>


        {/* Footer */}

        <div
          className="
            border-t
            p-5
          "
        >

          <h3 className="text-xl font-bold">

            Total: ${totalPrice}

          </h3>


          <button
            className="
              w-full
              bg-[#8b5e3c]
              text-white
              py-4
              rounded-xl
              mt-4
            "
          >

            Checkout

          </button>

        </div>

      </aside>

    </>
  )
}

export default CartSidebar;