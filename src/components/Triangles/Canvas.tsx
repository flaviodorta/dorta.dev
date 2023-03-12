import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Ground from './Ground';
import Rig from './Rig';

const Scene = () => {
  return (
    <Canvas
      className='z-[-1] absolute bg-black'
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 15] }}
    >
      <color attach='background' args={['black']} />
      <ambientLight />
      {/* <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      /> */}
      <Suspense fallback={null}>
        <Rig>
          {/* <Ground
            mirror={1}
            blur={[500, 100]}
            mixBlur={12}
            mixStrength={1.5}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            position-y={-0.8}
          /> */}
          {/* <Ground /> */}
        </Rig>
      </Suspense>
    </Canvas>
  );
};

export default Scene;
