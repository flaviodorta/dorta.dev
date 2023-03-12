import { anton } from '@/pages/_app';
import { Prosto_One } from '@next/font/google';
import { Html, useProgress } from '@react-three/drei';
import clsx from 'clsx';

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        zIndex: 2,
      }}
    >
      <span className='canvas-loader'></span>
      <p
        className={clsx([
          anton.className,
          'text-3xl font-bold -mt-20 text-white',
        ])}
      >
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
