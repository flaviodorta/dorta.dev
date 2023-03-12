import { transition } from '@/recoil/atoms';
import gsap, { Power1 } from 'gsap';
import { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';

const Transition = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const tl = useRef<GSAPTimeline>();
  const isFirstRender = useRef(true);
  const isTransitioning = useRecoilValue(transition);

  useIsomorphicLayoutEffect(() => {
    console.log(isTransitioning, isFirstRender.current);
    if (!isFirstRender.current && isTransitioning) {
      const ctx = gsap.context(() => {
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
          .to('.block', {
            width: '0%',
            stagger: {
              amount: -0.75,
            },
            delay: 1.5,
            ease: Power1.easeInOut,
          });
      }, ref);

      return () => ctx.revert();
    }

    return () => {
      isFirstRender.current = false;
    };
  }, [isTransitioning]);

  return (
    <>
      {isTransitioning && (
        <div
          ref={ref}
          className='fixed -mt-[var(--layout-padding-xsm)] lg:-mt-[var(--layout-padding-lg)] w-screen h-screen z-[20]'
        >
          <div className='block block-1 bg-primary' />
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
