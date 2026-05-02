"use client";
import { FaArrowRight, FaCode } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import { section } from "framer-motion/client";


export default function Navbar(){
    const [scrolled, setScrolled] = useState(false);
    const [Open, setOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    return(
        <>
            <nav className={`fixed w-full py-2 px-8 lg:px-15 flex justify-between items-center z-50 ${scrolled ? "bg-[#0A0A0F]/95 backdrop-blur-md shadow-md border-b-1 border-[#FFFFFF0D]" : "bg-[#0A0A0F]"}`}>
                <Link href="/" className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 border bg-gradient-to-b from-[#00D4FF] to-[#8B5CF6] rounded-lg flex items-center justify-center ">
                        <FaCode  className="w-10 text-[#FFFFFF]"/>
                    </div>
                    <h3 className="text-[#FFFFFF] font-semibold text-2xl group-hover:text-[#00D4FF] transition-all">Oyinlade</h3>
                </Link>
                <ul className="hidden lg:flex p-2 items-center space-x-2">
                    <li className="font-medium hover:font-semibold px-4 py-1.5 text-[13.5px] cursor-pointer transition-all duration-200 rounded-lg text-[#A1A1AA] hover:text-[#FFFFFF]">
                       <a href="#home">Home</a>
                    </li>
                    <li className="font-medium hover:font-semibold px-4 py-1.5 text-[13.5px] cursor-pointer transition-all duration-200 rounded-lg  text-[#A1A1AA] hover:text-[#FFFFFF]">
                       <a href="#about">About</a>
                    </li>
                    <li className="font-medium  hover:font-semibold px-4 py-1.5 text-[13.5px] cursor-pointer transition-all duration-200 rounded-lg text-[#A1A1AA] hover:text-[#FFFFFF]">
                       <a href="#skills">Skills</a>
                    </li>
                    <li className="font-medium  hover:font-semibold px-4 py-1.5 text-[13.5px] cursor-pointer transition-all duration-200 rounded-lg text-[#A1A1AA] hover:text-[#FFFFFF]">
                       <a href="#projects">Projects</a>
                    </li>
                    <li className="font-medium hover:font-semibold  px-4 py-1.5 text-[13.5px] cursor-pointer transition-all duration-200 rounded-lg  text-[#A1A1AA] hover:text-[#FFFFFF]">
                       <a href="#journey">Journey</a>
                    </li>
                    <li className="font-medium hover:font-semibold px-4 py-1.5 text-[13.5px] cursor-pointer transition-all duration-200 rounded-lg  text-[#A1A1AA] hover:text-[#FFFFFF]">
                       <a href="#contacts">Contact</a>
                    </li>
                </ul>
                <a href="#contacts" className="hidden lg:flex items-center border-none px-4 h-9.5 rounded-full cursor-pointer text-[13px] font-semibold bg-[#FFFFFF] hover:bg-[#00D4FF] text-[#0A0A0F] hover:text-[#FFFFFF] transition-all duration-200">
                    Hire Me <FaArrowRight  className="ml-2 w-3 h-3"/>
                </a>
                <button onClick={() => setOpen(!Open)}
                    className="flex flex-col justify-center items-center gap-1.5 lg:hidden cursor-pointer"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${Open ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${Open ? "opacity-0" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${Open ? "-rotate-45 -translate-y-2" : ""}`}></span>

                </button>
            </nav>
            <div className={`py-3 px-5 fixed z-50 lg:hidden top-14 left-0 w-full h-auto bg-[#0A0A0F]/95 backdrop-blur-lg flex flex-col space-y-2.5 transition-all duration-300 ${Open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <a href="#home" className="px-2 py-2.5 rounded-lg cusor-pointer text-[13px] text-[#A1A1AA] hover:text-[#FFFFFF]">Home</a>
                <a href="#about" className="px-2 py-2.5 rounded-lg cusor-pointer text-[13px] text-[#A1A1AA] hover:text-[#FFFFFF]">About</a>
                <a href="#skills" className="px-2 py-2.5 rounded-lg cusor-pointer text-[13px] text-[#A1A1AA] hover:text-[#FFFFFF]">Skills</a>
                <a href="#projects" className="px-2 py-2.5 rounded-lg cusor-pointer text-[13px] text-[#A1A1AA] hover:text-[#FFFFFF]">Projects</a>
                <a href="#journey" className="px-2 py-2.5 rounded-lg cusor-pointer text-[13px] text-[#A1A1AA] hover:text-[#FFFFFF]">Journey</a>
                <a href="#contacts" className="px-2 py-2.5 rounded-lg cusor-pointer text-[13px] text-[#A1A1AA] hover:text-[#FFFFFF]">Contact</a>
                <a href="#contacts" className="border-none flex items-center justify-center mt-5 py-3 text-[13px] font-semibold rounded-lg cursor-pointer bg-[#FFFFFF0D] text-white transition-all hover:bg-[#00D4FF]">
                    Hire Me <FaArrowRight  className="ml-2 w-3 h-3"/>
                </a>
            </div>
        </>
    )
}