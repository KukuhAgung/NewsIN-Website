import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const navbartrue = () => {
    setNavbar(!navbar);
  };
  return (
    <div className=" flex items-center justify-between">
      <div className="flex items-center">
        <IoIosMenu onClick={navbartrue} className="w-[30px] h-[40px] text-primary cursor-pointer" />
        <img src="/images/logo.svg" alt="logo" className="w-28" />
      </div>
      <IoSearch className="w-[25px] h-[40px]" />
    </div>
  );
};

export default Navbar;
