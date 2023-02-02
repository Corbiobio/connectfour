import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "./Home";

const Layout = () => {
    return (

        <>
            {/* <Navbar /> */}
            {/* <Home /> */}
            <Outlet />
        </>
    );
};

export default Layout;