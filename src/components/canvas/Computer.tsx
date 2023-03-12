import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { isMobile } from 'react-device-detect';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import * as THREE from 'three';
import CanvasLoader from './Loader';
import Transition from '../Transition';

const Computer = ({ isMobile }: { isMobile: boolean }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  const computerRef = useRef<THREE.Object3D>(null!);

  useFrame((_) => {
    computerRef.current.rotation.y += _.clock.getDelta() * Math.PI * 0.5;
  });

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
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [7.5, 0, 0]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = ({ className }: { className: string }) => {
  const [isMobileScreen, setIsMobileScreen] = useState(false && isMobile);

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
      // style={{ height: '100vh' }}
      className={className}
    >
      {/* <Suspense fallback={<Transition />}> */}
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableRotate={false}
      />

      <Computer isMobile={isMobileScreen} />
      {/* </Suspense> */}

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
