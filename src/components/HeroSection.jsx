/* eslint-disable react/prop-types */

import Hero from "./Hero";
import NavSection from "./NavSection";

export default function HeroSection({ toggledarkmode, isdarkmode }) {
  return (
    <header>
      <NavSection toggledarkmode={toggledarkmode} isdarkmode={isdarkmode} />
      <Hero isdarkmode={isdarkmode} />
    </header>
  );
}
