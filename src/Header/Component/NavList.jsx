import { Link } from "react-scroll";
const NavList = ({ Classname, onclick }) => {
  const Arry = ["about", "skills", "projects", "contact"];

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
