import {useSelector} from "react-redux";
import CartItemsList from "./cartItemsList";
import {useDispatch} from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => (store.cart.items))
  
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return <div className="text-center m-4 p-1">
   <h1 className="text-2xl font-bold">Cart</h1>
   <button className="p-2 m-2 bg-black text-white rounded-lg"
     onClick = {handleClearCart}>Clear cart</button>
   <div className="w-6/12 m-auto">
     <CartItemsList items = {cartItems}/>
    </div>
    {cartItems.length === 0 && 
      <h1 className="text-2xl font-bold my-40">Cart is empty ! Kindly add items to the cart.</h1>
     }
  </div>
}

export default Cart;