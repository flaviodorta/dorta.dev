import { anton } from '@/pages/_app';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

const Loader = ({ c, d }: { c: string; d: number }) => {
  const [count, setCount] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const timeout = async (cb: () => void, delay: number) => {
      await new Promise(() => setTimeout(cb, delay));
    };

    if (isFirstRender) {
      timeout(() => setIsFirstRender(false), d);
    } else if (!isFirstRender && count < 100) {
      timeout(() => setCount((c) => c + 10), 300);
    }
  }, [count, d, isFirstRender]);

  return (
    <div className={clsx(['fixed w-full h-full flex justify-center', c])}>
      <h1
        className={clsx([
          'relative bottom-20 flex items-center',
          anton.className,
        ])}
      >
        <span className='text-white tracking-wide font-anton text-4xl sm:text-6xl'>
          {count}%
        </span>

        <div className='effect absolute bottom-0 left-0 bg-primary w-full h-0'></div>
      </h1>
    </div>
  );
};

export default Loader;
