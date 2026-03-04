import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPersonLinesFill } from 'react-icons/bs';

const SocioLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: 'https://linkedin.com/in/arshiya--',
      style: 'rounded-tr-2xl',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={25} />
        </>
      ),
      href: 'https://github.com/arshiya4220',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={25} />
        </>
      ),
      href: 'mailto:arshiyaarshu775@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsPersonLinesFill size={25} />
        </>
      ),
      href: './Arshiya.pdf',
      style: 'rounded-br-2xl',
      downloaded: true,
    },
  ];

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed z-50'>
      <ul>
        {links.map(({ id, child, href, style, downloaded }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-12 px-4 ml-[-110px] hover:ml-[-10px] hover:rounded-r-full duration-500 bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 " +
              style
            }
          >
            <a
              href={href}
              className='flex justify-between items-center w-full text-slate-300 hover:text-cyan-400 font-bold text-sm tracking-widest transition-colors duration-300'
              download={downloaded}
              target='_blank'
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocioLinks;