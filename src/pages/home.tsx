import React, { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { twMerge } from 'tailwind-merge';
import Hero from '@/components/Hero';
import Loader, { loader } from '@/components/canvas/Loader';
import { useRecoilState } from 'recoil';

const DynamicComputerCanvas = lazy(
  () => import('@/components/canvas/Computer')
);

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoader, setIsLoader] = useRecoilState(loader);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <Navbar />

      {isLoader && <Loader d={750} />}

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
