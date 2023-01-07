import React from "react";
import './../styles/restaurant.css'

const Restaurant = (props) => {
    const { restaurant } = props;
    const imageUrl = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_308,h_220,c_fill/${restaurant.cloudinaryImageId}`

    return (
        <div className="restaurant-container">
            <img src={imageUrl} alt="image"/>
            <div className="names">{restaurant.name}</div>
            <div className="categories">{restaurant.cuisines.join(', ')}</div>
            <div className="restaurant-info-container">
                <div className="ratings">★ {restaurant.avgRating}</div>
                <div className="separator">•</div>
                <div className="eta">{restaurant.deliveryTime} min</div>
                <div className="separator">•</div>
                <div className="estimated-cost">{restaurant.costForTwoString}</div>
            </div>
        </div>
    )
}
export default Restaurant
