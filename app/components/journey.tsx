"use client";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaCode, FaLaptop, FaReact, FaServer } from "react-icons/fa";
import { FaTimeline } from "react-icons/fa6";
import { motion } from 'framer-motion'
import { scrollUpDelayEffects, scrollUpEffects } from "../animations/animate";

export default function Journey(){
    const [active, setActive] = useState(0);
    
    const journey = [
        {
            tag : 'ACHIEVEMENT',
            year : '2026',
            title : 'Full Stack Development',
            sub_title : 'Advanced Projects  & Open Source',
            description : 'Built multiple production-ready full-stack applications using Django REST Framework and React. Contributed to open-source projects and developed a strong understanding of scalable architecture patterns, API design, and database optimization.',
            icon : FaCode
        },
        {
            tag : 'MILESTONE',
            year : '2025',
            title : 'Backend Engineering Focus',
            sub_title : 'Django & REST APIs',
            description : 'Deepened expertise in backend development with Django and Django REST Framework. Built robust APIs, implemented authentication systems with JWT, and learned database design with PostgreSQL. Started building real-world applications beyond tutorials.',
            icon : FaServer
        },
        {
            tag : 'MILESTONE',
            year : '2024',
            title : 'Frontend Mastery',
            sub_title : 'React, Next.js & TailwindCSS',
            description : 'Mastered modern frontend development with React, Next.js, TypeScript, and Tailwind CSS. Created responsive, interactive user interfaces with a focus on performance and accessibility. Built portfolio projects showcasing component architecture and state management.',
            icon : FaReact
        },
        {
            tag : 'BEGINNING',
            year : '2023',
            title : 'Journey Begins',
            sub_title : 'First Lines of Code',
            description : 'Started the programming journey with HTML, CSS, and JavaScript. Built simple static websites and explored the fundamentals of web development. Discovered a passion for creating things that live on the internet and solve real problems.',
            icon : FaLaptop
        }
    ];
    const handleNext = () => {
        setActive((prev) => (prev + 1) % journey.length);
    };
    const handlePrev = () => {
        setActive((prev) => (prev - 1 + journey.length) % journey.length);
    };
    return (
        <>
            <div className="w-full flex flex-col items-center mt-15 p-3 md:p-5" id="journey">
                <motion.div 
                    {...scrollUpEffects}
                    className="w-auto flex space-x-2 bg-[#FFFFFF0D] border-1 border-[#FFFFFF1A] py-1.5 px-2.5 items-center text-[#A1A1AA] text-[13px] rounded-full">
                    <FaTimeline className="text-[#00D4FF] mr-1.5"/>
                    Timeline
                </motion.div>
                <motion.h3 
                    {...scrollUpEffects}
                    className="font-bold mt-3 text-4xl font-bold text-white">My <span className="bg-[linear-gradient(135deg,#00D4FF,#8B5CF6)] bg-clip-text text-transparent">Journey</span></motion.h3>
                <motion.p 
                    {...scrollUpEffects}
                    className="w-full md:w-[80%] lg:w-[45%] text-center mt-5 text-sm md:text-base text-[#A1A1AA]">The path from my first line of code to building production-ready applications — every step shaped who I am as a developer.</motion.p>
                <div className="flex flex-col lg:flex lg:flex-row justify-between mt-10 w-full py-5 px-3 lg:px-8 lg:space-x-10 space-y-5 lg:space-y-0">
                    <motion.div 
                        {...scrollUpEffects}
                        className="w-full lg:w-[40%] flex flex-col gap-4 relative bg-[#FFFFFF0D] border-1 border-[#FFFFFF1A] px-5 py-7 rounded-xl">
                        {journey.map((data, index) => (
                            <div 
                                key={index}
                                onClick={() => setActive(index)}
                                className={`flex items-center gap-4 py-3 px-4  rounded-xl cursor-pointer transition-all ${active === index ? "bg-[#FFFFFF1A]" : "opacity-60 hover:opacity-100"}`}
                            >
                                <div className={`w-10 h-10 flex items-center justify-center rounded-lg
                                    ${active === index ? "bg-gradient-to-b from-[#00D4FF] to-[#8B5CF6] text-white" : "bg-[#FFFFFF0D] text-white"}
                                `}>
                                    <data.icon />
                                </div>
                                <div className="w-[85%] flex flex-col">
                                    <p className="text-sm text-white">{data.year}</p>
                                    <div className="w-full flex items-center justify-between">
                                        <p className="text-xs text-[#A1A1AA]">{data.title}</p>
                                        <span className={`w-1.5 h-1.5 rounded-full ${active === index ? "bg-[#00D4FF] " : "bg-[#00D4FF1A]"}`}></span>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </motion.div>
                    <motion.div 
                        {...scrollUpDelayEffects}
                        className="w-full lg:w-[55%] h-auto flex flex-col bg-[#FFFFFF0D] border-1 border-[#FFFFFF1A] px-5 py-7 rounded-xl">
                        <p className="text-[#A1A1AA] text-[11px] mt-2">{journey[active].tag}</p>
                        <h3 className="mt-3 font-bold text-white text-2xl">{journey[active].title}</h3>
                        <h3 className="mt-2.5 text-[#A1A1AA] text-[13px]">{journey[active].sub_title}</h3>
                        <h3 className="mt-5 text-white/80 text-md">{journey[active].description}</h3>
                        <div className="flex space-x-3 mt-8 items-center">
                            <div className="flex space-x-3">
                                <button 
                                    onClick={handlePrev}
                                    className="cursor-pointer w-10 h-10 border-1 border-[#A1A1AA]/50 rounded-full flex items-center justify-center">
                                    <FaArrowLeft className="w-3 h-3 text-[#A1A1AA]" />
                                </button>
                                <button 
                                    onClick={handleNext}
                                    className="bg-gradient-to-b from-[#00D4FF] to-[#8B5CF6] text-white cursor-pointer w-10 h-10 rounded-full flex items-center justify-center">
                                    <FaArrowRight className="w-3 h-3" />
                                </button>
                            </div>
                            <p className="text-[#A1A1AA] text-[11px] ml-2">{active + 1} / {journey.length}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}