import React from "react";

type MainVideoProps = {
  url: string;
};

const MainVideo: React.FC<MainVideoProps> = ({ url }) => {
  return (
    <div className="mb-[35px]">
      <img className="object-cover w-[721px] h-[380px]" src={url} alt="" />
    </div>
  );
};

export default MainVideo;
