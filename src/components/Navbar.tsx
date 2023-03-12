import React from 'react';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Logo from './Logo';
import MagneticDiv from './MagneticDiv';
import { RxTriangleUp } from 'react-icons/rx';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { worksSans } from '@/pages/_app';
import clsx from 'clsx';

const Navbar = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  const buttons = ['about', 'works', 'services', 'contact'];
  const { pathname, replace } = useRouter();
  const handleRedirect = (pathname: string) => replace(pathname);
  const refs = useRef<HTMLDivElement[]>([]);
  const navRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={navRef}
      className='relative h-[var(--navbar-height)] w-full flex items-center justify-between'
    >
      <div ref={logoRef}>
        <Logo />
      </div>

      <ul className='hidden md:flex gap-4 text-lg outline-none'>
        {buttons.map((button, i, arr) => (
          <Link key={button} href={button}>
            <MagneticDiv
              key={button}
              scale={1.43}
              tollerance={0.43}
              speed={0.3}
              onClick={() => handleRedirect(button)}
              className={twMerge([
                'group p-[30px_15px] uppercase relative flex items-center justify-center outline-none',
                i === arr.length - 1 && 'pr-0',
              ])}
            >
              <span
                className={clsx([
                  'uppercase tracking-wide outline-none',
                  // worksSans.className
                ])}
              >
                {button}
              </span>

              <MagneticDiv
                scale={9.1}
                tollerance={2.6}
                speed={0.1}
                onClick={() => handleRedirect(button)}
                className='absolute left-1/2 -translate-x-1/2 top-6 text-primary transition-all duration-150'
              >
                <RxTriangleUp className='group-hover:w-6 group-hover:h-6 w-0 h-0 ease-out z-40 transition-all duration-150' />
              </MagneticDiv>
            </MagneticDiv>
          </Link>
        ))}
      </ul>
    </div>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
