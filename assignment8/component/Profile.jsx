import React, {Component} from "react";
import './../styles/profile.css'
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
        console.log(response, 'response')
        const {orders} = response?.data
        return (
            orders.map((order) => {
                return (
                    <div>
                    <div className="profile-container">
                            <img src={`${imageId}${order.order_items.image_id}`} alt={imageId} className={'image'}/>
                            <div className={'restaurant-detail-container'}>
                                <h2 className={'restaurant-name'}>{order.restaurant_name}</h2>
                                <h4 className={'food-name'}>{order.order_items.name}</h4>
                                <div className={'price-container'}>
                                    <div>Price: {order.order_items.total}</div>
                                    <div>Final Price: {order.order_items.final_price}</div>
                                    <div>Discount: {order.order_items.item_total_discount}</div>
                                </div>
                            </div>
                    </div>
                        <div className={'separator-line'}/>
                    </div>
                )
            })
        )
    }
}

export default Profile
