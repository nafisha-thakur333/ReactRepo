import RestaurantCard from "./RestaurantCard"    
import {useEffect, useState} from "react"
import Shimmer from "./Shimmer";

const Body = () => {
    // Local State variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

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

    //Conditional Rendering

    return listOfRestaurants.length === 0 ? 
    (<Shimmer/>) :
    (
        <div className="body">
 
        <div className="search-filter">
            <div className="search-container">
                <input
                className="search-input"
                type="text"
                placeholder="Search anything."
                value={searchText}
                 onChange={(e) => setSearchText(e.target.value)}
                />
                <button type="submit" className="search-btn" onClick = {() => {
                 //search logic here
                 const searchedList = listOfRestaurants.filter(
                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                 );
                 setfilteredRestaurants(searchedList);
                }
                }>
                Search</button>
            </div>

            <div className="filter-container">
             <button className="filter-btn" onClick={()=> {
                // filter logic here
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                setListOfRestaurant(filteredList);
                console.log(listOfRestaurants);
             }}
             >
             Top Rated Restaurant</button>    
            </div> 
        </div>

            <div className="res-container">
             {
             filteredRestaurants.map(restaurant => 
             <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
             )}
            </div>
        </div>
    )
}

export default Body;