/* eslint-disable react/prop-types */

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer({ isdarkmode }) {
  const currentYear = new Date().getFullYear();
  return (
    <div
      className={` ${
        isdarkmode ? "dark" : "light"
      } text-center flex flex-col items-center md:gap-12 gap-8 md:h-[70vh] h-[40vh] md:mt-12 mt-8 font-Poppins in-view`}
    >
      <h1 className="text-center md:text-[3rem] text-[1.8rem] font-bold md:tracking-[0.2rem] pt-6 pb-6">
        Contact Me:
      </h1>
      <div className=" md:gap-16 gap-12 flex">
        <a href="">
          {" "}
          <FaFacebook className="md:w-16 md:h-16 w-12 h-12 opacity-[0.8] hover:opacity-[1]" />
        </a>
        <a href="">
          {" "}
          <FaInstagram className="md:w-16 md:h-16 w-12 h-12 opacity-[0.8] hover:opacity-[1]" />
        </a>
        <a href="">
          {" "}
          <FaGithub className="md:w-16 md:h-16 w-12 h-12 opacity-[0.8] hover:opacity-[1]" />
        </a>
      </div>
      <h4 className=" md:tracking-wider font-Poppins font-medium md:text-[1.75rem]">
        pandeysiddhant0922@gmail.com
      </h4>

      <p className="text-sm opacity-[0.8]">
        Copyright © {currentYear}. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
