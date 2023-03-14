import { anton } from '@/pages/_app';
import { homeAnimation, transition } from '@/recoil/atoms';
import { timeout } from '@/utils/help-functions';
import clsx from 'clsx';
import gsap, { Power1 } from 'gsap';
import { useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import Loader, { loader } from './canvas/Loader';

const t = gsap.timeline();

const Transition = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const tl = useRef<GSAPTimeline>();
  const ctx = useRef<ReturnType<typeof gsap.context>>();
  const isFirstRender = useRef(true);
  const [isIntroTransitioning, setIsIntroTransitioning] =
    useRecoilState(transition);
  const setIsHomeAnimating = useSetRecoilState(homeAnimation);
  const [isLoader, setIsLoader] = useRecoilState(loader);

  useIsomorphicLayoutEffect(() => {
    timeout(() => setIsLoader(true), 750);

    return () => setIsLoader(false);
  }, []);

  useIsomorphicLayoutEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isFirstRender.current && isIntroTransitioning) {
      ctx.current = gsap.context(() => {
        tl.current = gsap.timeline();

        tl.current
          .to('.block', {
            width: '5.1%',
            stagger: {
              amount: 0.75,
            },
            ease: Power1.easeInOut,
          })
          .to('.block', {
            transformOrigin: 'left',
          })
          .to(
            '.block',
            {
              width: '0%',
              stagger: {
                amount: -0.75,
              },
              ease: Power1.easeInOut,
            },
            '+=6'
          )
          .call(() => {
            setIsIntroTransitioning(false);
            setIsHomeAnimating(true);
            setIsLoader(false);
          });
      }, ref);
    }

    return () => {
      isFirstRender.current = false;

      clearTimeout(timer);

      if (ctx.current) {
        ctx.current.revert();
      }
    };
  }, [isIntroTransitioning]);

  return (
    <>
      {/* <div ref={ref} className='w-full h-full flex justify-center'>
        <h1
          id='logo'
          className={clsx([
            'uppercase relative bottom-20 tracking-wide flex items-center text-xl sm:text-4xl opacity-0',
            anton.className,
          ])}
        >
          <span className='text-primary text-2xl sm:text-5xl'>{'{'}</span>Dorta
          <span className='text-primary'>{'.'}</span>dev
          <span className='text-primary text-2xl sm:text-5xl'>{'}'}</span>
        </h1>
      </div> */}

      {isIntroTransitioning && (
        <div
          ref={ref}
          className='fixed -ml-[var(--layout-padding-xsm)] lg:-ml-[var(--layout-padding-lg)] -mt-[var(--layout-padding-xsm)] lg:-mt-[var(--layout-padding-lg)] w-screen h-screen z-[20]'
        >
          <div className='block block-1' />
          <div className='block block-2' />
          <div className='block block-3' />
          <div className='block block-4' />
          <div className='block block-5' />
          <div className='block block-6' />
          <div className='block block-7' />
          <div className='block block-8' />
          <div className='block block-9' />
          <div className='block block-10' />
          <div className='block block-11' />
          <div className='block block-12' />
          <div className='block block-13' />
          <div className='block block-14' />
          <div className='block block-15' />
          <div className='block block-16' />
          <div className='block block-17' />
          <div className='block block-18' />
          <div className='block block-19' />
          <div className='block block-20' />
        </div>
      )}
    </>
  );
};

export default Transition;
