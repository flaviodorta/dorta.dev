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
  const scrollRef = useRef<HTMLSpanElement>(null);
  const sloganPointRef = useRef<HTMLSpanElement>(null!);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '#char',
        {
          y: 270,
          skewY: 4,
          skewX: 3,
          stagger: 0.13,
        },
        {
          y: 0,
          skewY: 0,
          skewX: 0,
          stagger: 0.13,
        }
      );

      gsap.to(scrollRef.current, {
        y: 10,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: Power1.easeIn,
      });

      // gsap.to(scrollRef.current, {
      //   yoyo: true,
      //   duration: Infinity,
      //   repeat: -1,
      //   y: 10,
      // });

      gsap.from(sloganPointRef.current, {
        delay: 2.6,
        opacity: 0,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      <Navbar />

      <div className='flex pt-16 md:pt-20 justify-center'>
        <main className='relative'>
          <div className='grid grid-cols-1 text-justify md:grid-cols-2 w-full'>
            <div className='flex items-center'>
              <div className='flex-col md:flex-row flex text-lg h-fit'>
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

                <span
                  className={clsx([
                    worksSans300.className,
                    'uppercase px-2 py-1 tracking-wider leading-8',
                  ])}
                >
                  I am Flávio Dorta, a full-stack developer with experience in
                  creating creative solutions for web applications. My approach
                  is user-centric and I enjoy experimenting with new ideas and
                  technologies. With skills in both front-end and back-end
                  development, I can create complete and integrated solutions. I
                  believe in teamwork and collaboration to achieve the best
                  results. I am always seeking new challenges to overcome.
                </span>
              </div>
            </div>

            <div className='pt-16 md:pt-0 w-full px-20 h-full flex-center'>
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
            className={clsx([
              anton.className,
              'flex justify-between w-full overflow-hidden h-fit items-center absolute left-0 mt-40 text-[168px] uppercase',
            ])}
          >
            <h1 ref={sloganRef} className='whitespace-nowrap overflow-hidden'>
              {sloganPartOne} {sloganPartTwo}
              <span ref={sloganPointRef} className='text-primary'>
                .
              </span>
            </h1>

            <span
              ref={scrollRef}
              className='flex-center mx-auto gap-2 w-fit justify-center'
            >
              <RxDoubleArrowDown className='text-primary h-7 w-7' />
              <span
                className={clsx([worksSans400.className, 'uppercase text-lg'])}
              >
                Scroll
              </span>
            </span>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Index;
