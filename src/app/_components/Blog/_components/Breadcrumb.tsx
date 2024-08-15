import React from "react";
import { IoIosArrowForward } from "react-icons/io";

type Props = {};

const Breadcrumb = (props: Props) => {
  return (
    <div className="breadcrumb py-[18px] bg-[#EFEFEF]">
      <div className="container xl:max-w-[1248px] lg:max-w-[960px] max-w-[720px]">
        <ul className="breadcumb-menu flex gap-2">
          <li className="inline-flex items-center gap-2 uppercase cursor-pointer font-semibold">
            Home <IoIosArrowForward />
          </li>
          <li className="uppercase  font-semibold text-[#FF1D50]">
            Blog details
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
