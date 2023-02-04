import React from 'react'


const Loader = () => {
  return (
    <div className=' font-Montserrat flex-col  py-[40vw] absolute bg-[rgba(0,0,0,0.8)] flex items-center w-full h-full z-[100000] text-white'>
        
        <div className='w-[20vw] loader  normal_gradient h-[20vw]  rounded-full   animate-pulse'>
            
        </div>   
        
        <p className='animate-pulse py-[4vw] tracking-[.3em]' >  Loading </p>
    </div>
  )
}

export default Loader