import { Link } from "react-scroll";
const NavList = () => {
  const Arry = ["about", "skills", "projects", "contact"];

  const Classname =
    "hover:text-amber-500 transition-colors duration-300 capitalize ";
  return (
    <>
      {Arry.map((navitems, i) => {
        return (
          <a
            className={Classname}
            onClick={onclick}
            href={`#${navitems}`}
            key={i}
          >
            {navitems}
          </a>
        );
      })}
    </>
  );
};

export default NavList;
