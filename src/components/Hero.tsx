import React, { useRef } from 'react';
import Navbar from '@/components/Navbar';
import clsx from 'clsx';
import gsap, { Power1, Power2 } from 'gsap';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import { twMerge } from 'tailwind-merge';
import { anton } from '@/pages/_app';
import ComputerCanvas from './canvas/Computer';

const Hero = () => {
  const mainRef = useRef<HTMLElement>(null!);
  const navbarRef = useRef<HTMLDivElement>(null!);
  const tl = useRef<GSAPTimeline>();

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

      gsap.to('.scroll', {
        yoyo: true,
        y: -24,
        duration: 1.5,
        repeat: -1,
        ease: Power2.easeInOut,
      });

      tl.current
        .to('#slogan', {
          duration: 1.5,
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
    <section
      ref={mainRef}
      className={twMerge([
        'relative h-full  flex flex-col justify-end bg-transparent',
      ])}
    >
      <ComputerCanvas className='absolute  h-full' />

      <div
        className={twMerge([
          anton.className,
          'absolute w-full bg-none bg-transparent flex flex-col items-center justify-between uppercase',
          'md:flex-row',
        ])}
      >
        <div
          className={twMerge([
            'bg-transparent flex flex-col justify-end mr-auto ml-0',
          ])}
        >
          <div
            className={twMerge([
              'mr-auto ml-0 bg-transparent leading-none text-[7vw] overflow-hidden',
            ])}
          >
            <h1
              id='slogan'
              className='relative top-[400px] leading-none tracking-wide'
            >
              Creative
            </h1>
          </div>

          <div
            className={twMerge([
              'mr-auto ml-0 bg-transparent leading-none text-[13vw] overflow-hidden',
            ])}
          >
            <h1
              id='slogan'
              className='relative top-[500px] leading-none tracking-wide'
            >
              Developer
              <span className='overflow-hidden text-primary' id='char2'>
                .
              </span>
            </h1>
          </div>
        </div>

        <div className='mt-56 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-gray-300 flex justify-center items-center p-2'>
              <div className='scroll relative top-[12px] w-3 h-3 rounded-full bg-gray-300'></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
