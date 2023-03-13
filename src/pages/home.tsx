import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import Navbar from '@/components/Navbar';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import { twMerge } from 'tailwind-merge';
import Hero from '@/components/Hero';
import ComputerCanvas from '@/components/canvas/Computer';

const Home = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  useIsomorphicLayoutEffect(() => {
    let timer = setTimeout(() => setIsAnimating(true), 750 + 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Navbar isAnimating={isAnimating} />

      <main
        className={twMerge(['relative flex flex-col', 'h-[calc(100%-112px)]'])}
      >
        <ComputerCanvas className='absolute flex-grow h-full flex-center' />
        <Hero isAnimating={isAnimating} />
      </main>
    </>
  );
};

export default Home;
