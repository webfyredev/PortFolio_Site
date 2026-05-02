"use client";

import { FaArrowDown, FaPaperPlane, FaPlaneArrival } from "react-icons/fa";
import { motion } from 'framer-motion'
import { buttonHoverEffects, scrollDownEffects, scrollLeftEffects, scrollUpDelayEffects, scrollUpEffects } from "../animations/animate";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
export default function HeroSection(){
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.8,
    });
    const leftbadge = "<";
    const rightbadge = "/>";
    const tech = [
        {
            title : 3,
            text : 'Years Coding'
        },
        {
            title : 15,
            text : 'Projects Built'
        },
        {
            title : 10,
            text : 'Tech Stack'
        }
    ];

    return(
        <>
            <div 
                ref={ref}
                className="mt-20 lg:mt-16 p-3 lg:p-5 w-full h-auto flex flex-col items-center justify-center bg-[#0A0A0F]" id="home">
                <div className="w-auto md:w-[75%] lg:w-[50%] flex flex-col items-center p-3 lg:p-5">
                    <motion.div 
                        {...scrollDownEffects}
                        className="w-[55%] md:w-[38%] lg:w-[35%] flex items-center space-x-3 bg-[#FFFFFF0D] border-1 border-[#FFFFFF1A] py-2 px-3 rounded-full ">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] mt-0.5"></span>
                        <p className="text-[12px] text-[#A1A1AA]"><span>{leftbadge}</span> Full Stack Developer <span>{rightbadge}</span></p>
                    </motion.div>
                    <motion.h2
                        {...scrollUpEffects}
                         className="font-bold text-white text-3xl md:text-5xl lg:text-6xl text-center mt-5 leading-tight">I Build <span className="bg-[linear-gradient(135deg,#00D4FF,#8B5CF6)] bg-clip-text text-transparent">Scalable</span> Systems & Modern Web Experiences</motion.h2>
                    <motion.p 
                        {...scrollUpDelayEffects}
                        className="w-[85%] text-[#A1A1AA] text-center mt-5 text-[11px] md:text-[15px] leading-relaxed">Full Stack Developer focused on building clean, scalable,and  user-friendly web applications that blend solid  backend  architecture with smooth, intuitive frontend experiences.</motion.p>
                    <div className="flex space-x-5 p-2 mt-5">
                        <motion.a
                            {...buttonHoverEffects  } 
                            {...scrollUpEffects}
                            href="#projects" className="flex px-5 md:px-6 outline-none py-2.5 rounded-full text-[13px] md:text-sm font-semibold bg-[#FFFFFF] text-[#0A0A0F] hover:bg-[#00D4FF] hover:text-[#FFFFFF] transition-all duration-300">View Projects <FaArrowDown  className="animate-bounce mt-1.5 ml-1.5 w-3 h-3"/></motion.a>
                        <motion.a
                            {...buttonHoverEffects} 
                            {...scrollUpDelayEffects}
                            href="#contacts" className="border-1 border-[#00D4FF] flex px-5 md:px-6 outline-none py-2.5 rounded-full text-[13px] md:text-sm font-semibold text-[#00D4FF] hover:bg-[#00D4FF]/10 transition-all duration-300">Contact Me <FaPaperPlane  className=" mt-1 ml-1.5 w-3 h-3"/></motion.a>
                    </div>
                    <motion.div 
                        {...scrollLeftEffects}
                        className="flex flex-row space-x-10 md:space-x-15 mt-8">
                        {tech.map((data, index) => (
                            <div key={index} className="flex flex-col space-y-2 text-center">
                                <h3 className="text-[#FFFFFF] text-2xl font-bold">
                                    {inView && (
                                    <CountUp 
                                        start={0} 
                                        end={data.title} 
                                        duration={2 + index * 0.3} 
                                    />
                                )}+
                                </h3>
                                <p className="text-[#71717A] text-center text-xs">{data.text}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>  
            </div>
        </>
    )
}