import "./Background.css";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { FBXLoader } from "three/examples/jsm/Addons.js";


const Scene = () => {
  const fbx = useLoader(FBXLoader, "Cube.fbx")

  return <primitive object={fbx} scale={0.005} />;
}

export default function Background() {

  return (
    <div>
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
      </Canvas>
    </div>
  )
}

