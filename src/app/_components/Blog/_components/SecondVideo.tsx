import React from "react";

import { IoMdPlay } from "react-icons/io";

type SecondVideoProps = {
  url: string;
};

const SecondVideo: React.FC<SecondVideoProps> = ({ url }) => {
  return (
    <div className="my-[24px] py-[8px] relative ">
      <img
        className="object-cover xl:w-[651px] lg:w-[459px] md:w-[526px] sm:w-[573px] w-full lg:h-[300px] sm:h-[280px] h-[200px]"
        src={url}
        alt=""
      />

      <div className="absolute w-full lg:h-[300px] sm:h-[280px] h-[200px] top-[8px] bg-black bg-opacity-[0.5] flex justify-center items-center">
        <div className="bg-white p-3 rounded-full cursor-pointer">
          <IoMdPlay className="text-[24px]" />
        </div>
      </div>
    </div>
  );
};

export default SecondVideo;
