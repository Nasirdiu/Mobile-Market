import React from "react";

const LastsCard = ({ phone }) => {
  console.log(phone);
  return (
    <div className="">
      <div class="card w-96 bg-base-200 max-h-96 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src={phone.img}
            alt=""

            class="rounded-xl w-full h-52"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{phone.name}</h2>
          <p>Price :${phone.price}</p>
          <div class="card-actions">
            <button class="btn btn-success  btn-sm">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastsCard;
