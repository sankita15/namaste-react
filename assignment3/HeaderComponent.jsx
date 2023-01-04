import React from "react";
import SearchComponent from "./SearchComponent";
import logo from './assets/logo.png'
import user from './assets/user.png'
import './styles/header.css'

const HeaderComponent = () => {
    return (
        <div className="container">
        <img src={logo} alt="logo" height={80} width={80} className="logo"/>
        <SearchComponent />
        <img src={user} alt="user" height={45} width={45} className="user"/>
        </div>
    );
}

export default HeaderComponent
