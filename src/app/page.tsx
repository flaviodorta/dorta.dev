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
  // const [loadingBarWidth, setLoadingBarWidth] = useState(0);
  // const [transition, setTransiton] = useState(false)
  // const [render, setRender] = useState(false);

  // useEffect(() => {
  //   const t1 = setTimeout(() => setLoadingBarWidth(20), 2000);
  //   const t2 = setTimeout(() => setLoadingBarWidth(60), 3000);
  //   const t3 = setTimeout(() => setLoadingBarWidth(100.1), 6500);
  //   const t4 = setTimeout(() => setRender(true), 7500);

  //   return () => {
  //     clearTimeout(t1);
  //     clearTimeout(t2);
  //     clearTimeout(t3);
  //     clearTimeout(t4);
  //   };
  // }, []);

  // if (transition)
  //   return

  return (
    <main className='relative bg-black-mate text-white min-h-screen'>
      <Header />
      <BackgroundBeams />
      <div className='z-50 gap-[300px] flex flex-col items-center'>
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
