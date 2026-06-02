import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import Profileimg from "../assets/Profileimage.jpeg";
import SkillsSection from "./SkillsSection/SkillsSection";
import reactOriginal from "../assets/react-original.svg";
import Nodejs from "../assets/nodejs-original.svg";
import Express from "../assets/express-original.svg";
import MongoDB from "../assets/mongodb-original.svg";
import JavaScript from "../assets/javascript-original.svg";
import Tailwind_CSS from "../assets/tailwindcss-original.svg";
import HTML5 from "../assets/html5-original.svg";
import CSS3 from "../assets/css3-original.svg";
import Git from "../assets/git-original.svg";
import ProjectSection from "./ProjectSection/ProjectSection";
import ContactSection from "./Contact/ContactSection";



const MainSection = () => {
  const imagelink = [
    reactOriginal,
    Nodejs,
    Express,
    MongoDB,
    JavaScript,
    Tailwind_CSS,
    HTML5,
    CSS3,
    Git,
  ];
  // console.log(imagelink[0]);
  return (
    <>
      <main className="container mx-auto px-6">
        <HeroSection />
        <AboutSection Profileimg={Profileimg} />
        <SkillsSection imagelink={imagelink} />
        <ProjectSection />
        <ContactSection/>
      </main>
    </>
  );
};

export default MainSection;
