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


const AppLayout = () => {
    const [favourites, setFavourites] = useState([])


    return (
        <UserContext.Provider value={{favourites, setFavourites}}>
        <div>
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
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
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />);
