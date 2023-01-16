import React, {useState} from "react";
import logo from '../assets/logo.png'
import './../styles/header.css'

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const toggle = () => {
        setIsLoggedIn((prevState) => !prevState)
    }

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
            <button className="login-btn" onClick={toggle}>{isLoggedIn ? 'Login' : 'Log out'}</button>
        </div>
    );
}

export default Header
