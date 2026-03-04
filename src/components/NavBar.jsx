import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi';
import { MdOutlineHome, MdRoundaboutLeft } from "react-icons/md";
import { GiHumanTarget, GiProgression } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-scroll"

const NavBar = () => {
  const [nav, setNav] = useState(false);
  
  const links = [
    { id: 1, link: "home", logo: <MdOutlineHome className='mx-auto' size={20}/> },
    { id: 2, link: "about", logo: <MdRoundaboutLeft className='mx-auto' size={20}/> },
    { id: 3, link: "portfolio", logo: <GiHumanTarget className='mx-auto' size={20}/> },
    { id: 4, link: "education", logo: <FaGraduationCap className='mx-auto' size={20}/> },
    { id: 5, link: "skills", logo: <GiProgression className='mx-auto' size={20}/> },
    { id: 6, link: "contact", logo: <FaPhone className='mx-auto' size={20}/> }
  ]

  return (
    /* Glassmorphism Effect: Semi-transparent black with blur */
    <div className='flex px-6 z-50 justify-between items-center w-full h-20 bg-black/40 backdrop-blur-md border-b border-white/10 fixed top-0'>
        
        <div>
            {/* Logo with Cyan Glow */}
            <h1 className='text-3xl md:text-4xl flex items-center gap-2 font-signature text-slate-50 hover:text-cyan-400 transition-colors duration-300 ml-2 cursor-pointer'>
                Arshiya <HiCode className="text-cyan-400" size={25}/>
            </h1>
        </div>

        {/* Desktop Links - Updated to Slate-400 for modern muted look */}
        <ul className='hidden md:flex'>
            {links.map(({ id, link, logo }) => (
                <li key={id} className='group flex flex-col items-center px-4 cursor-pointer capitalize font-medium text-slate-400 hover:text-white transition-all duration-300'>
                    <Link to={link} smooth duration={500} className="flex flex-col items-center">
                        <span className="group-hover:text-cyan-400 group-hover:-translate-y-1 transition-transform duration-300">
                            {logo}
                        </span>
                        <span className="text-[10px] tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            {link}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 md:hidden z-20 text-slate-400 hover:text-white transition-colors'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Full Screen Menu - Updated to Deep Midnight Gradient */}
        {nav && (
             <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#0f172a] via-[#020617] to-black text-slate-300'>
             {links.map(({ id, link }) => (
                       <li key={id} className='py-6 px-4 cursor-pointer capitalize text-4xl font-bold hover:text-cyan-400 transition-colors tracking-tighter'>
                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                       </li>
                 ))}
             </ul>
        )}
    </div>
  )
}

export default NavBar