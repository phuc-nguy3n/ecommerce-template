import React from "react";

type SecondVideoProps = {
  url: string;
};

const SecondVideo: React.FC<SecondVideoProps> = ({ url }) => {
  return (
    <div className="my-[24px] py-[8px]">
      <img className="object-cover w-[700px] h-[300px]" src={url} alt="" />
    </div>
  );
};

export default SecondVideo;
