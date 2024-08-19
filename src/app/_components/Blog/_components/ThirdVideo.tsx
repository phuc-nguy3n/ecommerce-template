import React from "react";

type ThirdVideoProps = {
  url: string;
};

const ThirdVideo: React.FC<ThirdVideoProps> = ({ url }) => {
  return (
    <div>
      <img
        className="object-cover xl:w-[315px] lg:w-[219px] md:w-[253px] xl:h-[280px] lg:h-[203px] md:h-[234px]"
        src={url}
        alt=""
      />
    </div>
  );
};

export default ThirdVideo;
