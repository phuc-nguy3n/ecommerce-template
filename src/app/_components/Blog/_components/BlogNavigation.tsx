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
    <div className="blog-navigation flex items-center justify-between border border-x-0 border-y-1 border-[#EFEFEF] sm:py-[30px] py-[16px]">
      <div className="nav-btn pev flex items-center max-w-[350px] sm:gap-[20px] gap-[10px]">
        <div className="md:min-w-[80px] min-w-[50px]">
          <img
            className="md:w-[80px] w-[50px] md:h-[80px] h-[50px] object-cover rounded-full"
            src={pevBlog.img}
            alt=""
          />
        </div>

        <div className="sm:mr-[31px] mr-0">
          <h5 className="text-[13px] mb-[12px] font-bold md:line-clamp-2  hidden">
            {pevBlog.title}
          </h5>
          <p className="flex items-center font-medium text-[#54595F] dark:text-[--text-title]">
            <FaArrowLeft className="mr-[7px] text-[#FF1D50]" /> Prev
          </p>
        </div>
      </div>

      <div className="w-[1px] h-[80px] bg-[#EFEFEF]"></div>

      <div className="nav-btn pev flex items-center max-w-[350px] sm:gap-[20px] gap-[10px]">
        <div className="md:min-w-[80px] min-w-[50px] order-2">
          <img
            className="md:w-[80px] w-[50px] md:h-[80px] h-[50px] object-cover rounded-full"
            src={nextBlog.img}
            alt=""
          />
        </div>

        <div className="sm:ml-[31px] ml-0">
          <h5 className="text-[13px] mb-[12px] font-bold text-right md:line-clamp-2 hidden">
            {nextBlog.title}
          </h5>
          <p className="flex items-center font-medium text-[#54595F] dark:text-[--text-title] justify-end">
            Next <FaArrowRight className="ml-[7px] text-[#FF1D50]" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogNavigation;
