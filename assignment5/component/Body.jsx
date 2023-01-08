import React, {useState} from "react";
import SearchComponent from "./SearchComponent";
import Restaurant from "./Restaurant";
import {CONFIG} from "../data/constants";
import './../styles/body.css';

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const restaurantsData = CONFIG.restaurants;
    const [restaurants, setRestaurants] = useState(restaurantsData);

    const handleChange = (event) => setSearchText(event.target.value)

    const handleClick = () => {
        console.log(searchText, "seacrhTect")
        setRestaurants(restaurantsData.filter(restaurant => {
            return restaurant.data.name.toLowerCase().includes(searchText);
        }))
    }

    return (
        <div className="body-container">
            <SearchComponent searchText={searchText} onChange={handleChange} onClick={handleClick}/>
            <div className="restaurant-list-container">
                {
                    restaurants.map(restaurant => {
                        return <Restaurant restaurant={restaurant.data} key={restaurant.data.id}></Restaurant>
                    })
                }
            </div>
        </div>
    )
}

export default Body
