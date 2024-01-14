/* eslint-disable react/prop-types */
import { useState } from "react";
import { Outlet } from "react-router-dom";

// import HeroSection from "./components/HeroSection";
import NavSection from "./components/NavSection";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
// import About from "./components/pages/About";
// import { useState } from "react";

function App() {
  const [isdarkmode, setIsdarkmode] = useState(false);
  const toggledarkmode = () => {
    setIsdarkmode(!isdarkmode);
  };

  return (
    <div className={`h-screen ${isdarkmode ? "dark" : "light"} `}>
      <NavSection isdarkmode={isdarkmode} toggledarkmode={toggledarkmode} />
      <Outlet />
      <Footer isdarkmode={isdarkmode} />
      <Loading />
    </div>
  );
}

export default App;
