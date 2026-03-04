import React from 'react'
import ShowOff from '../assets/Portfolio/ShowOff.png'
import AppleClone from '../assets/Portfolio/AppleClone.png'
import GrubblyClone from '../assets/Portfolio/GrubblyClone.png'
import Pwd from '../assets/Portfolio/pwd_mngr.png'


const Portfolio = () => {

  const portfolios = [
    {
      id:1,
      title: 'ShowOff',
      src:ShowOff,
      code:'https://github.com/arshiya4220/showoff',
      demo:'https://showofff.netlify.app'
    },
    {
      id:2,
      title: 'Grubbly Clone',
      src:GrubblyClone,
      code:'https://github.com/arshiya4220/grubbly',
      demo:'https://grubbly-clone.netlify.com'
    },
        {
      id:3,
      title: 'Password Manager',
      src:Pwd,
      code:'https://github.com/arshiya4220/Password-Manager',
      demo:'https://password-manager-sigma-roan.vercel.app/login'
    },
    {
      id:4,
      title: 'Apple UI Clone',
      src:AppleClone,
      code:'http://github.com/arshiya4220/apple',
      demo:'http://apple-clonnee.netlify.com'
    },  
  ] 

  return (
    /* Background: Pure Black to match the About section transition */
    <div name="portfolio" className='bg-black w-full text-white md:py-24 pt-16'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        
        <div className='pb-12'>
          <p className='text-4xl md:text-6xl font-bold inline border-b-4 border-cyan-500 tracking-tighter'>
            Projects
          </p>
          <p className='py-6 text-slate-400 text-lg'>
            Check out some of my <span className='text-cyan-400'>recent builds</span>
          </p>
        </div>
        
        {/* Project Grid */}
        <div  className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-12 px-4 sm:px-0'>
        {
          portfolios.map(({id, src, code, demo, title}) => (
            /* Modern Glass Card */
            <div key={id} className='group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 shadow-2xl shadow-black'>
              
              {/* Image Container with Zoom Effect */}
        {/* Replace your current img tag with this */}
<div className='overflow-hidden relative group'>
    <img 
        src={src} 
        alt={title} 
        className='duration-700 ease-in-out w-full h-64 object-cover
                   /* 1. The Blend Stage (Default) */
                   grayscale brightness-50 opacity-60 sepia-[.20] hue-rotate-[180deg]
                   
                   /* 2. The Reveal Stage (Hover) */
                   group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 
                   group-hover:sepia-0 group-hover:hue-rotate-0 group-hover:scale-110' 
    />
    
    {/* 3. The Cyan Overlay (Optional: adds a blue tint to the dark state) */}
    <div className='absolute inset-0 bg-cyan-900/10 group-hover:bg-transparent duration-700 pointer-events-none'></div>
</div>

              {/* Action Buttons */}
              <div className='flex items-center justify-between p-6 bg-[#0a0a0a]'>
                <h3 className='text-slate-300 font-medium hidden sm:block'>{title}</h3>
                <div className='flex gap-4 w-full sm:w-auto'>
                    <a 
                        href={demo} 
                        target="_blank" 
                        rel="noreferrer"
                        className='flex-1 sm:flex-none text-center px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-colors duration-300'
                    >
                        Demo
                    </a>
                    <a 
                        href={code} 
                        target="_blank" 
                        rel="noreferrer"
                        className='flex-1 sm:flex-none text-center px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors duration-300'
                    >
                        Code
                    </a>
                </div>
              </div>
            </div>
          ))
        }
       </div>

      </div>
    </div>
  )
}

export default Portfolio