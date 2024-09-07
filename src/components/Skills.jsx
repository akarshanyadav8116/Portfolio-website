/* eslint-disable react/prop-types */
import {SkillCardsData} from "../components/constants";
import SkillCard from "../components/SkillCard";

const Skills = ({visible,myref}) => {
  return (
    <>
        <div id="skills" ref={(el) => (myref.current[1] = el)} className={`flex flex-col h-1/6 w-full text-center justify-center items-center text-6xl ${visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            Skills
            <div className="mt-20 flex flex-wrap w-4/5 justify-center items-center gap-16">
                {SkillCardsData.map((skill,index) => (
                    <SkillCard key={index} id={skill.id} url={skill.url} alter={skill.altertxt}/>
                ))}
            </div>
        </div>
    </>
  );
};

export default Skills;
