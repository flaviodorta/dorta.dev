import { Anton } from '@next/font/google';
import clsx from 'clsx';

const anton = Anton({ subsets: ['latin'], weight: '400' });

const Logo = () => {
  return (
    <h1
      className={clsx([
        anton.className,
        'uppercase tracking-wide flex items-center text-xl sm:text-4xl',
      ])}
    >
      <span className='text-primary text-2xl sm:text-5xl'>{'{'}</span>Dorta
      <span className='text-primary'>{'.'}</span>dev
      <span className='text-primary text-2xl sm:text-5xl'>{'}'}</span>
    </h1>
  );
};

export default Logo;
