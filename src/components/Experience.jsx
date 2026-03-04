import React from 'react'
import { HiCode, HiDatabase, HiTerminal, HiLightningBolt } from 'react-icons/hi';

const Experience = () => {

  const skillCategories = [
    {
      title: "Frontend",
      icon: <HiCode className="text-cyan-400" size={25} />,
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Ant Design", "React Native"]
    },
    {
      title: "Backend",
      icon: <HiLightningBolt className="text-blue-400" size={25} />,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "API Integration"]
    },
    {
      title: "Database",
      icon: <HiDatabase className="text-indigo-400" size={25} />,
      skills: ["MongoDB", "Schema Design", "Aggregation"]
    },
    {
      title: "DevOps",
      icon: <HiTerminal className="text-emerald-400" size={25} />,
      skills: ["Docker", "CI/CD", "Jenkins", "Vercel", "Render", "GitHub Actions"]
    },
    {
      title: "Architecture & Tools",
      icon: <HiCode className="text-purple-400" size={25} />,
      skills: ["Microservices", "AI Integrations", "Git", "GitHub"]
    }
  ]

  return (
    <div name="skills" className='pt-16 md:pt-24 bg-black w-full min-h-screen text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        
        <div className='pb-12'>
          <p className='text-cyan-400 text-sm md:text-md uppercase tracking-[0.3em] font-bold mb-2'>
            Technical Expertise
          </p>     
          <p className='text-4xl md:text-6xl font-bold inline border-b-4 border-cyan-500 tracking-tighter'>
            My Skills
          </p>
          <p className='py-6 text-slate-400 text-lg'>
            A comprehensive overview of my <span className='text-white font-medium'>Full Stack Ecosystem</span>
          </p>
        </div>

        {/* Skill Category Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skillCategories.map(({ title, icon, skills }, index) => (
            <div 
              key={index} 
              className='bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:border-cyan-500/30 transition-all duration-500 group'
            >
              <div className='flex items-center gap-4 mb-6'>
                <div className='p-3 bg-black rounded-2xl border border-white/10 group-hover:border-cyan-500/50 transition-colors'>
                  {icon}
                </div>
                <h3 className='text-2xl font-bold tracking-tight'>{title}</h3>
              </div>

              <div className='flex flex-wrap gap-3'>
                {skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className='px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 cursor-default'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Footnote */}
        <div className='mt-16 p-6 rounded-2xl border border-white/5 bg-gradient-to-r from-cyan-500/10 to-transparent italic text-slate-400 text-sm'>
           <span className='text-cyan-400 font-bold'>Latest Focus:</span> Currently exploring scalable microservices architecture, improving CI/CD workflows, and experimenting with AI-powered web applications.
        </div>

      </div>
    </div>
  )
}

export default Experience