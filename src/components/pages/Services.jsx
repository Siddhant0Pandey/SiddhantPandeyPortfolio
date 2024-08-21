// eslint-disable-next-line react/prop-types

import { MdOutlineLayers } from "react-icons/md";
import { MdDeveloperBoard } from "react-icons/md";
import MyWorks from "./MyWorks";

function Services() {
  return (
    <section
      className={` text-center md:pt-[12vh] pt-[6vh]  fade-out m-auto md:w-[85%] w-80% leading-[1.4]  font-Poppins   `}
    >
      <h1 className="md:text-[4rem] text-[2rem] font-bold opacity-85">
        Skills and Services
      </h1>
      <div className="flex md:justify-evenly mt-[4rem] md:flex-row  items-center  justify-center gap-10 md:gap-2 flex-col mb-[4rem]">
        <div className=" shadow-lg md:w-[20rem] w-[18rem] flex flex-col items-center md:p-4 p-3 h-auto md:pb-6 pb-5 hover:shadow-sm">
          <MdOutlineLayers className="md:text-[6rem] text-[5rem] text-highlights" />
          <h3 className="uppercase mb-[2rem] mt-[1rem] font-bold underline underline-offset-4 ">
            Ui/Ux
          </h3>
          <div className="font-medium opacity-80 flex flex-col gap-3 text-[1rem]">
            <h4>Figma</h4>
          </div>
        </div>
        <div className="   shadow-lg md:w-[20rem] w-[18rem] flex flex-col items-center md:p-4 p-3 h-auto md:pb-6 pb-5 hover:shadow-sm">
          <MdDeveloperBoard className="md:text-[6rem] text-[5rem] text-highlights" />
          <h3 className="uppercase mb-[2rem] mt-[1rem] font-bold underline underline-offset-4">
            Frontend Development
          </h3>
          <div className="font-medium opacity-80 flex flex-col gap-3 text-[1rem]">
            <h4>NextJS</h4>
            <h4>React</h4>
            <h4>Javascript/TypeScript</h4>
            <h4>TailwindCSS</h4>
            <h4>HTML</h4>
          </div>
        </div>
      </div>
      <div className="mb-16 mt-8rem m-auto md:w-[85%] w-80% pb-10">
        <MyWorks />
      </div>
    </section>
  );
}

export default Services;
