import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

type Blog = {
  img: string;
  title: string;
};

type BlogNavigationProps = {
  pevBlog: Blog;
  nextBlog: Blog;
};

const BlogNavigation: React.FC<BlogNavigationProps> = ({
  pevBlog,
  nextBlog,
}) => {
  return (
    <div className="blog-navigation flex items-center justify-between border border-x-0 border-y-1 border-[#EFEFEF] py-[30px]">
      <div className="nav-btn pev flex items-center max-w-[350px] gap-[20px]">
        <div className="min-w-[80px]">
          <img
            className="w-[80px] h-[80px] object-cover rounded-full"
            src={pevBlog.img}
            alt=""
          />
        </div>

        <div>
          <h5 className="text-[13px] mb-[12px] font-bold">{pevBlog.title}</h5>
          <p className="flex items-center font-medium text-[#54595F]">
            <FaArrowLeft className="mr-[7px] text-[#FF1D50]" /> Prev
          </p>
        </div>
      </div>

      <div className="w-[1px] h-[80px] bg-[#EFEFEF]"></div>

      <div className="nav-btn pev flex items-center max-w-[350px] gap-[20px]">
        <div className="min-w-[80px] order-2">
          <img
            className="w-[80px] h-[80px] object-cover rounded-full"
            src={nextBlog.img}
            alt=""
          />
        </div>

        <div>
          <h5 className="text-[13px] mb-[12px] font-bold text-right">
            {nextBlog.title}
          </h5>
          <p className="flex items-center font-medium text-[#54595F] justify-end">
            Next <FaArrowRight className="ml-[7px] text-[#FF1D50]" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogNavigation;
