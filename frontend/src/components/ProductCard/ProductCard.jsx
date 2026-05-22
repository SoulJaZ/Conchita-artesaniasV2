import {

  memo,
  useContext

} from "react";

import { CartContext } from "../../context/CartContext.js";


// TARJETA PRODUCTO

function ProductCard({ product }){

  // VALIDAR PRODUCTO

  if(!product){

    return null;
  }


  // CONTEXTO CARRITO

  const { addToCart } = useContext(CartContext);


  return(

    <article
      className="
      bg-white
      rounded-2xl
      overflow-hidden
      shadow-sm
      hover:shadow-2xl
      transition-all
      duration-300
      group
      border
      border-[#eaded1]
    ">

      {/* Imagen */}

      <div
        className="
        overflow-hidden
        h-[320px]
        bg-[#f8f5f2]
      "
      >

        <img

          loading="lazy"

          src={product.image}

          alt={product.name}

          className="
          w-full
          h-full
          object-cover
          group-hover:scale-105
          transition
          duration-500
        "
        />

      </div>


      {/* Información */}

      <div className="p-6">


        {/* Nombre */}

        <h3
          className="
          text-xl
          font-bold
          text-gray-900
          mb-3
        "
        >

          {product.name}

        </h3>


        {/* Descripción */}

        <p
          className="
          text-gray-600
          mb-6
          line-clamp-2
          min-h-[48px]
        "
        >

          {product.description}

        </p>


        {/* Footer card */}

        <div
          className="
          flex
          items-center
          justify-between
          gap-4
        "
        >


          {/* Precio + stock */}

          <div>

            <p
              className="
              text-2xl
              font-bold
              text-[#8b5e3c]
            "
            >

              ${product.price}

            </p>


            <p className="text-sm mt-1">

              {

                product.stock > 0

                ? (

                  <span className="text-green-600">

                    Disponible

                  </span>

                ) : (

                  <span className="text-red-500">

                    Agotado

                  </span>
                )
              }

            </p>

          </div>


          {/* Botón */}

          <button

            onClick={()=>addToCart(product)}

            disabled={product.stock <= 0}

            className={`
              px-5
              py-3
              rounded-xl
              font-semibold
              text-sm
              transition-all
              duration-300

              ${

                product.stock > 0

                ? `
                  bg-[#8b5e3c]
                  hover:bg-[#6f472d]
                  text-white
                `

                : `
                  bg-gray-300
                  text-gray-500
                  cursor-not-allowed
                `
              }
            `}
          >

            {

              product.stock > 0

              ? "Agregar"

              : "Sin stock"
            }

          </button>

        </div>

      </div>

    </article>
  )
}

export default memo(ProductCard);