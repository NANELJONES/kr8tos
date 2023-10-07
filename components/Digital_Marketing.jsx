import React from 'react'
import Image from 'next/image';




const Digital_Marketing = () => {
  return (
    <div className='relative  text-white font-Montserrat mt-[3vw] 2xl:mt-[10px]   '>
     
    <div className='w-full h-auto md:flex  md:items-center ' >
        
        
        <div className='w-full md:w-1/2   ' >
                    <div className='relative   max-h-[200px]  max-w-[500px]   w-auto h-auto' >
                       <h1 className=' leading-[0.7em]   flex items-baseline font-bold text-[25vw] max-h-[270px]  md:text-[15vw] 2xl:text-[200px]'>D<p  className='font-light text-[8vw]  md:text-[5vw] 2xl:text-[65px] md:hover:tracking-[.3em] duration-700' >igital</p></h1>   
                        <div className='w-[60%] absolute  h-[4vw] bg-white line_grad  md:w-[110%] md:h-[3vw] max-h-[30px] mt-[-20%] '></div>
                
                    </div>
                    <div className='relative ml-[10vw]  2xl:ml-[100px]  max-h-[200px]  max-w-[500px]   w-auto h-auto' >
                       
                        <h1 className=' leading-[0.7em]   flex items-baseline font-bold text-[25vw] max-h-[270px]  md:text-[15vw] 2xl:text-[230px]'>M<p  className='font-light text-[8vw]  md:text-[5vw] 2xl:text-[75px] md:hover:tracking-[.3em] duration-700' >arketing</p></h1>   
                        <div className='w-[80%] absolute  h-[4vw] bg-white line_grad  md:w-[110%] md:h-[3vw] max-h-[30px] mt-[-20%] '></div>
                    </div>


                    

                  
         <div className='mt-[10vw] md:mt-[5vw] 2xl:mt-[100px]  flex flex-col gap-[5vw] 2xl:gap-[100px]'>
                    <div className='w-auto  ' >
                                    <div className='flex  items-center gap-[2vw] 2xl:gap-[10px] '>
                                        <div className='w-[2vw] h-[2vw] animate-pulse border max-w-[40px] max-h-[40px]   animate-spin-slow '></div>
                                        <h2 className='px-[3vw]  duration-300 md:px-[1.5vw] 2xl:px-[20px] text-[3vw] md:text-[2vw]  md:border-l-[1.5vw] border-[orange] lg:text-[1vw] border-l-[2vw] lg:border-l-[1vw] 2xl:border-l-[15px]   2xl:text-[23px] w-2/3 md:w-full text-justify font-bold '>The surge in the use and dependence on digital marketing as a point of communication amongst service providers and their clients has undoubtedly become the new norm. </h2>

                                    </div>
                    </div>

                    <div className='w-auto mx-[10vw]   md:mx-[4vw] md:w-100% 2xl:mx-[50px]  ' >
                                    <div className='flex  items-center gap-[2vw] 2xl:gap-[10px] '>
                                    <div className='w-[2vw] h-[2vw] animate-pulse border max-w-[40px] max-h-[40px]   animate-spin-slow '></div>
                                        <h2 className='px-[3vw]  duration-300 md:px-[1.5vw] 2xl:px-[20px] text-[3vw] md:text-[1.8vw]  md:border-l-[1.5vw] border-[orange] lg:text-[1vw] border-l-[2vw] lg:border-l-[1vw] 2xl:border-l-[15px]   2xl:text-[18px] w-2/3 md:w-full text-justify font-thin '>KRATOS provides a platform that helps to manage and direct decisions on the proper utilization of  the digital marketing  space aimed at increasing growth rates of companies, based on individual institutional goals.</h2>

                                    </div>
                    </div>




                    {/* <div className='w-auto mx-[10vw]   md:mx-[4vw] md:w-100% 2xl:mx-[50px] '  >
                        <div className='flex items-center gap-[2vw] 2xl:gap-[80px]'>
                            <FaBeer/>
                            <h2 className='px-[3vw]   md:px-[1.3vw] text-[3vw] md:text-[1.8vw] border-l-[2vw] md:border-l-[1.5vw]     border-[orange] w-4/5 md:w-[100%] lg:text-[1vw] border-l-[2vw] lg:border-l-[1vw] 2xl:border-l-[15px] 2xl:px-[20px]   2xl:text-[23px]   md:w-full text-justify md:text-left font-light'>KRATOS provides a platform that helps to manage and direct decisions on the proper utilization of  the digital marketing  space aimed at increasing growth rates of companies, based on individual institutional goals. </h2>

                        </div>
                    </div>   */}
         </div>
                  
                     

        </div>




        <div className='md:w-1/2 ' >
                <Image src={"/assets/rafiki.svg"} className="w-[100%]" width={200} height={200} alt="image could not be dfound "  />
        </div>



    </div>





       
        

        {/* this is where the second div starts from*/}
        <div   >


        

        <div className=' border-l-[2vw]  2xl:border-l-[20px] border-white px-[3vw] 2xl:px-[20px] md:mt-[4vw] 2xl:mt-[120px] md:w-2/3  '>
            <h2 className='text-[4vw] xl:text-[2.5vw] hover:text-[#bfebec] hover:t_shadow duration-200 hover:tracking-[0.3vw] 2xl:text-[45px] '>In a world of digital Marketing, everything is set to be possible. Share your ideas with us and see it digitalize beyond your imaginations. </h2>
            <br/>
            <h2 className='text-[4vw] xl:text-[2.5vw] hover:text-[#bfebec] hover:t_shadow duration-200 hover:tracking-[0.3vw] 2xl:text-[45px] '>Our services covers all areas in the digital marketing field such as: </h2>
           
           
           
     
        
        </div>


        <div className=' w-full mt-[13vw] 2xl:mt-[40px] h-auto relative flex flex-wrap items-center justify-evenly gap-[2vw]'>

                        {/* Brand Management*/}   
                        <div className='w-[20vw] h-[20vw]  animate-[wiggle_2s_ease-in_infinite] delay-20  relative text-center flex items-center   p-[20vw]  rounded-full single_marketing flex items-center justify-evenly lg:p-[12vw] lg:w-[12vw] lg:h-[12vw] ' >
                                <p className='absolute w-full max-w-[100%] w-[60%] z-30 text-center text-[4vw] lg:text-[2vw]  duration-300 ' >Brand Management</p>
                               
                               
                               <div className='w-[18vw]   text-center z-10 inner_market  h-[18vw] p-[20vw] lg:p-[12vw] lg:w-[12vw] lg:h-[12vw] rounded-full  flex items-center justify-evenly'>
                              
                                </div> 
                            </div>

           
           
           
                              {/* Brand Marketing*/} 
                            <div className='w-[20vw]  h-[20vw] lg:w-[10vw] lg:h-[10vw]  md:max-w-[15vw] md:min-h-[15vw] md:w-auto     p-[20vw] lg:p-[10vw]   md:p-[15vw]  animate-[wiggle1_3s_ease_infinite] delay-300  relative text-center flex items-center  rounded-full single_marketing flex items-center justify-evenly          ' >
                                <p className='absolute w-[50%] z-30 text-center text-[4vw] lg:text-[2vw] md:text-[3vw]  duration-300  ' >Brand Marketing</p>
                                <div className='w-[18vw]  h-[18vw] lg:w-[9vw]  lg:h-[9vw]    text-center z-10 inner_market p-[20vw] lg:p-[10vw] md:p-[15vw] rounded-full  flex items-center justify-evenly'>
                                
                                </div>


                            </div>

                            




                                {/* Affiliate Marketing*/}   
                              
                                <div className='w-[20vw]  h-[20vw]    p-[20vw]  animate-[wiggle1_4s_ease-in_infinite] delay-400  relative text-center flex items-center  rounded-full single_marketing flex items-center justify-evenly  lg:p-[9vw] lg:w-[9vw] lg:h-[9vw]    ' >
                                        <p className='absolute w-[50%] z-30 text-center text-[4vw]  duration-300 lg:text-[1.5vw] ' >Affiliate Marketing</p>
                                       
                                        <div className='w-[18vw]  h-[18vw]   text-center z-10 inner_market p-[20vw] rounded-full  flex items-center justify-evenly lg:p-[9vw] lg:w-[9vw] lg:h-[9vw]'>
                                        
                                        </div>


                              </div>

                                {/* Pay and Click*/}   
                           <div className='w-[20vw] animate-[wiggle1_6s_ease-in_infinite] delay-200  relative text-center flex items-center h-[20vw] p-[20vw] md:p-[16vw] rounded-full single_marketing flex items-center justify-evenly    lg:p-[8vw] lg:w-[8vw] lg:h-[8vw]      ' >
                                <p className='absolute w-[50%] z-30 text-center text-[4vw]  duration-300  lg:text-[1.8vw] ' >Pay & Click</p>
                                <div className='w-[18vw]   text-center z-10 inner_market  h-[18vw] p-[20vw] md:p-[14vw] rounded-full  flex items-center justify-evenly lg:p-[8vw] lg:w-[8vw] lg:h-[8vw]'>
                                
                                </div>


                            </div>

                                {/* SEO*/}   
                            <div className='w-[20vw] animate-[wiggle1_4s_ease-in_infinite] delay-400  relative text-center flex items-center h-[20vw] p-[20vw] md:p-[22vw]  rounded-full single_marketing single_marketing_seo  flex items-center justify-evenly lg:p-[12vw] lg:w-[12vw] lg:h-[12vw]         ' >
                                <p className='absolute w-[80%] z-30 text-center text-[4vw]  duration-300  lg:text-[1.8vw]' >Search Engine Optimization (SEO)</p>
                                <div className='w-[18vw]   text-center z-10 inner_market  h-[18vw] p-[20vw]  rounded-full  flex items-center justify-evenly  lg:p-[12vw] lg:w-[12vw] lg:h-[12vw]  '>
                                
                                </div>


                            </div>







                            
                                <br/>
                                {/* Social Media */}   

                            <div className='w-[20vw] animate-[wiggle1_2s_ease-in_infinite] delay-50  relative text-center flex items-center h-[20vw] p-[20vw] rounded-full single_marketing flex items-center justify-evenly  lg:p-[11vw] lg:w-[11vw] lg:h-[11vw]            ' >
                                <p className='absolute w-[50%] z-30 text-center text-[4vw]  duration-300  hover:bg-[orange] lg:text-[1.8vw]' >Social Media Marketing</p>
                                <div className='w-[18vw]   text-center z-10 inner_market  h-[18vw] p-[20vw] rounded-full  flex items-center justify-evenly lg:p-[11vw] lg:w-[11vw] lg:h-[11vw] '>
                                
                                </div>


                            </div>

                                {/* eMAIL */}   
                            <div className='w-[20vw] animate-[wiggle_1s_ease-in_infinite] delay-30  relative text-center flex items-center h-[20vw] p-[20vw] md:p-[17vw] rounded-full single_marketing flex items-center justify-evenly lg:p-[11vw] lg:w-[11vw] lg:h-[11vw]          ' >
                                <p className='absolute w-[50%] z-30 text-center text-[4vw]  duration-300  hover:bg-[orange] lg:text-[1.4vw]' >Email Marketing</p>
                                <div className='w-[18vw]   text-center z-10 inner_market  h-[18vw] p-[20vw] md:p-[16vw] rounded-full  flex items-center justify-evenly lg:p-[11vw] lg:w-[11vw] lg:h-[11vw] '>
                                
                                </div>


                            </div>






        </div>

        <h1
         className='w-[75%] mx-auto leading-[8vw] md:leading-[5vw] 
        cursor-pointer hover:t_shadow hover:leading-[8vw]  
         duration-300  font-light mt-[8vw] text-[6vw] md:text-[4vw]
         md:w-[70%] text-center 
         2xl:text-[50px]
         2xl:leading-[2em]
         2xl:w-[60%]
         2xl:hover:leading-[2.5em]
         2xl:mt-[5vw]
         '>With our amazing packages , we can’t wait to see you through the Journey in achieving your goals and dreams!</h1>
        

{/* 
        <div className='w-full  bg:auto h-[70vw] relative' style={{backgroundImage:`url(${samplebg.src})`, backgroundSize:"contain",backgroundRepeat:"no-repeat", objectFit:"cover",backgroundPosition:"center" }} >
          
            <Image src={u} className=" "/>
 
        </div>
        <p className='text-center text-[6vw] w-[80%] mx-auto font-thin'>WE ARE THE COMPLETE </p>
        <p className='text-center text-[12vw] w-[80%] mx-auto font-bold'>PACKAGE </p> */}

        <div className='w-full h-[3vw] 
        max-h-[20px]
        md:h-[1.3vw] bg-white mt-[4vw]
        2xl:mt-[60px]
        '></div> 

        </div>


    
    
    
    
    </div>
  )
}

export default Digital_Marketing