import React from "react";
import { PiQuotesLight } from "react-icons/pi";

type QuoteProps = {
  text: string;
  author: string;
};

const Quote: React.FC<QuoteProps> = ({ text, author }) => {
  return (
    <blockquote className="text-[20px] leading-[1.5] xl:p-[50px] py-[40px] px-[20px] relative bg-[#F5F5F5] overflow-hidden my-[30px] text-[#080809]">
      <p className="mb-[22px] relative z-[3] xl:text-[19px] text-[17px]">
        {text}
      </p>
      <cite className="block text-[13px] relative leading-[1.3] font-semibold not-italic text-[#54595F] pl-[40px] ml-[10px]">
        {author}
      </cite>
      <PiQuotesLight className="absolute xl:bottom-[50px] bottom-[30px] xl:right-[50px] right-[30px] text-[50px] text-[#54595F]" />
    </blockquote>
  );
};

export default Quote;
