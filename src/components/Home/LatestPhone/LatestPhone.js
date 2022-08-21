import React, { useEffect, useState } from "react";
import LastsCard from "./LastsCard";

const LatestPhone = () => {
  const [last, setLast] = useState([]);
  useEffect(() => {
    fetch("lastphone.json")
      .then((res) => res.json())
      .then((data) =>setLast(data));
  }, []);
  return (
    <div>
      <h1
        className="text-3xl text-center font-bold uppercase
            mt-5"
      >
        Latest <span className="text-purple-400">Phone</span>
      </h1>
      {
        last.map(phone=><div key={phone.id}>
            <LastsCard phone={phone}></LastsCard>
        </div>)
      }
    </div>
  );
};

export default LatestPhone;
