/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import About from "./pages/About";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";

function Hero() {
  const professions = ["Web Developer", "Web Designer", "Frontend Developer"];
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);

  useEffect(() => {
    const cycleProfessions = () => {
      setCurrentProfessionIndex(
        (prevIndex) => (prevIndex + 1) % professions.length
      );
    };

    const intervalId = setInterval(cycleProfessions, 2000);

    return () => clearInterval(intervalId);
  }, [currentProfessionIndex, professions.length]);

  return (
    <>
      <section id="home">
        <div className="text-center pt-[26vh] md:pt-[30vh]  fade-out m-auto md:w-[90%] w-80% leading-[1.4] h-screen font-Kanit overflow-hidden">
          <h4 className="tracking-[0.8rem] text-[0.8rem] md:p-0 pb-5 md:text-[1.4rem] block ">
            Hello, I&apos;m
          </h4>
          <h5 className="text-[3rem] md:text-[5rem] tracking-[0.3rem] uppercase font-bold">
            Siddhant Pandey
          </h5>
          <h3 className="tracking-[0.7rem] md:text-[1.2rem] text-[0.9rem] md:p-0 pt-8 text-highlights font-medium">
            {professions[currentProfessionIndex]}
          </h3>
        </div>
      </section>
      <section>
        <About />
      </section>
    </>
  );
}

export default Hero;