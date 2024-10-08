//import stuff
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Navlinks } from "./Navbar";

//responsive menu for small screens
const ResponsiveMenu = ({ showMenu }) => {
  console.log("showMenu", showMenu);
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between  bg-gray-900 text-white px-8 pb-6 pt-16  transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Good Morning !!</h1>
            <h1 className="text-sm text-slate-500">User</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Navlinks.map((data) => (
              <li>
                <a href={data.link} className="mb-5 inline-block">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          Made by Devadath💕
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
