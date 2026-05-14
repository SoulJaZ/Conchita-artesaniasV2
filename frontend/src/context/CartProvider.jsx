import {
  useState,
  useEffect,
  useMemo
} from "react";

import { CartContext } from "./CartContext";


// PROVIDER GLOBAL CARRITO

function CartProvider({ children }) {
  // ESTADO CARRITO

  const [cart, setCart] = useState([]);

  // Sidebar cart
  const [isCartOpen, setIsCartOpen] = useState(false);
  // RECUPERAR CARRITO


  useEffect(() => {

    const storedCart = localStorage.getItem("cart");

    if (storedCart) {

      setCart(JSON.parse(storedCart));
    }

  }, []);
  // GUARDAR CARRITO


  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);

  // AGREGAR PRODUCTO
  const addToCart = (product) => {

    setCart(prevCart => {

      // Buscar producto existente
      const existingProduct = prevCart.find(
        item => item._id === product._id
      );

      // Si ya existe
      if (existingProduct) {

        return prevCart.map(item =>

          item._id === product._id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );
      }

      // Nuevo producto
      return [
        ...prevCart,
        {
          ...product,
          quantity: 1
        }
      ];
    });

    // Abrir sidebar automáticamente
    setIsCartOpen(true);
  };
  // ELIMINAR PRODUCTO

  const removeFromCart = (id) => {

    setCart(prevCart =>

      prevCart.filter(
        item => item._id !== id
      )
    );
  };
  // AUMENTAR CANTIDAD

  const increaseQuantity = (id) => {

    setCart(prevCart =>

      prevCart.map(item =>

        item._id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  };
  // DISMINUIR CANTIDAD

  const decreaseQuantity = (id) => {

    setCart(prevCart =>

      prevCart
        .map(item =>

          item._id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };
  // LIMPIAR CARRITO

  const clearCart = () => {

    setCart([]);
  };
  // TOTAL ITEMS

  const totalItems = useMemo(() => {

    return cart.reduce(

      (acc, item) =>

        acc + item.quantity,

      0
    );

  }, [cart]);
  // TOTAL PRECIO

  const totalPrice = useMemo(() => {

    return cart.reduce(

      (acc, item) =>

        acc + (item.price * item.quantity),

      0
    );

  }, [cart]);
  // SIDEBAR

  const openCart = () => {

    setIsCartOpen(true);
  };

  const closeCart = () => {

    setIsCartOpen(false);
  };
  // PROVIDER

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        openCart,
        closeCart
      }}
    >

      {children}

    </CartContext.Provider>
  );
}

export default CartProvider;