import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {Home} from "../pages/Home";
import {About} from "../pages/About";
import {Contact} from "../pages/Contact";
import {Product} from "../pages/Product";
import {ProductSingle} from "../pages/ProductSingle";
import {Layout} from "../components/Layout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>


      <Route path="product" element={<Product/>}/>
      <Route path="product/:id" element={<ProductSingle/>}/>
    </Route>
  )
);

export const Router_App = () => {
  return <RouterProvider router={router}/>;
};
