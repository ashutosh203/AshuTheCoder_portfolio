import Cards from "./Cards/Cards";

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20 scroll-target">
      <h2 className="text-4xl font-bold text-center text-white">My Projects</h2>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <Cards
          ProjectImageSrc={
            "https://placehold.co/600x400/161b22/58a6ff?text=Project+1+Screenshot"
          }
          projectName={"react-projects"}
          description={"hello"}
          languesUse={["react", "html", "node.js"]}
          projectSource={"#"}
          projectLInk={"#"}
        />
        <Cards
          ProjectImageSrc={
            "https://placehold.co/600x400/161b22/58a6ff?text=Project+2+Screenshot"
          }
          projectName={"react-projects"}
          description={"hello"}
          languesUse={["react", "html", "node.js"]}
          projectSource={"#"}
          projectLInk={"#"}
        />
        <Cards
          ProjectImageSrc={
            "https://placehold.co/600x400/161b22/58a6ff?text=Project+2+Screenshot"
          }
          projectName={"react-projects"}
          description={"hello"}
          languesUse={["react", "html", "node.js"]}
          projectSource={"#"}
          projectLInk={"#"}
        />
        <Cards
          ProjectImageSrc={
            "https://placehold.co/600x400/161b22/58a6ff?text=Project+2+Screenshot"
          }
          projectName={"react-projects"}
          description={"hello"}
          languesUse={["react", "html", "node.js"]}
          projectSource={"#"}
          projectLInk={"#"}
        />
        <Cards
          ProjectImageSrc={
            "https://placehold.co/600x400/161b22/58a6ff?text=Project+2+Screenshot"
          }
          projectName={"react-projects"}
          description={"hello"}
          languesUse={["react", "html", "node.js"]}
          projectSource={"#"}
          projectLInk={"#"}
        />
        <Cards
          ProjectImageSrc={
            "https://placehold.co/600x400/161b22/58a6ff?text=Project+2+Screenshot"
          }
          projectName={"react-projects"}
          description={"hello"}
          languesUse={["react", "html", "node.js"]}
          projectSource={"#"}
          projectLInk={"#"}
        />
      </div>
    </section>
  );
};

export default ProjectSection;
