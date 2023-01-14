import React, {useEffect, useState} from "react";
import SearchComponent from "./SearchComponent";
import {Restaurant} from "./Restaurant";
import {CONFIG} from "../data/constants";
import './../styles/body.css';

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const restaurantsData = CONFIG.restaurants;
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants()
    }, [])

    const getRestaurants = async () => {
        let response, jsonResponse;
        try {
            response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.444898&lng=78.362345&page_type=DESKTOP_WEB_LISTING')
            jsonResponse = response.ok ? await response.json() : await Promise.reject(response.status)
        } catch (e) {
            console.warn("Error occured")
        }
        setRestaurants(jsonResponse.data?.cards[2]?.data?.data?.cards)
    }

    const handleChange = (event) => setSearchText(event.target.value)

    const handleClick = () => {
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
