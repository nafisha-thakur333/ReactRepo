import RestaurantCard from "./RestaurantCard"    
import resList from "../utils/mockData"; 
import {useState} from "react"

const Body = () => {
    // Local State variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurant] = useState(resList);
    const [searchText, setSearchText] = useState("");

    return(
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
                 setListOfRestaurant(searchedList);
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
             listOfRestaurants.map(restaurant => 
             <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
             )}
            </div>
        </div>
    )
}

export default Body;