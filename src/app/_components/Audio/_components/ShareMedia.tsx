import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa6";

const ShareMedia = () => {
  return (
    <div className="max-w-[40px]">
      <div className="sticky top-[80px] left-0">
        <span className="text-[12px] leading-[20px] text-[#080809] font-bold mb-[15px] block capitalize">
          Share Post:
        </span>

        <div>
          <div className="w-[40px] h-[40px] mb-[10px] border border-1 rounded-full flex justify-center items-center cursor-pointer">
            <FaFacebookF className="text-[#1D4292]" />
          </div>

          <div className="w-[40px] h-[40px] mb-[10px] border border-1 rounded-full flex justify-center items-center cursor-pointer">
            <FaTwitter className="text-[#1C96E8]" />
          </div>

          <div className="w-[40px] h-[40px] mb-[10px] border border-1 rounded-full flex justify-center items-center cursor-pointer">
            <FaLinkedinIn className="text-[#0270AD]" />
          </div>

          <div className="w-[40px] h-[40px] mb-[10px] border border-1 rounded-full flex justify-center items-center cursor-pointer">
            <FaPinterestP className="text-[#B7081B]" />
          </div>

          <div className="w-[40px] h-[40px] mb-[10px] border border-1 rounded-full flex justify-center items-center cursor-pointer">
            <FaInstagram className="text-[#AE2EB5]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareMedia;
