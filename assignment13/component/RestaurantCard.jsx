import React from "react";
import { IMG_CDN } from "../data/constants";

export const RestaurantCard = (props) => {
    const { restaurant } = props;
    const imageUrl = `${IMG_CDN}${restaurant.cloudinaryImageId}`

    return (
        <div className="border-2 rounded-xl w-80 h-full p-3 hover:shadow-2xl">
            <img src={imageUrl} alt="image"/>
            <div className="font-serif text-xl font-bold mt-1">{restaurant.name}</div>
            <div className="font-extralight">{restaurant.cuisines.join(', ')}</div>
            <div className="flex mt-3 items-center">
                <div className="bg-green-600 text-sm py-1 px-2 rounded text-white">★ {restaurant.avgRating}</div>
                <div className="mx-2 text-lg">•</div>
                <div className="font-mono text-sm">{restaurant.deliveryTime} min</div>
                <div className="mx-2 text-lg">•</div>
                <div className="text-sm">{restaurant.costForTwoString}</div>
            </div>
        </div>
    )
}
