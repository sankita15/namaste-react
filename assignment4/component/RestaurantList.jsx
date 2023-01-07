import React from "react";
import Restaurant from "./Restaurant";
import './../styles/restaurantList.css'
import {getConfigs} from "../data/getConfigs";

const RestaurantList = () => {
    const configs = getConfigs();
    const data = configs.data.restaurants;

    return (
        <div className="restaurant-list-container">
            <Restaurant restaurants={data}></Restaurant>
            <Restaurant restaurants={data}></Restaurant>
            <Restaurant restaurants={data}></Restaurant>
            <Restaurant restaurants={data}></Restaurant>
            <Restaurant restaurants={data}></Restaurant>
            <Restaurant restaurants={data}></Restaurant>
            <Restaurant restaurants={data}></Restaurant>
            <Restaurant restaurants={data}></Restaurant>
            <Restaurant restaurants={data}></Restaurant>
            <Restaurant restaurants={data}></Restaurant>
        </div>
    )
}

export default RestaurantList;
