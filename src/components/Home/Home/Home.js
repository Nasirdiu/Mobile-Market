import React from "react";
import BrandName from "../BrandName/BrandName";
import Faq from "../Faq/Faq";
import LatestPhone from "../LatestPhone/LatestPhone";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <LatestPhone></LatestPhone>
      <Faq></Faq>
      <BrandName></BrandName>
    </div>
  );
};

export default Home;
