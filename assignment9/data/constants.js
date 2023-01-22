export const IMG_CDN = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_308,h_220,c_fill/'

export const PROFILE_DATA = {
    "statusCode": 0,
    "data": {
        "total_orders": 10,
        "customer_care_number": "8067466794",
        "orders": [
            {
                "order_id": 1,
                "restaurant_name": "Pizza Hut",
                "delivery_address": {
                    "id": "1",
                    "name": "Powerpuff girls",
                    "address_line1": "Switzerland",
                    "address": "Switzerland, Europe",
                    "mobile": "99999999",
                    "email": "test12@gmail.com",
                    "flat_no": "111 Farzi wada",
                    "city": "Salzburg"
                },
                "order_items":
                    {
                        "item_id": "9",
                        "name": "Create Your Flavour Fun Combo - Box Of 2 - Veg Pizza",
                        "image_id": "xvtphaxmdnpcr6boayik",
                        "quantity": "1",
                        "total": "248",
                        "final_price": "168",
                        "item_total_discount": 80
                    }

            },
            {
                "order_id": 2,
                "restaurant_name": "Domino's",
                "delivery_address": {
                    "id": "2",
                    "name": "Super women",
                    "address_line1": "Austria",
                    "address": "Austria, Europe",
                    "mobile": "88888888",
                    "email": "test23@gmail.com",
                    "flat_no": "222 Farzi wada",
                    "city": "Hallstate"
                },
                "order_items": {
                        "item_id": "9",
                        "name": "Mirinda Pet Bottle",
                        "image_id": "wjmrbgifbxdmqnumj84h",
                        "quantity": "1",
                        "total": "57",
                        "final_price": "57",
                        "item_total_discount": 0
                    }
            },
            {
                "order_id": 3,
                "restaurant_name": "Biryani House",
                "delivery_address": {
                    "id": "3",
                    "name": "Spiderman",
                    "address_line1": "Germany",
                    "address": "Hamburg, Germany, Europe",
                    "mobile": "88888888",
                    "email": "test45@gmail.com",
                    "flat_no": "444 Farzi wada",
                    "city": "Hamburg"
                },
                "order_items":
                    {
                        "item_id": "9",
                        "name": "Spicy Subz-E-Biryani ( Hyderabadi Veg Dum Biryani - Serves 1)",
                        "image_id": "tjn5re9d3putlqbgrbbm",
                        "quantity": "1",
                        "total": "240",
                        "final_price": "300",
                        "item_total_discount": 60
                    }

            },
            {
                "order_id": 4,
                "restaurant_name": "The Bowl Company",
                "delivery_address": {
                    "id": "4",
                    "name": "Iron Man",
                    "address_line1": "Greece",
                    "address": "Athens, Greece",
                    "mobile": "11111111",
                    "email": "random45@gmail.com",
                    "flat_no": "444 Cophengen",
                    "city": "Athens"
                },
                "order_items":
                    {
                        "item_id": "9",
                        "name": "Classic Manchurian with Chilli Garlic Hakka Noodles+Choice of Dessert",
                        "image_id": "vn0vtychr8zcxoggvvob",
                        "quantity": "1",
                        "total": "240",
                        "final_price": "300",
                        "item_total_discount": 60
                    }

            }
        ]
    }
}

export const EMAIL_REGEX = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
