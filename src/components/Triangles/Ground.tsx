import { MeshReflectorMaterial, useTexture } from '@react-three/drei';
import { MeshReflectorMaterialProps } from '@react-three/drei/materials/MeshReflectorMaterial';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Ground = (props: { [key: string]: unknown }) => {
  const [colorMap, displacementMap, metalnessMap, normalMap, roughtnessMap] =
    useTexture([
      '/texture/Metal046B_1K_Color.jpg',
      '/texture/Metal046B_1K_Displacement.jpg',
      '/texture/Metal046B_1K_Metalness.jpg',
      '/texture/Metal046B_1K_NormalDX.jpg',
      '/texture/Metal046B_1K_Roughness.jpg',
    ]);

  useEffect(() => {
    [colorMap, displacementMap, metalnessMap, normalMap, roughtnessMap].forEach(
      (p) => {
        p.wrapS = THREE.RepeatWrapping;
        p.wrapT = THREE.RepeatWrapping;
        p.repeat.set(5, 5);
        p.offset.set(0, 0);
      }
    );

    normalMap.encoding = THREE.LinearEncoding;
  }, [colorMap, displacementMap, metalnessMap, normalMap, roughtnessMap]);

  return (
    <mesh castShadow receiveShadow>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial
        map={colorMap}
        displacementMap={displacementMap}
        roughnessMap={roughtnessMap}
        normalMap={normalMap}
        // normalScale={[2, 2]}
        mixBlur={1}
        depthScale={1}
        depthToBlurRatioBias={1}
        distortion={1}
        maxDepthThreshold={1}
        minDepthThreshold={0.5}
        mirror={2}
        mixContrast={0.3}
        mixStrength={0.4}
      />
    </mesh>
  );
};

export default Ground;
