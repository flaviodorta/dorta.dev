'use client';

import ReactDOM from 'react-dom';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';
import ModalProps from '@/interfaces/modal.type';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { LuExternalLink } from 'react-icons/lu';
import Tag from './tag';
import Divider from './divider';
import { useEffect, useRef } from 'react';

const Modal = ({
  isOpen,
  projectLink,
  setIsOpen,
  imgSrc,
  description,
  title,
  githubLink,
  techTags,
}: ModalProps) => {
  const body = useRef<HTMLBodyElement | null>(null!);

  // const body = document.querySelector('body');

  useEffect(() => {
    if (document) body.current = document.querySelector('body');
  }, []);

  if (body.current) {
    if (isOpen) {
      body.current.style.overflowY = 'hidden';
    } else {
      body.current.style.overflowY = 'scroll';
    }
  }

  const content = (
    <div
      onClick={() => setIsOpen(false)}
      className='fixed overflow-y-scroll backdrop-blur-sm cursor-pointer bg-black/30 flex justify-center top-0 left-0 right-0 bottom-0 z-[100000] w-screen h-screen'
    >
      <button className='text-white bg-none border-none text-2xl absolute top-5 right-5 cursor-pointer'>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className='cursor-auto relative overflow-hidden 2xl:top-[5%] w-full max-w-[700px] h-fit bg-black-mate shadow-lg rounded-2xl'
      >
        <Image
          width={1000}
          height={300}
          layout='responsive'
          src={imgSrc}
          alt='project'
        />
        <div className='p-7 flex flex-col gap-8'>
          <div className='flex gap-4 justify-between items-center'>
            <h3 className='text-white text-3xl font-bold'>{title}</h3>

            <Divider />
            <div className='flex gap-4'>
              <a href={githubLink}>
                <FaGithub className='icon-project-card' />
              </a>
              <a href={projectLink}>
                <LuExternalLink className='icon-project-card' />
              </a>
            </div>
          </div>

          <div className='flex flex-wrap gap-2'>
            {techTags.map((tag, idx) => (
              <Tag key={idx} title={tag} />
            ))}
          </div>

          {description}
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById('root'));
};

export default Modal;
