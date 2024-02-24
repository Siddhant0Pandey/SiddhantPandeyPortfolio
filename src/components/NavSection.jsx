/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function NavSection({ isdarkmode, toggledarkmode }) {
  const [scrollWindow, setScrollWindow] = useState(false);
  const [showNavLinks, setShowNavLinks] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrollWindow(true);
    } else {
      setScrollWindow(false);
    }
  };

  const handleNavBar = () => {
    setShowNavLinks(!showNavLinks);
    // console.log("clicked:");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();

  return (
    <>
      <button
        onClick={toggledarkmode}
        className="fixed top-[1vh] left-[2vw] md:right-[50vw] w-12 h-12 p-2 z-[99]"
      >
        {isdarkmode ? <FaSun /> : <FaMoon />}
      </button>

      <div className="resumestyl fixed top-[10vh] left-[1.5vw] md:right-[50vw]  p-2 z-[99]  flex-col gap-[0.2rem] flex  justify-center items-center  w-12 h-12 ">
        <a
          href="/src/components/resume.pdf"
          download="Siddhant_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className={` ${
            isdarkmode ? "resumeDark" : "resumeLight"
          } flex  justify-center items-center `}
        >
          <FaFileDownload />
        </a>
        <span className="font-medium font-Poppins text-sm">Resume</span>
      </div>
      <div className="fixed top-[1.3vh] right-[2vw] md:right-[50vw] w-12 h-12 p-2 z-[99] text-sm">
        <FaBars
          className={` ${isdarkmode ? "iconDark" : "iconLight"} barIcon`}
          onClick={handleNavBar}
        />
      </div>
      <nav
        className={`${
          scrollWindow ? "scrollWindow" : ""
        } flex justify-end  md:w-[90%] m-auto md:mr-5 mr-10 font-Roboto z-[99] md:z-[0]
        ${showNavLinks ? "mobileNavBar" : ""}`}
      >
        <ul
          className={`flex justify-end  pt-5 items-center md:gap-6 gap-3 navlink  ${
            showNavLinks ? "mobileNavBar" : ""
          }`}
        >
          <li className="w-12 h-12 text-sm">
            <NavLink
              to="/"
              className={location.pathname === "/" ? "navlink-active" : ""}
            >
              <div className="navLinks flex flex-col justify-center items-center text-sm gap-[0.2rem]">
                <FaHome
                  className={` ${isdarkmode ? "iconDark" : "iconLight"}`}
                />
                <span className="navText">Home</span>
              </div>
            </NavLink>
          </li>
          <li className="w-12 h-12">
            <NavLink
              to="about"
              className={location.pathname === "/about" ? "navlink-active" : ""}
            >
              <div className="navLinks flex flex-col justify-center items-center text-sm gap-[0.2rem]">
                <MdContacts
                  className={` ${isdarkmode ? "iconDark" : "iconLight"}`}
                />
                <span className="navText">About</span>
              </div>
            </NavLink>
          </li>
          <li className="w-12 h-12">
            <NavLink
              to="services"
              className={
                location.pathname === "/services" ? "navlink-active" : ""
              }
            >
              <div className="navLinks flex flex-col justify-center items-center text-sm gap-[0.2rem]">
                <MdMiscellaneousServices
                  className={` ${isdarkmode ? "iconDark" : "iconLight"}`}
                />
                <span className="navText">Services</span>
              </div>
            </NavLink>
          </li>
          <li className="w-12 h-12">
            <NavLink
              to="contact"
              className={
                location.pathname === "/contact" ? "navlink-active" : ""
              }
            >
              <div className=" navLinks flex flex-col justify-center items-center text-sm gap-[0.2rem]">
                <IoMdCall
                  className={` ${isdarkmode ? "iconDark" : "iconLight"}`}
                />
                <span className="navText">Contact</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavSection;
