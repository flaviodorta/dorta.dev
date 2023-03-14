import Loader, { loader } from '@/components/canvas/Loader';
import { Html, Head, Main, NextScript } from 'next/document';
import { useRecoilState } from 'recoil';

const Document = () => {
  return (
    <Html lang='en'>
      <Head />
      <body id='root' className='overflow-x-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
