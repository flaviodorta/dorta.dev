import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import Navbar from '@/components/Navbar';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import { twMerge } from 'tailwind-merge';
import Hero from '@/components/Hero';
import ComputerCanvas from '@/components/canvas/Computer';

const Home = () => {
  return (
    <>
      <Navbar />

      <main
        className={twMerge(['relative flex flex-col', 'h-[calc(100%-112px)]'])}
      >
        <ComputerCanvas className='absolute flex-grow h-full flex-center' />
        <Hero />
      </main>
    </>
  );
};

export default Home;
