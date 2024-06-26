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
            <h1 className="font-bold p-2">{name}</h1>
            <p className="text-sm p-2">{cuisines.join(", ")} - {costForTwoMessage}</p>
           
            <div className="p-1 m-2">
            <h1 className="text-md font-bold">Menu</h1>
            <ul className="p-2 border border-solid overflow-y-scroll h-80">
                {itemCards.map((res,index) => <li key={index}>{res?.card?.info?.name}</li>)}
            </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;
