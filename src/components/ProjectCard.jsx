/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import {IoLogoGithub} from "react-icons/io"
const ProjectCard = ({project,techstack,url,alter,desc,link}) => {
  return (
    <>
        <div className="group flex flex-col size-5/6 lg:size-1/3 md:size-1/3 sm:size-5/6 p-5 border-2 border-cyan-400 rounded-3xl text-3xl font-normal gap-3 shadow-lg shadow-cyan-400 hover:border-indigo-500 hover:shadow-indigo-400 hover:shadow-xl hover:-translate-y-2 ease-in-out duration-500">
            {project}
            <ul className="flex flex-wrap font-light text-sm gap-3">
                {techstack.map((tech,index) => (
                    <li key={index} className="px-3 border-2 border-indigo-500 rounded-xl">{tech}</li>
                ))}
            </ul>
            <Tilt
                options={{
                max: 25, // Maximum tilt angle in degrees
                scale: 1.1, // Scale factor on hover
                speed: 1000, // Transition speed in milliseconds
                glare: true, // Enable glare effect
                'max-glare': 0.5, // Maximum intensity of the glare effect
                }}
            >
            <img
                className="p-3 border-2 border-gray-700 rounded-xl "
                src={url}
                alt={alter}
            />
            </Tilt>
            <p className="text-base font-light hidden lg:block md:block sm:hidden">
                {desc}
            </p>
            <a href={link} target="_blank"><div className="flex p-1 gap-1 mx-0 lg:mx-20 md:mx-20 sm:mx-0 text-xl justify-center border-2 border-cyan-400 rounded-full hover:bg-indigo-500 group-hover:border-indigo-500 duration-500"><IoLogoGithub className="lg:visible md:visible sm:visible visible"/><h1 className="text-base">Link</h1></div></a>
        </div>
    </>
  );
};

export default ProjectCard;
