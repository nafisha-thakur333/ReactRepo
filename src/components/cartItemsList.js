import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { removeItem } from "../utils/cartSlice";

const CartItemsList = ({items}) => {
  
  const dispatch = useDispatch();

   const handleRemoveitem = (item) => {
    //dispatch and action
     dispatch(removeItem(item));
   }
    return (
       <div>
        {items.map((item) => (
          <div 
            data-testid = "cart-items"
            key={item.card.info.id} className="p-2 m-2 flex justify-between border-gray-200 border-b-2">
            <div className="text-left w-9/12">
                <div className="py-2">
                <span className="font-bold text-lg ">{item.card.info.name}</span><br/>
                <span className="font-bold text-md">₹{(item.card.info.price) ? (item.card.info.price/100) : (item.card.info.defaultPrice/100) }</span>
                </div>
                <p className="text-sm">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-2 relative">
               <img src={CDN_URL + item.card.info.imageId}></img>
               <div className="absolute inset-0 flex justify-center items-center">
                <button className="w-16 mt-24 border border-solid shadow-lg text-lime-700 bg-white rounded-md font-bold text-center cursor-pointer hover:bg-gray-200" 
                onClick={() => handleRemoveitem(item)}
                >Remove</button>
               </div>
            </div>
          </div>
        ))}
       </div>
    )
}

export default CartItemsList;