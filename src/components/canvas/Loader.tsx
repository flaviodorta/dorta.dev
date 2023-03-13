import { anton } from '@/pages/_app';
import { timeout } from '@/utils/helper-functions';
import clsx from 'clsx';
import gsap, { Power1, Power2 } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';

const Loader = ({ c, d }: { c?: string; d: number }) => {
  const [count, setCount] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const ref = useRef<HTMLDivElement>(null!);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .to('.loader', {
          delay: 2.75,
          display: 'flex',
        })
        .to('.effect', {
          height: 0,
          duration: 1.5,
          ease: Power2.easeInOut,
        })
        .to('.effect', {
          bottom: 0,
          transformOrigin: 'bottom',
        })
        .to('.effect', {
          duration: 1.5,
          height: '100%',
          delay: 3 + 2.5 + 2,
          ease: Power2.easeInOut,
        })
        .to(ref.current, {
          display: 'none',
        });
    }, ref);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isFirstRender) {
      timeout(() => setIsFirstRender(false), d + 4000);
    } else if (!isFirstRender && count < 100) {
      timeout(() => setCount((c) => c + 10), 300);
    }
  }, [count, d, isFirstRender]);

  return (
    <div
      ref={ref}
      className={clsx(['fixed w-full h-full flex justify-center z-[100]', c])}
    >
      <h1
        className={clsx([
          'loader hidden relative bottom-20 items-center',
          anton.className,
        ])}
      >
        <div className='relative text-white tracking-wide font-anton text-4xl sm:text-6xl'>
          <span className='text-white tracking-wide font-anton text-4xl sm:text-6xl'>
            {count}%
          </span>

          <span className='effect absolute top0 left-0 bg-primary w-full h-full origin-top' />
        </div>
      </h1>
    </div>
  );
};

export default Loader;
