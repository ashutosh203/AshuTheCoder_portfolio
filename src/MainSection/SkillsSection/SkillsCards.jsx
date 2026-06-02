
const SkillsCards = ({ src, alt, SkillsName }) => {
  return (
    <div className="flex flex-col items-center p-4 glass-effect rounded-lg hover:scale-105 transition duration-300">
      <img src={src} alt={alt} className="h-16 w-16" />
      <p className="mt-4 font-semibold text-white">{SkillsName}</p>
    </div>
  );
};

export default SkillsCards
