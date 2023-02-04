import React from 'react'


const Loader = () => {



  return (
    <div className='  w-full h-full  font-Montserrat flex-col  py-[40vw] absolute left-[0px] bg-[rgba(0,0,0,0.85)] flex items-center  z-[50] text-white '>
        
        <div className='w-[20vw] loader  normal_gradient h-[20vw]  rounded-full   animate-pulse'>
            
        </div>   
        
        <p className='animate-pulse py-[4vw] tracking-[.3em]' >  Loading </p>
    </div>
  )
}

export default Loader