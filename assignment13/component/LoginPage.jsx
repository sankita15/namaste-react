import React from "react";
import logo from '../assets/logo.png'
import {useFormik} from "formik";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: () => {
            if(isAuthenticated) {
                window.location.href = "http://localhost:1234/"
            }
        },
    });
    const isAuthenticated = useAuth(formik.values)

    const isNotEmpty = () => {
       return formik.values.email !== '' && formik.values.password !== ''
    }

    return (
        <form className="flex flex-col justify-center items-center bg-amber-200 w-full h-screen" onSubmit={formik.handleSubmit}>
            <img src={logo} alt="logo" className="w-48 h-48 mb-16"/>
            <div className="flex flex-col">
            <label htmlFor="email" className={"font-bold text-lg mb-1"}>Email</label>
            <input
                id="email"
                type="text"
                className={"w-96 h-10 border-2 border-amber-900 mb-5 rounded p-2"}
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <label htmlFor="password" className={"font-bold text-lg mb-1"}>Password</label>
            <input
                id="password"
                type="password"
                className={"w-96 h-10 border-2 border-amber-900 mb-12 rounded p-2"}
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            </div>
            <button type="submit" className="bg-orange-500 h-10 w-40 rounded-xl">Login</button>
            {!isAuthenticated && isNotEmpty()  && <div className='error-msg'>Email or Password is incorrect</div>}
        </form>
    )
}

export default LoginPage
