import React from "react";
import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";

export const Private_Routes_Seller = () => {


  const user_auth_state = useSelector((state) => state.user_auth);


  console.log('Check For Dashboard', user_auth_state);

  console.log(user_auth_state.user_auth);
  return user_auth_state.user_auth &&
  user_auth_state.user_data.role === "seller" ? (
    <Outlet/>
  ) : (
    <Navigate to="/login"/>
  );
};
