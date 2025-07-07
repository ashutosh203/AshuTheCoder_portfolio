import SkillsCards from "./SkillsCards";

const SkillsSection = ({ imagelink }) => {
  const [
    react,
    nodejs,
    Express,
    MongoDB,
    JavaScript,
    Tailwind_CSS,
    HTML5,
    CSS3,
    Git,
  ] = imagelink;

  return (
    <section id="skills" className="font-serif py-20 scroll-target">
      <h2 className="text-4xl font-bold text-center text-white">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10">
        <SkillsCards src={react} alt={"image"} SkillsName="React" />
        <SkillsCards src={nodejs} alt={"image"} SkillsName="node.js" />
        <SkillsCards src={Express} alt={"image"} SkillsName="Express" />
        <SkillsCards src={MongoDB} alt={"image"} SkillsName="MongoDB" />
        <SkillsCards src={JavaScript} alt={"image"} SkillsName="MongoDB" />
        <SkillsCards
          src={Tailwind_CSS}
          alt={"image"}
          SkillsName="Tailwind CSS"
        />
        <SkillsCards src={HTML5} alt={"image"} SkillsName="HTML5" />
        <SkillsCards src={CSS3} alt={"image"} SkillsName="CSS3" />
        <SkillsCards src={Git} alt={"image"} SkillsName="Git" />
      </div>
    </section>
  );
};

export default SkillsSection
