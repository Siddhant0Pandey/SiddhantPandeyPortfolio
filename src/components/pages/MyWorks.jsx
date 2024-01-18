import { useState } from "react";

const projectsData = [
  {
    id: 1,
    name: "Project 1",
    image:
      "data:image/jpeg;base64,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",
    description:
      "This project is known as project nothing where nothing has shown up",
  },
  {
    id: 2,
    name: "Project 2",
    image:
      "data:image/jpeg;base64,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",
    description:
      "This project is known as project nothing where nothing has shown up",
  },
  {
    id: 3,
    name: "Project 3",
    image:
      "data:image/jpeg;base64,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",
    description:
      "This project is known as project nothing where nothing has shown up",
  },
];
// eslint-disable-next-line react/prop-types

function MyWorks() {
  const [currentProject, setCurrentProject] = useState(projectsData[0]);

  const nextProject = () => {
    const currentIndex = projectsData.findIndex(
      (project) => project.id === currentProject.id
    );
    const nextIndex = (currentIndex + 1) % projectsData.length;
    console.log("Current Index:", currentIndex);
    console.log("Next Index:", nextIndex);

    setCurrentProject(projectsData[nextIndex]);
  };

  return (
    <div>
      <h1 className="md:text-[4rem] mb-[3rem] text-[2rem] font-bold opacity-85 ">
        My Works
      </h1>
      <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-3">
        <div className="flex-1 mb-4 md:mb-0 flex justify-center flex-col">
          <h3 className="text-lg font-bold mb-2 items-start">
            {currentProject.name}
          </h3>
          <hr />
          <p className="text-sm opacity-75 mt-2 pt-5 pb-5 mb-2">
            {currentProject.description}
          </p>
          <h5>
            <a href="#" className="text-blue-500 mt-2 hover:underline">
              View Details
            </a>
          </h5>

          <button
            onClick={nextProject}
            className="p-4 bg-highlights mt-4 hover:shadow-md inline-block"
          >
            Next Project
          </button>
        </div>
        <div className="flex-1 md:p-8 p-4">
          <div className="h-64 sm:h-96 md:h-80 lg:h-96 xl:h-80">
            <img
              src={currentProject.image}
              alt={currentProject.name}
              className="w-full  object-cover mb-4 rounded-lg  hover:scale-95 transition-all duration-200  border-2 border-highlights"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWorks;
