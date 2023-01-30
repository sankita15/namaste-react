import React, {createContext} from "react";

const UserContext = createContext({
        favourites: [],
        setFavourites: () => {}
    }
)

export default UserContext;
