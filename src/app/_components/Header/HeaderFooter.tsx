"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import MenuMobile from "../MenuMobile";
import Link from "next/link";

type SubNavbarItemType = {
  name: string;
  url: string;
};

export type NavbarItemType = {
  name: string;
  url: string;
  submenu: SubNavbarItemType[];
};

type NavbarItemComponentProps = {
  item: NavbarItemType;
  index: number;
};

type LogoComponentProps = {
  imgURL: string;
};

type MenuBoxComponentProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const navbar: NavbarItemType[] = [
  {
    name: "home",
    url: "/",
    submenu: [],
  },
  {
    name: "blog",
    url: "",
    submenu: [
      {
        name: "Blog details video",
        url: "/blog/video",
      },
      {
        name: "Blog details article ",
        url: "/blog/article",
      },
    ],
  },
  {
    name: "video",
    url: "/video",
    submenu: [],
  },
  {
    name: "article",
    url: "/article",
    submenu: [],
  },
  {
    name: "audio",
    url: "/audio",
    submenu: [],
  },
  {
    name: "timeline",
    url: "/timeline",
    submenu: [],
  },
  {
    name: "shop",
    url: "/shop",
    submenu: [],
  },
  {
    name: "contact",
    url: "/contact",
    submenu: [],
  },
];

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
            {navbar.map((item: NavbarItemType, index: number) => (
              <NavbarItem item={item} index={index} />
            ))}
          </ul>

          <Logo imgURL={"/logo.png"} />

          <div className="flex items-center lg:gap-10 gap-[20px]">
            <div className="flex gap-4 text-white">
              <SearchBox />
              <CartBox />
            </div>

            <MenuBox setOpen={setOpenMenu} />
          </div>
        </div>
      </nav>

      <MenuMobile isOpen={isOpenMenu} setOpen={setOpenMenu} />
    </>
  );
};

const NavbarItem: React.FC<NavbarItemComponentProps> = ({ item, index }) => {
  return (
    <li
      key={index}
      className="group py-[17px] text-[14px] font-medium text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out"
    >
      {item.url ? (
        <Link className="inline-flex items-center gap-1" href={item.url}>
          <span className="uppercase">{item.name}</span>{" "}
          {item.submenu.length > 0 ? (
            <IoIosArrowDown className="arrow-icon" />
          ) : (
            ""
          )}
        </Link>
      ) : (
        <div className="inline-flex items-center gap-1">
          <span className="uppercase">{item.name}</span>{" "}
          {item.submenu.length > 0 ? (
            <IoIosArrowDown className="arrow-icon" />
          ) : (
            ""
          )}
        </div>
      )}

      {item.submenu.length > 0 ? (
        <div className="relative subnav-block">
          <ul className="w-[230px] subnav absolute top-[18px] left-[-18px] p-[18px] pr-[20px] border-t-[3px] border-[#ff1d50] text-[#080809] dark:text-white text-[14px] bg-[#fff] dark:bg-[#282828]">
            {item.submenu.map((item: any, index: any) => (
              <li
                className="hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out"
                key={index}
              >
                <Link href={item.url}>
                  <p className="flex items-center gap-1 uppercase leading-[30px] text-nowrap">
                    <IoIosArrowForward className="icon-subnav" /> {item.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </li>
  );
};

const Logo: React.FC<LogoComponentProps> = ({ imgURL }) => {
  return (
    <div className="md:flex lg:hidden justify-center py-[10px]">
      <img
        src={imgURL}
        alt="logo"
        className="cursor-pointer w-[143px] h-[60px]"
      />
    </div>
  );
};

const SearchBox = () => {
  return (
    <div className="search-box hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
      <IoSearch className="text-[26px]" />
    </div>
  );
};

const CartBox = () => {
  return (
    <div className="cart-box hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
      <GrCart className="text-[24px]" />
    </div>
  );
};

const MenuBox: React.FC<MenuBoxComponentProps> = ({ setOpen }) => {
  return (
    <div
      className="menu-box cursor-pointer bg-[#ff1d50] p-[17px] text-white lg:hidden md:block"
      onClick={() => setOpen(true)}
    >
      <RxHamburgerMenu className="text-[24px] " />
    </div>
  );
};

export default HeaderFooter;
