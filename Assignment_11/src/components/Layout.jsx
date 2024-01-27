import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import '../assets/css/bootstrap.min.css'
import '../assets/css/font-awesome.css'
import '../assets/css/templatemo-hexashop.css'
import '../assets/css/lightbox.css'



export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};