import {

    useState,
    useEffect

} from "react";


// Context
import { CartContext } from "./cartContext";

// PROVIDER GLOBAL CARRITO

function CartProvider({

    children

}) {
    // ESTADO CARRITO
    const [cart, setCart] = useState([]);
    // RECUPERAR CARRITO
    useEffect(() => {

        // Obtener carrito guardado
        const storedCart = localStorage.getItem("cart");


        // Si existe carrito
        if (storedCart) {

            setCart(

                JSON.parse(storedCart)
            );
        }

    }, []);
    // GUARDAR CARRITO
    useEffect(() => {

        // Guardar cambios carrito
        localStorage.setItem(

            "cart",

            JSON.stringify(cart)
        );

    }, [cart]);
    // AGREGAR PRODUCTO

    const addToCart = (product) => {

        // Validar producto
        if (!product) return;


        // Buscar si ya existe
        const existingProduct = cart.find(

            item => item._id === product._id
        );


        // Si existe
        if (existingProduct) {

            // Actualizar cantidad
            const updatedCart = cart.map(item =>

                item._id === product._id

                    ? {

                        ...item,

                        quantity: item.quantity + 1
                    }

                    : item
            );

            setCart(updatedCart);

        } else {

            // Agregar nuevo producto
            setCart([

                ...cart,

                {

                    ...product,

                    quantity: 1
                }
            ]);
        }
    };
    // ELIMINAR PRODUCTO
    const removeFromCart = (id) => {

        const updatedCart = cart.filter(

            item => item._id !== id
        );

        setCart(updatedCart);
    };

// DISMINUIR CANTIDAD
  const decreaseQuantity = (id)=>{

    const updatedCart = cart.map(item =>{

      if(item._id === id){

        return{

          ...item,

          quantity: item.quantity - 1
        };
      }

      return item;
    })

    // Eliminar si cantidad <= 0
    .filter(item => item.quantity > 0);


    setCart(updatedCart);
  };
    // LIMPIAR CARRITO
    const clearCart = () => {

        setCart([]);
    };
    // TOTAL PRODUCTOS

    const totalItems = cart.reduce(

        (acc, item) =>

            acc + item.quantity,

        0
    );
    // TOTAL PRECIO
    const totalPrice = cart.reduce(

        (acc, item) =>

            acc + (item.price * item.quantity),

        0
    );
    // PROVIDER
    return (

        <CartContext.Provider

            value={{

                cart,

                addToCart,

                removeFromCart,

                decreaseQuantity,

                clearCart,

                totalItems,

                totalPrice
            }}
        >

            {children}

        </CartContext.Provider>
    )
}

export default CartProvider;