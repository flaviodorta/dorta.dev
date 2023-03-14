import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Layout } from '@/components/Layout';
import Navbar from '@/components/Navbar';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import { twMerge } from 'tailwind-merge';
import Hero from '@/components/Hero';
import ComputerCanvas from '@/components/canvas/Computer';
import dynamic from 'next/dynamic';

const DynamicComputerCanvas = lazy(
  () => import('@/components/canvas/Computer')
);

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <Navbar />

      <main
        className={twMerge(['relative flex flex-col', 'h-[calc(100%-112px)]'])}
      >
        <Suspense fallback={null}>
          {isMounted ? <DynamicComputerCanvas /> : null}
        </Suspense>

        <Hero />
      </main>
    </>
  );
};

export default Home;
