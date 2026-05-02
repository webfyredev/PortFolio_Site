"use client";
import { FaCode } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { motion } from 'framer-motion'
import { scrollUpDelayEffects, scrollUpEffects } from "../animations/animate";

export default function About(){
    return(
        <>
            <div className="w-full p-3 md:p-5 mt-10 flex flex-col lg:flex lg:flex-row  lg:space-x-5" id="about">
                <div className="w-full lg:w-1/2 p-3 lg:p-5 flex flex-col justify-left">
                    <motion.div 
                        {...scrollUpEffects}
                        className="w-28 flex space-x-2 bg-[#FFFFFF0D] border-1 border-[#FFFFFF1A] py-1.5 px-2.5 items-center text-[#A1A1AA] text-[13px] rounded-full">
                        <LuUser className="text-[#00D4FF] mr-1.5"/>
                        About Me
                    </motion.div>
                    <motion.h3 
                        {...scrollUpEffects}
                        className=" mt-5 text-[22px] md:text-[33px] text-white font-bold leading-tight">Passionate Full Stack Developer. Building Modern Web Experiences. <br /> <span className="bg-[linear-gradient(135deg,#00D4FF,#8B5CF6)] bg-clip-text text-transparent">Problem Solver.</span></motion.h3>
                    <motion.div 
                        {...scrollUpDelayEffects}
                        className="flex flex-col w-full mt-5 space-y-2">
                        <p className="text-[#A1A1AA]">I started coding with a simple curiosity — "How do websites work?" That question led me down a path of discovery, from basic HTML pages to building full-stack applications that serve real users.</p>
                        <p className="text-[#A1A1AA]">Today, I specialize in creating end-to-end web solutions. On the frontend, I craft pixel-perfect, interactive interfaces using React, Next.js, and Tailwind CSS. On the backend, I build robust APIs and systems with Django, Python, and PostgreSQL.</p>
                        <p className="text-[#A1A1AA]">I believe great software is born at the intersection of clean code, thoughtful design, and genuine user empathy. Every project I build is a step toward mastering the craft of full-stack engineering.</p>
                    </motion.div>
                </div>
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <motion.div 
                        {...scrollUpDelayEffects}
                        className="w-[95%] lg:w-[80%] p-5 lg:p-8 rounded-2xl bg-[#FFFFFF0D] border-1 border-[#FFFFFF1A] flex flex-col justify-left relative">
                        <p className="text-[#71717A] font-normal text-[12px]">MY STORY</p>
                        <h3 className="text-[#FFFFFF] font-semibold text-lg mt-5">
                            "From writing my first HTML tag to architecting full-stack systems, every line of code taught me something new. The journey from curiosity to capability is what drives me every single day."
                        </h3>
                        <div className="flex space-x-3 mt-8 items-center">
                            <span className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-b from-[#00D4FF] to-[#8B5CF6]">
                                <FaCode  className="w-10 text-[#FFFFFF]"/>
                            </span>
                            <div className="flex flex-col space-y-1">
                                <h3 className="font-semibold text-[#FFFFFF] text-sm">OYINLOYE OYINLADE PHILEMON</h3>
                                <p className="text-[#71717A] font-normal text-[12px]">Full Stack Developer</p>
                            </div>
                        </div>
                        <div className="animate-bounce w-auto bg-[#FFFFFF0D] border-1 border-[#FFFFFF1A] absolute bottom-[-25px] left-[-25px] p-2 rounded-xl flex space-x-4">
                            <span className="w-9 h-9 bg-[#00D4FF1A] text-[#00D4FF] rounded-lg flex items-center justify-center">
                                <FiCode />
                            </span>
                            <div className="flex flex-col">
                                <p className="font-semibold text-white text-[12px]">Code Lover</p>
                                <p className="text-[#71717A] font-normal text-[10px]">1000+ commits</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}