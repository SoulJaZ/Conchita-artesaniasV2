import {

  useContext,
  memo

} from "react";


// Context
import { CartContext } from "../context/CartContext";


// Components
import CartItem from "../components/CartItem/CartItem";

import CartSummary from "../components/CartSummary/CartSummary";
import { Link } from "react-router-dom";

// PAGE CARRITO

function Cart() {
  // CONTEXT CARRITO

  const {

    cart

  } = useContext(CartContext);

  // CARRITO VACÍO
  if (cart.length === 0) {

    return (

      <main className="
      min-h-screen
      bg-[#faf7f2]
      flex
      items-center
      justify-center
      px-6
      ">
        <div className="
        bg-white
        p-10
        rounded-3xl
        shadow-lg
        text-center
        max-w-xl
        w-full
        ">

          <h2 className="
          text-4xl
          font-bold
          text-gray-900
          mb-4
          ">
            Tu carrito está vacío
          </h2>
          <p className="
          text-gray-700
          mb-8
          ">
            Explora nuestros productos y agrega tus favoritos al carrito para 
            comenzar a disfrutar de la belleza de nuestras artesanías hechas a mano.
          </p>

          <Link
            to="/products"
            className="
            bg-[#8b4513]
            hover:bg-[#5d2906]
            text-white
            font-bold
            rounded-lg
            transition
            duration-300
            "
          >
            Explorar productos
          </Link>
        </div>

      </main>
    )
  }


  return (

    <main className="bg-[#faf7f2] min-h-screen py-16">

      {/* Título */}

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="
        text-5xl
        font-bold
        text-gray-900
        mb-4
        ">
            Tu carrito de compras
          </h1>
          <p className="text-gray-700 text-lg">
            Revisa los productos que has agregado y procede al pago.
          </p>
        </div>

        {/* Grid carrito */}

        <section className="grid md:grid-cols-3 gap-8">

          {/* Productos */}
          <div className="lg:col-span-2 span-y-1">

            {
              cart.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                />
              ))
            }
          </div>
          {/* Resumen */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
              <aside>
                <CartSummary />
              </aside>
          </section>

          </section>
      </div>

    </main>
  )
}

export default memo(Cart);