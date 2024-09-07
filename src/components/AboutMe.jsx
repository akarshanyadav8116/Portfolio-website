/* eslint-disable react/prop-types */
import AboutMeCard from "./AboutMeCard";
const AboutMe = ({visible, myref}) => {
  return (
    <>
        <div id="aboutMe" ref={(el) => (myref.current[0] = el)} className={`flex flex-col h-1/6 w-full justify-center items-center text-6xl gap-10 transition-opacity ${visible ? 'opacity-100' : 'opacity-0'} duration-1000`}>
            <div className={`border-b-2 border-cyan-400`}>About Me</div>
            <AboutMeCard/>
        </div>
    </>
  );
};

export default AboutMe;
