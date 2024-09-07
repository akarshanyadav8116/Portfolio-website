import { Tilt } from "react-tilt";
// eslint-disable-next-line react/prop-types
const Home = ({s,b}) => {
  return (
  <>
    <div className="h-1/6 z-10 w-full flex flex-col-reverse lg:flex lg:flex-row md:flex md:flex-col-reverse sm:flex sm:flex-col-reverse justify-center items-center lg:items-start md:items-center sm:items-center px-14 lg:px-20 md:px-10 sm:px-5 mt-36 bg-transparent bg-cover bg-center bg-fixed gap-10 animate-fadeIn delay-500">
        <div id="fade-in-element" className="flex flex-col w-full animate-fadeIn text-4xl justify-center lg:justify-start md:justify-center sm:justify-center items-center lg:items-start md:items-center sm:items-center lg:text-left md:text-center text-center gap-8">
            <div className="font-bold text-3xl lg:text-5xl md:text-5xl">
                Hi, I am
                <div className="border-b-2 my-4 text-5xl lg:text-7xl md:text-7xl border-cyan-400 bg-gradient-to-r from-red-400 via-orange-300 to-yellow-500 bg-clip-text text-transparent animate-appearLeft">
                    {/*from-teal-300 via-green-400 to-lime-500*/}
                    Akarshan Yadav
                </div>
                {s === 0 ? (
                    <h1
                        className={`font-light text-xl lg:text-4xl md:text-4xl ${
                            b ? "animate-moveUp" : "invisible"
                        }`}>
                        A Full Stack Developer
                    </h1>
                ) : s === 1 ? (
                    <h1
                        className={`font-light text-xl lg:text-4xl md:text-4xl ${
                            b ? "animate-moveUp" : "invisible"
                        }`}>
                        A Programmer
                    </h1>
                ) : s === 2 ? (
                    <h1
                        className={`font-light text-xl lg:text-4xl md:text-4xl ${
                            b ? "animate-moveUp" : "invisible"
                        }`}>
                        A Problem Solver
                    </h1>
                ) : null}
            </div>
            <p className="text-2xl font-light animate-appearLeft">
                I am curious ,creative and a practical individual who finds
                passion and inspiration in creating solutions that make a
                difference and building things on my own.
            </p>
            <div className="flex w-full justify-center lg:justify-start md:justify-center animate-appearLeft">
                <a
                    href="../assets/My Resume.pdf"
                    download="My Resume.pdf"
                    className="border-2 text-2xl border-cyan-400 rounded-full px-5 py-2 hover:bg-cyan-400 hover:transition-transform hover:-translate-y-2 hover:duration-500 duration-500 ease-in-out ">
                    Resume
                </a>
            </div>
        </div>
        <div className="block size-full lg:size-2/4 md:size-2/4 sm:size-2/4 justify-center pb-5">
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
                src="../assets/portfolio image 4.png"
                alt="my image"
                className="backdrop-blur-sm border-b-4 border-cyan-400 animate-fadeInSlow brightness-90 hover:transition-opacity hover:ease-in-out rounded-full animate-appearRight delay-1000"
            />
        </Tilt>
        </div>
	</div>
  </>
  )
};

export default Home;
