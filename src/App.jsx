import { useEffect, useState, useRef} from "react";
import Navbar from "./components/Navbar";
import './App.css';
import { BgImage } from "./components/BgImage";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
function App() {
  const [seek,setSeek] = useState(0);
  const [animate,setAnimate] = useState(false); 
  const [visible, setVisible] = useState({ aboutMe: false, skills: false, projects: false, contactme: false});
  const sectionsRef = useRef([]);
  useEffect(() => {
      setAnimate(true);
      const animationTimeout = setTimeout(() => {
        setAnimate(false);
      }, 1900); 
      const timeout = setTimeout(() => {
        setSeek((seek) => (seek+1)%3);
      },2000);
    return () => {
      clearTimeout(timeout);
      clearTimeout(animationTimeout);
    };
  },[seek]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({
              ...prev,
              [entry.target.id]: true, // Mark the element visible as soon as it's in view
            }));
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is in view
      }
    );

    sectionsRef.current.forEach((section) => observer.observe(section));

    return () => {
      sectionsRef.current.forEach((section) => observer.unobserve(section));
    };
  }, []);


  
  return (
		<>
			<div className="flex flex-col text-4xl overflow-x-hidden overflow-y-scroll bg-slate-950 bg-cover bg-center bg-fixed font-semibold font-josefin_sans text-white">
				<Navbar/>
				<BgImage/>
				<Home s={seek} b={animate}/>
				<hr id="about" className="mt-40 mb-36 w-3/4 mx-auto border-b-2 opacity-20" />
				<AboutMe visible={visible.aboutMe} myref={sectionsRef}/>
				<hr id="skills" className="mt-40 mb-36 w-3/4 mx-auto border-b-2 opacity-20" />
				<Skills visible={visible.skills} myref={sectionsRef}/>
				<hr id="projects" className="mt-40 mb-32 w-3/4 mx-auto border-b-2 opacity-20" />
				<Projects visible={visible.projects} myref={sectionsRef}/>
				<hr className="mt-32 mb-20 w-3/4 mx-auto border-b-2 opacity-20" />
				<ContactMe visible={visible.contactme} myref={sectionsRef}/>
				<Footer/>
			</div>
		</>
	);
}

export default App;
