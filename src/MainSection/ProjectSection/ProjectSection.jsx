import Cards from "./Cards/Cards";

const ProjectSection = () => {
  const projectDescription = {
    mernStack: {
      description:
        "This project is a role-based e-commerce web application designed to provide a secure and scalable online shopping experience. The system consists of three main roles: Admin, Seller, and User, each with defined responsibilities and permissions.",
    },
  };
  return (
    <section id="projects" className="py-20 scroll-target">
      <h2 className="text-4xl font-bold text-center text-white">My Projects</h2>
      <div className="grid  md:grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <Cards
          ProjectImageSrc={"e-commerce-websites-image.PNG"}
          projectName={"MERN-STACK PROJECT"}
          description={projectDescription.mernStack.description}
          languesUse={[
            "react",
            "html",
            "node.js",
            "tailwind Css",
            "mongoDB",
            "javaScript",
          ]}
          // projectSource={"#"}
          projectLInk={"https://ashutosh203.github.io/ecommerce-frontend/"}
        />
        {/* <Cards
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
        /> */}
        {/* <Cards
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
        /> */}
      </div>
    </section>
  );
};

export default ProjectSection;
