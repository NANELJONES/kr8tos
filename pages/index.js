import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Creative_Studio from '../components/Creative_Studio';
import Software from '../components/Software'
import Swipe from '../components/Swipe';
import Digital_Marketing from '../components/Digital_Marketing'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { Service_Swipe } from '../components/Service_Swipe'
import Loader from '../components/Loader'
import { useState,useEffect } from 'react'




export default function Home() {

  const  [loading, setloading] = useState(true)



useEffect(() => {
  if(document.readyState ==="complete" ){
    
    setloading(false)
    console.log("it is complete and state is set to completed")
   }

   window.addEventListener("load", function(){
    setloading(false)
   })



   {console.log(document.readyState)}
 
  
}, [])
  

{console.log(loading)}
 

  return (
  <div className="overflow-hidden  relative w-full h-auto px-4 py-0 mx-auto flex flex-col gap-[5vw] lg:px-[5vw] ">
      <Head>
        <title>kr8tos.com</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin= "true"/>
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&family=Petit+Formal+Script&family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
      </Head>

      {loading && <Loader/>}


    
    
      {/* <Header /> */}
      <div id="creative_studio">
          <Creative_Studio  />
      </div>
       
       <div id="software">
          <Software/>
       </div>
       

    <div id="marketing">
             <Digital_Marketing/>
    </div>
      

    <Service_Swipe/>
       <Projects/>

   


       <div id="contact">
             <Contact />  
       </div>
       
    
    </div>
  )
}
