import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux";
import {authIs} from '../config/firebase'
import {onAuthStateChanged} from "firebase/auth";


const Navbar_Component = () => {
  const userData = useSelector((state) => state.user_data)
  const loginDetails = userData.loginDetails
  // console.log('userData', loginDetails);



  const [login , setLogin] = useState(false);

  onAuthStateChanged(authIs, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // Access any other details you need from the user object
      setLogin(true);
      // console.log("User is signed in with uid:", uid);
    } else {
      // User is signed out
      // ...
    }
  });


  return (
    <div className='bg-primary_color h-20 px-3 flex items-center justify-between'>


      <div className='text-3xl text-white font-bold'>
        Logo
      </div>


      {userData.isLoggedIn ? <div className='space-x-3 text-white font-medium'>
          {loginDetails.first_name + ' '+loginDetails.last_name + " (" + loginDetails.email+ ")"}
        </div> :


        <div className='space-x-3 text-white font-medium'>
          <Link to='/login'>
            Login</Link><span>
                    |</span><Link to='/signup'>
          Signup</Link>
        </div>
      }
    </div>
  )
}

export {Navbar_Component}
