import React from "react";
import logo from '../assets/logo.png'
import './../styles/header.css'
import {Link} from "react-router-dom";
import useNetworkStatus from "../hooks/useNetworkStatus";

const Header = () => {

    const isOnline = useNetworkStatus();

    const logout = () => window.location.href = 'http://localhost:1234/login'

    return (
        <div className="header-container">
            <img src={logo} alt="logo" height={120} width={120} className="logo"/>
            <ul className='nav-items'>
                <Link to={"/"}>Home</Link>
                <Link to={"about"}>About</Link>
                <li>New Arrivals</li>
                <li>Offers</li>
                <li>Cart</li>
            </ul>
            <div className='network-status' style={isOnline ? {backgroundColor: "green"}: {backgroundColor: "darkred"}} />
            <button className="logout-btn" onClick={logout}>Log out</button>
        </div>
    );
}

export default Header
