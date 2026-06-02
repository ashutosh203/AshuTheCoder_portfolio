import Cards from "./Cards/Cards";

const ProjectSection = () => {
  const projectDescription = {
    mernStack: {
      description:
        "This project is a role-based e-commerce web application designed to provide a secure and scalable online shopping experience. The system consists of three main roles: Admin, Seller, and User, each with defined responsibilities and permissions.",
    },
<<<<<<< HEAD
    "To-Do-List" : "I developed a To-Do Application using React.js and Tailwind CSS. The main purpose of this application is to help users manage their daily tasks efficiently. Users can add, edit, delete, and mark tasks as completed."
=======
>>>>>>> 1cbcf250fb9cf03724aff4df348e0123793d1916
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
<<<<<<< HEAD
         <Cards
          ProjectImageSrc={
            "todolist.PNG"
            }
            projectName={"To-Do-List"}
            description={projectDescription["To-Do-List"]}
            languesUse={["React", "HTML", "Tailwind CSS" , "Lucide React"]}
            // projectSource={"#"}
            projectLInk={"https://ashutosh203.github.io/ToDoList/"}
            />
            {/*
=======
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
>>>>>>> 1cbcf250fb9cf03724aff4df348e0123793d1916
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
