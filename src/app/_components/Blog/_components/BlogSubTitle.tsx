import React from "react";

type BlogSubTitleProps = {
  text: string;
};

const BlogSubTitle: React.FC<BlogSubTitleProps> = ({ text }) => {
  return (
    <h3 className="text-[25px] font-bold leading-[1.4] mb-[15px] tracking-wide">
      {text}
    </h3>
  );
};

export default BlogSubTitle;
