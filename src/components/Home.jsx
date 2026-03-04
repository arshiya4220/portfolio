import React from 'react'
import { FaAnglesRight } from "react-icons/fa6";
import heroImage from "../assets/redCoder.jpg";
import { Link } from "react-scroll"

const Home = () => {
  return (
    // Updated Background: Deep Midnight Gradient
    <div name="home" class="h-screen w-full bg-[linear-gradient(135deg,#0f172a_0%,#020617_50%,#000000_100%)]">
        
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center md:gap-16 h-full px-4 md:flex-row'>
            
            <div className='flex mt-[84px] md:mt-0 flex-col justify-center'>
                {/* Updated Text: Slate-50 (Titanium White) */}
                <h2 className='text-4xl sm:text-7xl font-bold text-slate-50 tracking-tighter'>
                    I'm a <span className="text-cyan-400">Full Stack Developer</span>
                </h2>
                
                {/* Updated Text: Slate-400 (Ghost Muted) */}
                <p className='text-slate-400 max-w-md py-4 text-lg leading-relaxed'>
                   Building modern web applications with React, Next.js, Node.js, and MongoDB.
Experienced in developing scalable systems and AI-powered digital platforms.    </p>

                <div>
                    {/* Updated Button: Solid White with Black Text for high contrast */}
                    <Link to='portfolio' smooth duration={500} className='group w-fit px-8 py-3 my-2 flex items-center rounded-full bg-white text-black font-bold hover:bg-cyan-400 transition-all duration-300 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <FaAnglesRight size={20} className='ml-2' />
                        </span>
                    </Link>
                </div>
            </div>

            <div className='mt-8 md:mt-0 relative'>
                {/* Added a subtle glow behind the image */}
                <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] rounded-full"></div>
                
                <img 
                    src={heroImage} 
                    alt='portfolio' 
                    className='relative z-10 rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 mx-auto w-2/3 md:w-full shadow-2xl shadow-cyan-500/10' 
                />
            </div>
        </div>
    </div>
  )
}

export default Home