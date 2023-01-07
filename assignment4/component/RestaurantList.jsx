import React from "react";
import Restaurant from "./Restaurant";
import './../styles/restaurantList.css'
import {getConfigs} from "../data/getConfigs";

const RestaurantList = () => {
    const configs = getConfigs();
    const restaurants = configs.data.restaurants;

    return (
        <div className="restaurant-list-container">
            {
                restaurants.map(restaurant => {
                    return <Restaurant restaurant={restaurant.data} key={restaurant.data.id}></Restaurant>
                })
            }
        </div>
    )
}

export default RestaurantList;
