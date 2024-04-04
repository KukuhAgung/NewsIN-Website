import React from "react";
import { FaCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { getTopNews } from "../api/api";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useEffect } from "react";
import { useState } from "react";

function Hero() {
  const [News, setNews] = useState([]);

  useEffect(() => {
    getTopNews().then((res) => setNews(res));
  }, []);

  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
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
        {News.map(
          (news, index) =>
            news.urlToImage && (
              <SwiperSlide key={index} className="flex gap-y-4 md:mx-4">
                <div className="flex flex-wrap gap-1 items-center mt-10">
                  <div className="w-full md:w-[344px] p-4">
                    <img
                      src={news.urlToImage}
                      alt="news"
                      className="rounded-md min-w-full md:min-w-[324px]"
                    />
                  </div>
                  <div className="w-full md:max-w-[400px] flex flex-col gap-y-3 px-4">
                    <div className="flex flex-col gap-y-4">
                      <h1 className="text-title font-bold text-[23px]">
                        {news.title}
                      </h1>
                      <h6 className="text-sub font-medium text-[13px]">
                        {news.description}
                      </h6>
                    </div>
                    <div className="flex gap-3 items-center">
                      <h6 className="text-primary font-semibold text-[11px]">
                        Published at
                      </h6>
                      <FaCircle className="text-sub w-[8px] h-[8px]" />
                      <p className="text-sub font-medium text-[9px]">
                        {news.publishedAt}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </div>
  );
}

export default Hero;
