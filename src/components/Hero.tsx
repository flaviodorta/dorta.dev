import React, { useRef } from 'react';
import gsap, { Power1, Power2 } from 'gsap';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import { twMerge } from 'tailwind-merge';
import { anton } from '@/pages/_app';
import { useRecoilValue } from 'recoil';
import { homeAnimation, homeTimeline } from '@/recoil/atoms';
import MagneticDiv from './MagneticDiv';

const Hero = () => {
  const mainRef = useRef<HTMLElement>(null!);
  const ctx = useRef<ReturnType<typeof gsap.context>>();
  const tl = useRecoilValue(homeTimeline);
  const isFirstRender = useRef(true);
  const isAnimating = useRecoilValue(homeAnimation);

  useIsomorphicLayoutEffect(() => {
    if (isAnimating) {
      ctx.current = gsap.context(() => {
        tl.current = gsap.timeline();

        gsap.to('.scroll', {
          yoyo: true,
          y: -24,
          duration: 1,
          repeat: -1,
          ease: Power2.easeInOut,
        });

        tl.current
          .to(
            '.slogan',
            {
              duration: 1.5,
              stagger: {
                amount: 0.1,
              },
              ease: Power1.easeInOut,
              top: 0,
            },
            '-=0.4'
          )
          .to('.scroll-container', {
            opacity: 1,
            ease: Power1.easeInOut,
            duration: 1,
          })
          .to('.scroll', {
            y: 10,
            yoyo: true,
            repeat: -1,
            ease: Power1.easeIn,
          });
      }, mainRef);
    }

    return () => {
      if (ctx.current) ctx.current.revert();
      isFirstRender.current = false;
    };
  }, [isAnimating]);

  return (
    <section
      ref={mainRef}
      className={twMerge([
        ' bottom-0 flex flex-col gap-8 justify-end bg-transparent',
        '',
      ])}
    >
      <div
        className={twMerge([
          'absolute -bottom-10 w-full bg-none bg-transparent flex flex-col items-center justify-between uppercase',
          'md:flex-row',
        ])}
      >
        <div
          className={twMerge([
            'bg-transparent flex flex-col justify-end mr-auto ml-0',
            anton.className,
          ])}
        >
          <div
            className={twMerge([
              'mr-auto ml-0 bg-transparent leading-none text-[15vw] overflow-hidden',
              'sm:text-[7vw]',
            ])}
          >
            <div className='slogan relative top-[400px] leading-none tracking-wide'>
              Creative
            </div>
          </div>

          <div
            className={twMerge([
              'mr-auto ml-0 bg-transparent leading-none text-[18vw] overflow-hidden',
              'lg:text-[14vw]',
            ])}
          >
            <div className='slogan relative top-[500px] leading-none tracking-wide'>
              Developer
              <span className='overflow-hidden text-primary' id='char2'>
                .
              </span>
            </div>
          </div>
        </div>

        <MagneticDiv
          scale={0.5}
          tollerance={0.3}
          speed={0.2}
          className='scroll-container relative group mt-10 p-10 w-fit mx-auto flex justify-center items-center opacity-0'
        >
          <a href='#about'>
            <div
              className={twMerge([
                'w-[35px] h-[64px] rounded-3xl border-4 border-gray-300 flex justify-center items-center p-2',
                'group-hover:animate-pulse group-hover:ease-in-out ease-in-out group-hover:duration-100 duration-100',
              ])}
            >
              <div
                className={twMerge(
                  'scroll relative top-[12px] w-3 h-3 rounded-full bg-gray-300',
                  'group-hover:bg-primary group-hover:animate-pulse'
                )}
              ></div>
            </div>
          </a>
        </MagneticDiv>
      </div>
    </section>
  );
};

export default Hero;
