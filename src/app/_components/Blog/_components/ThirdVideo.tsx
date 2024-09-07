import React from "react";
import { IoMdPlay } from "react-icons/io";

type ThirdVideoProps = {
  url: string;
};

const ThirdVideo: React.FC<ThirdVideoProps> = ({ url }) => {
  return (
    <div className="relative md:col-span-1 col-span-2">
      <img
        className="object-cover xl:w-[315px] lg:w-[219px] md:w-[253px] w-full xl:h-[280px] lg:h-[203px] md:h-[234px] sm:h-[380px] h-[200px]"
        src={url}
        alt=""
      />

      <div className="absolute w-full xl:h-[280px] lg:h-[203px] md:h-[234px] sm:h-[380px] h-[200px] top-[0] bg-black bg-opacity-[0.5] flex justify-center items-center">
        <div className="bg-white p-3 rounded-full cursor-pointer">
          <IoMdPlay className="text-[24px]" />
        </div>
      </div>
    </div>
  );
};

export default ThirdVideo;
