import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext.js";

// CART DRAWER COMPONENT
const CartDrawer = () => {
    const { cart, removeFromCart, closeCart, cartOpen } = useContext(CartContext);

    // TOTAL PRICIO CALCULO
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <>
            {/* OVERLAY */}
            {
                cartOpen && (
                    <div className="fixed inset-0 bg-black/40 z-40" onClick={closeCart}
                    />
                )
            }

            {/* DRAWER */}
            <aside className={`
            fixed 
            top-0
            right-0 
            
            h-screen
            w-full
            sm:w-[420px]

            bg-white 
            z-50 

            shadow-2xl

            transition-transform
            duration-300
            
            flex
            flex-col

            ${cartOpen
                    ? "translate-x-0"
                    : "translate-x-full"
                } 
            `}
            >

                {/* HEADER */}
                <div
                    className="
                        flex
                        items-center
                        justify-between

                        p-6
                        border-b
                    "
                >
                    <h2 className="
                        text-2xl
                        font-bold
                    ">
                        Tu Carrito
                    </h2>

                    <button
                        onClick={closeCart}
                        className="
                            text-3xl
                            hover:text-black
                            text-gray-500
                        "
                    >
                        X
                    </button>
                </div>

                {/* CART ITEMS */}
                <div
                    className="
                        flex-1
                        overflow-y-auto
                        p-6
                        space-y-5
                    "
                >
                    {
                        cart.length === 0 ? (
                            <div className="text-center mt-20">
                                <p className="text-gray-500">
                                    Tu carrito está vacío
                                </p>
                            </div>
                        ) : (
                            cart.map(item => (
                                <div
                                    key={item._id}
                                    className="
                                        flex
                                        gap-4
                                        border-b
                                        pb-4
                                    "
                                >
                                    { /* IMAGE */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="                                        
                                        w-20
                                        h-24
                                        w-24
                                        object-cover
                                        rounded-xl
                                    "
                                    />
                                    { /* INFO */}
                                    <div className="flex-1">
                                        <h3 className="font-semibold">
                                            {item.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Cantidad:
                                            {" "}
                                            {item.quantity}
                                        </p>
                                        <p className="
                                            font-bold
                                            mt-2
                                            text-[#8b5e3c]
                                        ">
                                            ${item.price * item.quantity}

                                        </p>
                                    </div>

                                    { /* REMOVE BUTTON */}
                                    <button
                                        onClick={() => removeFromCart(item._id)}
                                        className="
                                            text-red-500
                                            hover:text-red-700
                                        "
                                    >
                                        Eliminar
                                    </button>

                                </div>
                            ))
                        )
                    }

                </div>

                {/* FOOTER */}
                <div 
                    className="
                        border-t
                        p-6
                        space-y-4
                    "
                >
                    <div 
                        className="
                            flex
                            justify-between
                            items-center
                        "
                    >
                        <h3 className="
                            text-xl
                            font-bold
                        ">
                            Total

                        </h3>
                        <p className="
                            text-2xl
                            font-bold
                            text-[#8b5e3c]
                        ">
                            ${total}
                        </p>
                    </div>
                    <Link 
                        to="/checkout"
                        onClick={closeCart}
                        className="
                            block
                            text-center

                            bg-[#8b5e3c]
                            hover:bg-[#6f472d]

                            text-white

                            py-4
                            rounded-xl

                            font-semibold
                            transition
                    "
                    >
                        Ir al checkout
                    </Link>

                </div>

            </aside>
        </>
    )
};

export default CartDrawer;
