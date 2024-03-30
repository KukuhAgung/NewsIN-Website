import React from "react";
import { FaCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

function Hero() {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ pauseOnMouseEnter: true, delay: 6000 }}
        loop={true}
        style={{
          "--swiper-pagination-color": "#B00",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-horizontal-gap": "3px",
        }}
      >
        <SwiperSlide className="flex flex-col gap-y-4 md:mx-4">
          <div className="flex items-center justify-center w-full py-6 bg-sub my-2">
            <img
              src="/images/iklan.svg"
              alt="ads"
              className="w-[226px] rounded-md"
            />
          </div>
          <div className="flex flex-wrap gap-1 items-center pb-6">
            <div className="w-full md:w-[344px] p-4">
              <img
                src="/images/berita.svg"
                alt="news"
                className="rounded-md min-w-full md:min-w-[324px]"
              />
            </div>
            <div className="w-full md:max-w-[360px] flex flex-col gap-y-3 px-4">
              <div className="flex flex-col gap-y-4">
                <h1 className="text-title font-bold text-[23px]">
                  Moscow concert hall attack: death toll rises to 133 - The
                  Associated Press
                </h1>
                <h6 className="text-sub font-medium text-[13px]">
                  Russian President Vladimir Putin says authorities arrested
                  four men suspected of carrying out the attack on a suburban
                  Moscow concert hall that killed at least 133 people and
                  believe they were fleeing to Ukraine. Putin said during an
                  address to the nation Sat…
                </h6>
              </div>
              <div className="flex gap-3 items-center">
                <h6 className="text-primary font-semibold text-[11px]">
                  Published at
                </h6>
                <FaCircle className="text-sub w-[8px] h-[8px]" />
                <p className="text-sub font-medium text-[9px]">
                  2024-03-23T15:45:00Z
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col gap-y-4 md:mx-4">
          <div className="flex items-center justify-center w-full py-6 bg-sub my-2">
            <img
              src="/images/iklan.svg"
              alt="ads"
              className="w-[226px] rounded-md"
            />
          </div>
          <div className="flex flex-wrap gap-1 items-center pb-6">
            <div className="w-full md:w-[344px] p-4">
              <img
                src="/images/berita.svg"
                alt="news"
                className="rounded-md min-w-full md:min-w-[324px]"
              />
            </div>
            <div className="w-full md:max-w-[360px] flex flex-col gap-y-3 px-4">
              <div className="flex flex-col gap-y-4">
                <h1 className="text-title font-bold text-[23px]">
                  Moscow concert hall attack: death toll rises to 133 - The
                  Associated Press
                </h1>
                <h6 className="text-sub font-medium text-[13px]">
                  Russian President Vladimir Putin says authorities arrested
                  four men suspected of carrying out the attack on a suburban
                  Moscow concert hall that killed at least 133 people and
                  believe they were fleeing to Ukraine. Putin said during an
                  address to the nation Sat…
                </h6>
              </div>
              <div className="flex gap-3 items-center">
                <h6 className="text-primary font-semibold text-[11px]">
                  Published at
                </h6>
                <FaCircle className="text-sub w-[8px] h-[8px]" />
                <p className="text-sub font-medium text-[9px]">
                  2024-03-23T15:45:00Z
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;
