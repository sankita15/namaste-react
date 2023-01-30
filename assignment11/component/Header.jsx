import React from "react";
import logo from '../assets/logo.png'
import {Link} from "react-router-dom";
import useNetworkStatus from "../hooks/useNetworkStatus";

const Header = () => {

    const isOnline = useNetworkStatus();

    const logout = () => window.location.href = 'http://localhost:1234/login'

    return (
        <div className="flex justify-between shadow-2xl mb-5 bg-amber-100 rounded-b-lg">
            <img src={logo} alt="logo" className="ml-3 h-32 w-32"/>
            <ul className='flex items-center font-serif text-xl'>
                <Link to={"/"} className={'px-3'}>Home</Link>
                <Link to={"about"} className={'px-3'}>About</Link>
                <li className={'px-3'}>New Arrivals</li>
                <li className={'px-3'}>Offers</li>
                <li className={'px-3'}>Cart</li>
            </ul>
            <div className={"my-auto"}>{isOnline ? '✅' : '📴'}</div>
            <button className="bg-orange-500 h-12 w-40 my-auto mr-2 rounded-xl" onClick={logout}>Log out</button>
        </div>
    );
}

export default Header
