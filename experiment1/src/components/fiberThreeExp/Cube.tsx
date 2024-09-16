
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

function ThreeCube() {
  return(
    <>
      <h1>Cube</h1>
      <div>
        <Canvas>
          <mesh
            geometry={new THREE.SphereGeometry(1, 16, 16)}
          >
            {/* <ambientLight intensity={1}/>
            <boxGeometry args={[2, 2, 2]}/>
            <sphereGeometry/>
            <meshStandardMaterial/> */}
          </mesh>
        </Canvas>
      </div>
    </>
  )
}

export default ThreeCube;