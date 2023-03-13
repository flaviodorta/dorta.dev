import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  OrbitControls,
  Preload,
  useGLTF,
  CameraShake,
} from '@react-three/drei';
import { isMobile } from 'react-device-detect';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import * as THREE from 'three';
import CanvasLoader from './CanvasLoader';

const Computer = ({
  isMobile,
  canvasSize,
}: {
  isMobile: boolean;
  canvasSize: number[];
}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  const computerRef = useRef<THREE.Object3D>(null!);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[30, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
      />

      <pointLight intensity={1} position={[20, 50, 10]} />

      <primitive
        ref={computerRef}
        object={computer.scene}
        scale={isMobile ? 0.75 : 0.75}
        position={isMobile ? [-30, 0, -7] : [5.5, -0.3, 0.1]}
        rotation={[-0.01, -0.1, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false || isMobile);
  const [canvasSize, setCanvasSize] = useState([0, 0]);

  useIsomorphicLayoutEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobileScreen(mediaQuery.matches);

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsMobileScreen(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  });

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [25, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className='absolute flex-grow h-full flex-center'
    >
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableRotate={false}
      />
      {/* <Suspense fallback={null}> */}
      <Computer isMobile={isMobileScreen} canvasSize={canvasSize} />
      {/* </Suspense> */}

      {/* <CameraShake yawFrequency={100} pitchFrequency={100} rollFrequency={20} /> */}
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
