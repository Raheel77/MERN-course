import React from 'react'

import {products_data} from '../utils/products_data'
// import {useParams} from "react-router-dom";


export const Furnitures = () => {

  // const param = useParams();

  const filterData = products_data.filter((current) => {
    return current.id == 'test';
  });
  console.log(filterData[0]);
  return (
    <h1>this is Furnitures</h1>
  )
}
