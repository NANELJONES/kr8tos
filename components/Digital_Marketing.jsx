import React from 'react'
import Image from 'next/image';


import { FaBeer } from 'react-icons/fa';


const Digital_Marketing = () => {
  return (
    <div className=' text-white font-Montserrat mt-[10vw] md:mt-[1vw]  '>
     
   
   
   
    <div className='w-full h-auto md:flex  md:items-center ' >
        
        
        <div className='w-full md:w-1/2 border-white ' >
                    <div className='relative'>
                        <div className='w-[60%]  h-[4vw] bg-white line_grad  md:w-[70%] md:h-[3vw] '></div>
                        <h1 className='absolute top-[-18vw] md:top-[-9vw] flex items-baseline font-bold text-[25vw] md:text-[15vw]'>D<p  className='font-light text-[8vw]  md:text-[5vw]' >igital</p></h1>   
                        
                    </div>

                    <div className='relative mx-[15vw] mt-[18vw] md:mt-[10vw]'>
                        <div className='w-[100%] h-[4vw] md:h-[2vw] bg-white line_grad md:w-[40vw] '></div>
                        <h1 className='absolute top-[-18vw] md:top-[-10vw]  flex items-baseline font-bold text-[25vw] md:text-[15vw]'>M<p  className='font-light text-[8vw] md:text-[4vw]'>arketing</p></h1>   

                    </div>


                    <div className='w-auto mt-[10vw] ' >
                        <div className='flex items-center gap-[2vw] '>
                            <FaBeer/>
                            <h2 className='px-[3vw] hover:tracking-[0.2em]  duration-300 md:px-[1.5vw] text-[3vw] md:text-[2vw] border-l-[2vw] md:border-l-[1.5vw] border-[orange] w-2/3 md:w-full text-justify font-bold'>The surge in the use and dependence on digital marketing as a point of communication amongst service providers and their clients has undoubtedly become the new norm. </h2>

                        </div>
                    </div>

                    <div className='w-auto mt-[5vw] mx-[10vw] md:mx-[4vw] md:w-100% '  >
                        <div className='flex items-center gap-[2vw]'>
                            <FaBeer/>
                            <h2 className='px-[3vw]   md:px-[1.3vw] text-[3vw] md:text-[1.8vw] border-l-[2vw] md:border-l-[1.5vw]     border-[orange] w-4/5 md:w-[100%] text-justify md:text-left font-light'>KRATOS provides a platform that helps to manage and direct decisions on the proper utilization of  the digital marketing  space aimed at increasing growth rates of companies, based on individual institutional goals. </h2>

                        </div>
                    </div>        

        </div>




        <div className='md:w-1/2' >
                <Image src={"/assets/rafiki.svg"} className="w-[100%]" width={200} height={200} alt="image could not be dfound "  />
        </div>



    </div>





       
        

        {/* this is where the second div starts from*/}
        <div    style={{
        backgroundImage: `url(/bg.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        
      }}>


        

        <div className=' border-l-[2vw] border-white px-[3vw] md:mt-[4vw]  '>
            <h2 className='text-[4vw] hover:text-[#bfebec] hover:t_shadow duration-200 hover:tracking-[0.3vw]'>In a world of digital Marketing, everything is set to be possible. Share your ideas with us and see it digitalize beyond your imaginations. </h2>
            <h2 className='text-[4vw] hover:text-[#bfebec] hover:t_shadow duration-200 hover:tracking-[0.3vw]'>Our services covers all areas in the digital marketing field such as:</h2>
        </div>


        <div className='w-full mt-[13vw] h-auto relative flex flex-wrap items-center justify-evenly gap-[4vw]'>

                        {/* Brand Management*/}   
                        <div className='w-[20vw]  animate-[wiggle_2s_ease-in_infinite] delay-20  relative text-center flex items-center h-[20vw] p-[20vw] rounded-full single_marketing flex items-center justify-evenly          ' >
                                <p className='absolute w-[auto] max-w-[90%] z-30 text-center text-[4vw]  duration-300 ' >Brand Management</p>
                                <div className='w-[18vw]   text-center z-10 inner_market  h-[18vw] p-[20vw] rounded-full  flex items-center justify-evenly'>
                                </div>
                            </div>

           
           
           
                              {/* Brand Marketing*/}
                            <div className='w-[20vw]  h-[20vw] md:max-w-[15vw] md:min-h-[15vw] md:w-auto     p-[20vw] md:p-[15vw]  animate-[wiggle1_3s_ease_infinite] delay-300  relative text-center flex items-center  rounded-full single_marketing flex items-center justify-evenly          ' >
                                <p className='absolute w-[50%] z-30 text-center text-[4vw] md:text-[3vw]  duration-300  ' >Brand Marketing</p>
                                <div className='w-[18vw]  h-[18vw]   text-center z-10 inner_market p-[20vw] md:p-[15vw] rounded-full  flex items-center justify-evenly'>
                                
                                </div>


                            </div>

                            




                                {/* Affiliate Marketing*/}   
                              
                               <div className='w-[20vw]  h-[20vw] md:max-w-[17vw] md:min-h-[17vw] md:w-auto     p-[20vw] md:p-[17vw]  animate-[wiggle1_3s_ease_infinite] delay-300  relative text-center flex items-center  rounded-full single_marketing flex items-center justify-evenly          ' >
                                <p className='absolute w-[50%] z-30 text-center text-[4vw] md:text-[3vw]  duration-300  ' >Affiliate Marketing</p>
                                <div className='w-[18vw]  h-[18vw]   text-center z-10 inner_market p-[20vw] md:p-[15vw] rounded-full  flex items-center justify-evenly'>
                                
                                </div>


                            </div>

                                {/* Pay and Click*/}   
                           <div className='w-[20vw] animate-[wiggle1_6s_ease-in_infinite] delay-200  relative text-center flex items-center h-[20vw] p-[20vw] md:p-[16vw] rounded-full single_marketing flex items-center justify-evenly          ' >
                                <p className='absolute w-[50%] z-30 text-center text-[4vw]  duration-300  hover:bg-[orange]' >Pay & Click</p>
                                <div className='w-[18vw]   text-center z-10 inner_market  h-[18vw] p-[20vw] md:p-[14vw] rounded-full  flex items-center justify-evenly'>
                                
                                </div>


                            </div>

                                {/* SEO*/}   
                            <div className='w-[20vw] animate-[wiggle1_4s_ease-in_infinite] delay-400  relative text-center flex items-center h-[20vw] p-[20vw] md:p-[22vw]  rounded-full single_marketing single_marketing_seo  flex items-center justify-evenly          ' >
                                <p className='absolute w-[80%] z-30 text-center text-[4vw]  duration-300  hover:bg-[orange]' >Search Engine Optimization (SEO)</p>
                                <div className='w-[18vw]   text-center z-10 inner_market  h-[18vw] p-[20vw]  rounded-full  flex items-center justify-evenly'>
                                
                                </div>


                            </div>

                                {/* Social Media */}   

                            <div className='w-[20vw] animate-[wiggle1_2s_ease-in_infinite] delay-50  relative text-center flex items-center h-[20vw] p-[20vw] rounded-full single_marketing flex items-center justify-evenly          ' >
                                <p className='absolute w-[50%] z-30 text-center text-[4vw]  duration-300  hover:bg-[orange]' >Social Media Marketing</p>
                                <div className='w-[18vw]   text-center z-10 inner_market  h-[18vw] p-[20vw] rounded-full  flex items-center justify-evenly'>
                                
                                </div>


                            </div>

                                {/* eMAIL */}   
                            <div className='w-[20vw] animate-[wiggle_1s_ease-in_infinite] delay-30  relative text-center flex items-center h-[20vw] p-[20vw] md:p-[17vw] rounded-full single_marketing flex items-center justify-evenly          ' >
                                <p className='absolute w-[50%] z-30 text-center text-[4vw]  duration-300  hover:bg-[orange]' >Email Marketing</p>
                                <div className='w-[18vw]   text-center z-10 inner_market  h-[18vw] p-[20vw] md:p-[16vw] rounded-full  flex items-center justify-evenly'>
                                
                                </div>


                            </div>






        </div>

        <h1
         className='w-[75%] mx-auto leading-[8vw] md:leading-[5vw] 
        cursor-pointer hover:t_shadow hover:leading-[10vw]  
         duration-300  font-light mt-[8vw] text-[6vw] md:text-[4vw]
         md:w-[70%] text-center '>With our amazing packages , we can’t wait to see you through the Journey in achieving your goals and dreams!</h1>
        

{/* 
        <div className='w-full  bg:auto h-[70vw] relative' style={{backgroundImage:`url(${samplebg.src})`, backgroundSize:"contain",backgroundRepeat:"no-repeat", objectFit:"cover",backgroundPosition:"center" }} >
          
            <Image src={u} className=" "/>
 
        </div>
        <p className='text-center text-[6vw] w-[80%] mx-auto font-thin'>WE ARE THE COMPLETE </p>
        <p className='text-center text-[12vw] w-[80%] mx-auto font-bold'>PACKAGE </p> */}

        <div className='w-full h-[3vw] md:h-[1.3vw] bg-white mt-[4vw] '></div> 

        </div>


    
    
    
    
    </div>
  )
}

export default Digital_Marketing