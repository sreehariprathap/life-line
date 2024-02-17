import React from "react";

const StepCard = ({ number, title, image }) => {
  return (
    <div className="flex p-4 rounded-md bg-slate-100 shadow-sm hover:shadow-xl cursor-pointer ease-linear transition-all flex-col items-center w-[25%] gap-3">
      <div className="h-10 flex w-full justify-start items-center">
        <div className="p-2 rounded-full bg-orange-500 text-white font-bold  px-3">
          <h1>{number}</h1>
        </div>
        <div className="ml-3">
          <h1>{title}</h1>
        </div>
      </div>
      {image ? <img src={image} alt="card image" className="w-full" /> :  <div className="w-full h-full flex justify-center items-center"><h1 className='text-6xl'>✅</h1></div>}
    </div>
  );
};

export default StepCard;
