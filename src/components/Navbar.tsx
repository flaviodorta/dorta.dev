import { useRouter } from 'next/router';
import { useRef } from 'react';
import Logo from './Logo';
import MagneticDiv from './MagneticDiv';
import { Anton } from '@next/font/google';
import clsx from 'clsx';
import { RxTriangleUp } from 'react-icons/rx';
import Link from 'next/link';

const anton = Anton({ subsets: ['latin'], weight: '400' });

const Navbar = () => {
  const buttons = ['home', 'services', 'contact'];
  const { pathname, replace } = useRouter();
  const handleRedirect = (pathname: string) => replace(pathname);
  const refs = useRef<HTMLDivElement[]>([]);
  console.log(refs);

  return (
    <div className='relative w-full flex items-center justify-between'>
      <Logo />

      <ul className='-mr-[26px] hidden md:flex gap-4 text-lg'>
        {buttons.map((button) => (
          <Link key={button} href={button}>
            <MagneticDiv
              key={button}
              scale={1.43}
              tollerance={0.43}
              speed={0.3}
              onClick={() => handleRedirect(button)}
              className={clsx([
                'group p-[32px_26px] uppercase relative flex items-center justify-center',
                // anton.className,
              ])}
            >
              <span className='uppercase tracking-wide'>{button}</span>
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
};

export default Navbar;
