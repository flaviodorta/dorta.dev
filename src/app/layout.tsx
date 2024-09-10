import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import SidebarActiveProvider from '@/context/sidebar-active.context';
import SmoothScroll from '@/components/ui/smooth-scroll';

const poppins = Poppins({
  weight: ['200', '300', '700', '900'],
  preload: true,
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dorta Development',
  description: 'Freelancer Full Stack Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        id='root'
        className={cn([poppins.className, 'grid w-screen bg-black-mate'])}
      >
        <SidebarActiveProvider>
          <SmoothScroll>
            <Sidebar />
            {children}
          </SmoothScroll>
        </SidebarActiveProvider>
      </body>
    </html>
  );
}
