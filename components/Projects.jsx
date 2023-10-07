import React from 'react'
import Image from 'next/image';



const Projects = () => {

    const new_array =()=>{
        var arr= []
        for(var i =1; i< 9; i++){
            arr.push(i)
        
        }
        return arr
    
    }

    const sci_image = [
      "/assets/sample_project/1.jpg",
      "/assets/sample_project/2.jpg",
      "/assets/sample_project/3.jpg",
      "/assets/sample_project/4.jpg",
      "/assets/sample_project/5.jpg",
      "/assets/sample_project/6.jpg",
      "/assets/sample_project/7.jpg",
      "/assets/sample_project/8.png",
      
    ]
    


  return (


    
    <div className='flex    font-Montserrat flex-col items-center  text-[10vw] text-[white] '>

    <h2 className='font-bold text-white text-[5vw] md:text-[2.5vw] md:w-[20%] w-[50%] text-center 2xl:text-[45px]'>PROJECTS & CLIENTS </h2>
  <div className=' border-t-[1vw] border-[orange] pt-[1vw] grid grid-cols-4 gap-4 mt-[3vw] duration-700'>
            {sci_image.map((each) =>{

            return(
            <div key={each} className="hover:scale-110 duration-300 relative w-[20vw] h-[25vw] max-w-[300px] max-h-[350px]">
                    
                 

            </div>
            )
            })}

  </div>



  

    </div>
  )
}

export default Projects