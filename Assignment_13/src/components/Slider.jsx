import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import {Grid, Pagination} from 'swiper/modules';


import cat2 from '../assets/images/baner-right-image-01.jpg'
import {Product_Card} from "./Product_Card";
import {products_data} from "../utils/products_data";


export default function Category() {
  const [data, setData] = useState([...products_data]);

  return (
    <>
      <Swiper
        slidesPerView={5}
        grid={{
          rows: 1,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid]}
        className="mySwiper"
      >

        {data.map((elem, ind) => {
          return <SwiperSlide>
            <Product_Card key={elem.id} data={elem}/>
          </SwiperSlide>
        })}
      </Swiper>
    </>
  );
}
