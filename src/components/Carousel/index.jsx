import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Navigation from "./nav-btn/index.jsx";
import "swiper/css";
import "swiper/css/autoplay";

const Slider = ({ News, Slides, Nav, Loading }) => {
  const isLoading = Loading;

  return (
    <>
      {isLoading ? (
        <div></div>
      ) : (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={Slides}
          autoplay={{ pauseOnMouseEnter: true, delay: 6000 }}
          loop={true}
          className="md:hidden py-6"
        >
          {News.map(
            (news, index) =>
              news.urlToImage && (
                <SwiperSlide
                  key={index}
                  className="flex flex-wrap gap-1 items-center justify-center"
                >
                  <div className="flex flex-wrap gap-1 items-center justify-center w-[60%] border p-4 rounded-lg hover:shadow-smm transition-all hover:duration-500 cursor-pointer">
                    <img
                      src={news.urlToImage}
                      alt={news.urlToImage}
                      className="w-full"
                    />
                    <div className="flex flex-col gap-y-2 w-full">
                      <h1 className="text-title font-semibold text-[14px]">
                        {news.title}
                      </h1>
                      <h6 className="text-sub font-medium text-[11px]">
                        {news.description}
                      </h6>
                    </div>
                    <div className="flex gap-3 items-center w-full">
                      <h6 className="text-primary font-semibold text-[11px]">
                        Published at
                      </h6>
                      <FaCircle className="text-sub w-[8px] h-[8px]" />
                      <p className="text-sub font-medium text-[9px]">
                        {news.publishedAt}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              )
          )}
          <Navigation display={Nav} />
        </Swiper>
      )}
    </>
  );
};

export default Slider;
