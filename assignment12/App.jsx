import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import ErrorComponent from "./component/ErrorComponent";
import RestaurantMenu from "./component/RestaurantMenu";
import Profile from "./component/Profile";
import LoginPage from "./component/LoginPage";
import UserContext from "./context/UserContext";
import {Provider} from "react-redux";
import store from "./store";
import Cart from "./component/Cart";


const AppLayout = () => {
    const [favourites, setFavourites] = useState([])


    return (
        <Provider store={store}>
        <UserContext.Provider value={{favourites, setFavourites}}>
        <div>
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const About = React.lazy(() => import('./component/About'))

const appRouter = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorComponent />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <React.Suspense fallback={<div>Loading...</div>}><About/></React.Suspense>,
                children: [
                    {
                        path: 'profile',
                        element: <Profile />
                    }
                ]
            },
            {
                path: '/restaurants/:id',
                element: <RestaurantMenu />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />);
