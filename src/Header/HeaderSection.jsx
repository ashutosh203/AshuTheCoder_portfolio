import NavList from "./Component/NavList";
import "./HeaderSection.css";
const HeaderSection = () => {
  return (
    <header className="top-0 w-full z-50 sticky glass-effect ">
      <nav className="container px-6 py-4 mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-serif font-bold ">
          AshuTheCoder
        </a>
        <div className="space-x-6 flex items-center text-lg ">
          <NavList />
        </div>
        {/* this is a Resume */}
        <a
          href="#resume"
          target="_blank"
          className=" text-gray-900 font-bold py-2 font-serif px-4 capitalize rounded-lg bg-blue-400 hover:scale-[1.05] duration-300 "
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default HeaderSection;
