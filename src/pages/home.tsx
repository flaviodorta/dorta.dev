import React from 'react';
import Image from 'next/image';
import { Layout } from '@/components/Layout';
import Navbar from '@/components/Navbar';

const Home = () => {
  const buttons = ['home', 'services', 'contact'];

  return (
    <Layout>
      <Navbar />

      <Image
        className='absolute right-[90px] top-52 -translate-x-1/2'
        src='/eu1.jpeg'
        width={400}
        height={600 / 16 / 9}
        alt='Flávio Dorta'
      />
    </Layout>
  );
};

export default Home;
