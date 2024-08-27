"use client";

import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import MenuMobile from "../MenuMobile";
import Link from "next/link";

export const subnavData = {
  blog: [
    {
      name: "Blog details video",
      url: "/blog/video",
    },
    {
      name: "Blog details article ",
      url: "/blog/article",
    },
  ],

  category: ["Category", "Three column", "Three column sidebar"],

  pages: ["Shop", "Team", "Author", "Error page"],
};

const HeaderFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);

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
    <>
      <nav
        className={`bg-black sticky-header ${
          isVisible ? "header-visible" : ""
        }`}
      >
        <div className="container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px] flex justify-between">
          <ul className="lg:flex hidden items-center gap-10">
            <li className="group py-[17px] text-[14px] font-medium text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
              <Link href="/" className="inline-flex items-center gap-1">
                <span>HOME</span>
              </Link>
            </li>

            <li className="group py-[17px] text-[14px] font-medium text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
              <div className="inline-flex items-center gap-1">
                <span>BLOG</span> <IoIosArrowDown className="arrow-icon" />
              </div>

              <div className="relative subnav-block ">
                <ul className="w-[230px] subnav absolute top-[18px] left-[-18px] p-[18px] pr-[20px] border-t-[3px] border-[#ff1d50] text-[#080809] dark:text-white text-[14px] bg-[#fff] dark:bg-[#282828]">
                  {subnavData.blog.map((item, index) => (
                    <li
                      className="hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out"
                      key={index}
                    >
                      <Link href={item.url}>
                        <p className="flex items-center gap-1 uppercase leading-[30px] text-nowrap">
                          <IoIosArrowForward className="icon-subnav" />{" "}
                          {item.name}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className="py-[17px] text-[14px] font-medium text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
              <Link href="/video" className="inline-flex items-center gap-1">
                <span>VIDEO</span>
              </Link>
            </li>

            <li className="py-[17px] text-[14px] font-medium text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
              <Link href="/article" className="inline-flex items-center gap-1">
                <span>ARTICLE</span>
              </Link>
            </li>

            <li className="py-[17px] text-[14px] font-medium text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
              <Link href="/audio" className="inline-flex items-center gap-1">
                <span>AUDIO</span>
              </Link>
            </li>

            <li className="py-[17px] text-[14px] font-medium text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
              <Link href="/timeline" className="inline-flex items-center gap-1">
                <span>TIMELINE</span>
              </Link>
            </li>

            <li className="py-[17px] text-[14px] font-medium text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
              <Link href="/shop" className="inline-flex items-center gap-1">
                <span>SHOP</span>
              </Link>
            </li>

            <li className="py-[17px] text-[14px] font-medium text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
              <Link href="/contact" className="inline-flex items-center gap-1">
                <span>CONTACT</span>
              </Link>
            </li>
          </ul>

          <div className="md:flex lg:hidden justify-center py-[10px]">
            <img
              src="/logo.png"
              alt="logo"
              className="cursor-pointer w-[143px] h-[60px]"
            />
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

            <div
              className="menu-box cursor-pointer bg-[#ff1d50] p-[17px] text-white lg:hidden md:block"
              onClick={() => setOpenMenu(true)}
            >
              <RxHamburgerMenu className="text-[24px] " />
            </div>
          </div>
        </div>
      </nav>

      <MenuMobile isOpen={isOpenMenu} setOpen={setOpenMenu} />
    </>
  );
};

export default HeaderFooter;
