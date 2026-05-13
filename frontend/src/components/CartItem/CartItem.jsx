function CartItem({item, onRemove}){
    return(
        <div className="cart-item">
            <h4>{item.name}</h4>
            <p>${item.price}</p>

            <button onClick={()=>onRemove(item.id)}>
                Eliminar
            </button>
        </div>
    )
}
export default CartItem;