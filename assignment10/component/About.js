import React from "react";
import {Outlet} from "react-router-dom";

const About = () => {
    return (<div>
        <h2 style={{marginLeft: 20}}>Food delivery app</h2>
        <Outlet />
    </div>)
}

export default About
