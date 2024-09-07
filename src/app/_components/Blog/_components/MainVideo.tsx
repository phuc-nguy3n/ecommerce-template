import React from "react";

type MainVideoProps = {
  url: string;
};

const MainVideo: React.FC<MainVideoProps> = ({ url }) => {
  return (
    <div className="mb-[35px]">
      <img
        className="object-cover xl:w-[721px] lg:w-[529px] md:w-[596px] xl:h-[380px] lg:h-[312px] md:h-[358px] h-[200px]"
        src={url}
        alt=""
      />
    </div>
  );
};

export default MainVideo;
