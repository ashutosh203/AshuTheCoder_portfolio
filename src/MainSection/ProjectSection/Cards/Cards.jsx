import { v4 as uuidv4 } from "uuid";
const Cards = ({
  ProjectImageSrc,
  projectName,
  description,
  languesUse,
  projectLInk,
  // projectSource,
}) => {
  return (
    <div className="font-serif glass-effect rounded-lg overflow-hidden flex flex-col hover:scale-105 transition-all duration-300">
      <img
        src={ProjectImageSrc}
        alt="Project 1 Screenshot"
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white">{projectName}</h3>
        <p className="mt-2 text-gray-400 flex-grow">{description}</p>
        <div className="mt-4">
          {languesUse?.map((ele) => (
            <span
              key={uuidv4()}
              className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2"
            >
              {ele}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-4 items-center justify-center">
          <a
            href={projectLInk}
            target="_blank"
            className="pointer-coarse: font-serif w-1/2 text-center bg-accent text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-blue-400 transition-colors duration-300"
          >
            Linve Demo
          </a>
          {/* <a
            href={projectSource}
            target="_blank"
            className=" font-serif w-1/2 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-300"
          >
            Source Code
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
