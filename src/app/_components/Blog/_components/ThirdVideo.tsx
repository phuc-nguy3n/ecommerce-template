import React from "react";

type ThirdVideoProps = {
  url: string;
};

const ThirdVideo: React.FC<ThirdVideoProps> = ({ url }) => {
  return (
    <div>
      <img className="object-cover w-[315px] h-[280px]" src={url} alt="" />
    </div>
  );
};

export default ThirdVideo;
