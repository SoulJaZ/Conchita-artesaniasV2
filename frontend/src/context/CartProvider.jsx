import {
  useState,
  useMemo,
  useEffect
} from "react";

//toast 
import { toast } from "react-toastify";

import { CartContext } from "./CartContext";


// PROVIDER CARRITO
function CartProvider({ children }) {

  // ESTADO CARRITO
  // Guardar carrito en localStorage para persistencia de la sesión.
  const [cart, setCart] = useState(() => {

    const savedCart = localStorage.getItem("cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];

  });

  // Estado del sidebar del carrito.
  const [cartOpen, setCartOpen] = useState(false);

  // Guardar carrito en localStorage

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  // DEBUG (Puede eliminarse cuando todo funcione)
  useEffect(() => {
    console.log("Carrito actualizado:", cart);
  }, [cart]);

  // ABRIR / CERRAR SIDEBAR
  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  // AGREGAR PRODUCTO
  const addToCart = (product) => {

    const existingProduct = cart.find(

      item => item._id === product._id
    );

    if (existingProduct) {
      setCart(previousCart =>
        previousCart.map(item =>

          item._id === product._id

            ? {
              ...item,
              quantity: item.quantity + 1
            }

            : item
        )
      );
      toast.success(
        "Producto agregado al carrito"
      );
      return;
    }


    // Si el producto no existe, agregarlo con cantidad 1.
    setCart(previousCart => [
      ...previousCart,
      {
        ...product,
        quantity: 1
      }
    ]);
    toast.success(
      "Producto agregado al carrito"
    );
  };


  // ELIMINAR PRODUCTO
  const removeOneFromCart = (id) => {
    
    setCart(previousCart =>
      previousCart.flatMap(item => {
        if(item._id !== id) {
          return item;
        }
        if(item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1
          };
        }
        return [];
      })
    );
  };

  const removeFromCart = (id) => {

    setCart(previousCart =>
      previousCart.filter(

        item => item._id !== id
      )
    );
    toast.success("Producto eliminado del carrito");
  };

  // VACIAR CARRITO
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
        removeOneFromCart,
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