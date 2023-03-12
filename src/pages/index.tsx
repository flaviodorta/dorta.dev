import React, { useEffect, useRef, useState } from 'react';
import { Layout } from '@/components/Layout';
import gsap from 'gsap';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import Logo from '@/components/Logo';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { anton } from './_app';
import Transition from '@/components/Transition';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { transition } from '@/recoil/atoms';

const Index = () => {
  const tl = useRef<GSAPTimeline>();
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null!);
  const [isTransitioning, setIsTransitioning] = useRecoilState(transition);

  useIsomorphicLayoutEffect(() => {
    const startTransitionTimer = setTimeout(() => {
      setIsTransitioning(true);
    }, 3500);

    const replaceRouteTimer = setTimeout(() => {
      router.replace('/home');
    }, 5000);

    router.events.on('routeChangeComplete', () =>
      setTimeout(() => setIsTransitioning(false), 7500)
    );

    return () => {
      clearTimeout(replaceRouteTimer);
      clearTimeout(startTransitionTimer);
      router.events.off('routeChangeComplete', () =>
        setTimeout(() => setIsTransitioning(false), 7500)
      );
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
