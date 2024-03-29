import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const Navigation = [
  {
    id: 1,
    title: "About US",
  },
  {
    id: 2,
    title: "Services",
  },
  {
    id: 3,
    title: "Sitemap",
  },
  {
    id: 4,
    title: "Languages",
  },
  {
    id: 5,
    title: "Business",
  },
  {
    id: 6,
    title: "Science",
  },
  {
    id: 7,
    title: "General",
  },
  {
    id: 8,
    title: "Health",
  },
  {
    id: 9,
    title: "Entertainment",
  },
  {
    id: 10,
    title: "Sports",
  },
  {
    id: 11,
    title: "Technology",
  },
];
const Networks = [
  {
    id: 1,
    image: "/images/bbcnews.svg",
  },
  {
    id: 2,
    image: "/images/cnn.svg",
  },
  {
    id: 3,
    image: "/images/cnet.svg",
  },
  {
    id: 4,
    image: "/images/liputan.svg",
  },
  {
    id: 5,
    image: "/images/brilio.svg",
  },
  {
    id: 6,
    image: "/images/space.svg",
  },
  {
    id: 7,
    image: "/images/wspost.svg",
  },
];
function Footer() {
  return (
    <>
      <div className="flex flex-col gap-y-4 px-4 mt-10">
        <div className="flex gap-x-1 items-center">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-6 w-full">
          <div className="flex flex-col gap-y-4 w-full md:-[40%] border-b border-sub">
            <div className="flex flex-wrap gap-2 py-4 px-3">
              {Navigation.map((nav) => (
                <div className="w-[30%]">
                  <h6
                    key={nav.id}
                    className="text-[14px] font-footer text-footer opacity-90"
                  >
                    {nav.title}
                  </h6>
                </div>
              ))}
            </div>
            <div className="flex gap-x-4 p-2 pb-6">
              <FaFacebookSquare className="w-[25px] h-[26px] text-primary" />
              <FaInstagramSquare className="w-[25px] h-[26px] text-primary" />
              <FaYoutubeSquare className="w-[25px] h-[26px] text-primary" />
              <FaWhatsappSquare className="w-[25px] h-[26px] text-primary" />
            </div>
          </div>
          <div className="flex flex-col gap-y-4 w-full md:-[60%] px-2">
            <h6 className="font-footer uppercase text-footer">Network</h6>
            <div className="flex flex-wrap gap-y-3 gap-x-6 py-2">
              {Networks.map((network) => (
                <div className="w-[100px]">
                  <img
                    src={network.image}
                    alt={network.id}
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
