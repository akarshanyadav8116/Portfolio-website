import { IoLogoGithub, IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
  <>
    <footer className="h-1/6 w-full flex justify-center items-center bg-slate-900 pt-10 pb-5 gap-5">
        <div className="flex flex-col h-full w-1/4 font-normal text-lg justify-start items-start">
            Links
            <ul className="flex flex-col text-sm font-normal font-josefin_sans text-gray-400 gap-1">
                <a href="#home"><li className="hover:text-cyan-400">Home</li></a>
                <a href="#about"><li className="hover:text-cyan-400">About Me</li></a>
                <a href="#skills"><li className="hover:text-cyan-400">Skills</li></a>
                <a href="#projects"><li className="hover:text-cyan-400">Projects</li></a>
                <a href="../assets/My Resume.pdf" download="My Resume 2.pdf"><li className="hover:text-cyan-400">Resume</li></a>
            </ul>
        </div>
        <div className="flex flex-col h-full w-1/3 gap-10">
            <div className="h-1/3 flex flex-col text-center text-base font-extralight hover:text-cyan-400">
                &copy;Akarshan Yadav. All rights reserved
            </div>
            <div className="h-1/3 w-full justify-center items-center flex text-lg">
                <ul className="flex gap-5">
                    <a href="https://github.com/akarshanyadav8116?tab=repositories"><li className="hover:text-cyan-400"><IoLogoGithub className="size-6"/></li></a>
                    <a href="https://github.com/akarshanyadav8116?tab=repositories"><li className="hover:text-cyan-400"><FaLinkedin className="size-6"/></li></a>
                    <a href="https://www.instagram.com/akarshan_86/"><li className="hover:text-cyan-400"><IoLogoInstagram className="size-6"/></li></a>
                </ul>
            </div>
            <div className="flex h-1/3 w-full justify-center items-center text-center text-sm lg:text-base md:text-base sm:text-sm font-normal hover:text-cyan-400">
                Let`s create something together🧑‍💻
        </div>
        </div>
        <div className="h-full w-1/4 flex flex-col justify-end items-end">
            <ul className="group flex flex-col font-qwitcher_grypen text-xl lg:text-4xl md:text-4xl sm:text-2xl">
                <li className="group-hover:text-cyan-400">Thanks</li>
                <li className="group-hover:text-cyan-400">for visiting !</li>
            </ul>
        </div>
    </footer>
  </>
  );
};

export default Footer;
