import React from "react";
import logo from '../assets/logo.png'
import {Link} from "react-router-dom";
import * as cart from './../assets/cart.png';
import useNetworkStatus from "../hooks/useNetworkStatus";
import {useSelector} from "react-redux";

const Header = () => {

    const isOnline = useNetworkStatus();

    const cartData = useSelector(store => store.cart.items)

    const logout = () => window.location.href = 'http://localhost:1234/login'

    return (
        <div className="flex justify-between shadow-2xl mb-5 bg-amber-100 rounded-b-lg">
            <img src={logo} alt="logo" className="ml-3 h-32 w-32" data-testid={"logo"}/>
            <ul className='flex items-center font-serif text-xl'>
                <Link to={"/"} className={'px-3'} data-testid={"home"}>Home</Link>
                <Link to={"about"} className={'px-3'} data-testid={"about"}>About</Link>
                <li className={'px-3'} data-testid={"new-arrivals"}>New Arrivals</li>
                <li className={'px-3'} data-testid={"offers"}>Offers</li>
                <li className={'px-3'} data-testid={"discounts"}>Discounts</li>
            </ul>
            <div className={"my-auto"}>{isOnline ? '✅' : '📴'}</div>
            <div className={"flex justify-center items-center"}>
                <div style={{position: "relative"}}>
                    <div className={"bg-orange-400 text-white rounded-2xl w-fit text-sm"}
                         style={{
                             paddingLeft: 10,
                             width: 30,
                             paddingTop: 5,
                             paddingBottom: 5,
                             position: "absolute",
                             left: 50,
                             top: 10
                         }} data-testid={"cart-data"}>{cartData.length}</div>
                    <Link to={"/cart"}><img src={cart} alt={'cart'} data-testid={"cart-img"} className={"h-12 m-5"}/></Link>
                </div>
                <button className="bg-orange-500 h-12 w-40 my-auto mr-2 rounded-xl ml-3"
                        onClick={logout} data-testid={"logout-btn"}>Log out</button>
            </div>
        </div>
    );
}

export default Header
