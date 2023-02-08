import React, {useContext, useEffect, useState} from "react";
import Search from "./Search";
import {RestaurantCard} from "./RestaurantCard";
import Loader from "./Loader";
import {Link} from "react-router-dom";
import UserContext from "../context/UserContext";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {favourites} = useContext(UserContext)

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
        setRestaurants(jsonResponse?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(jsonResponse?.data?.cards[2]?.data?.data?.cards);
        setIsLoading(false);
    }

    const handleChange = (event) => setSearchText(event.target.value)

    const handleClick = () => {
        setFilteredRestaurants(restaurants.filter(restaurant => {
            return restaurant.data.name.toLowerCase().includes(searchText);
        }))
    }

    return (
        <div>
            <Search searchText={searchText} onChange={handleChange} onClick={handleClick}/>
            <div style={{backgroundColor: 'orange'}}>
                <div className={"text-2xl w-10/12 flex justify-center"} style={{marginTop: 10, marginLeft: 50}}>Favourites <span style={{color: "darkred", fontSize: 29, marginLeft: 5}}>♥ </span></div>
                <div className={"flex justify-center"}>
                    {
                        favourites.map((favourite) =>
                        <div className="border-2 w-80 h-full p-3 m-5 hover:shadow-2xl">
                            <img src={favourite.image} alt="image"/>
                            <div className="font-serif text-xl font-bold mt-1">{favourite.name}</div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-wrap w-10/12 h-full mx-auto">
                {
                    isLoading ? <Loader/> :
                        filteredRestaurants?.map((filteredRestaurant) => {
                            return <Link to={`restaurants/${filteredRestaurant.data.id}`} className={"m-4"}
                                         key={filteredRestaurant.data.id}>
                                <RestaurantCard restaurant={filteredRestaurant.data}/>
                            </Link>;
                        })
                }
            < /div>
        </div>
    )
}
export default Body;
