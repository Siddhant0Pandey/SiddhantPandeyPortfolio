/* eslint-disable react/prop-types */

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReact, FaJs, FaHtml5, FaCss3, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import profileImage from "../assets/profile.png";
// import ErrorDM from "../ErrorDM";

function About() {
  return (
    <>
      <section
        id="about"
        className={`text-center md:pt-[16vh] pt-[6vh]  fade-out mr-auto ml-auto md:w-[85%] w-80% leading-[1.4]  font-Poppins   `}
      >
        <div>
          <h1 className="md:text-[7rem] text-[6rem] absolute md:top-[3rem] top-[14rem] md:right-[10vw]  right-[1.5%] font-Poppins font-extrabold opacity-25 tracking-widest ">
            About
          </h1>
          <div className="flex justify-evenly md:flex-row flex-col">
            <div className=" p-8 object-contain">
              <img src={profileImage} alt="image" className="" />
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
                <a href="">
                  {" "}
                  <FaFacebook className="md:w-10 md:h-10 w-8 h-8 opacity-[0.8] hover:opacity-[1]" />
                </a>
                <a href="">
                  {" "}
                  <FaInstagram className="md:w-10 md:h-10 w-8 h-8 opacity-[0.8] hover:opacity-[1]" />
                </a>
                <a href="">
                  {" "}
                  <FaGithub className="md:w-10 md:h-10 w-8 h-8 opacity-[0.8] hover:opacity-[1]" />
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
    </>
  );
}

export default About;

function AboutDetails() {
  return (
    <div className=" font-Poppins text-start p-8">
      <h1 className="md:text-[1.5rem] text-[1.2rem] font-bold mb-[1rem]">
        Info
      </h1>
      <h4 className="text-[1.2rem]">
        I&apos;m a web developer with a passion for creating user-friendly
        websites that deliver exceptional user experiences.
      </h4>

      <div className="flex flex-col gap-6 mt-8 text-[1.2rem]">
        <h2>
          Name : <span className="text-highlights">Siddhant Pandey</span>
        </h2>
        <h2>
          Address : <span className="text-highlights">Kathmandu, Nepal</span>
        </h2>
        <h2>
          Phone no : <span className="text-highlights">+977 9800000000</span>
        </h2>
      </div>

      <div>
        <h2 className="md:text-[1.5rem] text-[1.2rem] font-bold mb-[3rem] mt-[5rem]">
          Education
        </h2>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <h5 className="md:col-start-1 md:col-end-2 item-start font-medium">
              Bachelor of Computer Application{" "}
            </h5>
            <h5 className="md:col-start-2 md:col-end-3 item-center font-Roboto">
              Kathmandu Model College
            </h5>
            <h5 className="md:col-start-3 md:col-end-4 item-end opacity-[0.8]">
              2021- ....
            </h5>
          </div>
          <hr className="md:col-span-3" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <h5 className="md:col-start-1 md:col-end-2 item-start font-medium">
              High Education
            </h5>
            <h5 className="md:col-start-2 md:col-end-3 item-center font-Roboto">
              Aims English School
            </h5>{" "}
            <h5 className="md:col-start-3 md:col-end-4 item-end opacity-[0.8]">
              2019-2021
            </h5>
          </div>
          <hr className="md:col-span-3" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <h5 className="md:col-start-1 md:col-end-2 item-start font-medium">
              Secondary Education
            </h5>
            <h5 className="md:col-start-2 md:col-end-3 item-center font-Roboto">
              Ramnagar Academy
            </h5>
            <h5 className="md:col-start-3 md:col-end-4 item-end opacity-[0.8]">
              2012-2016
            </h5>
          </div>
          <hr className="md:col-span-3" />
        </div>
      </div>
      <div className="pb-[5vh] ">
        <h2 className="md:text-[1.5rem] text-[1.2rem] font-bold mb-[3rem] mt-[5rem]">
          Skills
        </h2>
        <div className="flex flex-wrap gap-6 justify-center md:justify-between overflow-hidden">
          <div className="flex flex-col items-center hover:text-highlights gap-3 w-full md:w-auto">
            <FaReact className="text-[4rem]" />
            <span className="text-[1.3rem]">React</span>
          </div>
          <div className="flex flex-col items-center hover:text-highlights gap-3 w-full md:w-auto">
            <FaJs className="text-[4rem]" />
            <span className="text-[1.3rem]">JavaScript</span>
          </div>
          <div className="flex flex-col items-center hover:text-highlights gap-3 w-full md:w-auto">
            <SiTailwindcss className="text-[4rem]" />
            <span className="text-[1.3rem]">TailwindCSS</span>
          </div>
          <div className="flex flex-col items-center hover:text-highlights gap-3 w-full md:w-auto">
            <FaCss3 className="text-[4rem]" />
            <span className="text-[1.3rem]">CSS</span>
          </div>
          <div className="flex flex-col items-center hover:text-highlights gap-3 w-full md:w-auto">
            <FaHtml5 className="text-[4rem]" />
            <span className="text-[1.3rem]">HTML</span>
          </div>
          <div className="flex flex-col items-center hover:text-highlights gap-3 w-full md:w-auto">
            <FaFigma className="text-[4rem]" />
            <span className="text-[1.3rem]">Figma</span>
          </div>
        </div>
      </div>
    </div>
  );
}
