import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import BrandCard from "./BrandCard";
const BrandName = () => {
  const [last, setLast] = useState([]);
  useEffect(() => {
    fetch("img.json")
      .then((res) => res.json())
      .then((data) => setLast(data));
  }, []);
  return (
    <div>
      <h1
        className="text-3xl text-center font-bold uppercase
            mt-5"
      >
        Brand <span className="text-purple-400">Name</span>
      </h1>
      <div className="flex justify-center">
        <progress class="progress w-64 mt-3 bg-purple-500 "></progress>
      </div>
      <div className="mt-5 bg-black">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {last.map((phone) => (
            <SwiperSlide key={phone.id}>
              <BrandCard phone={phone}></BrandCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandName;
