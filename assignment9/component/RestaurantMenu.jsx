import React, {useEffect, useState} from "react";
import {IMG_CDN} from "../data/constants";
import {useParams} from "react-router-dom";
import './../styles/restaurantMenu.css';
import Loader from "./Loader";

const RestaurantMenu = () => {
    const { id } = useParams();
    const [restaurantMenu, setRestaurantMenu] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
        setRestaurantMenu(jsonResponse.data.cards)
        setIsLoading(false)
    }

    const imageId = restaurantMenu[0]?.card?.card?.info?.cloudinaryImageId
    const imageUrl = imageId && `${IMG_CDN}${imageId}`

    const menuItems = restaurantMenu[2]?.groupedCard?.cardGroupMap.REGULAR.cards[2].card.card.itemCards

    return (
        <div>
            {
                isLoading ? <Loader/> :
                    <div className="restaurant-menu-container">
                        <img src={imageUrl} alt={'restaurantMenu'} className="restaurant-image"/>
                        <ul>
                            {
                                menuItems?.map((menuItem, index) => {
                                    return <li key={index} className="menu-list">{menuItem?.card?.info?.name}</li>
                                })
                            }
                        </ul>
                    </div>
            }
        </div>
    )
}

export default RestaurantMenu
