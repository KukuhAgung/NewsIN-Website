import React from "react";
import { FaCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Navigation from "./nav-btn/index.jsx";
import "swiper/css";
import "swiper/css/autoplay";

const News = [
  {
    id: 1,
    img: "/images/berita.svg",
    title: "Moscow concert hall attack: death toll rises to 133",
    sub: `Russian President Vladimir Putin says authorities arrested four men
    suspected of carrying out the attack on a suburban Moscow concert
    hall that killed at least 133 people and believe they were fleeing
    to Ukraine. Putin said during an address to the nation Sat…`,
  },
  {
    id: 2,
    img: "/images/berita.svg",
    title: "Moscow concert hall attack: death toll rises to 133",
    sub: `Russian President Vladimir Putin says authorities arrested four men
    suspected of carrying out the attack on a suburban Moscow concert
    hall that killed at least 133 people and believe they were fleeing
    to Ukraine. Putin said during an address to the nation Sat…`,
  },
  {
    id: 3,
    img: "/images/berita.svg",
    title: "Moscow concert hall attack: death toll rises to 133",
    sub: `Russian President Vladimir Putin says authorities arrested four men
    suspected of carrying out the attack on a suburban Moscow concert
    hall that killed at least 133 people and believe they were fleeing
    to Ukraine. Putin said during an address to the nation Sat…`,
  },
  {
    id: 4,
    img: "/images/berita.svg",
    title: "Moscow concert hall attack: death toll rises to 133",
    sub: `Russian President Vladimir Putin says authorities arrested four men
    suspected of carrying out the attack on a suburban Moscow concert
    hall that killed at least 133 people and believe they were fleeing
    to Ukraine. Putin said during an address to the nation Sat…`,
  },
];
export default () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ pauseOnMouseEnter: true, delay: 6000 }}
      loop={true}
      className="md:hidden py-6"
    >
      {News.map((news) => (
        <SwiperSlide
          key={news.id}
          className="flex flex-wrap gap-1 items-center justify-center"
        >
          <div className="flex flex-wrap gap-1 items-center justify-center w-[60%] border p-4 rounded-lg hover:shadow-smm hover:shadow-smm transition-all hover:duration-500 cursor-pointer">
            <img src={`${news.img}`} alt={`${news.img}`} className="w-full" />
            <div className="flex flex-col gap-y-2 w-full">
              <h1 className="text-title font-semibold text-[14px]">
                {news.title}
              </h1>
              <h6 className="text-sub font-medium text-[11px]">{news.sub}</h6>
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
          </div>
        </SwiperSlide>
      ))}
      <Navigation />
    </Swiper>
  );
};
