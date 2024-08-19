"use client";

import ThemeContext from "@/context/themeContext";
import React, { useContext } from "react";

const HeaderBody = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className="flex justify-center py-[25px] dark:bg-[#ffffff] bg-[#1e1e1e]">
      <div>
        <img
          src={darkTheme ? "/logo.png" : "/logo.png"}
          alt="logo"
          className="cursor-pointer lg:block hidden w-[346px] h-[114px]"
        />
      </div>

      <div className="container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px] lg:hidden block">
        <h1 className=" h-[60px] bg-[#f3f4f6] font-bold text-[34px] flex items-center justify-center">
          700 x 60
        </h1>
      </div>
    </div>
  );
};

export default HeaderBody;
