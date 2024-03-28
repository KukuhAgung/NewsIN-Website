import React from "react";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSwiper } from "swiper/react";

const index = ({ position }) => {
  const [carouselMax, setCarouselMax] = useState(false);
  const transform = carouselMax ? "left-0" : "right-0";
  const swiper = useSwiper();
  return (
    <div className={`flex bottom-[50%] ${transform} ${position} px-4 z-10`}>
      {carouselMax ? (
        <IoIosArrowBack
          onClick={() => swiper.slidePrev()}
          className="w-[30px] cursor-pointer h-[30px] p-1 text-white bg-primary rounded-full z-10"
        />
      ) : (
        <IoIosArrowForward
          onClick={() => swiper.slideNext()}
          className="w-[30px] cursor-pointer h-[30px] p-1 text-white bg-primary rounded-full z-10"
        />
      )}
    </div>
  );
};

export default index;
