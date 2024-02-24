import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
import MediaCard from "../Card";
import {Navbar_Component} from "../../components/Navbar_Component";

const User = () => {
  const params = useParams();
  console.log('params', params);

  const [prod, setProd] = useState([]);


  useEffect(() => {
    getData();
  }, [])


  const getData = () => {
    const dataIs = axios.get(`https://fakestoreapi.com/products/${params.id}`).then((resp) => {
      console.log(resp);
      setProd(resp.data);
    }).catch((err) => {
      console.log(err);
    })
  }
  console.log('prod', prod);

  return (
<>
    <Navbar_Component/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className='flex flex-wrap gap-14 justify-center'>
      <MediaCard target={'full'} title={prod.title} image={prod.image} desc={prod.description}/>
    </div>
 </>
  )
}

export default User