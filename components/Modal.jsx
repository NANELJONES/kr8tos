import React from 'react'
import Image from 'next/image';

const Modal = (props) => {
    const  isImgLink=() => {
        if(typeof props.url !== 'string') return false;
        return(props.url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) != null);
    }


  return (
    <div 
    onClick={props.onClick}
    className='  w-full  flex items-center justify-around h-[130vh] bg-[rgba(0,0,0,0.5)] z-[100] absolute '>
      <div className='relative w-[80%]  mx-auto lg:w-[50%] max-w-[700px] '>
                {isImgLink(props.url) ? <img optimized  src={props.url} fill  alt="image could not be found" />: <video controls src={props.url}/> }
      </div>
 
      
        

    </div>
  )
}

export default Modal