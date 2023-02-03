import React from 'react'
import Image from 'next/image';
import {Swiper, SwiperSlide,} from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import {v4 as uuidv4} from "uuid";
import { useRef,useState } from 'react';

import "swiper/css/effect-coverflow";
import { EffectCoverflow,Pagination,Navigation,Mousewheel,Keyboard } from 'swiper';


const Swipe = () => {
  const next_btn = useRef(null);
  const prev_btn = useRef(null);


  const sci_image = [
    "/assets/software/Dashboard-Zoomed-In.jpg",
    "/assets/software/Desktop---7.jpg",
    "/assets/software/Desktop---13.jpg",
    "/assets/software/Desktop---14.jpg",
    "/assets/software/Desktop---15.jpg",
    "/assets/software/IOT-UI2.jpg",
    
  
  ]
  

  return (
    
    <div className='relative text-white h-auto w-full flex   items-center justify-between mt-[10vw]  ' >
                  
                  <button ref={next_btn} className='w-20 text-center h-20 rounded-full  border-s_red border-4 hover:bg-background font-Montserrat duration-300 flex items-center justify-evenly rounded-full text-white text-resp z-[10]  absolute right-0'>{">"}</button>
                  
                  <button ref={prev_btn} className='w-20 h-20 rounded-full  border-s_red border-4  hover:bg-background font-Montserrat duration-300 flex items-center justify-evenly rounded-full text-white text-resp z-[10]  absolute left-0'>{"<"}</button>
                  
    
    <Swiper
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={false}
    loop={true}
    navigation={{
      nextEl: next_btn.current,
      prevEl: prev_btn.current,
    }}

    onBeforeInit={(swiper)=>{
      swiper.params.navigation.nextEl = next_btn.current;
      swiper.params.navigation.prevEl = prev_btn.current;
    
    }}

    coverflowEffect={{
      rotate:0,
      stretch:0,
      depth:120,
      modifier:2,
      slideShadows:true,
    }}

     spaceBetween={2}
    slidesPerView={3}
    pagination={{clickable:true}}
    modules={[Pagination,EffectCoverflow, Navigation]}
    className="mySwiper"
    >


      {sci_image.map((each_image =>{

        return(
          <SwiperSlide key={uuidv4()}  >
          {({isActive}) =>{       
                return  <div   className={`relative   w-[60vw] h-[80vw]  drop-shadow-lg    duration-500 rounded-2xl    md:w-[30vw] md:h-[40vw]`}>  
                 <Image src={each_image} fill className="object-cover rounded-2xl"  />
                 
                 </div> 
            }}
          </SwiperSlide>
        )
      }))}
           


    



 
    </Swiper>

    



    
    </div>
  )
}


export default Swipe