import React from 'react';
import { browserName } from 'react-device-detect';


import { useRef, useEffect } from 'react';





const Header = () => {
  const lot =  useRef("null")


  useEffect(() => {
  
  
    return () => {
     console.log(browserName)
    }
  }, [])
  
  
  
  return (
    <div className='relative '>

        
         <div className='font-Montserrat text-3xl flex flex-col items-center gap-6 overflow-x-hidden'>
            <video autoPlay={true} loop={true} muted={true} className="z-10 w-[1] " >
            <source src={"/assets/Total Animation.mp4"} ></source>
                
                  {/* <source src={"/assets/just logo animation.webm"} ></source>
                  <source src={"/assets/safari_logo_animation.mp4"}  type="video/mp4" ></source>
                   */}
             
              </video>

        
                <h1 className='text-white font-Montserrat text-[2vw] lg:text-[1vw] tracking-[1em] hover:tracking-[1.3em] duration-300'>KR8TOS</h1>
                <p className='text-white font-Montserrat font-extralight w-4/5 text-[3vw] text-center hover:leading-[7vw]   md:hover:leading-[4vw] duration-300  font-light leading-[2em] md:text-[1.5vw] lg:text-[1vw] lg:w-2/5 md:w-1/2 '>We are an international multi-faceted
                 Creative Studios ,Digital Marketing and a Software Development Company geared at delivering high-end Digital Services to bridge the
                  gap between Creative Content, Software and Marketing for your ideas, Products, Businesses and Services .</p>
                <button className='text-[2vw] bg-pink text-white md:font-bold px-[3vw] py-[2vw] md:text-[1vw] md:px-[2em] md:py-[1em] md:hover:bg-pink md:hover:text-white md:hover:px-[3.2em] md:hover:py-[1.2em] md:hover:text-1.5xl duration-500 md:hover:font-bold lg:text-[.8em] '> HIRE US {">>"} </button>
               
             
          </div>
          {/* <video autoPlay={true} loop={true} muted={true} src={"/assets/render waves.webm"} className=" absolute top-[25vw]  lg:top-[20vw] xl:top-[12vw] w-auto  "/> */}

         

    </div>
    
 
  )
}

export default Header