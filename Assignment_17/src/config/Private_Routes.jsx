import { useState, useEffect } from "react";
import {Navigate, Outlet} from 'react-router-dom'
import {onAuthStateChanged, signOut} from 'firebase/auth'
import {auth} from '../config/firebase-config'
import {set_user_auth} from "../store/slices/user_data_slice";
import {useDispatch, useSelector} from "react-redux";

const user = false;
const Private_Routes = () => {
  const dispatch = useDispatch();
  const [loginCheck, setLoginCheck] = useState(false);
  const user_data = useSelector((current) => current.user_data);

  useEffect(() => {
/*    if ( user_data.user_data.isLoggedIn) {
      setLoginCheck(true);
    }else{
      setLoginCheck(false);
    }*/


    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(set_user_auth(true));
         console.log("User is Signed in.");
      } else {
        dispatch(set_user_auth(false));
        console.log("No user signed in.");
      }
    });


    if (user_data.user_data.isLoggedIn) {
      setLoginCheck(true);
    } else {
      setLoginCheck(false);
    }

  },[]);


  console.log("User's data",user_data);
  console.log('check login',loginCheck);
  return (
    loginCheck ? <Outlet/> : <Navigate to='/login'/>
  )
}

export {Private_Routes}
