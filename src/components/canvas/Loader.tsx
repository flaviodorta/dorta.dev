import { anton } from '@/pages/_app';
import { timeout } from '@/utils/help-functions';
import clsx from 'clsx';
import gsap, { Power2 } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { atom, useSetRecoilState } from 'recoil';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';

export const loader = atom({
  key: 'loader',
  default: false,
});

const Loader = ({ c, d }: { c?: string; d: number }) => {
  const [count, setCount] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const ref = useRef<HTMLDivElement>(null!);
  const setIsLoader = useSetRecoilState(loader);
  const [isLoadingCompleted, setIsLoadingCompleted] = useState(false);
  const tl = useRef(gsap.timeline());

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current
        .to('.loader', {
          display: 'flex',
        })
        .to('.effect', {
          height: 0,
          duration: 1.1,
          ease: Power2.easeInOut,
        })
        .to('.effect', {
          bottom: 0,
          transformOrigin: 'bottom',
        });
    }, ref);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isLoadingCompleted) {
      tl.current
        .to(
          '.effect',
          {
            duration: 1.1,
            height: '100%',
            ease: Power2.easeInOut,
          },
          '+=0.5'
        )
        .call(() => {
          setIsLoader(false);
        });
    }

    if (isFirstRender) {
      timeout(() => setIsFirstRender(false), d + 1100);
    } else if (!isFirstRender && count < 100) {
      timeout(() => {
        setCount((c) => c + 1);
        if (count === 99) setIsLoadingCompleted(true);
      }, 15);
    }
  }, [count, d, isFirstRender, isLoadingCompleted, setIsLoader]);
  //s
  return (
    <div
      ref={ref}
      className={clsx(['fixed w-full h-full flex justify-center z-[100]', c])}
    >
      <h1
        className={clsx([
          'loader flex relative bottom-40 items-center',
          anton.className,
        ])}
      >
        <div className='relative text-white tracking-wide font-anton text-4xl sm:text-6xl'>
          <span className='text-white tracking-wide font-anton text-4xl sm:text-6xl'>
            {count}%
          </span>

          <span className='effect absolute left-0 bg-primary w-full h-full origin-top' />
        </div>
      </h1>
    </div>
  );
};

export default Loader;
