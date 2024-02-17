import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="flex p-4 rounded-md bg-slate-100 shadow-sm hover:shadow-xl cursor-pointer ease-linear transition-all flex-col items-center w-[20%] gap-3">
      <img src={image} alt="card image" className="w-24 h-24" />
      <h1 className="text-lg font-bold text-start w-full">{title}</h1>
      <p className="text-md text-start">{description}</p>
    </div>
  );
};

export default Card;
