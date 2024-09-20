import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa6";

const ShareMediaMobile = () => {
  return (
    <div className="sm:hidden block mb-[20px]">
      <div className="flex flex-wrap">
        <span className="text-[12px] leading-[20px] text-[--text-title] font-bold mb-[15px] block capitalize mr-[10px]">
          Share Post:
        </span>

        <div className="flex gap-x-[10px] ">
          <div className="w-[40px] h-[40px] mb-[10px] border border-1 rounded-full flex justify-center items-center cursor-pointer dark:bg-black">
            <FaFacebookF className="text-[#1D4292] dark:text-white" />
          </div>

          <div className="w-[40px] h-[40px] mb-[10px] border border-1 rounded-full flex justify-center items-center cursor-pointer dark:bg-black">
            <FaTwitter className="text-[#1C96E8] dark:text-white" />
          </div>

          <div className="w-[40px] h-[40px] mb-[10px] border border-1 rounded-full flex justify-center items-center cursor-pointer dark:bg-black">
            <FaLinkedinIn className="text-[#0270AD] dark:text-white" />
          </div>

          <div className="w-[40px] h-[40px] mb-[10px] border border-1 rounded-full flex justify-center items-center cursor-pointer dark:bg-black">
            <FaPinterestP className="text-[#B7081B] dark:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareMediaMobile;
