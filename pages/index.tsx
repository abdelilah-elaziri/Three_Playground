import type { NextPage } from 'next';
import { Canvas } from '@react-three/fiber';
import AnimatedBox from '../components/animatedBox/AnimatedBox';
import { OrbitControls, Stats } from '@react-three/drei';


const Home: NextPage = () => {

  const testing = true;

  return (
    <div className='container'>
      <Canvas>
        {testing ? <Stats /> : null};
        {testing ? <axesHelper args={[2]}/> : null};
        {testing ? <gridHelper  args={[10, 10]}/> : null};
        
        <ambientLight intensity={0.1} />
        <directionalLight color="aqua" position={[0, 0, 5]} />
        <AnimatedBox isTesting={testing}/>
        <OrbitControls />
        
      </Canvas>
    </div>
  )
}

export default Home
