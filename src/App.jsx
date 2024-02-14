/* eslint-disable react/prop-types */
import { useState } from "react";
import { Outlet } from "react-router-dom";

import NavSection from "./components/NavSection";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
// import ErrorDM from "./components/ErrorDM";

function App() {
  const [isdarkmode, setIsdarkmode] = useState(false);
  const toggledarkmode = () => {
    setIsdarkmode(!isdarkmode);
  };

  return (
    <div className={` ${isdarkmode ? "dark" : "light"} `}>
      <NavSection isdarkmode={isdarkmode} toggledarkmode={toggledarkmode} />
      <Outlet />

      <Footer isdarkmode={isdarkmode} />
      {/* <ErrorDM /> */}
      <Loading />
    </div>
  );
}

export default App;
