import { anton } from '@/pages/_app';
import { Prosto_One } from '@next/font/google';
import { Html, useProgress } from '@react-three/drei';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const CanvasLoader = () => {
  // const { progress } = useProgress();
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    while (count < 100) {
      timer = setTimeout(() => setCount((c) => c + 1), 3000 / 100);
    }

    () => clearTimeout(timer);
  });

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
        {count}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
