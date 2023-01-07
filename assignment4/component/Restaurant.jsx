import React from "react";
import pizza from './../assets/pizza.jpeg'
import './../styles/restaurant.css'

const Restaurant = () => {
    return (
        <div className="restaurant-container">
            <img src={pizza} alt="pizza" height={150} width={170}/>
            <div className="names">Pounderia Pizza</div>
            <div className="categories">Pizzas</div>
            <div className="restaurant-info-container">
                <div className="ratings">4 star</div>
                <div className="eta">32 min</div>
                <div className="estimated-cost">300 for 2</div>
            </div>
        </div>
    )
}
export default Restaurant
