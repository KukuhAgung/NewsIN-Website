import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";

const index = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute bottom-[50%] left-0 right-0 flex justify-between px-4 z-10">
      <FaArrowLeft
        onClick={() => swiper.slidePrev()}
        className="w-[30px] cursor-pointer h-[30px] text-white p-2 bg-primary rounded-full"
      />
      <FaArrowRight
        onClick={() => swiper.slideNext()}
        className="w-[30px] cursor-pointer h-[30px] text-white p-2 bg-primary rounded-full"
      />
    </div>
  );
};

export default index;
