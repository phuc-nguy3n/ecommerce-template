import React from "react";

type BlogTitleProps = {
  title: string;
};

const BlogTitle: React.FC<BlogTitleProps> = ({ title }) => {
  return (
    <h2 className="mt-[10px] mb-[18px] text-[34px] leading-[1.5] font-bold">
      {title}
    </h2>
  );
};

export default BlogTitle;
