import { Layout } from '@/components/Layout';
import Transition from '@/components/Transition';
import { transition } from '@/recoil/atoms';
import '@/styles/globals.css';
import { Anton, Work_Sans } from '@next/font/google';
import clsx from 'clsx';
import type { AppProps } from 'next/app';
import { RecoilRoot, useRecoilValue } from 'recoil';

export const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
});

export const worksSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Layout>
        <Transition />
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
};

export default App;
