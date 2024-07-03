import { useState } from "react"
import ItemsList from "./ItemsList"

const RestaurantCategory = ({data, showitems, setshowindex}) =>{

  const handleClick = () =>{
   setshowindex();
  }
    return (
      <div>
        {/*Header*/}
        <div className="w-6/12 p-4 shadow-lg bg-gray-50 mx-auto my-4">
         <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
          <i className="right-0 pt-1 text-base transition-transform fa fa-chevron-down group-open:rotate-180"></i>
         </div>
        {/*Accordian Body*/}
        {showitems && <ItemsList items={data.itemCards}/>}
        </div>
     </div>
    )
}

export default RestaurantCategory