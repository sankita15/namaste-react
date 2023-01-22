import React from "react";
import {IMG_CDN} from "../data/constants";
import {useParams} from "react-router-dom";
import './../styles/restaurantMenu.css';
import Loader from "./Loader";
import useRestaurant from "../hooks/useRestaurant";

const RestaurantMenu = () => {
    const {id} = useParams();
    const restaurantMenu = useRestaurant(id)

    const getMenuItems = () => restaurantMenu[2]?.groupedCard?.cardGroupMap.REGULAR.cards[2].card.card.itemCards

    return (
        <div>
            {
                !restaurantMenu ? <Loader/> :
                    <div className="restaurant-menu-container">
                        <img src={`${IMG_CDN}${restaurantMenu[0]?.card?.card?.info?.cloudinaryImageId}`}
                             alt={'restaurantMenu'} className="restaurant-image"/>
                        <ul>
                            {
                                getMenuItems()?.map((menuItem, index) => <li key={index}
                                                                             className="menu-list">
                                    {menuItem?.card?.info?.name}</li>)
                            }
                        </ul>
                    </div>
            }
        </div>
    )
}

export default RestaurantMenu
