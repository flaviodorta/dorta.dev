import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const Rig = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<THREE.Group>(null!);
  const vector = new THREE.Vector3();
  const { camera, mouse } = useThree();
  useFrame(() => {
    camera.position.lerp(vector.set(mouse.x * 2, 0, 3.5), 0.05);
    ref.current.position.lerp(vector.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1);
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (-mouse.x * Math.PI) / 20,
      0.1
    );
  });

  return <group ref={ref}>{children}</group>;
};

export default Rig;
