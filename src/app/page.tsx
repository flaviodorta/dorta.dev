'use client';

import About from '@/components/sections/about';
import { BackgroundBeams } from '@/components/ui/background-beams';
import Contact from '@/components/sections/contact';
import Experience from '@/components/sections/experience';
import Header from '@/components/ui/header';
import Home from '@/components/sections/home';
import Projects from '@/components/sections/projects';
import { useEffect, useState } from 'react';

export default function Page() {
  return (
    <main className='relative p-[80px] w-full mx-auto bg-black-mate text-white min-h-screen'>
      <Header />
      {/* <BackgroundBeams /> */}
      <div className='z-50 -mt-40 md:mt-0 mx-auto w-full gap-[100px] md:gap-[300px] flex-1 flex flex-col items-center'>
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <div className='w-full h-[400px]'></div>
    </main>
  );
}
