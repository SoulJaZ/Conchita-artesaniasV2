import {
  useState,
  useMemo
} from "react";

import { toast } from "react-toastify";

import { CartContext } from "./CartContext";
// PROVIDER CARRITO

function CartProvider({ children }) {

  // ESTADO CARRITO

  const [cart, setCart] = useState([]);

  // ABRIR / CERRAR SIDEBAR

  const [cartOpen, setCartOpen] = useState(false);

  // ABRIR / CERRAR SIDEBAR

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  

  // AGREGAR PRODUCTO

  const addToCart = (product) => {

    const existingProduct = cart.find(

      item => item._id === product._id
    );

    if (existingProduct) {

      setCart(
        cart.map(item =>

        item._id === product._id

          ? {
              ...item,
              quantity: item.quantity + 1
            }

          : item
      )
    );
    toast.success("Cantidad actualizada");
    return;
    }  

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ]);
    toast.success("Producto agregado al carrito");
  };
  // ELIMINAR PRODUCTO

  const removeFromCart = (id) => {

    setCart(
      cart.filter(

      item => item._id !== id
    )
  );
  toast.success("Producto eliminado del carrito");
  };

  const clearCart = () => {

    setCart([]);
    toast.success("Carrito vaciado");
  };
  // TOTAL ITEMS

  const totalItems = useMemo(() => {
    return cart.reduce(

      (acc, item) => acc + item.quantity, 0
    );
  }, [cart]

  );
  // TOTAL PRECIO

  const totalPrice = useMemo(() => {
    return cart.reduce(
      (acc, item) => acc + item.price * item.quantity, 0
    );
  }, [cart]
  );


  return (

    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        cartOpen,
        removeFromCart,
        clearCart,
        openCart,
        closeCart,
        totalPrice,
        totalItems


      }}>

      {children}

    </CartContext.Provider>
  );
}

export default CartProvider;