import React from 'react'

const Video = () => {
  return (
    <div>

        <video autoPlay={true} muted={true} controls className="z-10 " >
                
                  <source src={"/assets/converted logo.mov"}  type="video/mov" ></source>
                  <source src={"/assets/3D LOGIN.mov"}  type="video/mp4" ></source>
                    
             
             
             
              </video>
        



    </div>
  )
}

export default Video