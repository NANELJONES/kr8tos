import React from 'react'
import Image from 'next/image';
import {Swiper, SwiperSlide,} from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import {v4 as uuidv4} from "uuid";

import { useRef,useState } from 'react';
import { useEffect } from 'react';
import { EffectCoverflow,Pagination,Navigation,Mousewheel,Keyboard } from 'swiper';
import "swiper/css/effect-coverflow";

export const Service_Swipe = () => {


    const [info, setinfo] = useState("")
    const next_btn = useRef(null);
    const prev_btn = useRef(null);

  
     const services = [
      { 
        id:1,
        title:"SOFTWARE DEVELOPMENT",
        desc:"We develop Websites, Apps, Databases, Backend Systems, Artificial Intelligent(AI) Systems, Expert Systems, UX/UI etc.  We utilize the latest technologies, languages and programs to highly efficient software for any use case like  your business, idea and projects. "
      },

      { 
        id:2,
        title:"Data Engineering & Analytics",
         desc:"Our Company offers Data Engineering, Data Mining and Data Analytics Services for Statistical Analysis to interpret huge data to derive meaningful interpretation and conclusions for better decision making. Eg. Understanding Customer Spending Patter. "
       },
    
      {
         id:3,
        title:"IT  SOLUTIONS",
      desc:"We utilize various fields of computing to provide you with various IT Solutions to tackle the many technical, complex and operational problems you our Client faces.  "
       },
    
      {
        id:4,
        title:"Branding & Design",
       desc:"We design and brand your ideas, company and vision by creating a cohesive visual language to better visualize your products, concepts and ideas. We create these designs to appeal what you want to sell to your target audience. "
       },
    
      { 
        id:5,
        title:"Media Production",
       desc:"As a company, we provide multimedia Production services like Photography, Videography, Visual Effects, Voice Overs, Music Production, etc."
       },
    
      {
        id:6,
      title:"Digital Marketing",
      desc:"We work as a Digital Marketing Agency to provide services such as Brand Strategy, Social Media Management, Search  Engine Optimization(SEO), Content Marketing, Affiliate Marketing and Pay-Per-Click to boost engagements between brand and your audience. "
      },
    
      {
        id:7,
        title:"3D Designs and  Animations",
         desc:"Our Creative Studio has a dedicated team of talented 3D Artists and Designers to design 3D concepts and Animations. Some of our 3D services include, 3D Modeling, Architectural Visualizations, Hard Surface Modeling, Product Design, 3D Fashion, Game Asset modeling, etc."
       },
    
      {
        id:8,
        title:"Art & Illustrations",
         desc:"Our team of talented Digital , Traditional and Artificial Intelligence Artists  create all forms of artworks and illustrations which best suits your interest. "
      },
    
      
      {
        id:9,
        title:"Animation & Motion Design",
        desc:"We are equipped with animators to produce High End 2d, 3d and Motion Design and Motion Graphics Animations for every scope where the use of animation as a whole is applicable. "
       }

  ]
  
  const breakpoints ={
    100:{
      slidesPerView:3,
      spaceBetween:20,
      centeredSlides:true,
      modifier:0,
      depth:0,
  
    },
    500:{
      slidesPerView:5,
      spaceBetween:4,
      depth:0,
    }
  }
  

  
    return (

        <div className='mt-[3vw] font-Montserrat text-white'>
        <p className='text-center text-[3vw] md:text-[1.5vw] w-[80%] mx-auto duration-200 hover:text-[orange] hover:tracking-[.4em]  font-light'>OUR </p>
        <p className='text-center text-[6vw] md:text-[2.4vw] duration-500 hover:text-[orange]   hover:tracking-[.5em]  w-[80%] mx-auto font-bold'>SERVICES </p>
        <div className='relative flex flex-col items-center justify-between ' >
            <div className=' text-white h-auto w-full flex items-center justify-evenly mt-[4vw] ' >
                       <button ref={next_btn} className='w-[15vw] h-[15vw] rounded-full  border-s_red border-4 bg-background hover:bg-background font-Montserrat duration-300 flex items-center justify-evenly rounded-full text-white text-resp z-[10]  absolute right-0    md:w-[7.5vw] md:h-[7.5vw]'>{">"}</button>
                    
                    <button ref={prev_btn} className='w-[15vw] h-[15vw]  rounded-full  border-s_red border-4  bg-background   hover:bg-background font-Montserrat duration-300 flex items-center justify-evenly rounded-full text-white text-resp z-[10]  absolute left-0  md:w-[7.5vw] md:h-[7.5vw]'>{"<"}</button>
                    
                 
      
      <Swiper
      effect={"coverflow"}
      grabCursor={true}
      loop={true}
      navigation={{
        nextEl: next_btn.current,
        prevEl: prev_btn.current,
      }}
  
      onBeforeInit={(swiper)=>{
        swiper.params.navigation.nextEl = next_btn.current;
        swiper.params.navigation.prevEl = prev_btn.current;
      
      }}

      onSlideChange={(swiper) => {
        if(swiper.activeIndex <= services.length){
          setinfo( services[swiper.activeIndex - 5].desc)
        }else if(swiper.activeIndex > services.length){
          
          if(swiper.activeIndex == 14){
            setinfo(services[swiper.activeIndex - 6].desc)
          }else{
            setinfo(services[swiper.activeIndex - 5].desc)
          }
          


        }
        
        
      }}
    
  
      coverflowEffect={{
        rotate:0,
        stretch:0,
        depth:120,
        modifier:2,
        slideShadows:true,
      }}
      pagination={{clickable:true}}
      spaceBetween={3}
      
      slidesPerView={5}
      centeredSlides={true}
      
      
      modules={[Pagination,EffectCoverflow, Navigation]}
      >
  
      {services.map((each_service )=>{
        
        return (
          <SwiperSlide key={each_service.id}>
          {({isActive}) =>{       
                    
                return     ( 
                      <div key={each_service.id} className=" flex items-center flex-col justify-between s" >
                            <div className={ ` ${isActive? " w-[50vw] h-[65vw] opacity-[1]   md:w-[22vw] md:h-[28vw]     " : "w-[44vw] h-[53vw]   md:w-[20vw] md:h-[25vw] opacity-[0.4]"} duration-300   relative flex items-center justify-evenly bg-white service_board `}>
                              <h1 className={`absolute text-[13vw] right-[6vw] top-[1vw] text-transparent font-bold md:right-[2.5vw] md:top-[0.5vw] md:text-[6.5vw]`} >{each_service.id}</h1>
                             
                            
  
  
                            <h2 className='absolute font-medium bottom-[10vw] md:bottom-[4vw]   w-[60%] left-[6vw]  md:left-[2.5vw]   text-[4.5vw]   h-auto w-auto max-w-[70%] bottom-[5vw]  left-[1.5vw]        md:text-[2vw]    '>{each_service.title}</h2>
                           
                            </div>
                            
                   {/* {isActive    
  
                    ? setinfo(each_service.desc)
                    : null       
                    }              */}
      
          </div>)
            }}
           
          </SwiperSlide>
        )   })}
        <h1 className='text-white text-8xl mt-[10vw] mt-[5vw]'></h1>
      </Swiper> 
             </div>
          <p className='text-[3vw] font-light  w-[80%] mx-auto text-center leading-[7vw] md:mt-[10vw]  mt-[5vw] md:mt-[unset]  md:w-[35vw] md:top-[30vw]    md:text-[1.3vw] md:w-[30%] md:leading-[3.5vw]'>{info}</p>
            
          {/* <button className=' text-black   text-[2.5vw] bg-white px-[3vw] py-[2vw] md:text-[1vw] md:px-[2em] md:py-[1em] hover:bg-pink hover:text-white hover:px-[3.2em] hover:py-[1.2em] hover:text-1.5xl duration-500 hover:font-bold '> HIRE US {">>"} </button>
                  */}
      
      </div>

        <div className='w-full flex items-center justify-evenly'>
        <button className=' text-[2.5vw] text-[black] mt-[2vw] mx-auto  bg-white px-[4vw] py-[2vw] md:text-[1vw] md:px-[2em] md:py-[1em] hover:bg-pink hover:text-white hover:px-[3.2em] hover:py-[1.2em] hover:text-1.5xl duration-500 hover:font-medium '> HIRE US {">>"} </button>


        </div>
      





</div>
      




 
  
    )
  }
  