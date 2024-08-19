import React from "react";
import tuwlog from "../../assets/tuwlog.png";
import nitlog from "../../assets/nitc.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
const Footer = () => {
  return (
    <div className=" bg-dark rounded-t-3xl">
      <section className="container">
        <div className="flex sm:flex-col md:flex-row flex-wrap justify-between py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <img src={tuwlog} alt="" />
            
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <h2 className="font-mono">NIT Calicut</h2>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 6161131210</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.instagram.com/teamunwired_nitcalicut/">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="https://www.facebook.com/teamunwired/">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="https://www.linkedin.com/company/team-unwired/">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          

        <div className="flex flex-wrap">
            <div className="md:pl-10 relative top-7">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>


            <div className="md:pl-10 relative top-7">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Contact for Enquiry
                </h1>
                  <p className="font-mono text-gray-400">
                  Dr.V Sajith<br/>
                  Associate Professor(MED)<br/>
                  Faculty Advisor<br/>
                  Team Unwired, NIT Calicut<br/>
                  +91 9446361125<br/>
                  sajith@nitc.ac.in
                  </p>
              </div>
            </div>


            <div className="md:pl-10 relative top-7">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  For More Info
                </h1>
                  <p className="font-mono text-gray-400">
                  Dr.Shijo Thomas<br/>
                  Associate Professor(MED)<br/>
                  Faculty Advisor<br/>
                  Team Unwired, NIT Calicut<br/>
                  +91 9446276409<br/>
                  shijo@nitc.ac.in
                  </p>
              </div>
            </div> 
        </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
