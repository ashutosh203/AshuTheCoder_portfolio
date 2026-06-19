/** @format */

import Cards from './Cards/Cards';

const ProjectSection = () => {
 const projectDescription = {
  mernStack: {
   description:
    'This project is a role-based e-commerce web application designed to provide a secure and scalable online shopping experience. The system consists of three main roles: Admin, Seller, and User, each with defined responsibilities and permissions.',
  },
  'To-Do-List':
   'I developed a To-Do Application using React.js and Tailwind CSS. The main purpose of this application is to help users manage their daily tasks efficiently. Users can add, edit, delete, and mark tasks as completed.',
  JobTracker:
   'JobTracker is a modern Full-Stack Job Portal Application built using React.js, Node.js, Express.js, and MongoDB. The platform connects recruiters and job seekers in a seamless way. Recruiters can create and manage job postings, review applicants, and update application statuses, while candidates can browse jobs, apply for positions, and track their applications.',
 };
 return (
  <section id='projects' className='py-20 scroll-target'>
   <h2 className='text-4xl font-bold text-center text-white'>My Projects</h2>
   <div className='grid  md:grid-cols-1 lg:grid-cols-3 gap-8 mt-12'>
    <Cards
     ProjectImageSrc={'e-commerce-websites-image.PNG'}
     projectName={'MERN-STACK PROJECT'}
     description={projectDescription.mernStack.description}
     languesUse={[
      'react',
      'html',
      'node.js',
      'tailwind Css',
      'mongoDB',
      'javaScript',
     ]}
     // projectSource={"#"}
     projectLInk={'https://ashutosh203.github.io/ecommerce-frontend/'}
    />
    <Cards
     ProjectImageSrc={'todolist.PNG'}
     projectName={'To-Do-List'}
     description={projectDescription['To-Do-List']}
     languesUse={['React', 'HTML', 'Tailwind CSS', 'Lucide React']}
     // projectSource={"#"}
     projectLInk={'https://ashutosh203.github.io/ToDoList/'}
    />

    <Cards
     ProjectImageSrc={'JobTracker.PNG'}
     projectName={'JobTracker'}
     description={projectDescription.JobTracker}
     languesUse={[
      'React',
      'Tailwind CSS v4',
      'Lucide React',
      'React Hook Form',
      'React Hot Toast',
      'NodeJs',
      'ExpressJs',
      'Mongodb',
     ]}
     // projectSource={"#"}
     projectLInk={'https://ashutosh203.github.io/JobTracker/'}
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
