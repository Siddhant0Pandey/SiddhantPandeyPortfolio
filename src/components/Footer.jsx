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
      } text-center flex flex-col items-center md:gap-12 gap-8 h-[70vh] font-Poppins in-view overflow-hidden`}
    >
      <h1 className="text-center md:text-[3rem] font-bold md:tracking-[0.2rem] pt-6 pb-6">
        Contact Me:
      </h1>
      <div className=" md:gap-16 gap-12 flex">
        <a href="">
          {" "}
          <FaFacebook className="w-16 h-16 opacity-[0.8] hover:opacity-[1]" />
        </a>
        <a href="">
          {" "}
          <FaInstagram className="w-16 h-16 opacity-[0.8] hover:opacity-[1]" />
        </a>
        <a href="">
          {" "}
          <FaGithub className="w-16 h-16 opacity-[0.8] hover:opacity-[1]" />
        </a>
      </div>
      <h4 className=" tracking-wider font-Poppins font-medium text-[1.75rem]">
        pandeysiddhant0922@gmail.com
      </h4>

      <p className="text-sm opacity-[0.8]">
        Copyright © {currentYear}. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
