import React, { useEffect, useState } from "react";
import LastsCard from "./LastsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
const LatestPhone = () => {
  const [last, setLast] = useState([]);
  useEffect(() => {
    fetch("lastphone.json")
      .then((res) => res.json())
      .then((data) => setLast(data));
  }, []);
  return (
    <div>
      <h1
        className="text-3xl text-center font-bold uppercase
            mt-5"
      >
        Latest <span className="text-purple-400">Phone</span>
      </h1>

      <div className="mt-5">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {last.map((phone) => (
            <SwiperSlide key={phone.id}>
              <LastsCard phone={phone}></LastsCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LatestPhone;
