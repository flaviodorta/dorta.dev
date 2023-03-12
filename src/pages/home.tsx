import React, { useEffect, useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { Layout } from '@/components/Layout';
import Navbar from '@/components/Navbar';
import { Work_Sans, Anton } from '@next/font/google';
import clsx from 'clsx';
import { RxDoubleArrowDown } from 'react-icons/rx';
import gsap, { Elastic, Expo, Power1, Power2, Power4 } from 'gsap';
import SplitType from 'split-type';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import { twMerge } from 'tailwind-merge';
import Scene from '@/components/Triangles/Canvas';
import { anton } from './_app';
import Hero from '@/components/Hero';

const Home = () => {
  const mainRef = useRef<HTMLElement>(null!);
  const navbarRef = useRef<HTMLDivElement>(null!);
  const tl = useRef<GSAPTimeline>();
  const isFirstLoad = useRef(false);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const { CSSRulePlugin } = require('gsap/CSSRulePlugin');
      gsap.registerPlugin(CSSRulePlugin);
      tl.current = gsap.timeline({ defaults: { duration: 1 } });
      let rule = CSSRulePlugin.getRule('span:after');

      gsap.to(rule, {
        duration: 0.4,
        cssRule: {
          width: '100%',
        },
      });

      tl.current
        .to('#slogan', {
          duration: 1.4,
          stagger: {
            amount: 0.1,
          },
          ease: Power1.easeInOut,
          top: 0,
          delay: 1.5,
        })
        .from('#scroll', {
          opacity: 0,
          ease: Power1.easeIn,
        })
        .to('#scroll', {
          y: 10,
          yoyo: true,
          repeat: -1,
          ease: Power1.easeIn,
        });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar ref={navbarRef} />

      <main
        ref={mainRef}
        className={twMerge([
          'flex flex-col justify-end',
          'h-[calc(100%-112px)]',
        ])}
      >
        <Hero />
      </main>
    </>
  );
};

export default Home;
