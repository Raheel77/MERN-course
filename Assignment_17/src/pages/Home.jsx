import React, {useEffect, useState} from "react";

import {Navbar_Component} from '../components/Navbar_Component'
import {User_Profile_Section} from '../components/User_Profile_Section'


import axios from 'axios';
import MediaCard from "./Card";


const Home = () => {

  const [prod, setProd] = useState([])

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    const dataIs = axios.get('https://fakestoreapi.com/products').then((resp) => {
      // console.log(resp);
      setProd(resp.data);
    }).catch((err) => {
      console.log(err);
    })
  }


  return (
    <div className='bg-bg_color h-[100dvh]'>
      <Navbar_Component/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='flex  justify-center'>
        <h2 className={'text-7xl'}>Products </h2>
      </div>
      <br/>
      <br/>
      <div className='flex flex-wrap gap-14 justify-center'>
        {prod.map((init, index) => {
          return (
            <MediaCard id={init.id} title={init.title} image={init.image} desc={init.description} key={index}/>
          )
        })}
      </div>
    </div>
  )
}

export {Home}
