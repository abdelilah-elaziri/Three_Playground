import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useHelper } from '@react-three/drei';
import { BoxHelper } from 'three';


type prop = {
  isTesting: boolean;
}

const AnimatedBox:React.FC<prop> = ({isTesting}) => {
    const meshRef = useRef<THREE.Mesh>(null);
    {isTesting ? useHelper(meshRef, BoxHelper, "#000"): null};

    useFrame(() => {
      console.log("Hi");
      if(meshRef.current){
        meshRef.current.rotation.x += 0.01;
      }
    });
  
    return(
      <mesh  ref={meshRef} scale={[0.5, 0.5, 0.5]}>
       <boxGeometry  attach={"geometry"}/>
        <meshStandardMaterial />
      </mesh>
    );
  };
  
  export default AnimatedBox;