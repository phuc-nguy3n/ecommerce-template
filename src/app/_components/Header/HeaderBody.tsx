import React from "react";

const HeaderBody = () => {
  return (
    <div className="flex justify-center py-[25px] bg-[#1e1e1e]">
      <img
        src="/logo-white.svg"
        alt="logo"
        className="cursor-pointer lg:block hidden"
      />

      <div className="container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px] lg:hidden block">
        <h1 className=" h-[60px] bg-[#f3f4f6] font-bold text-[34px] flex items-center justify-center">
          700 x 60
        </h1>
      </div>
    </div>
  );
};

export default HeaderBody;
