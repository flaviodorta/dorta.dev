'use client';

import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SocialMediaIconType from '@/interfaces/social-media-icon.type';

const socialMediaIcons: SocialMediaIconType[] = [
  {
    icon: <FaWhatsapp className='social-icons' />,
    link: 'https://wa.me/5511976898505',
  },
  {
    icon: <FaLinkedin className='social-icons' />,
    link: 'https://www.linkedin.com/in/flavio-dorta-dev/',
  },
  {
    icon: <FaGithub className='social-icons' />,
    link: 'https://wwww.github.com/flaviodorta',
  },
];

const Header = () => {
  return (
    <header className='w-[calc(100%-60px)] fixed right-0 top-0 z-[100] px-6 lg:px-8 backdrop-blur h-24 flex items-center justify-between '>
      <div className='flex gap-6'>
        {socialMediaIcons.map((el, idx) => (
          <SocialMediaIcon key={idx} idx={idx} icon={el.icon} link={el.link} />
        ))}
      </div>

      <motion.button
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='rounded-lg p-4 font-normal cursor-pointer text-primary text-lg border-primary border-[1px]'
        onClick={() => window.open('/cv.pdf')}
      >
        My resume
      </motion.button>
    </header>
  );
};

const SocialMediaIcon = ({
  icon,
  link,
  idx,
}: SocialMediaIconType & {
  idx: number;
}) => {
  return (
    <motion.span
      key={idx}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: (idx + 1) * 0.15 }}
    >
      <Link href={link} target='_blank'>
        {icon}
      </Link>
    </motion.span>
  );
};

export default Header;
