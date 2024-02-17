import React, {useState} from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import {authIs} from '../config/firebase'
import {onAuthStateChanged} from "firebase/auth";

const user = true
const Private_Routes = () => {






  const [login , setLogin] = useState(false);

  onAuthStateChanged(authIs, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // Access any other details you need from the user object
      setLogin('login',true);
      console.log("User is signed in with uid:", uid);
      console.log(login );
    } else {
      // User is signed out
      // ...
    }
  });


  return (
    user  ? <Outlet /> : <Navigate to='/login' />
  
  )
}

export {Private_Routes}
