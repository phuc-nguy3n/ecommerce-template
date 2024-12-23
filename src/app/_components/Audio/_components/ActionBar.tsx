import { formatNumber } from "@/app/utils/formatNumber";
import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaEye, FaShareNodes } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdPrint } from "react-icons/md";

type ActionBarProps = {
  liked: number;
  viewed: number;
  shared: number;
};

const ActionBar: React.FC<ActionBarProps> = ({ liked, viewed, shared }) => {
  let formatLiked = formatNumber(liked);
  let formatViewed = formatNumber(viewed);
  let formatShared = formatNumber(shared);

  return (
    <div className="flex items-center justify-between mb-[24px]">
      <div className="flex items-center gap-[10px]">
        <button className="text-[14px] text-[#54595F] font-semibold bg-[#f5f5f5] border border-1 border-[#EFEFEF] rounded-[4px] px-[10px] py-[4px] flex items-center gap-[7px]">
          Print: <MdPrint className="text-[#FF1D50] text-[18px]" />
        </button>

        <button className="text-[14px] text-[#54595F] font-semibold bg-[#f5f5f5] border border-1 border-[#EFEFEF] rounded-[4px] px-[10px] py-[4px] flex items-center gap-[7px]">
          Email: <IoMdMail className="text-[#FF1D50] text-[18px]" />
        </button>
      </div>

      <div className="flex items-center gap-[10px]">
        <button className="text-[14px] text-[#54595F] font-semibold bg-[#f5f5f5] border border-1 border-[#EFEFEF] rounded-[4px] px-[10px] py-[4px] flex items-center gap-[7px] ml-auto">
          {formatLiked} <AiFillLike className="text-[#FF1D50] text-[18px]" />
        </button>

        <button className="text-[14px] text-[#54595F] font-semibold bg-[#f5f5f5] border border-1 border-[#EFEFEF] rounded-[4px] px-[10px] py-[4px] flex items-center gap-[7px]">
          {formatViewed} <FaEye className="text-[#FF1D50] text-[18px]" />
        </button>

        <button className="text-[14px] text-[#54595F] font-semibold bg-[#f5f5f5] border border-1 border-[#EFEFEF] rounded-[4px] px-[10px] py-[4px] flex items-center gap-[7px]">
          {formatShared} <FaShareNodes className="text-[#FF1D50] text-[18px]" />
        </button>
      </div>
    </div>
  );
};

export default ActionBar;
