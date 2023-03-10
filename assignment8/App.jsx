import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import ErrorComponent from "./component/ErrorComponent";
import About from "./component/About";
import RestaurantMenu from "./component/RestaurantMenu";
import LoginPage from "./component/LoginPage";
import Profile from "./component/Profile";


const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

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
                element: <About />,
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
