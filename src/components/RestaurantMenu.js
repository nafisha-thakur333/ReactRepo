import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams(); 

    const resinfo = useRestaurantMenu(resId);

    if(resinfo === null){
        return <Shimmer/>
    }

    console.log(resinfo)
    const {name, cuisines, costForTwoMessage} = resinfo?.cards[2]?.card?.card?.info;

    const itemCards = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ||
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];


    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
           
            <h1>Menu</h1>
            <ul>
                {itemCards.map((res,index) => <li key={index}>{res?.card?.info?.name}</li>)}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
