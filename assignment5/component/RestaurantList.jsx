import React from "react";
import Restaurant from "./Restaurant";
import './../styles/restaurantList.css'
import { CONFIG } from "../data/constants";

const RestaurantList = () => {
    const restaurants = CONFIG.restaurants;

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
