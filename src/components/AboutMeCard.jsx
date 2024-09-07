
import {EducationCardsData} from "./constants";

const AboutMeCard = () => {
  return (
    <>
        {EducationCardsData.map((card,index) => (
            <div key={index} className="w-5/6 bg-gray-800 px-10 py-5 text-3xl text-center lg:text-left md:text-left border-2 border-cyan-400 shadow-md shadow-cyan-500 rounded-xl hover:border-indigo-500 hover:shadow-indigo-400 hover:shadow-xl hover:-translate-y-2 ease-in-out duration-500">
            <h1 className="font-light">
                
                {card.qualification}
            </h1>
            <ul className="text-xl font-light">
                <li className="text-lg text-gray-300">
                    {card.school}
                </li>
                <li className="text-lg text-gray-300">
                    {card.date}
                </li>
                <li className="text-lg text-gray-300">
                    {card.score}
                </li>
                <li className="text-base mt-5">
                    {card.details}
                    <ul className="flex flex-wrap mt-1 ml-4 list-disc gap-5 lg:gap-10 md:gap-10 sm:gap-10 ">
                        {card.subjects.forEach((subject) => (
                            <li>{subject}</li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
        ))}
    </>
  );
};

export default AboutMeCard;
