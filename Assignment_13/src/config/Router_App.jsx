import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";

import Layout from "../components/Layout";
import {Login} from "../pages/Login";
import {Products} from "../components/Products";
import {ProductSingle} from "../pages/ProductSingle";
import {Home} from "../pages/Home";
import TodoApp from "../pages/TodoApp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<Layout/>}>
        <Route path="" element={<Dashboard />}/>
        <Route path="products" element={<Products />}/>
        <Route path="app" element={<TodoApp />}/>
        <Route path="Home" element={<Home />}/>
        <Route path="product/:id" element={<ProductSingle />}/>
      </Route>
    </Route>
  )
);

export const Router_App = () => {
  return <RouterProvider router={router}/>;
};
