import React from 'react'



import Image from 'next/image';
import { useRef, useState } from 'react';
const Contact = () => {
    const [more_info, set_more_into] = useState(false);
   
    const [contact, setContact] = useState({user_name:"", user_email:"", user_message:"" , user_service:"", user_extra_info:""})
    
    const resetter =()=>{
        setContact({...contact, user_name:"", user_email:"", user_message:"", user_service:"", user_extra_info:""})

    }

    function verify_email (word){
        const mailformat = "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/"
        if(word.match(mailformat)){
            alert("your email is valid")
            //setErrors({...errors, email_error:true})
        }else{
            alert("your email is invalid")
        }
    }

    const handleSubmit =(event)=>{
        var regExp  = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
       
        console.log(contact.user_extra_info)
        
        if(!contact.user_name  || !contact.user_email || !contact.user_service || !contact.user_message){
            
            alert("Please Fill All Fields")
            event.preventDefault()
        }else{
            if(regExp.test(contact.user_email)===true){
                fetch('api/contact',{
                    method: "POST",
                    headers:{
                        "Accept" : "application/json , text/plain, */*",
                        "Content-Type" : "application/json",
                    },
                    body: JSON.stringify(contact)
        
                }).then((res)=>{
                    if(res.status === 200){
                        alert("EMAIL HAS BEEN SENT. THANK YOU FOR CONTACTING US")
                      
                    }else if(res.status ===400){
                        alert("Bad Request Right Now Please Try Again Later")
                    }
                })
                resetter()
              
               }else{

                alert("Please validate your email")
             
               
               }
        
           
            
           

        }


      
    }



    
  return (
    <div className='text-white   font-Montserrat w-full' >
        <p className='text-[2vw] md:text-[1vw] font-light text-center duration-300 tracking-[.3em] hover:tracking-[.6em] animate-pulse 2xl:text-[20px]   '>CONNECT WITH US</p>
        <div className='flex mt-[4vw]'>
            <div className='w-1/2  hidden  md:flex relative ' >
                <Image src={"/assets/LOGO 4.png"} className="object-cover" fill  unoptimized alt="image could not be found" />   
            </div>

            <form
            className='w-full  md:w-1/2 flex flex-col gap-[4vw] md:gap-[1vw] 2xl:gap-[30px] '>
            <p className='text-center text-[10vw]  md:text-left md:text-[6vw]  duration-500 hover:text-[orange]   hover:tracking-[.1em]  w-[100%] mx-auto font-bold 2xl:text-[90px]'>CONTACT </p>
            <p className='text-center text-[10vw]  md:text-left md:text-[6vw] mt-[-4vw]   duration-500 hover:text-[orange]   hover:tracking-[.5em]  w-[100%] mx-auto font-bold 2xl:text-[90px] 2xl:mt-[-40px] '>US </p>
           
            <p className='text-center text-[4vw] leading-[5vw] md:leading-[2.5vw] md:w-[80%]   md:text-[2vw] font-light  w-[100%]  md:text-left leading-[4vw] 2xl:text-[30px] 2xl:leading-[1em]   '>CONNECT WITH US FROM ANYWHERE AROUND THE WORLD</p>
            <div className='flex flex-col md:mt-[3vw] gap-[1vw] 2xl:text-[1em] 2xl:mt-[20px] 2xl:gap-[10px]'>
                <label  className='font-light text-[3.5vw] md:text-[90%] '>Name:</label>
                <input 
                value={contact.user_name}
           
                onChange={(event)=>{
                    setContact({...contact, user_name: event.target.value})         
                }}
                 name="name" 
                 className= 'bg-[transparent] border    focus:text-white   rounded-full p-[3vw] text-[3vw] md:text-[1.3vw] md:focus:text-[1.7vw] lg:focus:text-[0.9vw] lg:text-[0.85vw] md:p-[1.5vw] md:w-[90%] duration-700 2xl:p-[20px] 2xl:text-[1em] ' placeholder='Please Enter Your Name'/>
            </div>

            <div className='flex flex-col  gap-[1vw] 2xl:gap-[10px]'>
                <label   className='2xl:text-[1em] font-light text-[3.5vw] md:text-[90%]'>Email:</label>
                <input  
                onChange={(event)=>{
                    setContact({...contact, user_email: event.target.value})
                }} 
             
               
                value={contact.user_email}


                required
                type="email"
               
                className= 'bg-[transparent] border    focus:text-white   rounded-full p-[3vw] text-[3vw] md:text-[1.3vw] md:focus:text-[1.7vw] lg:focus:text-[0.9vw] lg:text-[0.85vw] md:p-[1.5vw] md:w-[90%] duration-700  2xl:p-[20px] 2xl:text-[1em] ' placeholder='Please Enter Your Email'/>
            </div>

         
            
                
            <div className='flex flex-col  gap-[1vw] 2xl:gap-[10px]'>
                <label  className='2xl:text-[1em] font-light text-[3.5vw] md:text-[90%]'>Services:</label>
                <input 
                value={contact.user_service}
                onChange={(event)=>{
                setContact({...contact, user_service: event.target.value})   
                }}
                 name="service" className= 'bg-[transparent] border    focus:text-white   rounded-full p-[3vw] text-[3vw] md:text-[1.3vw] md:focus:text-[1.7vw] lg:focus:text-[0.9vw] lg:text-[0.85vw] md:p-[1.5vw] md:w-[90%] duration-700  2xl:p-[20px] 2xl:text-[1em] ' placeholder=' (Design, Marketing, Marketing, Web Development etc)'/>
            </div>

            <div className='text-white font-Montserrat '>
              <label onClick={()=>{set_more_into(!more_info)}}   className='font-light text-[2vw]  md:text-[1vw] flex items-center gap-[2vw] 2xl:text-[15px] '>Additional Contact Info {"(optional) "} <button onClick={(e)=>{e.preventDefault()}} className='w-[20px] h-[20px] rounded-full border-2 border-[orange]'>  </button></label>
             <div className='w-[60%] h-[0.1em] bg-white mt-[2vw]  md:mt-[0.5vw] '></div>
              
                <div className={`${more_info === true ? "hidden" : "flex flex-col gap-[1vw] md:gap-[0.5vw]"} pt-[1.2vw] mt-[2vw] md:mt-[0.1vw] `}>
                        <label className=' 2xl:text-[1em] font-light text-[0.8em] md:text-[90%]'> Information:  <br/>(Any other contact information we can reach you on.)</label>    
                        <input
                           value={contact.user_extra_info}
                           onChange={(event)=>{
                            setContact({...contact, user_extra_info: event.target.value})
                        }} 
                        placeholder='eg. phone number, @instagram, @whatsapp, @telegram etc'
                          type="text"
                         className=' more_info text-[0.9em] h-[12vw] rouded-full bg-[transparent]  focus:bg-socials_bg  duration-300 border-b-2 px-[1vw]  rounded-[0.1em]  w-[95%] h-[7vw] md:h-[4vw] md:text-[0.8em]  max-h-[60px]  '/> 
                    
                </div>

  

            </div>

            <div className='flex flex-col  gap-[1vw] 2xl:gap-[10px] '>
                <label   className='2xl:text-[1em] font-light text-[3.5vw] md:text-[90%]'>Message:</label>
                <textarea  
                value={contact.user_message}
                onChange={(event)=>{
                    setContact({...contact, user_message: event.target.value})
                }}
                name="message"
                rows="5"
                className='bg-[transparent] 
                p-[1em]
                
                
                border rounded-[1vw]  xl  2xl:rounded-[10px]' >
                </textarea>
            </div>
            <button 
            id="send_btn" 
            type="submit"      
            onClick={(e)=>{
                handleSubmit(e)
               
            }} 
            className='rounded-full text-[2.5vw] border w-2/5 p-[2.5vw] text-white bg-background hover:bg-[orange] duration-300 hover:border-0 md:text-[1vw] md:p-[1.5vw] 2xl:text-[12px] 2xl:p-[20px]   '> SEND MESSAGE</button>
            
            

           
            </form>
        </div>
        
        
      
        
        
        
        </div>
  )
}

export default Contact