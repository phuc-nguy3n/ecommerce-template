import React from "react";

type SecondVideoProps = {
  url: string;
};

const SecondVideo: React.FC<SecondVideoProps> = ({ url }) => {
  return (
    <div className="my-[24px] py-[8px]">
      <img
        className="object-cover xl:w-[651px] lg:w-[459px] md:w-[566px] lg:h-[300px] md:h-[280px]"
        src={url}
        alt=""
      />
    </div>
  );
};

export default SecondVideo;
