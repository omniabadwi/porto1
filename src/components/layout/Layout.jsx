import React, { Fragment } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function Layout() {
    return (
        <Fragment>
            <Toaster position="top-right"/>
            <Navbar />
            <Outlet />
            <Footer />
        </Fragment>
    );
}
