import React, { useRef } from 'react';
import gsap from 'gsap';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { anton } from './_app';
import { useSetRecoilState } from 'recoil';
import { transition } from '@/recoil/atoms';
import dynamic from 'next/dynamic';

export const DynamicComputerCanvas = dynamic(
  () => import('@/components/canvas/Computer')
);

const Index = () => {
  const tl = useRef<GSAPTimeline>();
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null!);
  const setIsTransitioning = useSetRecoilState(transition);

  useIsomorphicLayoutEffect(() => {
    const startTransitionTimer = setTimeout(() => {
      setIsTransitioning(true);
    }, 3500);

    const replaceRouteTimer = setTimeout(() => {
      router.replace('/home');
    }, 3500 + 750);

    return () => {
      clearTimeout(replaceRouteTimer);
      clearTimeout(startTransitionTimer);
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline();

      tl.current.to('#logo', {
        opacity: 1,
        duration: 1,
        delay: 0.5,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={ref} className='w-full h-full flex justify-center'>
        <h1
          id='logo'
          className={clsx([
            'uppercase relative bottom-20 tracking-wide flex items-center text-xl sm:text-4xl opacity-0',
            anton.className,
          ])}
        >
          <span className='text-primary text-2xl sm:text-5xl'>{'{'}</span>Dorta
          <span className='text-primary'>{'.'}</span>dev
          <span className='text-primary text-2xl sm:text-5xl'>{'}'}</span>
        </h1>
      </div>
    </>
  );
};

export default Index;
