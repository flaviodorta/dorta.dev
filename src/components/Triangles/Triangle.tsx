import { useFrame, useLoader } from '@react-three/fiber';
import { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

const Triangle = ({
  color,
  ...props
}: {
  color: string;
  [key: string]: string;
}) => {
  const ref = useRef<THREE.Group>(null!);
  const [r] = useState(() => Math.random() * 10000);
  useFrame(
    (frame) =>
      (ref.current.position.y =
        -1.75 + Math.sin(frame.clock.elapsedTime + r) / 10)
  );
  const {
    paths: [path],
  } = useLoader(SVGLoader, '/triangle.svg');
  const geometry = useMemo(() => SVGLoader.pointsToStroke, []);

  return <group ref={ref}></group>;
};

export default Triangle;
