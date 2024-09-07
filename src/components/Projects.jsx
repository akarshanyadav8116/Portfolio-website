/* eslint-disable react/prop-types */
import { ProjectCardsData } from "./constants";
import ProjectCard from "./ProjectCard";
const Projects = ({visible,myref}) => {
  return (
    <>
        <div id="projects" ref={(el) => (myref.current[2] = el)} className={`flex flex-col h-1/6 w-full text-center justify-center items-center text-6xl ${visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            Projects
            <div className="mt-20 flex flex-wrap w-full justify-center items-center gap-8 lg:gap-20 md:gap-10 sm:gap-10">
                {ProjectCardsData.map((content,index)=>(
                    <ProjectCard key={index} project={content.project} techstack={content.technologies} url={content.imgurl} alter={content.altertext} desc={content.description} link={content.link}/>
                ))}
            </div>
		</div>
    </>
  );
};

export default Projects;
