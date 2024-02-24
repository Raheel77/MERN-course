import {CircularProgress, Typography} from "@mui/material";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {Custom_Button} from "./Custom_Button";
import {signOut} from "firebase/auth";
import {set_user_auth} from "../store/slices/user_data_slice";


// Firebase details
import {auth} from '../config/firebase-config/index'
import {onAuthStateChanged} from "firebase/auth";

const Navbar_Component = () => {
  const user_data = useSelector((store) => store.user_data);
  const [userLoginDetails, setUserLoginDetails] = useState([])
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout_handle = () => {
    signOut(auth).then((res) => {
      dispatch(set_user_auth(false));
      navigate('/login');
      console.log('User Logged Out...!')
    });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      const uid = user.uid;
      const email = user.email;
      const displayName = user.displayName;
      const photoURL = user.photoURL;


      setUserLoginDetails({
        userName: displayName,
        ID: uid,
        email: email,
        photoURL: photoURL,
      })
    } else {
      console.log("No user signed in.");
    }
  });

  // console.log(userLoginDetails);
  return (
    <div className="bg-primary_color h-20 px-3 flex items-center justify-between">
      <div className="text-3xl text-white font-bold">Logo</div>

      <div>
        {user_data.loading ? (
          <CircularProgress color="warning"/>
        ) : (
          <div>
            {user_data.isLoggedIn ? (
              <div className="space-x-3 text-white font-medium flex">
                {userLoginDetails ?
                  <>
                    <Typography>{userLoginDetails.userName}({userLoginDetails.email})</Typography>
                  </> :
                  <Typography>Username</Typography>
                }
                <span>|</span>
                <Custom_Button style={{paddingTop:0}} onClick={logout_handle}>
                  Logout
                </Custom_Button>
              </div>
            ) : (
              <div className="space-x-3 text-white font-medium">
                <Link to="/login">Login</Link>
                <span>|</span>
                <Link to="/signup">Signup</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export {Navbar_Component};
