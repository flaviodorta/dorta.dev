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
// import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin';

const worksSans300 = Work_Sans({ weight: '300', subsets: ['latin'] });
const worksSans400 = Work_Sans({ weight: '400', subsets: ['latin'] });
const anton = Anton({ weight: '400', subsets: ['latin'] });

const Index = () => {
  const sloganPartOne = 'Creative'.split('').map((el, idx) => (
    <div key={idx} id='char' className='inline-block'>
      {el}
    </div>
  ));

  const sloganPartTwo = 'Developer'.split('').map((el, idx) => (
    <div key={idx} id='char' className='inline-block'>
      {el}
    </div>
  ));

  const mainRef = useRef<HTMLElement>(null!);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const { CSSRulePlugin } = require('gsap/CSSRulePlugin');
      gsap.registerPlugin(CSSRulePlugin);
      const t1 = gsap.timeline({ defaults: { duration: 1 } });
      let rule = CSSRulePlugin.getRule('span:after');

      gsap.to(rule, {
        duration: 0.4,
        cssRule: {
          width: '100%',
        },
      });

      // gsap.to('#slogan-part-one', {
      //   duration: 0.3,
      //   ease: Power2.easeInOut,
      //   top: 0,
      // });

      // gsap.to('#slogan-part-two', {
      //   duration: 0.3,
      //   ease: Power2.easeInOut,
      //   top: 0,
      // });

      t1
        // .fromTo(
        //   '#char',
        //   {
        //     y: 270,
        //     skewY: 20,
        //     skewX: 3,
        //     // stagger: 0.13,
        //   },
        //   {
        //     y: 0,
        //     skewY: 0,
        //     skewX: 0,
        //     duration: 0.38,
        //     stagger: 0.08,
        //   }
        // )
        .from('#char2', {
          opacity: 0,
          delay: 0.3,
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
      // .from(navbarRef.current, {
      //   y: -304,
      //   duration: 0.4,
      // });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      <div id='navbar'>
        <Navbar />
      </div>

      <main
        ref={mainRef}
        className={twMerge([
          '*h-full flex flex-col justify-end *mt-6 *mb-20',
          '*lg:mt-10',
          'h-[calc(100%-112px)]',
        ])}
      >
        {/* <div
          className={clsx([
            'w-full flex flex-col justify-center items-center',
            'lg:flex-row',
          ])}
        >
          <div className='flex justify-start'>
            <div
              className={clsx([
                'flex flex-col self-center text-sm h-fit',
                'xl:flex-row md:text-md lg:text-lg',
              ])}
            >
              <div>
                <span
                  className={clsx([
                    worksSans400.className,
                    'uppercase relative background-primary w-fit bg-primary whitespace-nowrap leading-10 px-2 py-1',
                    'after:absolute after:left-0 after:top-0 after:w-1/2 after:h-full after:bg-black after:origin-left',
                  ])}
                >
                  Who am I?
                </span>
              </div>

              <p
                className={twMerge([
                  worksSans300.className,
                  'uppercase text-justify px-2 py-1 tracking-wider leading-8',
                  'md:w-[600px]',
                ])}
              >
                I am Flávio Dorta, a full-stack developer with experience in
                creating creative solutions for web applications. My approach is
                user-centric and I enjoy experimenting with new ideas and
                technologies. With skills in both front-end and back-end
                development, I can create complete and integrated solutions. I
                believe in teamwork and collaboration to achieve the best
                results. I am always seeking new challenges to overcome.
              </p>
            </div>
          </div>

          <div
            className={twMerge([
              'w-full h-full mt-8 flex justify-center',
              'md:pt-0',
            ])}
          >
            <Image
              className='z-[2]'
              src='/eu1.jpeg'
              width={300}
              height={600 / 16 / 9}
              alt='Flávio Dorta'
            />
          </div>
        </div> */}

        <div
          className={twMerge([
            anton.className,
            'w-full flex flex-col items-center justify-between uppercase',
            'md:flex-row',
          ])}
        >
          <div
            className={twMerge([
              'w-fit flex flex-col justify-end mr-auto ml-0',
            ])}
          >
            <div
              className={twMerge([
                'relative inline-block w-fit leading-none text-[14vw] overflow-hidden',
                // 'xl:text-[17vw]',
              ])}
            >
              <h1
                id='slogan-part-one'
                className='block relative leading-none tracking-wide'
              >
                Creative
              </h1>
            </div>

            <div
              className={twMerge([
                'relative inline-block w-fit leading-none text-[17vw] overflow-hidden',
              ])}
            >
              <h1
                id='slogan-part-two'
                className='block relative leading-none tracking-wide'
              >
                Developer
                <span className='overflow-hidden text-primary' id='char2'>
                  .
                </span>
              </h1>
            </div>
          </div>

          <span
            id='scroll'
            className={clsx(['mt-auto grow  flex-center gap-2 justify-center'])}
          >
            <RxDoubleArrowDown
              className={twMerge([
                'text-primary h-3 w-3',
                'sm:w-4 sm:h-4',
                'md:w-5 md:h-5',
              ])}
            />
            <span
              className={clsx([
                worksSans400.className,
                'uppercase text-[0.85vw]',
              ])}
            >
              Scroll
            </span>
          </span>
        </div>
      </main>
    </Layout>
  );
};

export default Index;
