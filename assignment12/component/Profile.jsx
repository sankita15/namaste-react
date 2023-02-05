import React, {Component} from "react";
import {IMG_CDN, PROFILE_DATA} from "../data/constants";

class Profile extends Component {
    constructor(args) {
        super(args);

        this.state = {
            response: PROFILE_DATA,
            imageId: IMG_CDN
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => console.log('Setting interval'), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }


    render() {
        const {imageId, response} = this.state
        const {orders} = response?.data
        return (
            orders.map((order) => {
                return (
                    <div key={order.order_id}>
                    <div className="flex">
                            <img src={`${imageId}${order.order_items.image_id}`} alt={imageId} className={'m-4 rounded-xl'}/>
                            <div className={'m-4'}>
                                <div className={'font-bold text-2xl'}>{order.restaurant_name}</div>
                                <div className={'font-medium'}>{order.order_items.name}</div>
                                <div className={"font-serif mt-5"}>
                                    <div>Price: {order.order_items.total}</div>
                                    <div>Final Price: {order.order_items.final_price}</div>
                                    <div>Discount: {order.order_items.item_total_discount}</div>
                                </div>
                            </div>
                    </div>
                        <div className={'h-0.5 bg-gray-400 my-5 mx-5'}/>
                    </div>
                )
            })
        )
    }
}

export default Profile
