// eslint-disable-next-line react/prop-types

import { MdOutlineLayers } from "react-icons/md";
import { MdDeveloperBoard } from "react-icons/md";
function Services() {
  return (
    <div
      className={`h-screen text-center md:pt-[12vh] pt-[6vh]  fade-out m-auto md:w-[85%] w-80% leading-[1.4]  font-Poppins   `}
    >
      <div>
        <h1 className="md:text-[4rem] text-[2rem] font-bold opacity-85">
          Skills and Services
        </h1>
        <div className="flex md:justify-evenly mt-[3rem] md:flex-row w-[90%] items-center justify-center gap-4 md:gap-2 flex-col">
          <div className="   shadow-lg md:w-[20rem] w-[18rem] flex flex-col items-center md:p-4 p-3 h-auto md:pb-6 pb-5 hover:shadow-sm">
            <MdOutlineLayers className="md:text-[6rem] text-[5rem] text-highlights" />
            <h3 className="uppercase mb-[2rem] mt-[1rem] font-bold underline underline-offset-4 ">
              Ui/Ux
            </h3>
            <div className="font-medium opacity-80 text-[1rem]">
              <h4 className="">Figma</h4>
            </div>
          </div>
          <div className="   shadow-lg md:w-[20rem] w-[18rem] flex flex-col items-center md:p-4 p-3 h-auto md:pb-6 pb-5 hover:shadow-sm">
            <MdDeveloperBoard className="md:text-[6rem] text-[5rem] text-highlights" />
            <h3 className="uppercase mb-[2rem] mt-[1rem] font-bold underline underline-offset-4">
              Frontend Development
            </h3>
            <div className="font-medium opacity-80 flex flex-col gap-3 text-[1rem]">
              <h4>React</h4>
              <h4>Javascript</h4>
              <h4>TailwindCSS</h4>
              <h4>HTML</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
