import {
    useContext
} from "react";
import {
    CartContext
} from "../../context/cartContext"

// Checkout
function Checkout(){
    const {cart} = useContext(CartContext);

    // Calcular total
    const total = cart.reduce(
        (acc, item) =>
        acc + item.price,
        0
    );
    return(
        <main>
            <h1>Checkout</h1>
            <h2>Total: ${total}</h2>
            <button>
                Finalizar compra.
            </button>
        </main>
    )
}
export default Checkout;