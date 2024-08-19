import React from "react";

type BlogTitleProps = {
  title: string;
};

const BlogTitle: React.FC<BlogTitleProps> = ({ title }) => {
  return (
    <h2 className="mt-[10px] mb-[18px] lg:text-[33px] md:text-[27px] leading-[1.5] font-bold">
      {title}
    </h2>
  );
};

export default BlogTitle;
