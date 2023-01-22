import React from "react";
import logo from '../assets/logo.png'
import './../styles/login.css'
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

    return (
        <form className="login" onSubmit={formik.handleSubmit}>
            <img src={logo} alt="logo" className="logo-image"/>
            <div className="form-content">
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            </div>
            <button type="submit" className="login-btn">Login</button>
            {!isAuthenticated && <div className='error-msg'>Email or Password is incorrect</div>}
        </form>
    )
}

export default LoginPage
