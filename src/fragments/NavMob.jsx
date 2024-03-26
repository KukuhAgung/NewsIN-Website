import React from "react";
import { IoPersonCircle, IoSearch } from "react-icons/io5";

const NavMob = ({ Navbar }) => {
  const position = Navbar ? "right-0" : "right-[200%]";
  return (
    <>
      <div
        className={`relative h-[65vh] w-full bg-white my-8 flex flex-col gap-y-6 z-1 py-4 ${position}`}
      >
        <div className="flex justify-between items-center">
          <div className="flex w-full items-center gap-1">
            <IoPersonCircle className="w-[45px] h-[45px] text-sub" />
            <div className="flex flex-col">
              <h6 className="text-title font-bold text-[11px]">
                Hello <span className="text-primary">News</span>In
              </h6>
              <h6 className="text-primary font-bold text-[13px]">
                Login/Register
              </h6>
            </div>
          </div>
          <IoSearch className="w-[25px] h-[40px] text-title" />
        </div>
        <div className="w-full flex flex-col px-2 gap-y-2">
          <h6 className="text-primary font-bold text-[13px]">Categories</h6>
          <div className="">
            <ul className="grid grid-cols-2 gap-2">
              <li className="text-[13px] font-medium text-sub">
                <a href="#">Business</a>
              </li>
              <li className="text-[13px] font-medium text-sub">
                <a href="#">Entertainment</a>
              </li>
              <li className="text-[13px] font-medium text-sub">
                <a href="#">General</a>
              </li>
              <li className="text-[13px] font-medium text-sub">
                <a href="#">Health</a>
              </li>
              <li className="text-[13px] font-medium text-sub">
                <a href="#">Science</a>
              </li>
              <li className="text-[13px] font-medium text-sub">
                <a href="#">Sports</a>
              </li>
              <li className="text-[13px] font-medium text-sub">
                <a href="#">Technology</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col px-2 gap-y-2">
          <h6 className="text-primary font-bold text-[13px]">Languages</h6>
          <div className="">
            <ul className="grid grid-cols-5 gap-2">
              <li className="text-[13px] font-medium text-sub text-center rounded-sm border border-primary">
                <a href="#">AE</a>
              </li>
              <li className="text-[13px] font-medium text-sub text-center rounded-sm border border-primary">
                <a href="#">AR</a>
              </li>
              <li className="text-[13px] font-medium text-sub text-center rounded-sm border border-primary">
                <a href="#">BE</a>
              </li>
              <li className="text-[13px] font-medium text-sub text-center rounded-sm border border-primary">
                <a href="#">CH</a>
              </li>
              <li className="text-[13px] font-medium text-sub text-center rounded-sm border border-primary">
                <a href="#">IN</a>
              </li>
              <li className="text-[13px] font-medium text-sub text-center rounded-sm border border-primary">
                <a href="#">JP</a>
              </li>
              <li className="text-[13px] font-medium text-sub text-center rounded-sm border border-primary">
                <a href="#">KR</a>
              </li>
              <li className="text-[13px] font-medium text-sub text-center rounded-sm border border-primary">
                <a href="#">RU</a>
              </li>
              <li className="text-[13px] font-medium text-sub text-center rounded-sm border border-primary">
                <a href="#">US</a>
              </li>
              <li className="text-[13px] font-medium text-sub text-center rounded-sm border border-primary">
                <a href="#">HK</a>
              </li>
              <li className="text-[13px] font-medium text-sub text-center rounded-sm border border-primary">
                <a href="#">MY</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col px-2 gap-y-2">
          <h6 className="text-primary font-bold text-[13px]">Network</h6>
          <div className="grid grid-cols-4 gap-1 items-center">
            <img src="/images/bbcnews.svg" alt="bbc" className="w-full h-6" />
            <img src="/images/cnn.svg" alt="bbc" className="w-full h-6" />
            <img src="/images/liputan.svg" alt="bbc" className="w-full h-6" />
            <img src="/images/brilio.svg" alt="bbc" className="w-full h-6" />
            <img src="/images/cnet.svg" alt="bbc" className="w-full h-6" />
            <img src="/images/space.svg" alt="bbc" className="w-full h-6" />
            <img src="/images/wspost.svg" alt="bbc" className="w-full h-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMob;
