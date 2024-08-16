import React from "react";
import { FaCalendarDays, FaRegComments, FaRegUser } from "react-icons/fa6";
import { HiOutlineBookOpen } from "react-icons/hi2";

type BlogInfoProps = {
  createdBy: string;
  createdDate: string;
  comments: number;
  readingTime: number;
};

const BlogInfo: React.FC<BlogInfoProps> = ({
  createdBy,
  createdDate,
  comments,
  readingTime,
}) => {
  return (
    <div className="flex items-center gap-3 text-[#54595F] mb-[24px]">
      <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
        <FaRegUser />
        <p className="mt-0.5 capitalize">{createdBy}</p>
      </span>

      <span className="text-[#EFEFEF]">|</span>

      <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
        <FaCalendarDays />
        <p className="mt-0.5 capitalize">{createdDate}</p>
      </span>

      <span className="text-[#EFEFEF]">|</span>

      <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
        <FaRegComments className="text-[16px]" />
        <p className="mt-0.5 capitalize">Comments ({comments})</p>
      </span>

      <span className="text-[#EFEFEF]">|</span>

      <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
        <HiOutlineBookOpen className="text-[16px]" />
        <p className="mt-0.5 capitalize">{readingTime} Mins Read</p>
      </span>
    </div>
  );
};

export default BlogInfo;
