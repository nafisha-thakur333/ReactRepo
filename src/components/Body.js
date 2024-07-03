import RestaurantCard, {withPromotedlabel} from "./RestaurantCard"    
import {useContext, useEffect, useState} from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
    // Local State variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardwithPromoted = withPromotedlabel(RestaurantCard);

    const {loggedInUser} = useContext(UserContext);
    //Whenever state variable changes, react triggers a reconcilation cycle(re-renders the component)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.900965&lng=75.8572758&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();

      //optional chaining
      setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlinestatus = useOnlineStatus();
    if(onlinestatus === false){
        return (
            <h1>Looks like you're offline. Please check your internet connection.</h1>
        )
    }

    const {setusername} = useContext(UserContext);
    //Conditional Rendering
    return listOfRestaurants.length === 0 ? 
    (<Shimmer/>) :
    (
        <div className="body">
 
        <div className="flex py-1">
            <div className="ml-[20%]">
                <input
                className="border-2 border-solid border-blue-950 rounded-md bg-slate-200 m-2 p-2"
                type="text"
                placeholder="Search anything."
                value={searchText}
                 onChange={(e) => setSearchText(e.target.value)}
                />
                <button type="submit" className="bg-[#0768b3] rounded-lg shadow-lg text-white px-[22px] py-[10px] mt-[-10] ml-[-4px] cursor-pointer border-none outline-none" onClick = {() => {
                 //search logic here
                 const searchedList = listOfRestaurants.filter(
                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                 );
                 setfilteredRestaurants(searchedList);
                }
                }>
                Search</button>
            </div>

            <div className="m-2 p-2">
             <button className="bg-[#0768b3] rounded-lg shadow-lg text-white px-[22px] py-[10px] mt-[-10] ml-[-4px] cursor-pointer border-none outline-none" onClick={()=> {
                // filter logic here
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.3
                );
                setfilteredRestaurants(filteredList);

             }}
             >
             Top Rated Restaurant</button>    
            </div> 

            <div>
                <input
                className="border-2 border-solid border-blue-950 rounded-md bg-slate-200 m-2 p-2"
                type="text"
                placeholder="Type User Name"
                value={loggedInUser}
                 onChange={(e) => setusername(e.target.value)}
                />
           </div>
            
        </div>

            <div className="flex flex-wrap px-3 py-3 m-[32px_90px]">
             {
             filteredRestaurants.map(restaurant => 
             <Link to={"/restaurants/" + restaurant.info.id}> 
              {
                (restaurant.info.avgRating > 4.3) ? 
                (
                <RestaurantCardwithPromoted key={restaurant.info.id} resData={restaurant}/>
                )
                :
                (
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/> 
                )
              }
             </Link>
             )}
            </div>
        </div>
    )
}

export default Body;