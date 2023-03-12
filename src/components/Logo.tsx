import clsx from 'clsx';
import { anton } from '@/pages/_app';

const Logo = () => {
  return (
    <h1
      className={clsx([
        'uppercase tracking-wide flex items-center text-xl sm:text-4xl',
        anton.className,
      ])}
    >
      <span className='text-primary text-2xl sm:text-5xl'>{'{'}</span>Dorta
      <span className='text-primary'>{'.'}</span>dev
      <span className='text-primary text-2xl sm:text-5xl'>{'}'}</span>
    </h1>
  );
};

export default Logo;
