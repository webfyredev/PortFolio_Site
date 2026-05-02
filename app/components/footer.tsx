"use client";

import { a } from "framer-motion/client";
import { FaArrowUp, FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";

export default function Footer(){
    const social = [
        {
            icon : FaGithub,
            text : 'Github',
            link : 'https://github.com/webfyredev/'
        },
        {
            icon : FaLinkedin,
            text : 'LinkedIn',
            link : 'https://www.linkedin.com/in/oyinlade-oyinloye-3159ba292'
        },
        {
            icon : SiX,
            text : 'Twitter',
            link : 'https://x.com/oyinladedev'
        }
    ]
    const date = new Date().getFullYear();
    return(
        <>
            <footer className="w-full p-8 bg-[#0A0A0F] border-1 border-[#FFFFFF1A] flex flex-col lg:flex lg:flex-row items-center space-y-4 lg:space-y-0 lg:justify-between">
                <div className="flex space-x-2.5 px-4 items-center">
                    <span className="w-9 h-9 bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] text-white flex items-center justify-center rounded-xl">
                        <FaCode />
                    </span>
                    <p className="text-[#71717A] text-[13px]">&copy; {date} Oyinlade.All rights reserved.</p>

                </div>
                <div className="flex space-x-4">
                    {social.map((data, index) => (
                        <a key={index} href={data.link} className="text-[13px] flex items-center text-[#71717A] hover:text-[#FFFFFF] transition-all duration-200">
                            <data.icon  className=" mr-1"/>
                            {data.text}
                        </a>
                    ))}
                </div>
                <a href="#home" className="text-[#71717A] flex items-center text-[13px] hover:text-[#00D4FF] transition-all">Back to Top <FaArrowUp  className="w-3 h-3 ml-1 mr-6"/> </a>
            </footer>
        </>
    )
}