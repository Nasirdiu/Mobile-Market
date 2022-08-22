import React from "react";
import Map from "../../Map/Map";
import Summury from "../../Summury/Summury";
import BrandName from "../BrandName/BrandName";
import Faq from "../Faq/Faq";
import LatestPhone from "../LatestPhone/LatestPhone";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Summury></Summury>
      <LatestPhone></LatestPhone>
      <Faq></Faq>
      <BrandName></BrandName>
      <Map></Map>
      
    </div>
  );
};

export default Home;
