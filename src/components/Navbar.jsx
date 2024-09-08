import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiHackerrank} from "react-icons/si";
const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [showDropDown, setShowDropDown] = useState(false);
    const [showProfile, setshowProfile] = useState(false);
    const [loading, setLoading] = useState(false);
    let lastScrollTop = 0;
  
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop) {
        setShowNavbar(false);
        setShowDropDown(false);
        setshowProfile(false); // Hide on scroll down
      } else {
        setShowNavbar(true); // Show on scroll up
      }
      lastScrollTop = scrollTop;
    };
  
    useEffect(() => {
      // Set the initial state and disable scroll handling during loading
      setLoading(true);
      setShowNavbar(true);
      setShowDropDown(false);
      setshowProfile(false);
  
      const disableScrollHandling = () => {
        window.removeEventListener('scroll', handleScroll);
      };
  
      const enableScrollHandling = () => {
        window.addEventListener('scroll', handleScroll);
      };
  
      const timeoutID = setTimeout(() => {
        setLoading(false);
        setShowNavbar(true);
        enableScrollHandling();
      }, 1600);
  
      disableScrollHandling(); 
  
      return () => {
        clearTimeout(timeoutID);
        window.removeEventListener('scroll', handleScroll); 
      };
    }, []);

    const controlDropdown = () => {
      setShowDropDown(showDropDown^1);
      setshowProfile(0);
    }
  return <>
        <div className={`${showNavbar === true ? 'visible' : 'hidden'} fixed z-50 font-normal bg-slate-950 shadow-xl border-b-2 border-black w-screen py-4 ${loading === true ? 'animate-appear' : null}`}>
        <div className="flex flex-row-reverse lg:flex lg:flex-row md:flex sm:flex sm:flex-row px-8 lg:justify-around md:justify-between sm:justify-between justify-between items-center">
            <div className="flex justify-center"><div className="grid font-qwitcher_grypen font-bold text-4xl"><h1 className="block sm:hidden md:hidden lg:block ">Ak</h1></div></div>
                <ul className="hidden lg:flex md:flex sm:flex justify-around items-center gap-x-6 lg:gap-x-20 md:gap-x-14 sm:gap-x-10 text-lg">
                    <a href="#home"><li className="cursor-pointer hover:transition-transform hover:-translate-y-2 hover:border-cyan-400 hover:pb-1 hover:border-b-2 hover:duration-300 duration-300">Home</li></a>
                    <a href="#about"><li className="cursor-pointer hover:transition-transform hover:-translate-y-2 hover:border-cyan-400 hover:pb-1 hover:border-b-2 hover:duration-300 duration-300">About</li></a>
                    <a href="#skills"><li className="cursor-pointer hover:transition-transform hover:-translate-y-2 hover:border-cyan-400 hover:pb-1 hover:border-b-2 hover:duration-300 duration-300">Skills</li></a>
                    <a href="#projects"><li className="cursor-pointer hover:transition-transform hover:-translate-y-2 hover:border-cyan-400 hover:pb-1 hover:border-b-2 hover:duration-300 duration-300">Projects</li></a>
                    <a href="#contact"><li className="cursor-pointer hover:transition-transform hover:-translate-y-2 hover:border-cyan-400 hover:pb-1 hover:border-b-2 hover:duration-300 duration-300">Contact</li></a>
                </ul>
            <button onClick={() => {setshowProfile(showProfile^1)}}><div className={`hidden lg:flex md:flex sm:flex w-32 cursor-pointer text-lg rounded-3xl border-2 border-cyan-400 p-1 justify-center hover:bg-cyan-400 hover:transition-transform hover:-translate-y-2 hover:duration-500 duration-500`}><h1>My Profile</h1></div></button>
            <div className="block text-white lg:hidden md:hidden sm:hidden hover:text-cyan-400 hover:transition-transform hover:-translate-y-1 hover:duration-500 cursor-pointer duration-500" onClick={controlDropdown}><IoMenu/></div>
            </div>
        </div>
        {showProfile === 1 ?                                                               /*52 48*/
            <div className={`fixed size-48 bg-gray-800 z-50 top-60 ml-5 lg:right-8 lg:top-0 md:top-0 sm:top-0 sm:right-8 md:right-8 mt-16 rounded-xl py-5 px-8 lg:justify-around md:justify-between sm:justify-between items-center transition-transform duration-1000 ${showNavbar === true ? 'visible' : 'hidden'}`}>
              <ul className="flex flex-col text-lg gap-2">
                  <a className="flex justify-between" href="https://github.com/akarshanyadav8116?tab=repositories" target="_blank"><li className="flex mb-2 cursor-pointer hover:border-cyan-400 hover:border-b-2 gap-2"><IoLogoGithub />Github</li></a>
                  <a className="flex justify-between" href="https://www.linkedin.com/in/akarshan-yadav-632789228/" target="_blank"><li className="flex mb-2 cursor-pointer hover:border-cyan-400 hover:border-b-2 gap-2"><FaLinkedin/>Linkedin</li></a>
                  <a className="flex justify-between" href="https://leetcode.com/u/yadavakarshan8116/" target="_blank"><li className="flex mb-2 cursor-pointer hover:border-cyan-400 hover:border-b-2 gap-2"><SiLeetcode />Leetcode</li></a>
                  <a className="flex justify-between" href="https://www.hackerrank.com/profile/yadavakarshan433" target="_blank"><li className="flex mb-2 cursor-pointer hover:border-cyan-400 hover:border-b-2 gap-2"><SiHackerrank />Hackerrank</li></a>
              </ul>
            </div> :
          null}
        {showDropDown === 1 ? (
            <div className={`fixed bg-gray-800 z-50 left-5 mt-14 rounded-xl py-5 px-8 md:px-8 sm:px-8 lg:justify-around md:justify-between sm:justify-between items-center transition-transform duration-1000 ${showNavbar === true ? 'visible' : 'hidden'}`}>
                <ul className="block lg:hidden md:block sm:block gap-x-20 text-lg">
                    <a className="flex justify-start" href="#home"><li className="mb-2 cursor-pointer hover:border-cyan-400 hover:border-b-2">Home</li></a>
                    <a className="flex justify-start" href="#about"><li className="mb-2 cursor-pointer hover:border-cyan-400 hover:border-b-2">About Me</li></a>
                    <a className="flex justify-start" href="#skills"><li className="mb-2 cursor-pointer hover:border-cyan-400 hover:border-b-2">Skills</li></a>
                    <a className="flex justify-start" href="#projects"><li className="mb-2 cursor-pointer hover:border-cyan-400 hover:border-b-2">Projects</li></a>
                    <a className="flex justify-start" href="#contact"><li className="mb-3 cursor-pointer hover:border-cyan-400 hover:border-b-2">Contact Me</li></a>
                </ul>
              <button onClick={() => {setshowProfile(showProfile^1)}}><div className="block lg:hidden md:block sm:block w-32 cursor-pointer text-center text-lg rounded-3xl border-2 border-cyan-400 p-1 hover:bg-cyan-400 hover:transition-transform hover:-translate-y-2 hover:duration-500 duration-500"><h1>My Profile</h1></div></button>
            </div>) 
          : null}
    </>;
};

export default Navbar;
