import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import { twMerge } from 'tailwind-merge';
import Hero from '@/components/Hero';
import Loader, { loader } from '@/components/canvas/Loader';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { shouldLoadComputer } from '@/components/canvas/Computer';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import dynamic from 'next/dynamic';
import { DynamicComputerCanvas } from './index';
import { transition } from '@/recoil/atoms';
import { timeout } from '@/utils/help-functions';

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isLoader = useRecoilValue(loader);
  const setShouldLoadComputer = useSetRecoilState(shouldLoadComputer);
  const setIsTransitioning = useSetRecoilState(transition);

  useIsomorphicLayoutEffect(() => {
    timeout(() => {
      setIsTransitioning(true);
    }, 6000);
  }, []);

  useEffect(() => {
    setIsMounted(true);

    return () => setShouldLoadComputer(false);
  }, []);
  return (
    <>
      <Navbar />

      {isLoader && <Loader d={750} />}

      <main
        className={twMerge(['relative flex flex-col', 'h-[calc(100%-112px)]'])}
      >
        <Suspense fallback={null}>
          {shouldLoadComputer && isMounted ? <DynamicComputerCanvas /> : null}
        </Suspense>

        <Hero />
      </main>
    </>
  );
};

export default Home;
