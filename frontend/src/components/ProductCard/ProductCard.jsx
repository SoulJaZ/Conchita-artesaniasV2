import { memo,useState } from "react";
import { CartContext } from "../../context/cartContext";
// TARJETA PRODUCTO

function ProductCard({

  product,

}){
  // VALIDAR PRODUCTO

  if(!product){

    return null;
  }
  

  const { addToCart } = useContext(CartContext);

  return(

    <article className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition duration-300 group">

      {/* Imagen producto */}

      <div className="
      overflow-hidden
      h-[320px]
      ">
      <img

        loading="lazy"

        src={product.image}
        alt={product.name}

        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
      />
      </div>

      {/* Información */}

      <div className="p-6">

        {/* Nombre */}

        <h3 className="text-xl font-bold text-gray-900 mb-3">

          {product.name}

        </h3>


        {/* Descripción */}

        <p className="text-gray-600 mb-6 line-clamp-2">

          {product.description}

        </p>

        <div className="
        flex
        items-center
        justify-content
        ">
        {/* Precio */}

        <p className="text-2xl font-bold mb-3 text-[#8b5e3c]">

          ${product.price}
        </p>



        {/* Stock */}

        <p className="mb-4 text-sm">

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


        {/* Botón carrito */}

        <button

          onClick={()=>addToCart(product)}

          disabled={product.stock <= 0}

          className={`
            bg-[#8b5e3c]
            hover:bg-[#6f472d]
            text-white
            px-5
            py-3
            rounded-xl
            font-semibold
            transition

            ${

              product.stock > 0

              ? "bg-black hover:bg-gray-800"

              : "bg-gray-400 cursor-not-allowed"
            }
          `}
        >

          {

            product.stock > 0

            ? "Agregar al carrito"

            : "Sin stock"
          }

        </button>
        </div>

      </div>

    </article>
  )
}

export default memo(ProductCard);