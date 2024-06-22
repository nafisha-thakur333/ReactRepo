import { MENU_API } from "../utils/constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) =>{
    const [resinfo, setresinfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async() => {
     const data = await fetch(MENU_API + resId)
     const json = await data.json();
     setresinfo(json.data);
    };

    return resinfo;
}

export default useRestaurantMenu;