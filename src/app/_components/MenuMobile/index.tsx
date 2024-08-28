"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { navbar, NavbarItemType } from "../Header/HeaderFooter";
import Link from "next/link";

import "./styles.css";

type MenuMobileProps = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

type MenuItemProps = {
  item: NavbarItemType;
  index: number;
  activeMenu: string | null;
  toggleSubmenu: (menuName: string) => void;
  setActiveMenu: Dispatch<SetStateAction<string | null>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

type LogoProps = {
  imgURL: string;
};

const MenuMobile: React.FC<MenuMobileProps> = ({ isOpen, setOpen }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleSubmenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

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

        <Logo imgURL={"/logo.png"} />

        <div className="menu-body overflow-y-scroll pb-[40px] mt-[33px]">
          <ul className="nav-menu px-[40px]">
            {navbar.map((item, index) => (
              <MenuItem
                item={item}
                index={index}
                activeMenu={activeMenu}
                setOpen={setOpen}
                toggleSubmenu={toggleSubmenu}
                setActiveMenu={setActiveMenu}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  index,
  activeMenu,
  setOpen,
  toggleSubmenu,
  setActiveMenu,
}) => {
  return (
    <li key={index}>
      <div className="flex items-center justify-between py-[12px]">
        {item.submenu.length > 0 ? (
          <>
            <span
              className={`flex items-center gap-1 cursor-pointer capitalize ${
                activeMenu === item.name ? "active" : ""
              }`}
              onClick={() => toggleSubmenu(item.name)}
            >
              <IoIosArrowForward /> {item.name}
            </span>
            <button
              className="text-[18px] bg-[#F5F5F5] px-2 rounded-full"
              onClick={() => toggleSubmenu(item.name)}
            >
              {activeMenu === item.name ? "-" : "+"}
            </button>
          </>
        ) : (
          <Link
            href={item.url}
            onClick={() => {
              setOpen(false);
            }}
            className="flex items-center gap-1 cursor-pointer capitalize"
          >
            <IoIosArrowForward /> {item.name}
          </Link>
        )}
      </div>

      {/* Submenu */}
      {item.submenu.length > 0 && (
        <ul
          className={`subnav-menu ${
            activeMenu === item.name ? "submenu-open" : "submenu-close"
          }`}
        >
          {item.submenu.map((subItem, subIndex) => (
            <li className="pl-[20px]" key={subIndex}>
              <Link
                href={subItem.url}
                onClick={() => {
                  setOpen(false);
                  setActiveMenu(null);
                }}
                className="flex items-center gap-1 cursor-pointer py-[12px] capitalize"
              >
                <IoIosArrowForward /> {subItem.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Logo: React.FC<LogoProps> = ({ imgURL }) => {
  return (
    <div className="pt-[40px] pb-[30px] flex justify-center bg-[#EFF3FA]">
      <div className="cursor-pointer">
        <img src={imgURL} alt="logo" className="w-[143px] h-[60px]" />
      </div>
    </div>
  );
};

export default MenuMobile;
