import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import { OrbitControls, Environment } from "@react-three/drei";
import Model from "./Model";



const ModelViewer = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {

  

  return (
    <div className="h-[50vw] w-full">
          <Canvas>
    <ambientLight intensity={8} />
    <spotLight position={[10, 10, 10]} angle={2} intensity={6}   penumbra={1} />
    <pointLight position={[10, 10, -10]} intensity={2} color={"#0000FF"} />
    <pointLight position={[20, 10, 0]} intensity={1}  />
    <Suspense fallback={null}>
    <Model modelPath={modelPath} scale={scale} position={position} />
    <OrbitControls />
  
    </Suspense>
    <EffectComposer>
    <DepthOfField focusDistance={0} focalLength={0.09} bokehScale={0.02} height={480} />
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={1} height={300} />
       
        <Vignette eskil={false} offset={0.4} darkness={0.6} />

    </EffectComposer>
  

  </Canvas>
      
    </div>

  )
}

export default ModelViewer