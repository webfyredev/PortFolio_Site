"use client";

import { FaFile, FaGithub } from "react-icons/fa";
import { motion} from 'framer-motion'
import { FiExternalLink } from "react-icons/fi";
import { buttonHoverEffects, scrollUpDelayEffects, scrollUpEffects } from "../animations/animate";

export default function Projects(){
    const projects = [
        {
            image : '/pj1.jpg',
            stack : 'Full Stack',
            title : 'LifeCare - Modern Hospital Websites',
            sub_title : 'A modern, user-friendly hospital website designed to streamline healthcare access and information.',
            tool : ['React', 'TailwindCSS', 'Django', 'Framer-Motion', 'DRF'],
            github_link : 'https://github.com/webfyredev/LifeCare_Websites',
            live_link : 'https://life-care-websites.vercel.app/'
        },
        {
            image : '/pj2.jpg',
            stack : 'Full Stack',
            title : 'HopeBloom Africa - NGO Websites',
            sub_title : 'A fully responsive NGO platform focused on community development, featuring programs, impact metrics, stories, and seamless user engagement.',
            tool : ['React', 'TailwindCSS', 'Django', 'Framer-Motion', 'DRF'],
            github_link : 'https://github.com/webfyredev/Aurelium_University',
            live_link : 'https://hopebloomafrica.vercel.app/'
        },
        {
            image : '/pj3.jpg',
            stack : 'Frontend',
            title : 'Aurelium - School System Websites',
            sub_title : 'A comprehensive university platform for showcasing school academic system, academic resources, and campus activities.',
            tool : ['Next.js', 'TailwindCSS'],
            github_link : 'https://github.com/webfyredev/Aurelium_University',
            live_link : 'https://aurelium-university.vercel.app/',
        },
        {
            image : '/pj4.jpg',
            stack : 'Full Stack',
            title : 'SwiftEase - Logistics websites',
            sub_title : 'A modern logistics platform with real-time tracking, secure delivery systems, and a clean, responsive UI.',
            tool : ['React', 'TailwindCSS', 'Django', 'Framer-Motion', 'DRF'],
            github_link : 'https://github.com/webfyredev/SwiftEase',
            live_link : 'https://swift-ease.vercel.app/'
        },
        {
            image : '/pj5.jpg',
            stack : 'Frontend',
            title : 'Structura - Construction Websites',
            sub_title : 'A modern construction platform showcasing services, projects, and seamless client engagement.',
            tool : ['React', 'TailwindCSS', 'Django', 'Framer-Motion', 'DRF'],
            github_link : 'https://github.com/webfyredev/Structural_Construction',
            live_link : 'https://structural-construction.vercel.app/',
        },
        {
            image : '/pj6.jpg',
            stack : 'Frontend',
            title : 'Shyn Works - Cleaning Agency',
            sub_title : 'A cleaning websites that offers all forms of cleaning services to the peak of the views interest.',
            tool : ['React', 'TailwindCSS'],
            github_link : 'https://github.com/webfyredev/ShynWorks',
            live_link : 'https://shyn-works.vercel.app/',
        },
        {
            image : '/pj7.png',
            stack : 'Frontend',
            title : 'Fitness Websites (GYM)',
            sub_title  : 'A modern and responsive fitness website designed for gyms and personal trainers',
            tool : ['Next.js', 'TailwindCSS'],
            github_link : 'https://github.com/webfyredev/IronCore_Fitness',
            live_link : 'https://iron-core-fitness-two.vercel.app/'
        }
        
    ]
    return(
        <>
            <div className="w-full flex flex-col items-center mt-15 p-3 lg:p-5" id="projects">
                <motion.div 
                    {...scrollUpEffects}
                    className="w-auto flex space-x-2 bg-[#FFFFFF0D] border-1 border-[#FFFFFF1A] py-1.5 px-2.5 items-center text-[#A1A1AA] text-[13px] rounded-full">
                    <FaFile className="text-[#00D4FF] mr-1.5"/>
                    Portfolio
                </motion.div>
                <motion.h3 
                    {...scrollUpEffects}
                    className="font-bold mt-3 text-4xl font-bold text-white">Featured <span className="bg-[linear-gradient(135deg,#00D4FF,#8B5CF6)] bg-clip-text text-transparent">Projects</span></motion.h3>
                <motion.p 
                    {...scrollUpEffects}
                    className="w-full md:w-[80%] lg:w-[45%] text-center mt-5 text-sm md:text-base text-[#A1A1AA]">A selection of projects that showcase my skills in building end-to-end web applications, from concept to deployment.</motion.p>
                <motion.div 
                    {...scrollUpDelayEffects}
                    className="w-full py-5 px-3 lg:px-8 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((data, index) => (
                        <motion.div key={index} 
                            initial="initial"
                            whileHover="hover"
                            className="cursor-pointer border-1 border-[#FFFFFF0D] hover:border-[#FFFFFF26] flex flex-col rounded-xl overflow-hidden bg-[#FFFFFF0D] group relative">
                            <img src={data.image} alt={data.title}  className="w-full h-50 object-cover rounded-t-xl group-hover:scale-105 transition-all duration-300 overflow-hidden"/>
                            <p className="absolute top-0 left-5 top-5 px-4 py-1 text-[10px] rounded-full text-[#FFFFFF] bg-[#00D4FF] to-[#8B5CF6]">{data.stack}</p>
                            <motion.div 
                                variants={{ initial: { opacity: 0.3 }, hover: { opacity: 0.8 } }}
                            className="w-full h-51.5 absolute inset-0 bg-[linear-gradient(to_top,#0A0A0F,rgba(10,10,15,0.6),transparent)]" />
                            <motion.div 
                                variants={{
                                    initial: { y: 40, opacity: 0 },
                                    hover: { y: 0, opacity: 1 },
                                }}
                                transition={{ duration: 0.3, delay: 0.1 }}

                                className="w-full absolute p-5 top-[30%] md:top-[35%] flex space-x-5 items-center justify-center">
                                <motion.a
                                    {...buttonHoverEffects}
                                    href={data.live_link}
                                    className="flex items-center px-8 py-2 rounded-full text-[12px] font-semibold bg-white hover:bg-[#00D4FF] hover:text-white transition-all"
                                >
                                    <FiExternalLink  className="mr-1.5"/>
                                    Live Demo
                                </motion.a>
                                <motion.a
                                    {...buttonHoverEffects} 
                                href={data.github_link}
                                className="flex items-center px-8 py-2 rounded-full text-[12px] font-semibold bg-[#FFFFFF0D] text-[#D4D4D8] border-1 border-[#FFFFFF1A]"
                                >
                                    <FaGithub  className="mr-1.5"/>
                                    Github
                                </motion.a>
                            </motion.div>
                            <div className="flex flex-col items-left p-3 rounded-bb-xl">
                                <h3 className="text-sm mt-3 font-bold text-[#FFFFFF] group-hover:text-[#00D4FF] transition-all">
                                    {data.title}
                                </h3>
                                <p className="text-[#A1A1AA] text-[12px] mt-2">{data.sub_title}</p>
                                <div className="mt-5 w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 overflow-hidden">
                                    {data.tool.map((tool, index) => (
                                        <p key={index} className="text-[#D4D4D8] text-[10px] p-1.5 flex items-center justify-center bg-[#FFFFFF0D] border-1 border-[#FFFFFF1A] rounded-lg hover:font-medium transition-all duration-300">{tool}</p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    )
}