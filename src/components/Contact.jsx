import React from 'react'

const Contact = () => {
  return (
    /* Background: Transitioning to the final deep black footer */
    <div name="contact" className='w-full min-h-screen bg-black text-white pt-16 md:pt-24 pb-20'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        
        {/* Section Header */}
        <div className='pb-12 text-center md:text-left'>
          <p className='text-4xl md:text-6xl font-bold inline border-b-4 border-cyan-500 tracking-tighter'>
            Contact
          </p>
          <p className='py-6 text-slate-400 text-lg'>
            Submit the form below to <span className='text-cyan-400'>get in touch</span> with me
          </p>
        </div>

        {/* Form Container */}
        <div className='flex justify-center items-center'>
          <form 
            action='https://getform.io/f/nbvkvxpa' 
            method='POST' 
            className='flex flex-col gap-4 w-full md:w-7/12 bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-sm shadow-2xl shadow-cyan-900/10'
          >
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1">Full Name</label>
              <input 
                type='text'
                name='name'
                placeholder='Arshiya ...'
                className='p-4 bg-black/50 placeholder:text-gray-600 border border-white/10 rounded-2xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 text-white'
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1">Email Address</label>
              <input 
                type='email'
                name='email'
                placeholder='hello@example.com'
                className='p-4 bg-black/50 placeholder:text-gray-600 border border-white/10 rounded-2xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 text-white'
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest font-bold text-slate-500 ml-1">Message</label>
              <textarea
                name='message'
                rows='6'
                placeholder='How can I help you?'
                className='p-4 bg-black/50 placeholder:text-gray-600 border border-white/10 rounded-2xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 text-white resize-none'
              />
            </div>

            {/* Premium Button Style */}
            <button className='group mt-4 w-full md:w-fit px-10 py-4 flex items-center justify-center rounded-full bg-white text-black font-bold hover:bg-cyan-400 hover:scale-105 duration-300 transition-all shadow-lg shadow-white/5 hover:shadow-cyan-500/20'>
              Let's Talk
              <span className='ml-2 group-hover:translate-x-1 duration-300'>🚀</span>
            </button>
          </form>
        </div>

        {/* Floating background orb for visual balance */}
        <div className='absolute left-[-10%] bottom-[-10%] w-96 h-96 bg-cyan-900/20 blur-[150px] -z-10 rounded-full'></div>
      </div>
    </div>
  )
}

export default Contact