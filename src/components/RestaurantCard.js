import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) =>{
    const {resData} = props
    const {loggedInUser} = useContext(UserContext);
    
    const {cloudinaryImageId,
         name, 
         avgRating,
         cuisines, 
         costForTwo,
         sla} = resData?.info;

    return (
        <div data-testid="resCard"
        className="p-2 m-5 w-52 h-[355px] hover:cursor-pointer hover:border hover:border-black rounded-md
        shadow-md hover:scale-105"
         style={{ backgroundColor : "#f0f0f0"}}>
            <img 
             className="w-52 h-40 rounded-sm"
             src = {CDN_URL +  cloudinaryImageId}
             alt = "res-logo"
            />
            <h3 className="font-bold py-1 text-lg">{name}</h3>
            <h4 className="truncate max-w-xs relative hover:bg-gray-100 hover:shadow-lg hover:overflow-visible hover:whitespace-normal hover:absolute hover:z-10">{cuisines.join(', ')}</h4>
            <h4>{avgRating + " stars"}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
            {/* <h5>{loggedInUser}</h5> */}
        </div>
    )
}

export const withPromotedlabel = (RestaurantCard) =>{
    return (props) =>{
      return(
      <div>
        <label className="absolute bg-black h-8 py-0 text-white ml-6 z-10 p-2 rounded-md">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
      )
    }
}

export default RestaurantCard;