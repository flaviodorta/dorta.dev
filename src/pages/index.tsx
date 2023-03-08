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
  const scrollRef = useRef<HTMLSpanElement>(null!);
  const sloganPointRef = useRef<HTMLSpanElement>(null!);
  const navbarRef = useRef<HTMLDivElement>(null!);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline({ defaults: { duration: 1 } });

      gsap.from(navbarRef.current, {
        y: -304,
        duration: 0.4,
      });

      t1.fromTo(
        '#char',
        {
          y: 270,
          skewY: 10,
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
        .from(sloganPointRef.current, {
          opacity: 0,
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
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      {/* <div ref={navbarRef}> */}
      <Navbar ref={navbarRef} />
      {/* </div> */}

      <div className='flex mt-12 lg:mt-14'>
        <main>
          <div className='w-full flex flex-col lg:flex-row justify-center items-center'>
            <div className='flex justify-start'>
              <div className='flex flex-col xl:flex-row self-center text-sm md:text-md lg:text-lg h-fit'>
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
                    'uppercase w-[600px] md:text-justify px-2 py-1 tracking-wider leading-8',
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

            <div className='w-full mt-8 md:pt-0  h-full flex justify-center'>
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
              'flex flex-col md:flex-row justify-between w-full overflow-hidden items-center mt-24 md:mt-40 text-[98px] lg:text-[128px] xl:text-[168px] uppercase',
            ])}
          >
            <h1
              ref={sloganRef}
              className='flex flex-col lg:flex-row whitespace-nowrap overflow-hidden'
            >
              <span className='overflow-hidden'>{sloganPartOne}</span>
              <span className='hidden lg:inline-block'>&#8194;</span>
              <span className='overflow-hidden flex justify-start'>
                {sloganPartTwo}
                <span
                  className='overflow-hidden text-primary'
                  ref={sloganPointRef}
                >
                  .
                </span>
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
