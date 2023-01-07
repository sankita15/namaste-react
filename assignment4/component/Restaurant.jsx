import React from "react";
import './../styles/restaurant.css'

const Restaurant = (data) => {
    const { restaurants } = data;
    const imageUrl = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_308,h_220,c_fill/${restaurants[0].data.cloudinaryImageId}`

    return (
        <div className="restaurant-container">
            <img src={imageUrl} alt="image"/>
            <div className="names">{restaurants[0].data.name}</div>
            <div className="categories">{restaurants[0].data.cuisines.join(', ')}</div>
            <div className="restaurant-info-container">
                <div className="ratings">{restaurants[0].data.avgRating}</div>
                <div className="eta">{restaurants[0].data.deliveryTime} min</div>
                <div className="estimated-cost">{restaurants[0].data.costForTwoString}</div>
            </div>
        </div>
    )
}
export default Restaurant
