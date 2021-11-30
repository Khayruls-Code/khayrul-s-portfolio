import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import html from '../../../images/expert/html.png'
import css from '../../../images/expert/css.jpg'
import javascript from '../../../images/expert/javascript.png'
import react from '../../../images/expert/react.png'
import node from '../../../images/expert/node.png'
import github from '../../../images/expert/github.jpg'
import firebase from '../../../images/expert/firebase.png'
import express from '../../../images/expert/express.png'
import mongodb from '../../../images/expert/mongodb.png'
import bootstrap from '../../../images/expert/bootstrap.png'
import tailwind from '../../../images/expert/tailwind.jpg'
import mui from '../../../images/expert/mui.jpg'
import SwiperCore from 'swiper';
SwiperCore.use([Autoplay]);

const Expert = () => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  }
  return (
    <div className='expert'>
      <Swiper {...params} autoplay={{ delay: 1000 }} slidesPerView={1} spaceBetween={10} pagination={{
        "clickable": true
      }} breakpoints={{
        "640": {
          "slidesPerView": 2,
          "spaceBetween": 20
        },
        "768": {
          "slidesPerView": 4,
          "spaceBetween": 40
        },
        "1024": {
          "slidesPerView": 5,
          "spaceBetween": 50
        }
      }} className="mySwiper">
        <SwiperSlide>
          <img src={html} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={css} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={javascript} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={react} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={node} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bootstrap} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tailwind} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mui} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={github} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={firebase} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={express} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mongodb} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Expert;