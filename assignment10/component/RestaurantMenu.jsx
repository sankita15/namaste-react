import React from "react";
import {IMG_CDN} from "../data/constants";
import {useParams} from "react-router-dom";
import ShimmerSkeleton from "./ShimmerSkeleton";
import useRestaurant from "../hooks/useRestaurant";

const RestaurantMenu = () => {
    const {id} = useParams();
    const restaurantMenu = useRestaurant(id)

    const getRestaurantDetails = () => restaurantMenu[2]?.groupedCard?.cardGroupMap.REGULAR.cards[2].card.card

    return (
        <>
            {
                !restaurantMenu ? <ShimmerSkeleton/> :
                    <>
                    <div className={"font-bold text-2xl mx-5"}>{getRestaurantDetails().title}</div>
                    <div className="flex">
                        <img src={`${IMG_CDN}${restaurantMenu[0]?.card?.card?.info?.cloudinaryImageId}`}
                             alt={'restaurantMenu'} className="m-5 rounded-lg shadow-2xl"/>
                        <ul>
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
                    </>

            }
        </>
    )
}

export default RestaurantMenu
