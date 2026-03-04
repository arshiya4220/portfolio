import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full py-24 bg-black text-white relative overflow-hidden'>
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[120px] -z-10"></div>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            
            {/* Header Area */}
            <div className='pb-12'>
                <p className='text-4xl md:text-6xl font-bold inline border-b-4 border-cyan-500 tracking-tighter'>
                    About
                </p>
                <p className='py-6 text-slate-400 text-lg md:text-xl font-light italic'>
                    Architecting the future with <span className='text-white font-medium'>clean code</span> and <span className='text-cyan-400 font-medium'>AI-driven logic</span>.
                </p>
            </div>

            {/* Main Content Grid */}
            <div className='grid md:grid-cols-3 gap-12'>
                
                {/* Left Column: The "Who I Am" */}
                <div className='md:col-span-2 space-y-6'>
                    <p className='text-lg md:text-xl leading-relaxed text-slate-200'>
                        Hello! I’m a <span className="text-cyan-400 font-semibold underline decoration-cyan-500/30 underline-offset-8">Full Stack Developer</span> with over 2 years of experience building modern web applications using <span className='text-white'>React, Next.js, Node.js, and MongoDB</span>. 
                    </p>
                    
                    <p className='text-slate-400 leading-relaxed text-base md:text-lg'>
                        In my professional work, I have contributed to <span className='text-white font-medium'>AI-driven platforms</span>, developing features that convert user prompts into dynamic website content. I have experience building server-side rendered applications and designing scalable REST APIs that focus on performance and reliability.
                    </p>

                    <p className='text-slate-400 leading-relaxed text-base md:text-lg'>
                        I focus on writing <span className='italic'>clean, maintainable code</span> and building reusable components that work seamlessly across devices. I’m particularly interested in modern full-stack architecture and building systems that scale efficiently.
                    </p>
                </div>

                {/* Right Column: "The Pillars" (Stats/Focus) */}
                <div className='flex flex-col gap-4'>
                    <div className='bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-cyan-500/50 transition-colors'>
                        <h3 className='text-cyan-400 font-bold uppercase tracking-widest text-xs mb-2'>Core Focus</h3>
                        <p className='text-sm text-slate-300'>AI Integration & Prompt Engineering</p>
                    </div>
                    
                    <div className='bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-cyan-500/50 transition-colors'>
                        <h3 className='text-cyan-400 font-bold uppercase tracking-widest text-xs mb-2'>Architecture</h3>
                        <p className='text-sm text-slate-300'>Next.js SSR & Scalable REST APIs</p>
                    </div>

                    <div className='bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-cyan-500/50 transition-colors'>
                        <h3 className='text-cyan-400 font-bold uppercase tracking-widest text-xs mb-2'>Philosophy</h3>
                        <p className='text-sm text-slate-300'>Performance, Reliability, Clean Code</p>
                    </div>
                </div>

            </div>

            {/* Bottom Callout */}
            <div className='mt-16 p-8 rounded-3xl bg-gradient-to-r from-cyan-900/20 to-transparent border-l-4 border-cyan-500'>
                <p className='text-slate-300 text-lg'>
                    "I’m always excited to collaborate with teams and work on products that <span className='text-white font-bold'>solve real-world problems</span>."
                </p>
            </div>
        </div>
    </div>
  )
}

export default About