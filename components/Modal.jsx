import React from 'react'
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Modal = (props) => {

 
   
 


    const  isImgLink=() => {
        if(typeof props.url !== 'string') return false;
        return(props.url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) != null);
    }



    
    
    console.log((props.scroll_position))
  return (
    <div 
    onClick={props.onClick}
    style={{marginTop:`${window.scrollY}px`} }
    className={`  w-full  h-auto min-h-[200vh] bg-[rgba(0,0,0,0.5)] z-[1000] absolute  ` }>
      <div className={`relative w-[80%] flex items-center justify-around mx-auto lg:w-[50%] max-w-[700px] `}>
                {isImgLink(props.url) ? <img optimized  src={props.url}  fill  alt="image could not be found" />: <video controls src={props.url}/> }
      </div>
 
      
        

    </div>
  )
}

export default Modal