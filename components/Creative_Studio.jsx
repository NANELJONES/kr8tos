import React from 'react';
import Image from 'next/image';
import { useRef } from 'react';
//import group_img from "/assets/pack.png"



const Creative_Studio = () => {




  return (
    <div className='mt-10 flex flex-col h-auto mx-auto max-w-100%   ' >
      
     
      <div className='relative md:flex md:w-full overflow-x-hidden  h-auto'>
                <div className='flex w-full flex-col text-white md:w-2/3 xl:w-1/2  ' >
                          <h4 className='font-Montserrat font-bold tracking-[2vw] text-[5vw] md:text-[1.5vw] 2xl:text-[40px]  md:tracking-[1vw] 2xl:tracking-[1em] ' >CREATIVE</h4>
                          <h1 className='font-Montserrat font-extrabold text-[12vw] md:text-[5vw] tracking-[2vw] md:tracking-[1.4vw] 2xl:text-[8em] 2xl:tracking-[0.3em]' >STUDIO</h1>
                          <p className='border-b-[2vw] xl:border-b-[25px] border-[orange]  text-resp text-justify font-Montserrat leading-[8vw] font-extralight md:leading-10 md:hover:leading-[4vw] hover:border-k_red md:leading-[4vw] hover:text-[orange] hover:font-bold md:text-[1.6vw]  2xl:text-[1.4em] 2xl:leading-[2.5em] 2xl:hover:leading-[3.3em] duration-500'>As a creative studio, we collaborate with both Digital and Traditional Creatives from diverse fields and disciplines of Creativity to produce Visually compelling Designs right from concept & ideation to product development . Some of our services include Graphics Design, Branding , 3D and CGI, Photography, Animation, Visual Effects, Copy Writing, Music</p>
                </div>
                {/* <div className='rounded-full animate-pulse w-[60px] h-[30px] bg-pink'></div> */}

                
                <div className=' w-full relative h-auto mt-5 md:relative md:w-[70%] md:mt-[20vw] lg:mt-[2em]   '>
                      <div className="h-[100vw] max-h-[1000px]  md:h-[50vw] relative w-[65%]  mx-auto z-10 md:w-[80%]   lg:w-[65%]   lg:ml-[5vw] 2xl:ml-[4em]  md:hover:w-[75%]   duration-700" >
                             <Image fill unoptimized className="object-contain   font-Montserrat       " 
                             src={"/assets/total.png"}
                              alt={"KR8TOS"}  />
                      </div>
                      <div className='absolute bottom-[10vw] lg:bottom-[3vw] 2xl:bottom-[4em]  w-[full]  h-auto md:right-[0%] md:w-[200%] duration-500'>
                            <div className='w-full h-[3vw] bg-[#FFA318] md:h-[1.8vw]  2xl:h-[25px]  '></div>
                            <div className='w-full h-[3vw] bg-[#FFA318] mt-[1vw] 2xl:mt-[30px] md:h-[1.8vw] xl:h-[1vw] 2xl:h-[25px]'></div> 
                        </div>
                     
                        {/* <img src={"/assets/POSTER-2.jpg" } className=" relative w-[40vw] left-[25vw]"  />
                        <img src={"/assets/POSTER-1.jpg" } className="relative w-[40vw] z-[10] left-[43vw] top-[-20vw]"  />
                      
                        <img src={"/assets/POSTER-3.jpg"} className=" relative w-[40vw] h-[70vw] object-cover left-[33vw] top-[-40vw]"  /> */}
                </div>


      </div>



      <div className='md:flex md:w-full text-white mt-[2vw] font-Montserrat font-bold text-[10vw] md:text-[6vw] 2xl:text-[100px] '>
          
          <div className='md:w-[50%] xl:w-2/3'>
              <h2 className='text-white font-Montserrat hover:tracking-[.05em] duration-300 ' >Our Creative</h2>
                <h2 className='hover:tracking-[.1em]   duration-300 '>Studio</h2>
                <p className='hover:w_shadow text-resp text-justify hover:tracking-[.15em] duration-300 font-Montserrat font-align font-light xl:text-[1.1vw] md:text-[1.4vw] 2xl:text-[20px] 2xl:leading-[3em] md:w-[90%] md:tracking-[.1em] md:leading-[2.5vw]'>team comprises of a collection of the top talents of each creative field , who methodically produce strategies  and artistically model designs to fit your brand message and  to give your idea a uniform and cohesive visual language using all forms of digital media. </p> 
                
                
                <p className='hover:w_shadow hover:tracking-[.15em] duration-300  text-resp text-justify font-Montserrat font-align font-light xl:text-[1.1vw] md:text-[1.5vw] md:w-[90%] md:tracking-[.15em] md:leading-[2.5vw] 2xl:text-[20px] 2xl:leading-[3em]'>
                  <br/>
                We work in all forms of media from Tv to Ads to Marketing campaigns , Cinema and billboards. 
                </p>

          </div >

          <div className='md:w-[50%]  flex flex-col items-center'>
                  
              {/* <div className='w-[90%] mx-auto my-auto  md:w-4/5 max-w-[700px] ' >         
                
                <img src={"/assets/round-circle1.png"}  className=" w-[48%] mx-auto animate-spin-slow"/>  
              
                <div className='w-[full] h-auto flex mt-[-4vw] md:mt-[-1vw] justify-between'>
                    <img src={"/assets/round-circle2.png"} className=" w-[48%] animate-spin-slow"/>
                      <img src={"/assets/round-circle3.png"} className=" w-[48%] animate-spin-slow"/>
                </div>
            </div>
 */}

            
          </div>
 


      </div>

      <h2 className='border-l-[3vw]  mt-[8vw] px-[10px] border-white font-Montserrat font-bold w-2/3 text-white text-[5vw] md:text-[4vw] md:w-2/3  2xl:text-[5em] 2xl:border-l-[.3em]  md:font-extrabold hover:px-[2vw]    md:border-l-[1vw] md:border-[orange] hover:text-[orange]  duration-300  md:mt-[4vw] 2xl:mt-[3vw] '>We Provide Creative Solutions to your Technical Problems</h2>
      
      
      <div className='w-[90%]  mx-auto flex flex-col items-center justify-between mt-[4vw] 2xl:mt-[2.5vw] md:w-2/3 max-w-[700px] ' >         
        
         <img src={"/assets/round-circle1.png"}  className=" w-[48%] mx-auto animate-spin-slow"/>  
        
          <div className='w-[full] h-auto flex mt-[-1vw] justify-between'>
              <img src={"/assets/round-circle2.png"} className=" w-[48%] animate-spin-slow"/>
               <img src={"/assets/round-circle3.png"} className=" w-[48%] animate-spin-slow"/>
          </div>
      </div>

      <div className='w-full flex flex-col items-center mt-[4vw] 2xl:mt-[2vw]'>
        <h1 className='font-Montserrat text-white text-[8vw] md:text-[4vw]  2xl:text-[60px]'>You think it,</h1>
        <h1 className='font-Montserrat text-white text-[14vw] text-center md:text-[8vw] 2xl:text-[120px]'>We Create It</h1>
       
      </div>

      <div className='w-full h-[3vw] md:h-[1.3vw] bg-white mt-[1vw] max-h-[20px] '></div> 



    </div>
  )
}

export default Creative_Studio