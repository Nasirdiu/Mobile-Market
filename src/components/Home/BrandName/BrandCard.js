import React from "react";

const BrandCard = ({ phone }) => {
  return (
    <div>
      <div class=" w-52 bg-black">
        <figure>
          <img src={phone.img} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default BrandCard;
