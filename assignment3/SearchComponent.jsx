import React from "react";
import search from './assets/search.png'
import './styles/search.css'

const SearchComponent = () => {
    return (
        <div className="search-container">
        <input type="text" name="search" className="search"/>
        <img src={search} alt="magnifier" height={24} width={24} className="search-icon"/>
        </div>
    );
}

export default SearchComponent;
