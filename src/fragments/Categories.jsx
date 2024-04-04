import React, { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import { FaCircle } from "react-icons/fa";
import { getCategoriesNews } from "../api/api";
import { Category } from "../context/data";

function Categories() {
  const [News, setNews] = useState([]);
  const [FindCategory, setFindCategory] = useState("business");
  const [ActiveNav, setActiveNav] = useState(false);
  const [IsLoading, setIsLoading] = useState(true);

  const getCategory = (q) => {
    const category = Category.find((item) => item.value === q);
    if (category) {
      setActiveNav(!ActiveNav);
      setFindCategory(q);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = () => {
      setTimeout(() => {
        getCategoriesNews(FindCategory).then((res) => {
          setNews(res);
          setIsLoading(false);
        });
      }, 1000);
    };

    fetchData();

    return () => {
      clearTimeout(fetchData);
    };
  }, [FindCategory]);

  return (
    <div className="flex flex-col gap-y-4 px-4">
      <div className="flex flex-wrap gap-4">
        {Category.map((items) => (
          <button
            key={items.id}
            onClick={() => getCategory(items.value)}
            className={`font-medium text-[11px] px-4 py-2 rounded-lg border border-sub ${
              FindCategory === items.value
                ? "bg-primary text-white border-none"
                : "bg-white text-sub"
            }`}
          >
            {items.title}
          </button>
        ))}
      </div>
      <div className="">
        <Carousel Loading={IsLoading} News={News} Slides={1} />
        {IsLoading ? (
          <div className="flex items-center justify-center h-[300px] w-full">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="hidden md:flex gap-3">
            {News.slice(0, 4).map(
              (news, index) =>
                news.urlToImage && (
                  <div
                    key={index}
                    className="flex flex-wrap gap-1 items-center justify-center w-[60%] border p-4 rounded-lg hover:shadow-smm transition-all hover:duration-500 cursor-pointer"
                  >
                    <img
                      src={news.urlToImage}
                      alt={news.title}
                      className="w-full"
                    />
                    <div className="flex flex-col gap-y-2 w-full">
                      <h1 className="text-title font-semibold text-[14px] leading-4">
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
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Categories;
