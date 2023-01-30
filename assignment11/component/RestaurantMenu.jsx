import React, {useContext, useEffect, useState} from "react";
import {IMG_CDN} from "../data/constants";
import {useParams} from "react-router-dom";
import ShimmerSkeleton from "./ShimmerSkeleton";
import useRestaurant from "../hooks/useRestaurant";
import UserContext from "../context/UserContext";

const RestaurantMenu = () => {
    const {id} = useParams();
    const restaurantMenu = useRestaurant(id)

    const { favourites, setFavourites } = useContext(UserContext);

    const getRestaurantDetails = () => restaurantMenu && restaurantMenu[2]?.groupedCard?.cardGroupMap.REGULAR.cards[2].card.card
    const getRestaurantName = () => restaurantMenu && restaurantMenu[0]?.card.card.info.name

    let restaurantIdentifier;
    if (restaurantMenu) {
        restaurantIdentifier = {
            name: getRestaurantName(),
            image: `${IMG_CDN}${restaurantMenu[0]?.card?.card?.info?.cloudinaryImageId}`
        }
    }

    console.log(favourites, '000')

    const addFavourites = () => {
        setFavourites((prevState) => {
            return [
                ...prevState,
                restaurantIdentifier
            ]
        })
    }

    const removeFavourites = () => {
        const leftOverRestaurants = favourites.filter((favourite) =>
            !(favourite.name === restaurantIdentifier.name && favourite.image === restaurantIdentifier.image))
        setFavourites(leftOverRestaurants)
    }

    return (
            <>
                {
                    !restaurantMenu ? <ShimmerSkeleton/> :
                        <div className={"mx-5"}>
                            <div className={"font-bold text-2xl"}>{getRestaurantName()}</div>
                            {!favourites?.find((favourite => favourite.name === restaurantIdentifier.name)) ?
                                <div className={"bg-amber-200 rounded-xl"}
                                     style={{
                                         padding: 10,
                                         marginTop: 5,
                                         width: "fit-content",
                                         cursor: "pointer"
                                     }}
                                     onClick={addFavourites}
                                >
                                    <span style={{fontSize: 19}}>♡ </span> Favourite</div>
                                : <div className={"bg-amber-200 rounded-xl"}
                                       style={{
                                           padding: 10,
                                           marginTop: 5,
                                           width: "fit-content",
                                           cursor: "pointer"
                                       }}
                                       onClick={removeFavourites}
                                >
                                    <span style={{color: "darkred", fontSize: 19}}>♥ </span>Favourite </div>
                            }
                            <div className="flex">
                                <img src={`${IMG_CDN}${restaurantMenu[0]?.card?.card?.info?.cloudinaryImageId}`}
                                     alt={'restaurantMenu'} className="my-5 rounded-lg shadow-2xl"/>
                                <ul className={"mx-5"}>
                                    {
                                        getRestaurantDetails().itemCards?.map((menuItem, index) => {
                                                if (!restaurantMenu) {
                                                    return <ShimmerSkeleton/>
                                                } else {
                                                    return <li key={index} className="m-5 list-disc font-serif">
                                                        {menuItem?.card?.info?.name}
                                                    </li>;
                                                }
                                            }
                                        )
                                    }
                                </ul>
                            </div>
                        </div>

                }
            </>
    )
}

export default RestaurantMenu
