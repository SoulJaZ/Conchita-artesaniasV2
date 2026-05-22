import {
  useContext
} from "react";

import {
  CartContext
} from "../../context/CartContext.js";

// CART ITEM

function CartItem({ item }) {

  const { removeFromCart } = useContext(CartContext);

  return (

    <article className="
      bg-white
      rounded-2xl
      shadow-md
      p-5
      flex
      gap-5
      items-center
    ">

      {/* IMAGE */}

      <img
        src={item.image}
        alt={item.name}
        className="
          w-28
          h-28
          object-cover
          rounded-xl
        "
      />

      {/* INFO */}

      <div className="flex-1">

        <h3 className="
          text-xl
          font-bold
          text-gray-900
          mb-2
        ">

          {item.name}

        </h3>

        <p className="
          text-gray-500
          mb-3
        ">

          Cantidad:
          {" "}
          {item.quantity}

        </p>

        <p className="
          text-[#8b5e3c]
          text-xl
          font-bold
        ">

          ${item.price}

        </p>

      </div>

      {/* BUTTON */}

      <button
        onClick={() => removeFromCart(item._id)}
        className="
          bg-red-500
          hover:bg-red-600
          text-white
          px-4
          py-2
          rounded-xl
          transition
        "
      >

        Eliminar

      </button>

    </article>
  );
}

export default CartItem;