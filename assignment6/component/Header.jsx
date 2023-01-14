import React from "react";
import logo from '../assets/logo.png'
import '../styles/header.css'

const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} alt="logo" height={120} width={120} className="logo"/>
            <ul className='nav-items'>
                <li>Home</li>
                <li>About</li>
                <li>New Arrivals</li>
                <li>Offers</li>
                <li>Cart</li>
            </ul>
        </div>
    );
}

export default Header
