import React, {useEffect, useState} from "react";

const useRestaurant = (id) => {
    const [restaurantMenu, setRestaurantMenu] = useState(null);

    useEffect(() => {
        getRestaurantsMenu()
    }, [])

    const getRestaurantsMenu = async () => {
        let response, jsonResponse;
        try {
            response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.444898&lng=78.362345&restaurantId=${id}&submitAction=ENTER`)
            jsonResponse = response.ok ? await response.json() : await Promise.reject(response.status)
        } catch (e) {
            console.warn("Error occurred")
        }
        setRestaurantMenu(jsonResponse?.data?.cards)
    }

    return restaurantMenu
}

export default useRestaurant;
