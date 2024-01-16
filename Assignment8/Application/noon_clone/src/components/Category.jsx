import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles






 import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Grid, Pagination } from 'swiper/modules';





import cat1 from '../assets/category-slide-1.avif'
import cat2 from '../assets/category-slide-2.png'
import cat3 from '../assets/category-slide-3.png'
import cat4 from '../assets/category-slide-4.png'
import cat5 from '../assets/category-slide-5.png'
import cat6 from '../assets/category-slide-6.avif'
import cat7 from '../assets/category-slide-7.png'
import cat8 from '../assets/category-slide-8.png'
import cat9 from '../assets/category-slide-9.png'
import cat10 from '../assets/category-slide-10.png'
import cat11 from '../assets/category-slide-11.png'
import cat12 from '../assets/category-slide-12.png'
export default function Category() {
  return (
    <>
      <Swiper
        slidesPerView={12}
        grid={{
          rows: 1 ,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid]}
        className="mySwiper"
      >

        <SwiperSlide>
          <img src={cat1} alt=""/>
        </SwiperSlide>
        <SwiperSlide><img src={cat2} alt=""/></SwiperSlide>
        <SwiperSlide><img src={cat3} alt=""/></SwiperSlide>
        <SwiperSlide><img src={cat4} alt=""/></SwiperSlide>
        <SwiperSlide><img src={cat5} alt=""/></SwiperSlide>
        <SwiperSlide><img src={cat6} alt=""/></SwiperSlide>
        <SwiperSlide><img src={cat7} alt=""/></SwiperSlide>
        <SwiperSlide><img src={cat8} alt=""/></SwiperSlide>
        <SwiperSlide><img src={cat9} alt=""/></SwiperSlide>
        <SwiperSlide><img src={cat10} alt=""/></SwiperSlide>
        <SwiperSlide><img src={cat11} alt=""/></SwiperSlide>
        <SwiperSlide><img src={cat12} alt=""/></SwiperSlide>
        <SwiperSlide>
          <img src={cat1} alt=""/>
        </SwiperSlide>
        <SwiperSlide><img src={cat2} alt=""/></SwiperSlide>
        <SwiperSlide><img src={cat3} alt=""/></SwiperSlide>
        <SwiperSlide><img src={cat4} alt=""/></SwiperSlide>
        <SwiperSlide><img src={cat5} alt=""/></SwiperSlide>
        <SwiperSlide><img src={cat6} alt=""/></SwiperSlide>
        <SwiperSlide><img src={cat7} alt=""/></SwiperSlide>
        <SwiperSlide><img src={cat8} alt=""/></SwiperSlide>
        <SwiperSlide><img src={cat9} alt=""/></SwiperSlide>
        <SwiperSlide><img src={cat10} alt=""/></SwiperSlide>
        <SwiperSlide><img src={cat11} alt=""/></SwiperSlide>
        <SwiperSlide><img src={cat12} alt=""/></SwiperSlide>
      </Swiper>
    </>
  );
}
