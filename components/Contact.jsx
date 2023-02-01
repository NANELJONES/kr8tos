import React from 'react'

import Image from 'next/image';
import { useRef } from 'react';
const Contact = () => {

    
  return (
    <div className='text-white font-Montserrat w-full' >
        <p className='text-[2vw] font-light text-center duration-300 tracking-[.3em] hover:tracking-[.6em] animate-pulse   '>CONNECT WITH US</p>
        <div className='flex mt-[4vw]'>
            <div className='w-1/2 hidden md:flex relative'>
            <Image src={"/assets/LOGO 4.png"} className="object-cover" fill  unoptimized alt="image could not be found" />   
            </div>

            <form className='w-full  md:w-1/2 flex flex-col gap-[2vw] md:gap-[1vw]  '>
            <p className='text-center text-[10vw]                                                                   md:text-left md:text-[6vw]  duration-500 hover:text-[orange]   hover:tracking-[.1em]  w-[100%] mx-auto font-bold'>CONTACT </p>
            <p className='text-center text-[10vw]                                                                        md:text-left md:text-[6vw] mt-[-4vw]   duration-500 hover:text-[orange]   hover:tracking-[.5em]  w-[100%] mx-auto font-bold'>US </p>
           
            <p className='text-center text-[4vw] leading-[5vw]                                                                       md:leading-[2.5vw] md:w-[80%]   md:text-[2vw] font-light  w-[100%]  md:text-left leading-[4vw]  '>CONNECT WITH US FROM ANYWHERE AROUND THE WORLD</p>
            <div className='flex flex-col md:mt-[3vw] gap-[1vw]'>
                <label  className='font-light text-[3.5vw] md:text-[1.5vw] '>Name</label>
                <input className= 'bg-[transparent] border focus:text-[orange] focus:bg-[k_blue]  focus:text-white focus:opacity-100  rounded-full p-[3vw] text-[3vw] md:text-[1.3vw] md:p-[1.5vw] md:w-[90%] duration-700' placeholder='Please Enter Your Name'/>
            </div>

            <div className='flex flex-col  gap-[1vw]'>
                <label  className='font-light text-[3.5vw] md:text-[1.5vw] '>Email</label>
                <input type="email" className= 'opacity-50 bg-[transparent] border focus:text-[orange] focus:bg-[k_blue]  focus:text-white focus:opacity-100  rounded-full p-[3vw] text-[3vw] md:text-[1.3vw] md:p-[1.5vw] md:w-[90%] duration-700' placeholder='Please Enter Your Email'/>
            </div>

            {/* <div className='flex flex-col  gap-[1vw]'>
                <label  for="multiple_choices" className='font-light text-[3.5vw] md:text-[1.5vw] '>Service</label>
                <select  className= 's bg-[transparent] border focus:text-[orange] focus:bg-[k_blue]  focus:text-white focus:opacity-100  rounded-full p-[3vw] text-[3vw] md:text-[1.3vw] md:p-[1.5vw] md:w-[90%] duration-700   ' >
                    <option className='opacity-50 text-[black] bg-[background] py-[30px]'> SOFTWARE</option>
                     <option className='opacity-50 text-[black] bg-[background] p-[2vw]'> SOFTWARE</option>

                    

                </select>
            </div> */}




            <div className='flex flex-col  gap-[1vw]'>
                <label  className='font-light text-[3.5vw] md:text-[1.5vw] '>Message</label>
                <textarea rows="6" className='bg-[transparent] border rounded-[3vw] p-[1.3vw]' > </textarea>

            </div>

            <button className='rounded-full text-[2.5vw] border w-2/5 p-[2.5vw] text-white bg-background hover:bg-[orange] duration-300 hover:border-0 md:text-[1vw] md:p-[1.5vw]  '> SEND MESSAGE</button>



      
           

     


           
            </form>
        </div>
        
        
      
        
        
        
        </div>
  )
}

export default Contact