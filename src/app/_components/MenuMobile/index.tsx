"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { subnavData } from "../Header/HeaderFooter";

import "./styles.css";

type MenuMobileProps = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const MenuMobile: React.FC<MenuMobileProps> = ({ isOpen, setOpen }) => {
  const [isActiveHomeMenu, setActiveHomeMenu] = useState(false);
  const [isActiveCateMenu, setActiveCateMenu] = useState(false);
  const [isActivePagesMenu, setActivePagesMenu] = useState(false);
  const [isActiveBlogMenu, setActiveBlogMenu] = useState(false);

  return (
    <div
      className={`menu-wrap fixed top-0 right-0 left-0 bottom-0 w-full h-full bg-black bg-opacity-50 z-[9999] ${
        isOpen ? "visible-custom" : ""
      }`}
    >
      <div className="max-w-[310px] w-full bg-white h-full relative z-[1] opacity-1 border-r-[3px] border-[#FF1D50]">
        <button
          className="absolute right-[-16.5px] top-[25px] w-[33px] h-[33px] text-[18px] bg-[#FF1D50] text-white rounded-full flex items-center justify-between"
          onClick={() => {
            setOpen(false);
          }}
        >
          <IoCloseOutline className="flex-grow text-[24px]" />
        </button>

        <div className="pt-[40px] pb-[30px] flex justify-center bg-[#EFF3FA]">
          <div className="cursor-pointer">
            <img src="/logo-black.svg" alt="logo" />
          </div>
        </div>

        <div className="menu-body overflow-y-scroll pb-[40px] mt-[33px]">
          <ul className="nav-menu px-[40px]">
            <li>
              <p className="flex items-center justify-between py-[12px] ">
                <span
                  className={`flex items-center gap-1 cursor-pointer ${
                    isActiveHomeMenu ? "active" : ""
                  }`}
                >
                  <IoIosArrowForward /> Home
                </span>

                <button
                  className="text-[18px] bg-[#F5F5F5] px-2 rounded-full"
                  onClick={() => {
                    setActiveHomeMenu(!isActiveHomeMenu);
                  }}
                >
                  {isActiveHomeMenu ? "-" : "+"}
                </button>
              </p>

              <ul
                className={`subnav-menu ${
                  isActiveHomeMenu ? "submenu-open" : "submenu-close"
                }`}
              >
                {subnavData.home.map((item, index) => (
                  <li className="pl-[20px]" key={index}>
                    <span className="flex items-center gap-1 cursor-pointer py-[12px]">
                      <IoIosArrowForward /> {item}
                    </span>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <p className="flex items-center justify-between py-[12px]">
                <span className="flex items-center gap-1 cursor-pointer">
                  <IoIosArrowForward /> About Us
                </span>
              </p>
            </li>

            <li>
              <p className="flex items-center justify-between py-[12px] ">
                <span
                  className={`flex items-center gap-1 cursor-pointer ${
                    isActiveCateMenu ? "active" : ""
                  }`}
                >
                  <IoIosArrowForward /> Category
                </span>

                <button
                  className="text-[18px] bg-[#F5F5F5] px-2 rounded-full"
                  onClick={() => {
                    setActiveCateMenu(!isActiveCateMenu);
                  }}
                >
                  {isActiveCateMenu ? "-" : "+"}
                </button>
              </p>

              <ul
                className={`subnav-menu ${
                  isActiveCateMenu ? "submenu-open" : "submenu-close"
                }`}
              >
                {subnavData.category.map((item, index) => (
                  <li className="pl-[20px]" key={index}>
                    <span className="flex items-center gap-1 cursor-pointer py-[12px]">
                      <IoIosArrowForward /> {item}
                    </span>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <p className="flex items-center justify-between py-[12px] ">
                <span
                  className={`flex items-center gap-1 cursor-pointer ${
                    isActivePagesMenu ? "active" : ""
                  }`}
                >
                  <IoIosArrowForward /> Pages
                </span>

                <button
                  className="text-[18px] bg-[#F5F5F5] px-2 rounded-full"
                  onClick={() => {
                    setActivePagesMenu(!isActivePagesMenu);
                  }}
                >
                  {isActivePagesMenu ? "-" : "+"}
                </button>
              </p>

              <ul
                className={`subnav-menu ${
                  isActivePagesMenu ? "submenu-open" : "submenu-close"
                }`}
              >
                {subnavData.pages.map((item, index) => (
                  <li className="pl-[20px]" key={index}>
                    <span className="flex items-center gap-1 cursor-pointer py-[12px]">
                      <IoIosArrowForward /> {item}
                    </span>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <p className="flex items-center justify-between py-[12px] ">
                <span
                  className={`flex items-center gap-1 cursor-pointer ${
                    isActiveBlogMenu ? "active" : ""
                  }`}
                >
                  <IoIosArrowForward /> Blog
                </span>

                <button
                  className="text-[18px] bg-[#F5F5F5] px-2 rounded-full"
                  onClick={() => {
                    setActiveBlogMenu(!isActiveBlogMenu);
                  }}
                >
                  {isActiveBlogMenu ? "-" : "+"}
                </button>
              </p>

              <ul
                className={`subnav-menu ${
                  isActiveBlogMenu ? "submenu-open" : "submenu-close"
                }`}
              >
                {subnavData.blog.map((item, index) => (
                  <li className="pl-[20px]" key={index}>
                    <span className="flex items-center gap-1 cursor-pointer py-[12px]">
                      <IoIosArrowForward /> {item}
                    </span>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <p className="flex items-center justify-between py-[12px]">
                <span className="flex items-center gap-1 cursor-pointer">
                  <IoIosArrowForward /> Contact
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
