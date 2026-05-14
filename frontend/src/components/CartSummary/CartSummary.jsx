import {

  useContext

} from "react";

import {

  CartContext

} from "../../context/CartContext";

// RESUMEN CARRITO

function CartSummary(){

  const {

    totalItems,
    totalPrice,
    clearCart

  } = useContext(CartContext);


  return(

    <section className="mt-10 border p-5 rounded">

      <h2 className="text-2xl font-bold mb-4">

        Resumen

      </h2>


      <p>

        Productos: {totalItems}

      </p>


      <p>

        Total: ${totalPrice}

      </p>


      <button

        onClick={clearCart}

        className="mt-5"
      >

        Vaciar carrito

      </button>

    </section>
  )
}

export default CartSummary;