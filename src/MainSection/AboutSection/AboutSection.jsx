import ProfileImage from "./ProfileImage";
import "./AboutSection.css";
import IntroductionMySelf from "./IntroductionMySelf";

const AboutSection = ({ Profileimg }) => {
  return (
    <section id="about" className="py-12 scroll-target">
      <h2 className="text-4xl font-bold text-center text-white">
        Self-Introduction
      </h2>
      <div className="flex items-center gap-12 mt-12">
        <ProfileImage Profileimg={Profileimg} />
        <IntroductionMySelf/>
      </div>
    </section>
  );
};

export default AboutSection;
