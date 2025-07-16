import NavList from "./Component/NavList";
import { useState } from "react";
import "./HeaderSection.css";
import Resumepdf from "../assets/Ashutoshkumarshah.pdf"
const HeaderSection = () => {
  const [onclickButton, setOnclickButton] = useState(false);
  const Classname =
    "hover:text-amber-500 transition-colors duration-300 capitalize ";
  // const onclicknavlist = (e) => {
  //   e.target
  //   setOnclickButton((prev) => !prev);
  // }
  return (
    <header className=" w-full top-0 z-50 sticky glass-effect ">
      <nav className=" container max-w-full sm:max-w-screen-xl  md:container  px-6 py-4 mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-serif font-bold ">
          AshuTheCoder
        </a>
        <div className="hidden md:flex space-x-6  items-center text-lg ">
          <NavList Classname={Classname} />
        </div>
        {/* this is a Resume */}
        <a
          href={Resumepdf}
          download={"Ashutosh_Kumar_Shah_Resume"}
          target="_blank"
          className="hidden md:block text-gray-900 font-bold py-2 font-serif px-4 capitalize rounded-lg bg-blue-400 hover:scale-[1.05] duration-300 "
        >
          Resume
        </a>
        <button
          className="md:hidden"
          onClick={() => {
            setOnclickButton((prev) => !prev);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>
      {onclickButton && (
        <div className="md:hidden glass-effect flex flex-col capitalize px-6 absolute top-full left-0 w-full z-40 py-4  ">
          <NavList onclick={() => setOnclickButton((prev) => !prev)} />
          <a
            href="#resume"
            target="_blank"
            className="font-serif font-bold capitalize rounded-lg"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default HeaderSection;
