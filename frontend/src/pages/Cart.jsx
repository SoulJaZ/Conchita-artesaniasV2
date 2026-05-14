import {

  useContext,
  memo

} from "react";


// Context
import { CartContext } from "../context/cartContext";


// Components
import CartItem from "../components/CartItem/CartItem";

import CartSummary from "../components/CartSummary/CartSummary";

// PAGE CARRITO

function Cart(){
  // CONTEXT CARRITO

  const {

    cart

  } = useContext(CartContext);

  // CARRITO VACÍO
  if(cart.length === 0){

    return(

      <main className="p-10 text-center">

        <h2 className="text-3xl font-bold mb-4">

          Tu carrito está vacío

        </h2>


        <p className="text-gray-500">

          Agrega productos para comenzar.

        </p>

      </main>
    )
  }


  return(

    <main className="max-w-6xl mx-auto p-5">

      {/* Título */}

      <h1 className="text-4xl font-bold mb-8">

        Carrito de compras

      </h1>


      {/* Grid carrito */}

      <section className="grid md:grid-cols-3 gap-8">


        {/* Productos */}

        <div className="md:col-span-2 space-y-4">

          {

            cart.map(item => (

              <CartItem

                key={item._id}

                item={item}
              />
            ))
          }

        </div>


        {/* Resumen */}

        <aside>

          <CartSummary />

        </aside>

      </section>

    </main>
  )
}

export default memo(Cart);