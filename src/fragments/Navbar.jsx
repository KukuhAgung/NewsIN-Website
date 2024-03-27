import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import Button from "../components/Button";

const Navbar = ({ SetNav, NavStatus }) => {
  return (
    <>
      <div className="flex items-center justify-between w-full p-4">
        <div onClick={SetNav} className="flex items-center md:gap-x-20">
          {NavStatus ? (
            <IoIosClose className="w-[30px] h-[40px] text-primary cursor-pointer md:hidden" />
          ) : (
            <IoIosMenu className="w-[26px] h-[40px] text-primary cursor-pointer md:hidden" />
          )}
          <img src="/images/logo.svg" alt="logo" className="w-28 md:w-[130px]" />
          <div className="items-center gap-x-4 hidden md:flex">
            <input
              type="text"
              placeholder="What news do you want to read today?"
              className="w-[450px] h-[40px] rounded-3xl px-4 border border-title border-opacity-40 placeholder:font-normal placeholder:text-[12px]"
            />
            <MdOutlineScreenSearchDesktop className="w-[56px] h-[40px] bg-primary py-1 text-white rounded-xl" />
          </div>
        </div>
        <div className="items-center gap-1 hidden md:flex">
          <Button className={"font-medium text-[14px] px-4 rounded-full"}>
            Submit Writing
          </Button>
          <Button
            className={
              "font-medium text-[14px] rounded-full border border-primary text-primary bg-transparent"
            }
          >
            Sign In
          </Button>
        </div>
        <IoSearch className="w-[25px] h-[40px] md:hidden" />
      </div>
      <div className="relative bg-primary py-3 md:rounded-b-xl">
        <Button
          className={"bg-white text-title font-semibold text-[8px] px-2 ml-4"}
        >
          TODAY'S HEADLINES
        </Button>
      </div>
    </>
  );
};

export default Navbar;
