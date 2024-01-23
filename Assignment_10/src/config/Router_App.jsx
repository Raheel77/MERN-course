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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/*<Route path="" element={<Home/>}/>*/}
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>


      <Route path="" element={<Product/>}/>
      <Route path="product/:id" element={<ProductSingle/>}/>
    </Route>
  )
);

export const Router_App = () => {
  return <RouterProvider router={router}/>;
};
