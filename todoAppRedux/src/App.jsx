import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { convert_to_dark, convert_to_light, theme_toggle_dynamic, theme_toggle_using_payload } from "./store/slices/theme_slice";
import TodoApp from "./pages/TodoApp";
import {Router_App} from "./config/Router_App";

const App = () => {
  const state_value = useSelector((zakarya) => {
    return zakarya.theme;
  });

  const dispatch = useDispatch();

  const bg_color = state_value.theme_mode === "dark" ? "bg-black" : "bg-white";

  // convert theme to dark -----
  const convert_to_dark_handle = () => {
    dispatch(convert_to_dark());
  };

  // convert theme to light ----
  const convert_to_light_handle = () => {
    dispatch(convert_to_light());
  };

  // dynamic theme toggle ----
  const theme_toggle_handle_dynamic = () => {
    dispatch(theme_toggle_dynamic())
  }


 // changing theme by passing payload
  const theme_toggle_payload_handle = () => {
    dispatch(theme_toggle_using_payload('light'))
  }


/*  // function default parameters
  const example_func = (state = { name: 'aasaads' }, para) => {



  }


  example_func()*/



  return (
     <Router_App />
  );
};

export default App;
