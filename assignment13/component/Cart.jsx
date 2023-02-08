import React from "react";
import {useSelector} from "react-redux";
import {IMG_CDN} from "../data/constants";
import logo from './../assets/logo.png'

const Cart = () => {
    const cartData = useSelector(store => store.cart.items)
    const getImageId = (order) => {
        if(order.card.info.imageId) {
            return `${IMG_CDN}${order.card.info.imageId}`
        }
        else {
            return logo
        }
    }

    return (
        <div>
            {cartData.map((order) => {
                return (<div key={order.card.info.id}>
                    <div className={"flex"}>
                        <img src={`${getImageId(order)}`} alt={`${getImageId(order)}`} className={'m-4 rounded-xl w-72'}/>
                        <div className={'m-4'}>
                            <div className={'font-bold text-2xl'}>{order.card.info.name}</div>
                            <div className={'font-medium'}>{order.card.info.description}</div>
                            <div className={"font-serif mt-5"}>
                                <div>Final Price: {order.card.info.price/100}</div>
                            </div>
                        </div>
                    </div>
                    <div className={'h-0.5 bg-gray-400 my-5 mx-5'}/>
                </div>)
            })}
        </div>
    )
}

export default Cart
