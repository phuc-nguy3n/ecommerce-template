import React from "react";

interface TagNameProps {
  text: string;
}

const TagName: React.FC<TagNameProps> = ({ text }) => {
  return (
    <div className="px-[8px] leading-[26px] text-[12px] font-bold uppercase text-white bg-[#007BFF] rounded-[3px] w-fit hover:bg-black cursor-pointer transition-colors duration-300 ease-in-out">
      {text}
    </div>
  );
};

export default TagName;
