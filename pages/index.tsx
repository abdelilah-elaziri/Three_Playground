import type { NextPage } from 'next';
import { Canvas } from '@react-three/fiber';
import AnimatedBox from '../components/animatedBox/AnimatedBox';
import CameraOrbitControler from '../components/cameraOrbitControler/CameraOrbitControler';


const Home: NextPage = () => {

  return (
    <div className='container'>
      <Canvas>
        <CameraOrbitControler />
        <ambientLight intensity={0.1} />
        <directionalLight color="aqua" position={[0, 0, 5]} />
        <AnimatedBox />
      </Canvas>
    </div>
  )
}

export default Home
