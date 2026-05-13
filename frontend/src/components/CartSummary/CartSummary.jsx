function CartSummary({cart}){
    const total = cart.reduce(
        (acc,item)=>acc + item.price,
        0
    );

    return(
        <section>
            <h3>Total: ${total}</h3>
        </section>
    )
}

export default CartSummary;