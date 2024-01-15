/* eslint-disable react/prop-types */

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import profileImage from "../assets/profile.png";

function About() {
  return (
    <section
      id="about"
      className={`text-center md:pt-[16vh] pt-[6vh]  fade-out m-auto md:w-[85%] w-80% leading-[1.4]  font-Poppins   `}
    >
      <div>
        <h1 className="md:text-[7rem] text-[7rem] absolute md:top-[3rem] top-[14rem] md:right-[10vw]  right-[2%] font-Poppins font-extrabold opacity-25 tracking-widest ">
          About
        </h1>
        <div className="flex justify-evenly md:flex-row flex-col ">
          <div className=" p-8 object-contain">
            <img src={profileImage} alt="image" className="" />
          </div>
          <div className=" p-8 flex flex-col justify-center items-center gap-6 z-1">
            <h1 className="md:text-[4rem] text-[2rem] font-bold">
              Hello, I&apos;m <span className="text-highlights">Siddhant</span>
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
              <h3 className="font-bold text-[1.5rem] uppercase">
                Email Me Here!
              </h3>{" "}
              <p className="text-highlights font-light hover:opacity-[0.8]">
                {" "}
                <a href="#">pandeysiddhant0922@gmail.com </a>
              </p>
            </div>
          </div>
          {/* <button className="p-2 bg-highlights">Click me</button> */}
        </div>
        {/* <AboutDetails /> */}
      </div>
    </section>
  );
}

export default About;

// function AboutDetails() {
//   return (
//     <div className="md:pt-[10vh] pt-5vh bg-highlights pb-[10vh]">
//       <h1 className="">Info</h1>
//       <h4>
//         A web developer with a passion for creating user-friendly
//         <br /> websites that deliver exceptional user experiences.
//       </h4>
//     </div>
//   );
// }
