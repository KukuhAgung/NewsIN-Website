import React from "react";
import { FaArrowLeft, FaArrowRight, FaCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import Navigation from "../components/Navigation/index";
import "swiper/css";

const News = [
  {
    id: 1,
    img: "/images/berita.svg",
    title: "Moscow concert hall attack: death toll rises to 133",
  },
  {
    id: 2,
    img: "/images/berita.svg",
    title: "Moscow concert hall attack: death toll rises to 133",
  },
  {
    id: 3,
    img: "/images/berita.svg",
    title: "Moscow concert hall attack: death toll rises to 133",
  },
  {
    id: 4,
    img: "/images/berita.svg",
    title: "Moscow concert hall attack: death toll rises to 133",
  },
  {
    id: 5,
    img: "/images/berita.svg",
    title: "Moscow concert hall attack: death toll rises to 133",
  },
  {
    id: 6,
    img: "/images/berita.svg",
    title: "Moscow concert hall attack: death toll rises to 133",
  },
];
function Videos() {
  return (
    <div className="flex flex-col gap-y-4 px-4">
      <div className="flex items-center justify-between gap-2 px-4">
        <div className="flex gap-x-1 items-center">
          <span className="font-bold rounded-full text-primary">|</span>
          <h6 className="text-[13px] font-semibold text-primary leading-[2%]">
            Most Popular Videos
          </h6>
        </div>
        <div className="flex gap-x-3 items-center">
          <h6 className="font-bold text-primary text-[14px] leading-[2%]">
            See all
          </h6>
          <FaArrowRight className="w-[20px] cursor-pointer h-[20px] text-white p-1 bg-primary rounded-md" />
        </div>
      </div>
      <div>
        <Swiper slidesPerView={"auto"}>
          {News.map((news) => (
            <SwiperSlide
              key={news.id}
              className="flex flex-wrap gap-1 items-center justify-center p-4 cursor-pointer max-w-[50%] md:max-w-[25%]"
            >
              <img src={`${news.img}`} alt={`${news.img}`} className="w-full" />
              <div className="flex flex-col gap-y-2 w-full">
                <h1 className="text-title font-semibold text-[14px]">
                  {news.title}
                </h1>
              </div>
              <div className="flex gap-3 items-center w-full">
                <h6 className="text-primary font-semibold text-[11px]">
                  Published at
                </h6>
                <FaCircle className="text-sub w-[8px] h-[8px]" />
                <p className="text-sub font-medium text-[9px]">
                  2024-03-23T15:45:00Z
                </p>
              </div>
            </SwiperSlide>
          ))}
          <Navigation position={"absolute"} />
        </Swiper>
      </div>
    </div>
  );
}

export default Videos;
