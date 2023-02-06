import React, { lazy } from 'react'
import { useRouter } from 'next/router';
import { storage } from '../../firebase/firebase';
import {ref,listAll,getDownloadURL} from "firebase/storage"
import { useState,useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { async } from '@firebase/util';
import Modal from '../../components/Modal';
import {v4 as uuidv4} from "uuid";
import { useRef } from 'react';



const Portfolio = () => {
    const vid_ref = useRef("")

    const [all_images, setall_images] = useState([])
   
    const [desc, set_desc] = useState("We design and brand your ideas, company and vision by creating a cohesive visual language to better visualize your products, concepts and ideas. We create these designs to appeal what you want to sell to your target audience. Our team of talented Digital , Traditional and Artificial Intelligence Artists create all forms of artworks and illustrations which best suits your interest.")
    const routes =  useRouter()
    const new_path =  routes.query.slug


    const [modal, setmodal] = useState({show_modal:false, url:""})
  

    const  isImgLink=(url)=> {
      if(typeof url !== 'string') return false;
      return(url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) != null);
  }

  // const [scroll_position, setscroll_position] = useState()

  // const handle_scroll=(event)=>{

  //   setscroll_position(window.scrollY)

  // }



  // useEffect(() => {
  //   handle_scroll
  //   window.addEventListener("scroll",handle_scroll );
  
  //   return () => {
  //     window.removeEventListener("scroll",handle_scroll)
  //   }
  // }, [])
  
 
   useEffect(()=>{
    setall_images([])

    const new_images =  ref(storage, new_path);
    listAll(new_images)
      .then((res) => {
     
        res.items.forEach((itemRef) => {      
           
          
           getDownloadURL(ref(storage, itemRef.fullPath)).then((url)=>{
           
          setall_images(all_images  => [...all_images, url])
           })
        });
      }).catch((error) => {
       console.log("An Error has occurred")
      });

    },[new_path])

  const var_btns=[
    {title:"Art & Design",
      slug:"Design",
      desc:"We design and brand your ideas, company and vision by creating a cohesive visual language to better visualize your products, concepts and ideas. We create these designs to appeal what you want to sell to your target audience. Our team of talented Digital , Traditional and Artificial Intelligence Artists  create all forms of artworks and illustrations which best suits your interest."
    },

      {title:"Software",
      slug:"Software Development",
      desc:"We develop Websites, Apps, Databases, Backend Systems, Artificial Intelligent(AI) Systems, Expert Systems, UX/UI etc."
    },
    
    {title:"Animation",
    slug:"Animation",
    desc:"We are equipped with animators to produce High End 2d, 3d and Motion Design and Motion Graphics Animations for every scope where the use of animation as a whole is applicable."
  },

  {title:"3D",
  slug:"3D",
  desc:"Our Creative Studio has a dedicated team of talented 3D Artists and Designers to design 3D concepts and Animations. Some of our 3D services include, 3D Modeling, Architectural Visualizations, Hard Surface Modeling, Product Design, 3D Fashion, Game Asset modeling, etc."
},

{title:"Media Production",
slug:"Media_Production",
desc:"As a company, we provide multimedia Production services like Photography, Videography, Visual Effects, Voice Overs, Music Production, etc."
},
    
    ]

    const closeModal = ()=>{
      setmodal( {...modal, show_modal:!modal.show_modal} )
    }



     function display( a){
      console.log(new_path)
      console.log(a)
    }

  return (
    
    <div className='h-auto min-h-[110vh] relative '
    style={{
      backgroundImage: `url(/bg.jpg)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center',
      
    }}
    > 

    {modal.show_modal ? <Modal url={modal.url}   onClick={()=>{setmodal( {...modal, show_modal:!modal.show_modal} )}} /> : null} 
   

            <div className='font-Montserrat pt-[2vw]  mx-auto text-white flex items-center gap-[3vw] flex-wrap justify-evenly w-full md:w-[80%] lg:w-[60%]' >
                  {var_btns.map((each_btn)=>{
                              return(

                              <Link activeClassName="bg"  
                              href={`/portfolio/${each_btn.slug}`}><button key={var_btns.indexOf(each_btn)   } 
                              onClick={()=>{set_desc(each_btn.desc), display(each_btn.slug) }}  
                              className={` ${each_btn.slug === new_path ? "bg-[orange]": "bg-k_blue"}   mx-auto   duration-300 md:hover:text-[1.1vw] md:hover:font-thin text-center text-[2vw] h-[7vw] w-[20vw] md:max-w-[12vw] lg:text-[0.8vw] lg:max-w-[12vw]   md:h-[4vw] lg:h-[3vw]  text-center font-Monserrat   font-light   md:text-[1.1vw] font-light`} >{each_btn.title}</button></Link>
                                  
                              ) 
                            })}
                  </div>

                  <p className='mt-[5vw] md:mt-[2.5vw] font-Montserrat text-white font-light text-center text-[2vw] md:text-[1.5vw] md:w-[60%] lg:text-[1vw] lg:w-[50%] lg:leading-[2.4vw] md:hover:text-[1.3vw] duration-300  w-[80%] mx-auto leading-[4.5vw] lg:mt-[1.4vw]'>{desc}</p>
                  <div className='w-full flex items-center justify-evenly'>
                  <button className=' text-[2vw] font-Montserrat font-regular text-white text-center  bg-k_red  px-[4vw] py-[2vw] md:text-[0.7vw] md:px-[3em] md:py-[1em] hover:bg-[orange] hover:text-white hover:px-[3.2em] hover:py-[1.2em] hover:text-1.5xl duration-500 hover:font-bold '> HIRE US {">>"} </button>
                  </div>
             
         
          <div className=' mt-[3vw]  flex items-baseline flex-wrap gap-[1vw] h-auto  border-white md:w-auto mx-auto'> 

              {all_images && all_images.map((each_image)=>{
                  return(
                    <div  onClick={()=>
                      {setmodal( {...modal, show_modal:!modal.show_modal, url:each_image} )
                      
                    }
                     
                
                    
                    }  
                       key={uuidv4()} 
                   
                    className="relative text-white w-[30%] h-[40vw] cursor-pointer mx-auto  hover:scale-125 hover:z-[10] duration-300  md:w-[30%] md:h-[40vw]  object-cover  max-h-[300px] max-w-[200px] ">
                      
                        {isImgLink(each_image) ? <Image  optimized  src={each_image} className="object-cover " fill   alt="image could not be found" /> : <video onClick={(e)=>{ vid_ref.pause}} ref={vid_ref} muted autoPlay={true} className="w-full  h-full object-cover"  controls src={each_image}/>}
                      
                    </div>

                    
                    
                  )
                }) }   
                

          </div>

         

    </div>
  )
}


export default Portfolio;


// export async function getStaticProps(){
//   const routes =  useRouter()
//   const new_images =  ref(storage, routes.query.slug);
//   const total_images = []
//     setall_images([])
//     listAll(new_images)
//       .then((res) => {
     
//         res.items.forEach((itemRef) => {        
          
//            getDownloadURL(ref(storage, itemRef.fullPath)).then((url)=>{
           
//             total_images.push(url)
//           // setall_images(all_images  => [...all_images, url])

//            })
//         });
//       }).catch((error) => {
//        console.log("An Error has occurred")
//       });
      

//       return{
//         props:[total_images]
//       }
// }

// export async function getStaticPaths() {
  
  
//   const new_images =  ref(storage, "Design");
//   const total_paths = []
    
//     listAll(new_images)
//       .then((res) => {
     
//         res.items.forEach((itemRef) => {        

//           total_paths.push({params:{id:itemRef.name}})
         
//         });
//       }).catch((error) => {
//        console.log("An Error has occurred")
//       });

//       return{
//         paths:total_paths, fallback:false
//       }

 
// }