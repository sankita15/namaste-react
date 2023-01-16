import React, {useEffect, useState} from "react";
import SearchComponent from "./SearchComponent";
import { RestaurantCard } from "./RestaurantCard";
import './../styles/body.css';
import Loader from "./Loader";
import {Link} from "react-router-dom";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getRestaurants()
    }, [])

    const getRestaurants = async () => {
        let response, jsonResponse;
        try {
            response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.444898&lng=78.362345&page_type=DESKTOP_WEB_LISTING')
            jsonResponse = response.ok ? await response.json() : await Promise.reject(response.status)
        } catch (e) {
            console.warn("Error occurred")
        }
        setRestaurants(jsonResponse.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(jsonResponse.data?.cards[2]?.data?.data?.cards);
        setIsLoading(false);
    }

    const handleChange = (event) => setSearchText(event.target.value)

    const handleClick = () => {
        setFilteredRestaurants(restaurants.filter(restaurant => {
            return restaurant.data.name.toLowerCase().includes(searchText);
        }))
    }

    return (
        <div className="body-container">
            <SearchComponent searchText={searchText} onChange={handleChange} onClick={handleClick}/>
            <div className="restaurant-list-container">
                {
                    isLoading ? <Loader /> :
                    filteredRestaurants.map((filteredRestaurant) => {
                        return <Link to={`restaurants/${filteredRestaurant.data.id}`} className={"restaurant"} key={filteredRestaurant.data.id}>
                            <RestaurantCard restaurant={filteredRestaurant.data} />
                        </Link>;
                    })
                }
            </div>
        </div>
    )
}

export default Body
