"use client";

import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";

const subnavData = {
  home: [
    "Home newspaper",
    "Home magazine",
    "Home sports",
    "Home movie",
    "Home gadget",
  ],
  category: ["Category", "Three column", "Three column sidebar"],

  pages: ["Shop", "Team", "Author", "Error page"],

  blog: [
    "Blog standard",
    "Blog masonary",
    "Blog list",
    "Blog details",
    "Blog details video",
    "Blog details audio",
    "Blog details nosidebar",
    "Blog details full image",
  ],
};

const HeaderFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-black sticky-header ${isVisible ? "header-visible" : ""}`}
    >
      <div className="container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px] flex justify-between">
        <ul className="lg:flex hidden items-center gap-10">
          <li className="group py-[17px] text-[14px] font-medium text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
            <div className="inline-flex items-center gap-1">
              <span>HOME</span> <IoIosArrowDown className="arrow-icon" />
            </div>
            <div className="relative subnav-block ">
              <ul className="w-[230px] subnav absolute top-[18px] left-[-18px] p-[18px] pr-[20px]  border-t-[3px] border-[#ff1d50] text-[#080809] dark:text-white text-[14px] bg-[#fff] dark:bg-[#282828]">
                {subnavData.home.map((item, index) => (
                  <li
                    className="hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out"
                    key={index}
                  >
                    <p className="flex items-center gap-1 uppercase leading-[30px] text-nowrap">
                      <IoIosArrowForward className="icon-subnav" /> {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li className="py-[17px] text-[14px] font-medium text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
            ABOUT US
          </li>

          <li className="group py-[17px] text-[14px] font-medium text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
            <div className="inline-flex items-center gap-1">
              <span>CATEGORY</span> <IoIosArrowDown className="arrow-icon" />
            </div>

            <div className="relative subnav-block ">
              <ul className="w-[230px] subnav absolute top-[18px] left-[-18px] p-[18px] pr-[20px]  border-t-[3px] border-[#ff1d50] text-[#080809] dark:text-white text-[14px] bg-[#fff] dark:bg-[#282828]">
                {subnavData.category.map((item, index) => (
                  <li
                    className="hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out"
                    key={index}
                  >
                    <p className="flex items-center gap-1 uppercase leading-[30px] text-nowrap">
                      <IoIosArrowForward className="icon-subnav" /> {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li className="group py-[17px] text-[14px] font-medium text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
            <div className="inline-flex items-center gap-1">
              <span>PAGES</span> <IoIosArrowDown className="arrow-icon" />
            </div>

            <div className="relative subnav-block ">
              <ul className="w-[230px] subnav absolute top-[18px] left-[-18px] p-[18px] pr-[20px]  border-t-[3px] border-[#ff1d50] text-[#080809] dark:text-white text-[14px] bg-[#fff] dark:bg-[#282828]">
                {subnavData.pages.map((item, index) => (
                  <li
                    className="hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out"
                    key={index}
                  >
                    <p className="flex items-center gap-1 uppercase leading-[30px] text-nowrap">
                      <IoIosArrowForward className="icon-subnav" /> {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li className="group py-[17px] text-[14px] font-medium text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
            <div className="inline-flex items-center gap-1">
              <span>BLOG</span> <IoIosArrowDown className="arrow-icon" />
            </div>

            <div className="relative subnav-block ">
              <ul className="w-[230px] subnav absolute top-[18px] left-[-18px] p-[18px] pr-[20px]  border-t-[3px] border-[#ff1d50] text-[#080809] dark:text-white text-[14px] bg-[#fff] dark:bg-[#282828]">
                {subnavData.blog.map((item, index) => (
                  <li
                    className="hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out"
                    key={index}
                  >
                    <p className="flex items-center gap-1 uppercase leading-[30px] text-nowrap">
                      <IoIosArrowForward className="icon-subnav" /> {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li className="py-[17px] text-[14px] font-medium text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
            CONTACT
          </li>
        </ul>

        <div className="md:flex lg:hidden justify-center py-[10px]">
          <img src="/logo-white.svg" alt="logo" className="cursor-pointer" />
        </div>

        <div className="flex items-center lg:gap-10 gap-[20px]">
          <div className="flex gap-4 text-white">
            <div className="search-box hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
              <IoSearch className="text-[26px]" />
            </div>
            <div className="cart-box hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
              <GrCart className="text-[24px]" />
            </div>
          </div>

          <div className="menu-box cursor-pointer bg-[#ff1d50] p-[17px] text-white">
            <RxHamburgerMenu className="text-[24px] " />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderFooter;
