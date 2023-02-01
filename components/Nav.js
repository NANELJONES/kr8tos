import React from 'react';
import small_logo from  "../public/assets/small_logo.svg"
import Link from "next/link"
const Nav = () => {
  return (
    <nav className='sticky z-[100] w-full h-auto top-0 left-0 bg-background w-full p-5 shadow   flex items-center flex-col md:flex-row md:items-center md:justify-between overflow-x-hidden' >
       
        <div className=' w-auto  flex  h-auto items-center cursor-pointer gap-[1vw] md:w-1/5 '  >
                   
                    <img
                    className='h-10 inline'
                    src={small_logo.src}/>
                    <h1 className='text-[0.8em] font-Montserrat text-white'>KR8TOS</h1>
        </div>

        <ul className='w-full flex justify-evenly items-center flex-wrap gap-2 md:gap-5 md:w-3/5 2xl:w-2/6'>
            <li className='w-auto'>
                <a href="/" className=' text-resp text-white w-auto hover:text-2xl hover:font-bold duration-500 font-thin font-Montserrat md:text-resp2 lg:text-[1em] '>Home</a>
            </li>

            <li className='w-auto'>
                <a href="/" className='text-resp text-white w-auto hover:text-3xl hover:font-bold duration-500 font-thin font-Montserrat md:text-resp2 lg:text-[1em]'>Creative Studio</a>
            </li>

            <li className='w-auto'>
                <a href="/" className='text-resp text-white w-auto hover:text-3xl hover:font-bold duration-500 font-thin font-Montserrat md:text-resp2 lg:text-[1em]'>Software</a>
            </li>

            <li className='w-auto'>
                <a href="/" className='text-resp text-white w-auto hover:text-3xl hover:font-bold duration-500 font-thin font-Montserrat md:text-resp2 lg:text-[1em]'>Contact Us</a>
            </li>
            <li className='w-auto'>
           <Link href={`/portfolio/${"Design"}`}> <p className='text-resp text-white w-auto hover:text-3xl hover:font-bold duration-500 font-thin font-Montserrat md:text-resp2 lg:text-[1em]'>Portfolio</p></Link> 
            </li>

        </ul>



    
    </nav>
  )
}


  


export default Nav