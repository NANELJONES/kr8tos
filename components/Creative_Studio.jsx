import React from 'react';
import Image from 'next/image';
//import group_img from "/assets/pack.png"



const Creative_Studio = () => {



  return (
    <div className='mt-10 flex flex-col h-auto mx-auto   '>
      <div className='relative md:flex md:w-full'>
                <div className='flex w-full flex-col text-white md:w-2/3 ' >
                          <h4 className='font-Montserrat font-bold tracking-[2vw] text-[5vw] md:text-[1.5vw] md:tracking-[1vw]' >CREATIVE</h4>
                          <h1 className='font-Montserrat font-extrabold text-[12vw] md:text-[5vw] tracking-[2vw] md:tracking-[1.4vw]' >STUDIO</h1>
                          <p className='border-b-[2vw]  border-[orange]  text-resp text-justify font-Montserrat font-extralight leading-10 hover:leading-[5vw] hover:border-k_red md:leading-[4vw] hover:text-[orange] hover:font-bold md:text-[1.6vw]  md:text-orange duration-500'>As a creative studio, we collaborate with both Digital and Traditional Creatives from diverse fields and disciplines of Creativity to produce Visually compelling Designs right from concept & ideation to product development . Some of our services include Graphics Design, Branding , 3D and CGI, Photography, Animation, Visual Effects, Copy Writing, Music</p>
                </div>
                {/* <div className='rounded-full animate-pulse w-[60px] h-[30px] bg-pink'></div> */}

                
                <div className=' w-full relative h-auto mt-5 md:relative md:w-[70%] md:mt-[20vw]  '>
                      <div className="h-[70vw]   md:h-[50vw] relative w-[65%]  mx-auto z-10 md:w-[80%] overflow-hidden  " >
                             <Image fill={true} unoptimized className="object-contain md:hover:scale-105 font-Montserrat  duration-300 md:hover:object-cover" 
                             src={"/assets/total.png"}
                              alt={"KR8TOS"}  />
                      </div>
                      <div className='absolute bottom-[10vw] w-[full]   h-[10px] md:right-[0%] md:w-[195%] duration-500'>
                            <div className='w-full h-[3vw] bg-[#FFA318] md:h-[1.8vw] '></div>
                            <div className='w-full h-[3vw] bg-[#FFA318] mt-[1vw] md:h-[1.8vw]'></div> 
                        </div>
                     
                        {/* <img src={"/assets/POSTER-2.jpg" } className=" relative w-[40vw] left-[25vw]"  />
                        <img src={"/assets/POSTER-1.jpg" } className="relative w-[40vw] z-[10] left-[43vw] top-[-20vw]"  />
                      
                        <img src={"/assets/POSTER-3.jpg"} className=" relative w-[40vw] h-[70vw] object-cover left-[33vw] top-[-40vw]"  /> */}
                </div>


      </div>



      <div className='text-white mt-[7vw] font-Montserrat font-bold text-[10vw] md:text-[7vw] '>
            <h2 className='text-white font-Montserrat hover:tracking-[.1em] duration-300'>Our Creative</h2>
            <h2 className='hover:tracking-[.1em]   duration-300 '>Studio</h2>
            <p className='hover:w_shadow text-resp text-justify hover:tracking-[.15em] duration-300 font-Montserrat font-align font-light md:text-[2vw] md:w-[55%] md:tracking-[.1em] '>team comprises of a collection of the top talents of each creative field , who methodically produce strategies  and artistically model designs to fit your brand message and  to give your idea a uniform and cohesive visual language using all forms of digital media. </p> 
             
             
            <p className='hover:w_shadow hover:tracking-[.15em] duration-300  text-resp text-justify font-Montserrat font-align font-light md:text-[2vw] md:w-[50%] md:tracking-[.15em]'>
              
             We work in all forms of media from Tv to Ads to Marketing campaigns , Cinema and billboards. 
            </p>


      </div>

      <h2 className='border-l-[3vw]  mt-[8vw] px-[10px] border-white font-Montserrat font-bold w-2/3 text-white text-[5vw] md:text-[4vw] md:w-2/3  md:font-extrabold hover:leading-[7vw]   md:border-l-[1vw] md:border-[orange] hover:tracking-[0.5vw] duration-300  md:mt-[6vw] '>We Provide Creative Solutions to your Technical Problems</h2>
      
      
      <div className='w-[90%] mx-auto mt-[8vw] h-auto md:w-2/3  ' >         
        
         <img src={"/assets/round-circle1.png"}  className=" w-[48%] mx-auto animate-spin-slow"/>  
        
          <div className='w-[full] h-auto flex mt-[-4vw] justify-between'>
              <img src={"/assets/round-circle2.png"} className=" w-[48%] animate-spin-slow"/>
               <img src={"/assets/round-circle3.png"} className=" w-[48%] animate-spin-slow"/>
          </div>
      </div>

      <div className='w-full flex flex-col items-center mt-[7vw]'>
        <h1 className='font-Montserrat text-white text-[8vw] md:text-[4vw]'>You think it,</h1>
        <h1 className='font-Montserrat text-white text-[14vw] text-center md:text-[8vw]'>We Create It</h1>
       
      </div>

      <div className='w-full h-[3vw] md:h-[1.3vw] bg-white mt-[1vw] '></div> 



    </div>
  )
}

export default Creative_Studio