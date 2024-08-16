import React from "react";

interface ParagraphProps {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  return (
    <p className="mb-[18px] leading-[1.75] text-[#54595F] tracking-wide">
      {text}
    </p>
  );
};

export default Paragraph;
