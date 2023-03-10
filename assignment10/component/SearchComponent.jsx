import React from "react";

const SearchComponent = ({searchText, onChange, onClick}) => {
    const handleTextChange = (event) => onChange(event)
    const handleClick = (event) => onClick(event)
    return (
        <div className="flex mt-4 justify-center items-center mt-16 mb-5">
            <input type="text"
                   name="search"
                   className="h-12 w-96 rounded-2xl border-2 p-2"
                   value={searchText}
                   onChange={handleTextChange}
            />
            <button className="bg-orange-400 w-40 h-12 mx-4 rounded-xl" onClick={handleClick}>Search</button>
        </div>
    );
}

export default SearchComponent;
