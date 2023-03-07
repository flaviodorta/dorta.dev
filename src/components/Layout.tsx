import React, { forwardRef, useLayoutEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { Lato, Maven_Pro } from '@next/font/google';
import { isDesktop } from 'react-device-detect';
import { useEventListener, useIsomorphicLayoutEffect } from 'usehooks-ts';
import gsap, { Elastic, Power4 } from 'gsap';

const lato = Maven_Pro({ subsets: ['latin'], weight: '400' });

export const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null!);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseFollower = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });

    gsap.to(ref.current, {
      duration: 1.6,
      x: e.clientX,
      y: e.clientY,
      ease: 'elastic.out(1.1, .44)',
    });
  };

  useEventListener('mousemove', mouseFollower);

  return (
    <div
      className={clsx([
        lato.className,
        'w-full z-50 h-screen overflow-x-hidden text-white p-[22px_28px] sm:p-[22px_48px] bg-black',
        className,
      ])}
    >
      {isDesktop && (
        <div
          ref={ref}
          className='pointer-events-none w-4 h-4 bg-none z-10 left-0 top-0 border-[1px] border-white rounded-[50px] absolute -translate-x-1/2 -translate-y-1/2 rotate-0'
        />
      )}
      {children}
    </div>
  );
};
