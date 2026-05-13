import CartItem from "../../components/CartItem/CartItem";
import CartSummary from "../../components/CartSummary/CartSummary";

function Cart({cart,setCart}){

 const removeItem = (id)=>{

   setCart(
     cart.filter(item=>item.id !== id)
   );
 }

 return(

  <main>

    {
      cart.map(item=>(
        <CartItem
          key={item.id}
          item={item}
          onRemove={removeItem}
        />
      ))
    }

    <CartSummary cart={cart}/>

  </main>
 )
}

export default Cart;