import React, {useContext, useEffect, useState} from "react";
import {IMG_CDN} from "../data/constants";
import {useParams} from "react-router-dom";
import ShimmerSkeleton from "./ShimmerSkeleton";
import useRestaurant from "../hooks/useRestaurant";
import UserContext from "../context/UserContext";
import {useDispatch} from "react-redux";
import {addItem, removeItem} from "../cartSlice";

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

    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item))
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
                                                    return <div className={"flex"} key={index}>
                                                        <li className="my-5 ml-5 list-disc font-serif">
                                                        {menuItem?.card?.info?.name}</li>
                                                        <button onClick={() => handleAddItem(menuItem)}
                                                            className="bg-orange-200  h-8 w-8 my-auto mr-2 rounded-xl ml-3">+</button>
                                                        <button onClick={() => handleRemoveItem(menuItem)}
                                                            className="bg-orange-200 h-8 w-8 my-auto mr-2 rounded-xl ml-3">-</button>
                                                    </div>
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
