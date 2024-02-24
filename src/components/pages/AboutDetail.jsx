import { FaReact, FaJs, FaHtml5, FaCss3, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function AboutDetails() {
  return (
    <div className={`  font-Poppins text-start p-8`}>
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
          Phone no : <span className="text-highlights">+977 9860801266</span>
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
          <div className="flex flex-col items-center hover:text-highlight gap-3 w-full md:w-auto">
            <FaReact className="text-[4rem]" />
            <span className="text-[1.3rem]">React</span>
          </div>
          <div className="flex flex-col items-center hover:text-highlight gap-3 w-full md:w-auto">
            <FaJs className="text-[4rem]" />
            <span className="text-[1.3rem]">JavaScript</span>
          </div>
          <div className="flex flex-col items-center hover:text-highlight gap-3 w-full md:w-auto">
            <SiTailwindcss className="text-[4rem]" />
            <span className="text-[1.3rem]">TailwindCSS</span>
          </div>
          <div className="flex flex-col items-center hover:text-highlight gap-3 w-full md:w-auto">
            <FaCss3 className="text-[4rem]" />
            <span className="text-[1.3rem]">CSS</span>
          </div>
          <div className="flex flex-col items-center hover:text-highlight gap-3 w-full md:w-auto">
            <FaHtml5 className="text-[4rem]" />
            <span className="text-[1.3rem]">HTML</span>
          </div>
          <div className="flex flex-col items-center hover:text-highlight gap-3 w-full md:w-auto">
            <FaFigma className="text-[4rem]" />
            <span className="text-[1.3rem]">Figma</span>
          </div>
        </div>
      </div>
    </div>
  );
}
