import {Navbar} from '../components/Navbar'
import {Products} from '../components/Products'

import React from "react";

export const Product = (props) => {

  return <div className='space-y-12'>
    <Navbar/>
    <Products/>
  </div>;
};
