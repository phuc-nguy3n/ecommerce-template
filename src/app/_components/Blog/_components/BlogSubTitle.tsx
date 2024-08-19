import React from "react";

type BlogSubTitleProps = {
  text: string;
};

const BlogSubTitle: React.FC<BlogSubTitleProps> = ({ text }) => {
  return (
    <h3 className="xl:text-[25px] lg:text-[19px] md:text-[20px] font-bold leading-[1.4] mb-[15px] tracking-wide">
      {text}
    </h3>
  );
};

export default BlogSubTitle;
