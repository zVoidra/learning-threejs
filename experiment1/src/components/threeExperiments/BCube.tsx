import { useEffect, useRef } from "react";
import * as THREE from 'three';
import { FBXLoader } from "three/examples/jsm/Addons.js";

export default function BCube() {
  const sceneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current?.appendChild(renderer.domElement);

    const loader = new FBXLoader();
    loader.load (
      '/Cube.fbx',
      (fbx) => {
        fbx.traverse((child:any) => {
          if (child.isMesh) {
            child.material = material;
          }
        })
        fbx.scale.set(0.005, 0.005, 0.005);
        scene.add(fbx);

        camera.position.z = 5;
        const animate = function () {
          requestAnimationFrame(animate);

          fbx.rotation.y += 0.01;

          renderer.render(scene, camera);
        };
        animate();
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.log('An error occured', error);
      }
    )
  }, []);

  return <div ref={sceneRef}></div>;
}