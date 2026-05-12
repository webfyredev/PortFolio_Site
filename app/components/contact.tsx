"use client";

import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarker, FaMapMarkerAlt } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { motion } from  'framer-motion'
import { buttonHoverEffects, scrollUpDelayEffects, scrollUpEffects } from "../animations/animate";

export default function Contacts(){
    const social = [
        {
            icon : FaGithub,
            link : 'https://github.com/webfyredev/'
        },
        {
            icon : FaLinkedin,
            link : 'https://www.linkedin.com/in/oyinlade-oyinloye-3159ba292'
        },
        {
            icon : SiX,
            link : 'https://x.com/oyinladedev'
        }
    ]
    return(
        <>
            <div className="w-full flex flex-col items-center mt-25 p-3 md:p-5" id="contacts">
                <motion.div 
                    {...scrollUpEffects}
                    className="w-auto flex space-x-2 bg-[#FFFFFF0D] border-1 border-[#FFFFFF1A] py-1.5 px-2.5 items-center text-[#A1A1AA] text-[13px] rounded-full">
                    <FaEnvelope className="text-[#00D4FF] mr-1.5"/>
                    Get In Touch
                </motion.div>
                <motion.h3 
                    {...scrollUpEffects}
                    className="font-bold mt-3 text-3xl text-center md:text-4xl font-bold text-white">Let's <span className="bg-[linear-gradient(135deg,#00D4FF,#8B5CF6)] bg-clip-text text-transparent">Build</span> Something Great</motion.h3>
                <motion.p 
                    {...scrollUpEffects}
                    className="w-full md:w-[80%] lg:w-[45%] text-center text-sm md:text-base mt-5 text-[#A1A1AA]">Have a project in mind or want to collaborate? I'm always open to discussing new opportunities and ideas.</motion.p>
                <div 
                    className="w-full py-5 px-3 md:px-8 flex flex-col lg:flex lg:flex-row mt-8 lg:space-x-15 space-y-5 lg:space-y-0">
                    <motion.div 
                        {...scrollUpEffects}
                        className="w-full lg:w-1/2 p-4 md:p-7 rounded-xl bg-[#FFFFFF0D] border-1 border-[#FFFFFF1A] flex flex-col">
                        <h3 className="text-lg font-bold text-white">Work With Me</h3>
                        <p className="text-[15px] mt-1.5 text-[#A1A1AA]">I'm currently available for freelance projects and collaboration opportunities.</p>
                        <div className="flex space-x-4 mt-6">
                            <div className="w-11 h-11 rounded-lg text-[#00D4FF] flex items-center justify-center bg-[#00D4FF1A]">
                                <FaEnvelope  className="w-4 h-4"/>
                            </div>
                            <div className="flex flex-col space-y-0.5">
                                <p className="text-[#71717A] text-[12px]">Email</p>
                                <a href="mailto:oyinbook@gmail.com" className="font-normal hover:font-medium text-[#FFFFFF] hover:text-[#00D4FF] transition-all duration-300">oyinbook@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex space-x-4 mt-6">
                            <div className="w-11 h-11 rounded-lg text-[#8B5CF6] flex items-center justify-center bg-[#8B5CF61A]">
                                <FaMapMarkerAlt  className="w-4 h-4"/>
                            </div>
                            <div className="flex flex-col space-y-0.5">
                                <p className="text-[#71717A] text-[12px]">Location</p>
                                <h3 className="font-norma text-[#FFFFFF] transition-all duration-300">Nigeria</h3>
                            </div>
                        </div>
                        <div className="flex flex-col mt-6 mb-10 lg:mb-15">
                            <p className="text-[#71717A] text-[12px]">Conect on social</p>
                            <div className="py-2 mt-3 flex space-x-2.5">
                                {social.map((data, index) => (
                                    <a key={index} href={data.link} className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer bg-[#FFFFFF0D] hover:bg-[#FFFFFF1A] border-1 border-[#FFFFFF1A] transition-all duration-200 group">
                                        <data.icon  className="text-[#A1A1AA] group-hover:text-[#FFFFFF]"/>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.form 
                        {...scrollUpDelayEffects}
                        method="POST"
                        action = "https://formspree.io/f/movpgazy"
                        className="w-full lg:w-1/2 p-4 lg:p-7 rounded-xl bg-[#FFFFFF0D] border-1 border-[#FFFFFF1A] flex flex-col space-y-3.5">
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-[#71717A] text-[12px]">
                                Name
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="w-full h-11 border-1 border-[#FFFFFF1A] text-sm text-[#71717A] mt-1 rounded-lg px-2 bg-[#FFFFFF0D] focus:outline-none focus:ring-2 focus:ring-[#00D4FF33] focus:border-transparent required" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-[#71717A] text-[12px]">
                                Email
                            </label>
                            <input type="email" name="email" placeholder="your@gmail.com" className="w-full h-11 border-1 border-[#FFFFFF1A] text-sm text-[#71717A] mt-1 rounded-lg px-2 bg-[#FFFFFF0D] focus:outline-none focus:ring-2 focus:ring-[#00D4FF33] focus:border-transparent required" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-[#71717A] text-[12px]">
                                Message
                            </label>
                            <textarea name="message"  id="" placeholder="Tell me about your project..." className="w-full h-30 border-1 border-[#FFFFFF1A] text-sm text-[#71717A] mt-1 rounded-lg p-2 bg-[#FFFFFF0D] focus:outline-none focus:ring-2 focus:ring-[#00D4FF33] focus:border-transparent required"></textarea>
                            {/* <input type="email" placeholder="your@gmail.com" className="w-full h-11 border-1 border-[#FFFFFF1A] text-sm text-[#71717A] mt-1 rounded-lg px-2 bg-[#FFFFFF0D] focus:outline-none focus:ring-2 focus:ring-[#00D4FF33] focus:border-transparent" /> */}
                        </div>
                        <div className="w-full ">
                            <p className="text-[#71717A] text-[12px] text-end">Max 500 characters</p>
                        </div>
                        <motion.button
                            type="submit"
                            {...buttonHoverEffects}
                            className="text-sm font-medium w-full h-11 rounded-full cursor-pointer text-white mt-4 bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6]">
                            Send Message
                        </motion.button>
                    </motion.form>
                    
                </div>
            </div>  
        </>
    )
}