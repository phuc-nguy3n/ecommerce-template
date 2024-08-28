"use client";

import { useContext } from "react";
import ThemeContext from "@/context/themeContext";
import Link from "next/link";
import Container from "../Container/Container";
import { FaCalendarDays } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import {
  FaRegUser,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const iconList = [
  {
    url: "",
    icon: <FaFacebookF />,
  },
  {
    url: "",
    icon: <FaTwitter />,
  },
  {
    url: "",
    icon: <FaLinkedinIn />,
  },
  {
    url: "",
    icon: <FaInstagram />,
  },
  {
    url: "",
    icon: <FaYoutube />,
  },
];

const HeaderTop = () => {
  const flexBoxStyle = "flex lg:justify-between justify-center py-[10px]";
  const navStyle =
    "lg:flex hidden text-[--text-content-light] dark:text-[--text-content-dark] text-[13px] privacy-list";

  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  return (
    <Container>
      <div className={flexBoxStyle}>
        <ul className={navStyle}>
          <li className="inline-flex items-center gap-2 cursor-pointer hover:text-[--primary] transition-colors duration-300 ease-in-out relative">
            <FaCalendarDays className="text-[14px] text-[--primary]" />
            <span className="leading-[18px] font-normal text-[13px] mt-[4px]">
              20 AUGUST, 2023
            </span>
          </li>

          <li className="inline-flex items-center gap-2 cursor-pointer hover:text-[--primary] transition-colors duration-300 ease-in-out relative">
            <span className="leading-[18px] font-normal text-[13px] mt-[4px]">
              PRIVACY POLICY
            </span>
          </li>

          <li className="inline-flex items-center gap-2 cursor-pointer hover:text-[--primary] transition-colors duration-300 ease-in-out relative">
            <span className="leading-[18px] font-normal text-[13px] mt-[4px]">
              TERMS & CONDITIONS
            </span>
          </li>

          <li>
            {darkTheme ? (
              <div
                onClick={() => {
                  setDarkTheme(false);
                  localStorage.removeItem("ecommerce-theme");
                }}
                className="inline-flex items-center gap-2 cursor-pointer hover:text-[--primary] transition-colors duration-300 ease-in-out relative"
              >
                <IoMoonSharp className=" text-[14px]" />
                <span className="leading-[18px] font-normal text-[13px] mt-[4px]">
                  DARK MODE
                </span>
              </div>
            ) : (
              <div
                onClick={() => {
                  setDarkTheme(true);
                  localStorage.setItem("ecommerce-theme", "true");
                }}
                className="inline-flex items-center gap-2 cursor-pointer hover:text-[--primary] transition-colors duration-300 ease-in-out relative"
              >
                <MdSunny className=" text-[14px]" />
                <span className="leading-[18px] font-normal text-[13px] mt-[4px]">
                  LIGHT MODE
                </span>
              </div>
            )}
          </li>
        </ul>

        <div className="flex items-center text-[13px] text-[--text-content-light] dark:text-[--text-content-dark]">
          <div className="md:flex hidden items-center  gap-2 login-box ">
            <Link href="/login" className="flex items-center gap-2">
              <FaRegUser className="text-[--primary] text-[14px] " />{" "}
              <span className="hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out uppercase text-[13px] mt-[4px]">
                Login
              </span>
            </Link>
            <span className="mt-[4px]">/</span>{" "}
            <p className="hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out uppercase text-[13px] mt-[4px]">
              Register
            </p>
          </div>

          <ul className="flex text-[--text-content-light] dark:text-[--text-content-dark] xl:gap-4 lg:gap-3 md:gap-3 gap-4 text-[16px] mt-[2px]">
            {iconList.map((item, index) => (
              <li
                key={index}
                className="hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out"
              >
                {item.icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default HeaderTop;
