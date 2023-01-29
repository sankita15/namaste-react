import React, {useEffect, useState} from "react";
import {EMAIL_REGEX} from "../data/constants";

const useAuth = (credentials) => {
    const {email, password} = credentials;
    const [isAuthenticated, setIsAuthenticated] = useState(null)

    useEffect(() => {
        if (EMAIL_REGEX.test(email) && password === 'test1234') {
            setIsAuthenticated(true)
        } else {
            setIsAuthenticated(false)
        }
    })
    return isAuthenticated
}

export default useAuth
