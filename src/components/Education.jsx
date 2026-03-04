import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { LuSchool } from "react-icons/lu";
import { TbSchool } from "react-icons/tb";
import { HiDesktopComputer, HiSortAscending, HiSortDescending, HiSparkles, HiLightBulb } from 'react-icons/hi';

const Education = () => {
    return (
        <div name="education" className='w-full pt-16 md:pt-24 bg-black text-white overflow-hidden'>
            <style>
                {`
                    .vertical-timeline::before { background: rgba(255, 255, 255, 0.1) !important; }
                    .vertical-timeline-element-date { color: #94a3b8 !important; font-weight: 600 !important; }
                    @media only screen and (min-width: 1170px) {
                        .vertical-timeline--two-columns .vertical-timeline-element-content .vertical-timeline-element-date {
                            left: 125% !important;
                        }
                    }
                `}
            </style>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                
                <div className='pb-12 text-center md:text-left'>
                    <p className='text-4xl md:text-6xl font-bold inline border-b-4 border-cyan-500 tracking-tighter'>
                        Roadmap
                    </p>
                    <p className='py-6 text-slate-400 text-lg'>
                        A timeline of my <span className='text-cyan-400'>professional growth</span> and academic foundation
                    </p>
                </div>

                <VerticalTimeline animate={true} lineColor='rgba(255, 255, 255, 0.1)'>
                    
                    {/* START */}
                    <VerticalTimelineElement
                        iconStyle={{ background: '#000', color: '#06b6d4', border: '2px solid #06b6d4', boxShadow: '0 0 15px rgba(6,182,212,0.2)' }}
                        icon={<HiSortDescending />}
                    />

                    {/* 1. CURRENT ROLE */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ 
                            background: 'linear-gradient(to right, rgba(6, 182, 212, 0.1), rgba(255, 255, 255, 0.03))', 
                            border: '1px solid rgba(6, 182, 212, 0.3)',
                            borderRadius: '24px',
                            backdropFilter: 'blur(10px)',
                        }}
                        contentArrowStyle={{ borderRight: '7px solid rgba(6, 182, 212, 0.3)' }}
                        date="2024 — PRESENT"
                        iconStyle={{ background: '#000', color: '#06b6d4', border: '2px solid #06b6d4', boxShadow: '0 0 20px rgba(6,182,212,0.4)' }}
                        icon={<HiSparkles />}
                    >
                        <div className="flex items-center gap-2 mb-1">
                            <span className="bg-cyan-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Current</span>
                            <h3 className="text-xl font-bold text-white">Full Stack Developer</h3>
                        </div>
                        <h4 className="text-cyan-400 text-sm font-medium mb-2 uppercase tracking-wider">Professional Experience</h4>
                        <p className="text-slate-400 text-sm">Building AI-driven platforms, designing dynamic content engines, and optimizing full-stack architectures.</p>
                    </VerticalTimelineElement>

                    {/* 2. COLLEGE */}
                    <VerticalTimelineElement
                        date="2020 — 2024"
                        contentStyle={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '24px' }}
                        iconStyle={{ background: '#000', color: '#06b6d4', border: '2px solid #06b6d4' }}
                        icon={<TbSchool />}
                    >
                        <h3 className="text-xl font-bold text-white">CS Engineering</h3>
                        <h4 className="text-slate-300 text-sm mb-2">Mohamed Sathak Engineering College</h4>
                        <p className="text-slate-400 text-sm">Graduated with <span className="text-white">9.0 CGPA</span>. Received the <span className="text-cyan-400 italic">Best Outgoing Student</span> Award.</p>
                    </VerticalTimelineElement>

                    {/* 3. INTERN */}
                    <VerticalTimelineElement
                        date="2023 (MAR - JUN)"
                        contentStyle={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '24px' }}
                        iconStyle={{ background: '#000', color: '#3b82f6', border: '2px solid #3b82f6' }}
                        icon={<HiDesktopComputer />}
                    >
                        <h3 className="text-xl font-bold text-white">Software Intern</h3>
                        <h4 className="text-blue-400 text-sm mb-2">Aroopa Tech Pvt Ltd</h4>
                        <p className="text-slate-400 text-sm">Gained hands-on experience in full-stack project development in the college incubation center.</p>
                    </VerticalTimelineElement>

                    {/* 4. AWARDS & SYMPOSIUMS */}
                    <VerticalTimelineElement
                        date="2022 — 2023"
                        contentStyle={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '24px' }}
                        iconStyle={{ background: '#000', color: '#06b6d4', border: '2px solid #06b6d4' }}
                        icon={<HiLightBulb />}
                    >
                        <h3 className="text-xl font-bold text-white">Winner / Runner</h3>
                        <h4 className="text-cyan-400 text-sm mb-2 uppercase">Agri-IOT & Symposiums</h4>
                        <p className="text-slate-400 text-sm">Won multiple presentation awards at Anna University and Syed Ammal Engineering College.</p>
                    </VerticalTimelineElement>

                    {/* 5. SCHOOLING - HSC */}
                    <VerticalTimelineElement
                        date="2019 — 2020"
                        contentStyle={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '24px' }}
                        iconStyle={{ background: '#000', color: '#94a3b8', border: '2px solid #94a3b8' }}
                        icon={<LuSchool />}
                    >
                        <h3 className="text-xl font-bold text-white">HSC (Higher Secondary)</h3>
                        <h4 className="text-slate-400 text-sm mb-2">Elite Matriculation School, Ervadi</h4>
                        <p className="text-slate-400 text-sm">Completed with <span className="text-white font-bold">87%</span>.</p>
                    </VerticalTimelineElement>

                    {/* 6. SCHOOLING - SSLC */}
                    <VerticalTimelineElement
                        date="2017 — 2018"
                        contentStyle={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '24px' }}
                        iconStyle={{ background: '#000', color: '#94a3b8', border: '2px solid #94a3b8' }}
                        icon={<LuSchool />}
                    >
                        <h3 className="text-xl font-bold text-white">SSLC</h3>
                        <h4 className="text-slate-400 text-sm mb-2">Elite Matriculation School, Ervadi</h4>
                        <p className="text-slate-400 text-sm">Completed with <span className="text-white font-bold">96%</span>.</p>
                    </VerticalTimelineElement>

                    {/* END */}
                    <VerticalTimelineElement
                        iconStyle={{ background: '#000', color: '#06b6d4', border: '2px solid #06b6d4', boxShadow: '0 0 15px rgba(6,182,212,0.2)' }}
                        icon={<HiSortAscending />}
                    />
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Education;