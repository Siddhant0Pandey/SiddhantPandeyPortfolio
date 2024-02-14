/* eslint-disable react/prop-types */

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import profileImage from "../assets/Me2.png";
import AboutDetails from "./AboutDetail";
// import ErrorDM from "../ErrorDM";

function About() {
  return (
    <div>
      <section
        id="about"
        className={`text-center  fade-out mx-auto  md:w-[85%] w-80% leading-[1.4]  font-Poppins  `}
      >
        <div>
          {/* <h1 className="md:text-[7rem] text-[6rem] absolute md:top-[3rem] top-[14rem] md:right-[10vw]  right-[1.5%] font-Poppins font-extrabold opacity-25 tracking-widest ">
            About
          </h1> */}
          <div className="flex justify-evenly md:flex-row flex-col ">
            <div className=" p-8 ">
              <img src={profileImage} alt="image" className=" p-10" />
            </div>
            <div className=" p-8 flex flex-col justify-center items-center gap-6 z-1">
              <h1 className="md:text-[4rem] text-[2rem] font-bold">
                Hello, I&apos;m{" "}
                <span className="text-highlights">Siddhant</span>
              </h1>
              <h4 className="mt-2">
                <span className="text-highlights">&quot;</span> Push the
                boundaries of web design and development, craft the digital
                solutions that leave a lasting impression{" "}
                <span className="text-highlights">&quot;</span>
              </h4>
              <div className=" md:gap-16 gap-12 flex mt-5">
                <a
                  href="https://www.facebook.com/sandesh.pandey"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FaFacebook className="md:w-10 md:h-10 w-8 h-8 opacity-80 hover:opacity-100" />
                </a>
                <a
                  href="https://www.facebook.com/sandesh.pandey"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FaInstagram className="md:w-10 md:h-10 w-8 h-8 opacity-80 hover:opacity-100" />
                </a>
                <a
                  href="https://github.com/Siddhant0Pandey"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FaGithub className="md:w-10 md:h-10 w-8 h-8 opacity-80 hover:opacity-100" />
                </a>
              </div>
              <div className="flex flex-col gap-2 font-Kanit mt-7">
                <h3 className="font-bold md:text-[1.5rem] text-[1.2rem] uppercase">
                  Email Me Here!
                </h3>{" "}
                <p className="text-highlights font-light hover:opacity-[0.8]">
                  {" "}
                  <a href="#">pandeysiddhant0922@gmail.com </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <section
          className={`text-center md:pt-[10vh] pt-5vh pb-[10vh] fade-out mr-auto ml-auto md:w-[85%] w-80% leading-[1.4]  font-Poppins   `}
        >
          {/* <ErrorDM /> */}
          <AboutDetails />
        </section>
      </section>
    </div>
  );
}

export default About;
