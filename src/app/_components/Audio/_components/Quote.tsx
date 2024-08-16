import React from "react";
import { PiQuotesLight } from "react-icons/pi";

type QuoteProps = {
  text: string;
  author: string;
};

const Quote: React.FC<QuoteProps> = ({ text, author }) => {
  return (
    <blockquote className="text-[20px] leading-[1.5] p-[50px] relative bg-[#F5F5F5] overflow-hidden my-[30px] text-[#080809]">
      <p className="mb-[22px] relative z-[3] text-[19px]">{text}</p>
      <cite className="block text-[13px] relative leading-[1.3] font-semibold not-italic text-[#54595F] pl-[40px] ml-[10px]">
        {author}
      </cite>
      <PiQuotesLight className="absolute bottom-[50px] right-[50px] text-[50px] text-[#54595F]" />
    </blockquote>
  );
};

export default Quote;
