import React from "react";
import "./main.css";
import Section1 from "./Section1";
import Section2Banner from "./Section2-Banner";
import Section3Carousel from "./Section3-Carousel";
import Section4Banner from "./Section4-Banner";
import Section5Boxes from "./Section5-Boxes";
import Section6CalcBox from "./Section6-CalcBox";
import Section7News from "./Section7-News";

function Main() {
  return (
    <div className="main">
      <Section1 />
      <Section2Banner />
      <Section3Carousel />
      <Section5Boxes />
      <Section4Banner />
      <Section6CalcBox />
      <Section7News />
    </div>
  );
}

export default Main;
