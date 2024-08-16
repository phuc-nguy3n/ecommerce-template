import React from "react";
import { IoIosArrowForward } from "react-icons/io";

type BreadcrumbItem = {
  label: string;
  link?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

const Breadcrumb = ({ items }: Props) => {
  return (
    <div className="breadcrumb py-[18px] bg-[#EFEFEF]">
      <div className="container xl:max-w-[1248px] lg:max-w-[960px] max-w-[720px]">
        <ul className="breadcrumb-menu flex gap-2">
          {items.map((item, index) => (
            <li
              key={index}
              className={`inline-flex items-center gap-2 uppercase cursor-pointer font-semibold ${
                index === items.length - 1 ? "text-[#FF1D50]" : "text-gray-800"
              }`}
            >
              {item.link ? <a href={item.link}>{item.label}</a> : item.label}
              {index < items.length - 1 && <IoIosArrowForward />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
