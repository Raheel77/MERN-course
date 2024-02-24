import React, {useState} from "react";
import {Navigate, Outlet} from 'react-router-dom'
import {onAuthStateChanged, signOut} from 'firebase/auth'
import {auth} from '../config/firebase-config'
import {set_user_auth} from "../store/slices/user_data_slice";
import {useSelector} from "react-redux";

const user = true;
const Private_Routes = () => {

  const [loginhere, setLoginhere] = useState(true);
  const user_data = useSelector((a) => a);

  const check_user = async () => {
    try {
      const user = await new Promise((resolve, reject) => {
        onAuthStateChanged(auth, resolve, reject);
      });

      if (user) {
        // User is signed in
        setLoginhere(true);
        console.log('User is signed in');
      } else {
        // User is signed out
        setLoginhere(false);
        console.log('User is signed out');
      }
    } catch (error) {
      console.error('Error checking user:', error);
    }
  };

// Assuming user_data contains the fetched user data
  if (user_data && user_data.user_data.isLoggedIn) {
    check_user(); // Call check_user function to update loginhere
  }

  return (
    user ? <Outlet/> : <Navigate to='/login'/>
  )
}

export {Private_Routes}
