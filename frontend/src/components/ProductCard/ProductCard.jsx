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
  // IMAGEN FALLBACK

  const [imageError,setImageError] = useState(false);

  const { addToCart } = useContext(CartContext);
  return(

    <article className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">

      {/* Imagen producto */}

      <img

        loading="lazy"

        src={

          imageError

          ? "/placeholder.png"

          : product.image
        }

        alt={product.name}

        onError={()=>setImageError(true)}

        className="w-full h-64 object-cover"
      />


      {/* Información */}

      <div className="p-5">

        {/* Nombre */}

        <h3 className="text-xl font-bold mb-2">

          {product.name}

        </h3>


        {/* Descripción */}

        <p className="text-gray-500 mb-4 line-clamp-2">

          {product.description}

        </p>


        {/* Precio */}

        <p className="text-2xl font-bold mb-3">

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

            w-full
            py-3
            rounded
            text-white
            font-bold
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

    </article>
  )
}

export default memo(ProductCard);