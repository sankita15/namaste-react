import React from "react";
import './../styles/search.css'

const SearchComponent = ({searchText, onChange, onClick}) => {
    const handleTextChange = (event) => onChange(event)
    const handleClick = (event) => onClick(event)
    return (
        <div className="search-container">
            <input type="text"
                   name="search"
                   className="search-input"
                   value={searchText}
                   onChange={handleTextChange}
            />
            <button className="search-btn" onClick={handleClick}>Search</button>
        </div>
    );
}

export default SearchComponent;
