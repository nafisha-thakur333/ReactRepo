import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams(); 

    const resinfo = useRestaurantMenu(resId);

    const [showindex, setshowindex] = useState(0);

    if(resinfo === null){
        return <Shimmer/>
    }


    const {name, cuisines, costForTwoMessage} = resinfo?.cards[2]?.card?.card?.info;

    const itemCards = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ||
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];

    const categories = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c =>
         c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categories.map((c,index) => <RestaurantCategory 
                key={index} 
                data={c.card.card} 
                showitems={index === showindex ? true : false}
                setshowindex={() => setshowindex(index)}
            />)
            }
        </div>
    );
};

export default RestaurantMenu;
