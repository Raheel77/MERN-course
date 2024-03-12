import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Custom_Input_Field } from "../components/Custom_Input_Field";
import { Custom_Button } from "../components/Custom_Button";
import { Link } from "react-router-dom";



import {login_account} from "../config/firebase/firebase_methods";

export const Login = () => {
  const [data, setData] = useState({});

  const change_handle = (e) => {
    const { id, value } = e.target;

    setData((pre_data) => {
      return { ...pre_data, [id]: value };
    });
  };

  const submit_handle = (e) => {
    e.preventDefault();
    const { email, password } = data;
    login_account(email, password)
      .then((res) => {
        console.log(`You have Signed In as ${email}`);
        dispatch(set_user_auth({ data, auth: true }));
      })
      .catch((error) => {
        console.log('err',error);
      });
  };

  return (
    <div className="bg-bg_color h-[100dvh] grid place-items-center">
      <Box
        component="form"
        onSubmit={submit_handle}
        className="max-w-md w-[100%] space-y-5 bg-white py-5 px-4 rounded"
      >
        <Typography
          className="text-primary"
          align="center"
          fontWeight="bold"
          fontSize={28}
        >
          {" "}
          Login
        </Typography>
        <div className="space-y-5">
          <Custom_Input_Field
            label="Email"
            required={true}
            id="email"
            onChange={change_handle}
            placeholder="Enter email"
            type="email"
          />
          <Custom_Input_Field
            label="Password"
            required={true}
            id="password"
            onChange={change_handle}
            placeholder="Enter password"
            type="password"
          />
        </div>

        <Custom_Button type="submit">Login</Custom_Button>
        <div className="text-center">
          Don't have account{" "}
          <Link to="/signup" className="text-primary underline">
            Signup Now
          </Link>
        </div>
      </Box>
    </div>
  );
};
