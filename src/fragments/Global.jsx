import React from "react";
import { FaCircle } from "react-icons/fa";

function Global() {
  return (
    <div className="flex flex-col gap-y-4 px-4">
      <div className="flex gap-x-1 items-center">
        <span className="font-bold rounded-full text-primary">|</span>
        <h6 className="text-[16px] font-semibold text-primary leading-[2%]">
          Global
        </h6>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-1 items-center w-full">
        <div className="w-full md:w-[60%] p-4">
          <img
            src="https://assets-prd.ignimgs.com/2024/03/28/ninja-main-1711623459825.jpg?width=1280"
            alt="news"
            className="rounded-md w-full"
          />
        </div>
        <div className="w-full md:w-[50%] flex flex-col gap-y-3 px-4">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-title font-bold text-[28px]">
              Tyler \"Ninja\" Blevins Reveals Cancer Diagnosis - IGN
            </h1>
            <h6 className="text-sub font-medium text-[15px]">
              Streamer Tyler \"Ninja\" Blevins has revealed he has been
              diagnosed with melanoma, a type of skin cancer.\r\n32-year-old
              Blevins, who has the most-followed Twitch channel with over 18.8
              million followers…
            </h6>
          </div>
          <div className="flex gap-3 items-center">
            <h6 className="text-primary font-semibold text-[11px]">
              Published at
            </h6>
            <FaCircle className="text-sub w-[8px] h-[8px]" />
            <p className="text-sub font-medium text-[9px]">
              2024-03-28T11:01:00Z
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Global;
