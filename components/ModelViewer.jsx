import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls, Environment } from "@react-three/drei";
import Model from "./Model";



const ModelViewer = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {

  

  return (
    <div className="h-[50vw] w-full max-h-[600px]">
          <Canvas>
    <ambientLight intensity={8} />
    <spotLight position={[10, 10, 10]} angle={2} intensity={6}   penumbra={1} />
    <pointLight position={[10, 10, -10]} intensity={2} color={"#0000FF"} />
    <pointLight position={[20, 10, 0]} intensity={1}  />
    <Suspense fallback={null}> 
    <Model modelPath={modelPath} scale={scale} position={position} />
    <OrbitControls />
  
   </Suspense>


  </Canvas>
      
    </div>

  )
}

export default ModelViewer