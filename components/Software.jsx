import React from 'react';
import Link from 'next/link';
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
    <div className='w-full h-auto mt-[4vw] lg:mt-[1vw] overflow-hidden'>
        <div className='font-Montserrat text-center font-thin tracking-[2vw] lg:tracking-[3em] text-white w-full text-[1.5vw] lg:text-[10px]'> 
            <p>SOFTWARE</p>
            <p>{"<"}ENGINEERING{">"} </p>
            
        </div>

        <div className='text-white mt-[7vw] lg:mt-[2vw] font-Montserrat font-bold  md:flex '>
            <div className='md:w-1/2  relative   '>
                    
                    <h2 className=' text-center md:text-left text-white font-Montserrat text-[2vw] 2xl:text-[40px] font-light '>{"<"}SOFTWARE{"/>"}</h2>
                    <h2 className=' md:w-full md:text-[4vw] text-center md:text-left  font-light 2xl:text-[80px] '>DEVELOPMENT</h2>
                    <p className='text-[3vw] 2xl:text-[15px] w-[100%]   2xl:leading-[3em] text-center font-Montserrat  font-light md:hover:leading-[-1vw] hover:tracking-[.01em] duration-700 md:w-[90%]  text-center   leading-[10vw]   md:text-[1.1vw] md:w-full md:tracking-[.02em] md:w-[70%] text-left  md:leading-[3vw] md:text-left '>We develop highly optimized and maintainable solutions that match our clients' business goals, utilizing the recent technologies, processes, tools, and best of Engineers, Programmers and Developers to the fullest extent possible. </p>  


                 



                    
                 
                    <Link href="/portfolio/Software Development">
                        <button type="button"
                            className="inline-block  bg-[white] px-6 pt-2.5 pb-2 text-xs font-light uppercase leading-normal text-[rgb(0,0,0)] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-700 ease-in-out  hover:bg-[orange] hover:text-[white]"> EXOLORE MORE{">>"} </button>
                          
                    
                    </Link>
                  
                 

                   
                    
                
                   

            </div>

            <div className=' md:w-1/2 md:flex mt-[15vw] md:mt-[0vw]' >
            <ModelViewer scale="0.7" modelPath={"/3d Models/sci-fi/sci-fi.glb"}/>
            </div>



        </div>

        <div>
         <Swipe/> 
        </div>



        <div className='w-full h-[15vw] md:h-[7vw]   flex mt-[10vw] md:mt-[2vw] '>
        <Swiper 

            slidesPerView="auto"
                 breakpoints={{
                  // when window width is >= 640px
                  250: {
                   
                    slidesPerView: 3,
                    spaceBetween:30,
                  },

                  640: {
                   
                    slidesPerView: 4,
                    spaceBetween:40,
                  },
                 
                 
                }}
                
                pagination={{
                  type:"progressbar",
                }} 
                grabCursor={true}
                centeredSlides={true}
                navigation={true}
                modules={[Pagination, Autoplay, Navigation]}
                loop={true}
                autoplay={{
                  delay:1800,
                  disableOnInteraction:false,
                  pauseOnMouseEnter: true,
                }}
               
                >
          {software_services.map((each_service, i )=>{
            return(
            <SwiperSlide key={uuidv4()} >
              <li className="flex  items-center justify-between text-center  border-[white] h-full text-[3vw] md:text-[1.2vw] 2xl:text-[1.5em] xl:hover:text-[2vw] hover:font-extralight hover:text-[2vw] 2xl 2xl:hover:text-[2.3em]  duration-300"  ><p  className='text font-Montserrat  font-regular align-center text-white text-[.8em]   w-full'> {each_service}</p></li></SwiperSlide> 
            ) })}
        </Swiper>
        </div>
          
     

        <div className='w-full h-[3vw] md:h-[1vw] bg-s_red mt-[1vw] xl:mt-[-20px]  max-h-[30px] '></div> 


    </div>
  )
}

export default Software