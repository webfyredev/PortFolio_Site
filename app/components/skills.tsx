"use client";

import { FaDatabase, FaReact, FaToolbox, FaTools } from "react-icons/fa";
import { scrollUpDelayEffects, scrollUpEffects } from "../animations/animate";
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer";
export default function Skills(){
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2 
    });
    const skillsets = [
        {
            title : "Backend",
            icon : FaDatabase,
            border : "border-1 border-[#00D4FF]/20",
            icon_style : "bg-[#00D4FF1A] text-[#00D4FF] border-1 border-[#00D4FF33]",
            progress_bar : "linear-gradient(90deg,rgba(0,212,255,0.50),#00D4FF)",
            card_cover : "bg-[linear-gradient(to_bottom_right,rgba(0,212,255,0.10),rgba(0,212,255,0.05))]",
            skills : [{name : "Python", percent : 90}, {name : "Django", percent : 85}, {name : "Django REST Framework", percent : 82}, {name : "PostgreSQL", percent : 78}, {name : "API Design", percent : 88}],
            card_hover: "hover:bg-[#00D4FF1A]"
        },
        {
            title : "Frontend",
            icon : FaReact,
            border : "border-1 border-[#8B5CF6]/20",
            icon_style : "bg-[#8B5CF61A] text-[#8B5CF6] border-1 border-[#8B5CF633]",
            progress_bar : "linear-gradient(90deg, rgba(139,92,246,0.50), #8B5CF6)",
            card_cover : "bg-[linear-gradient(to_bottom_right, rgba(139,92,246,0.10), rgba(139,92,246,0.05))]",
            skills : [{name : "React", percent : 92}, {name : "Next.js", percent : 85}, {name : 'TypeScript', percent : 88}, {name : "JavaScript", percent : 95}, {name : "Tailwind CSS", percent: 90}, {name : "HTML/CSS", percent: 95}],
            card_hover : "hover:bg-[#8B5CF61A]"
        },
        {

            title : "Tools & DevOps",
            icon : FaTools,
            border : "border-1 border-[#F59E0B]/20",
            icon_style : "bg-[#F59E0B1A] text-[#F59E0B] border-1 border-[#F59E0B33]",
            progress_bar : "linear-gradient(90deg, rgba(245,158,11,0.50), #F59E0B)",
            card_cover : "bg-[linear-gradient(to_bottom_right, rgba(245,158,11,0.10), rgba(245,158,11,0.05))]",
            skills : [{name : "Git", percent : 88}, {name : "Github", percent : 90}, {name : "Vercel", percent : 85}, {name : "Render", percent: 80}, {name: "Postman", percent: 85}, {name : "Docker", percent : 65}],
            card_hover : "hover:bg-[#F59E0B1A]"
        }
    ]
    return(
        <>
            <div ref={ref} className="w-full flex flex-col items-center mt-10 p-3 md:p-5" id="skills">
                <motion.div 
                    {...scrollUpEffects}
                    className="w-auto flex space-x-2 bg-[#FFFFFF0D] border-1 border-[#FFFFFF1A] py-1.5 px-2.5 items-center text-[#A1A1AA] text-[13px] rounded-full">
                    <FaToolbox className="text-[#00D4FF] mr-1.5"/>
                    My Toolkit
                </motion.div>
                <motion.h3 
                    {...scrollUpEffects}
                    
                    className="font-bold mt-3 text-3xl md:text-4xl font-bold text-white">Technologies I <span className="bg-[linear-gradient(135deg,#00D4FF,#8B5CF6)] bg-clip-text text-transparent">Master</span></motion.h3>
                <motion.p 
                    {...scrollUpEffects}
                    
                    className="w-full md:w-[80%] lg:w-[45%] text-center mt-5 text-sm md:text-base text-[#A1A1AA]">A curated set of tools and technologies I use to bring ideas to life from frontend interfaces to backend systems.</motion.p>
                <motion.div 
                    {...scrollUpDelayEffects}
                    className="w-full mt-5 py-5 px-3 lg:px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {skillsets.map((data, index) => (
                        <div key={index} className={`w-full flex flex-col p-5 ${data.border} rounded-xl ${data.card_cover} ${data.card_hover} transition-all duration-200`}>
                            <div className="flex space-x-3 items-center">
                                <span className={`w-11 h-11 rounded-xl flex items-center justify-center ${data.icon_style}`}>
                                    <data.icon/>
                                </span>
                                <h3 className="text-md font-bold text-[#FFFFFF]">{data.title}</h3>
                            </div>
                            <div className="flex flex-col space-y-4 mt-5">
                                {data.skills.map((skill, i) => (
                                    <div key={i} className="w-full flex flex-col space-y-1.5">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-semibold text-[#D4D4D8] text-sm">{skill.name}</h3>
                                            <p className="text-[#71717A] text-[11px]">{skill.percent}%</p>
                                        </div>
                                        <div className="relative w-full h-2 rounded-full bg-[#FFFFFF0D]">
                                            <div className={`absolute h-full ${data.progress_bar} rounded-full`}  style={{ width: inView ? `${skill.percent}%` : "0%", background: data.progress_bar, transition: `width 1.5s ease-in-out ${i * 0.2}s`, }}>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </motion.div>
            </div>
        </>
    )
}