import React from "react";
import { twMerge } from "tailwind-merge";

const index = ({ children, className }) => {
  return (
    <button
      className={twMerge(
        "bg-primary px-8 py-2 text-white text-[1rem] rounded-2xl",
        className
      )}
    >
      {children}
    </button>
  );
};

export default index;
