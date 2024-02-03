import React from 'react'
import {Products} from "../components/Products";
import {Product_Card} from "../components/Product_Card";
import {products_data} from '../utils/products_data'
import {useParams} from "react-router-dom";


export const ProductSingle = () => {

  const param = useParams();

  const filterData = products_data.filter((current) => {
    return current.id == param.id;
  });
  console.log(filterData[0]);
  return <div className={'flex justify-center  pt-4 text-center'}><Product_Card data={filterData[0]} landing={false}/>
  </div>
}
