import React from "react";
import { motion } from "framer-motion";
import { IoSearch } from "react-icons/io5";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import Button from "../components/Button";
import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const navbartoggle = () => {
    setNavbar(!navbar);
  };
  const position = navbar ? "top-0" : "-top-[200%]";
  return (
    <div className="md:mx-4 h-fit">
      <div className="flex items-center justify-between w-full p-4">
        <div onClick={navbartoggle} className="flex items-center md:gap-x-20">
          <IoIosMenu className="w-[30px] h-[40px] text-primary cursor-pointer md:hidden" />
          <img
            src="/images/logo.svg"
            alt="logo"
            className="w-28 md:w-[130px]"
          />
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
      <div className=" bg-primary py-3 md:rounded-b-xl">
        <Button
          className={"bg-white text-title font-semibold text-[8px] px-2 ml-4"}
        >
          TODAY'S HEADLINES
        </Button>
      </div>
      <div
        className={`absolute h-screen w-screen bg-white z-1 ${position} transition-all duration-500 ease-in-out`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="w-fit"
          onClick={navbartoggle}
        >
          <IoIosClose className="relative w-[40px] h-[40px] text-primary cursor-pointer top-4 left-2" />
        </motion.div>
        <div>test</div>
      </div>
      <div className="flex items-center justify-center w-full md:w-[70.5%] py-6 bg-sub my-2">
        <img
          src="/images/iklan.svg"
          alt="ads"
          className="w-[226px] rounded-md"
        />
      </div>
    </div>
  );
};

export default Navbar;
