import { Layout } from '@/components/Layout';
import Transition from '@/components/Transition';
import '@/styles/globals.css';
import { Anton } from '@next/font/google';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

export const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
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
