import {
  useContext
} from "react";

import {
  Link
} from "react-router-dom";

import {
  CartContext
} from "../../context/cartContext";

// CART SUMMARY

function CartSummary() {

  const { cart } = useContext(CartContext);

  // TOTAL

  const total = cart.reduce(

    (acc, item) =>

      acc + (item.price * item.quantity),

    0
  );

  return (

    <div className="
      bg-white
      rounded-3xl
      shadow-lg
      p-8
      sticky
      top-10
    ">

      <h2 className="
        text-2xl
        font-bold
        mb-8
      ">

        Resumen

      </h2>

      {/* ITEMS */}

      <div className="space-y-4 mb-8">

        {
          cart.map(item => (

            <div
              key={item._id}
              className="
                flex
                justify-between
              "
            >

              <span>

                {item.name}

              </span>

              <span>

                ${item.price}

              </span>

            </div>
          ))
        }

      </div>

      {/* TOTAL */}

      <div className="
        border-t
        pt-6
        flex
        justify-between
        items-center
        mb-8
      ">

        <h3 className="
          text-xl
          font-bold
        ">

          Total

        </h3>

        <p className="
          text-2xl
          font-bold
          text-[#8b5e3c]
        ">

          ${total}

        </p>

      </div>

      {/* CHECKOUT */}

      <Link
        to="/checkout"
        className="
          block
          w-full
          text-center
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

      </Link>

    </div>
  );
}

export default CartSummary;