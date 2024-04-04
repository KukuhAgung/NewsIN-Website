import React from "react";

const index = ({ time, match, key }) => {
  return (
    <div key={key} className="flex justify-between items-center border-t p-2">
      <div className="flex items-center gap-x-2">
        <h6 className="text-[14px] font-bold text-primary leading-[2%]">
          {time}
        </h6>
        <span className="font-semibold rounded-full text-primary">|</span>
        <h6 className="text-[12px]  text-primary">{match}</h6>
      </div>
      <div className="flex gap-x-3 items-center w-fit">
        <img
          src="/images/england.png"
          alt="england"
          width="24px"
          className="border rounded-sm"
        />
        <h6 className="text-[12px]  text-primary">Premiere League</h6>
      </div>
    </div>
  );
};

export default index;
