import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import tuwlog from "../../assets/tuwlog.png";

export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/#",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 3,
    name: "PROJECTS",
    link: "/#projects",
  },
  {
    id: 4,
    name: "CONTACT",
    link: "/#contact",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div
      className="relative z-10 shadow-md w-full bg-black text-white duration-300
    "   
    >
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <div className="w-36 py-2">
            <img src={tuwlog} alt="" />
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className=" text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden ">
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
