import React from 'react';
import Swipe from './Swipe';

import {Swiper, SwiperSlide,} from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import { useRef } from 'react';
import 'swiper/css/autoplay';
import ModelViewer from './ModelViewer';
import "swiper/css/effect-coverflow";
import {v4 as uuidv4} from "uuid";
import { Autoplay,Navigation,Pagination,} from 'swiper';











const Software = () => {




  const software_services=["WEB DEVELOPMENT","APP DEVELOPMENT", "UX/UI DEVELOPMENT", "DATABASE MANAGEMENT", "DATA SCIENCE", "ARTIFICIAL INTELLIGENCE", "NETWORKING", "NETWORKING", "BACKEND ENGINEERING"]
  return (
    <div className='w-full h-auto mt-[4vw] overflow-hidden'>
        <div className='font-Montserrat text-center font-thin tracking-[2vw] text-white w-full text-[1.5vw]'> 
            <p>SOFTWARE</p>
            <p>{"<"}ENGINEERING{">"} </p>
            
        </div>

        <div className='text-white mt-[7vw] font-Montserrat font-bold text-[7vw]  text-center  md:flex '>
            <div className='md:w-1/2 md:text-left'>
                    <h2 className='text-white font-Montserrat text-[2vw] font-light '>{"<"}SOFTWARE{"/>"}</h2>
                    <h2 className=' md:w-full md:text-[5vw] font-extrabold '>DEVELOPMENT</h2>
                    <p className='text-[3vw] text-center font-Montserrat  font-light md:hover:leading-[6vw] hover:tracking-[.01em] duration-300 w-[80%] mx-auto text-center  leading-[10vw]   md:text-[2vw] md:w-full md:tracking-[.02em] md:leading-[4vw] md:text-left '>We develop highly optimized and maintainable solutions that match our clients' business goals, utilizing the recent technologies, processes, tools, and best of Engineers, Programmers and Developers to the fullest extent possible. </p>  
                    <button className='text-[2.5vw] text-center  bg-s_red sm:font-bold px-[4vw] py-[2vw] md:text-[1.3vw] md:px-[2em] md:py-[1em] hover:bg-[orange] hover:text-white hover:px-[3.2em] hover:py-[1.2em] hover:text-1.5xl duration-500 hover:font-bold '> HIRE US {">>"} </button>
                

            </div>

            <div className=' md:w-1/2 md:flex mt-[15vw] md:mt-[0vw]' >
            <ModelViewer scale="0.7" modelPath={"/3d Models/sci-fi/sci-fi.glb"}/>
            </div>



        </div>

        <div>
         {/* <Swipe/>  */}
        </div>



        <div className='w-full h-[15vw]   flex mt-[10vw] '>
        {/* <Swiper 
                slidesPerView={3}
                pagination={{
                  type:"progressbar",
                }} 
                grabCursor={true}
                centeredSlides={true}
                navigation={true}
                modules={[Pagination, Autoplay, Navigation]}
                loop={true}
                autoplay={{
                  delay:1200,
                  disableOnInteraction:false,
                  pauseOnMouseEnter: true,
                }}
                spaceBetween={30}
                >
          {software_services.map((each_service, i )=>{
            return(
            <SwiperSlide key={uuidv4()} >
              <li className="flex items-center justify-between text-center  border-[white] h-full text-[3vw] hover:font-extralight hover:text-[5vw] duration-300"  ><p  className='text font-Montserrat  font-regular align-center text-white text-[.8em]  w-full'> {each_service}</p></li></SwiperSlide> 
            ) })}
        </Swiper> */}
        </div>
          
     

        <div className='w-full h-[3vw] md:h-[1.6vw] bg-s_red mt-[2vw] '></div> 


    </div>
  )
}

export default Software