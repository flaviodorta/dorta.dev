import React, { useEffect, useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { Layout } from '@/components/Layout';
import Navbar from '@/components/Navbar';
import { Work_Sans, Anton } from '@next/font/google';
import clsx from 'clsx';
import { RxDoubleArrowDown } from 'react-icons/rx';
import gsap, { Elastic, Expo, Power1, Power4 } from 'gsap';
import SplitType from 'split-type';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import { twMerge } from 'tailwind-merge';

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

  const sloganRef = useRef<HTMLHeadingElement>(null!);
  const scrollRef = useRef<HTMLSpanElement>(null!);
  const sloganPointRef = useRef<HTMLSpanElement>(null!);
  const navbarRef = useRef<HTMLDivElement>(null!);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline({ defaults: { duration: 1 } });

      t1.fromTo(
        '#char',
        {
          y: 270,
          skewY: 20,
          skewX: 3,
          // stagger: 0.13,
        },
        {
          y: 0,
          skewY: 0,
          skewX: 0,
          duration: 0.48,
          stagger: 0.13,
        }
      )
        .from('#char2', {
          opacity: 0,
          delay: 0.3,
        })
        .from(scrollRef.current, {
          opacity: 0,
          ease: Power1.easeIn,
        })
        .to(scrollRef.current, {
          y: 10,
          yoyo: true,
          repeat: -1,
          ease: Power1.easeIn,
        })
        .from(navbarRef.current, {
          y: -304,
          duration: 0.4,
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      <Navbar ref={navbarRef} />

      <main
        className={twMerge(['h-full mt-6 pb-10 flex flex-col', 'lg:mt-14'])}
      >
        <div
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
                    'uppercase background-primary w-fit bg-primary whitespace-nowrap leading-10 px-2 py-1',
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
        </div>

        <div
          className={twMerge([
            anton.className,
            'w-full mt-6 flex flex-col items-center justify-around text-[58px] uppercase',
            'sm:mt-10',
            'xl:flex-row',
          ])}
        >
          <h1
            ref={sloganRef}
            className={twMerge([
              'flex text-[10vw] whitespace-nowrap tracking-wide overflow-hidden',
              'lg:text-[108px]',
              'xl:text-[148px]',
            ])}
          >
            <p id='char2' className={twMerge(['lg:inline-block text-primary'])}>
              {'{'}
            </p>
            <span>{sloganPartOne}</span>
            <p id='char2' className={twMerge(['lg:inline-block text-primary'])}>
              _
            </p>
            <span>
              {sloganPartTwo}
              <span
                className='overflow-hidden text-primary'
                // ref={sloganPointRef}
                id='char2'
              >
                {'}'}
              </span>
            </span>
          </h1>

          <span
            ref={scrollRef}
            className={clsx([
              'mt-6 text-[2vw] flex-center gap-2 justify-center',
              'sm:text-sm',
              'md:mt-8',
              'lg:mt-12',
            ])}
          >
            <RxDoubleArrowDown
              className={twMerge([
                'text-primary h-3 w-3',
                'sm:w-4 sm:h-4',
                'md:w-5 md:h-5',
              ])}
            />
            <span className={clsx([worksSans400.className, 'uppercase'])}>
              Scroll
            </span>
          </span>
        </div>
      </main>
    </Layout>
  );
};

export default Index;
