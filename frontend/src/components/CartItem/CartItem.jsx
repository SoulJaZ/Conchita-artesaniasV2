import {

  useContext

} from "react";

import {

  CartContext

} from "../../context/CartContext";

// ITEM CARRITO

function CartItem({

  item

}){

  const {

    addToCart,
    decreaseQuantity,
    removeFromCart

  } = useContext(CartContext);


  return(

    <article className="border p-5 rounded mb-4">

      <h3 className="text-xl font-bold">

        {item.name}

      </h3>


      <p>

        ${item.price}

      </p>


      <p>

        Cantidad: {item.quantity}

      </p>


      <div className="flex gap-3 mt-4">

        <button

          onClick={()=>

            decreaseQuantity(item._id)
          }
        >

          -
        </button>


        <button

          onClick={()=>

            addToCart(item)
          }
        >

          +
        </button>


        <button

          onClick={()=>

            removeFromCart(item._id)
          }
        >

          Eliminar
        </button>

      </div>

    </article>
  )
}

export default CartItem;