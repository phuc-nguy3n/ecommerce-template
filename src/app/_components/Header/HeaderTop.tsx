"use client";

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
import { useContext } from "react";
import ThemeContext from "@/context/themeContext";
import Link from "next/link";

const HeaderTop = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  return (
    <div className="container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px]">
      <div className="flex lg:justify-between justify-center py-[10px]">
        <ul className="lg:flex hidden dark:text-[#54595F] text-[#B5B5B5] text-[13px] privacy-list">
          <li className="inline-flex items-center gap-2 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out relative">
            <FaCalendarDays className="text-[14px] text-[#ff1d50]" />
            <span className="leading-[18px] font-normal text-[13px] mt-[4px]">
              20 AUGUST, 2023
            </span>
          </li>

          <li className="inline-flex items-center gap-2 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out relative">
            <span className="leading-[18px] font-normal text-[13px] mt-[4px]">
              PRIVACY POLICY
            </span>
          </li>

          <li className="inline-flex items-center gap-2 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out relative">
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
                className="inline-flex items-center gap-2 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out relative"
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
                className="inline-flex items-center gap-2 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out relative"
              >
                <MdSunny className=" text-[14px]" />
                <span className="leading-[18px] font-normal text-[13px] mt-[4px]">
                  LIGHT MODE
                </span>
              </div>
            )}
          </li>
        </ul>

        <div className="flex items-center text-[13px]">
          <div className="md:flex hidden items-center dark:text-[#54595F] text-[#B5B5B5] gap-2 login-box ">
            <Link href="/login" className="flex items-center gap-2">
              <FaRegUser className="text-[#ff1d50] text-[14px] " />{" "}
              <span className="hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out uppercase text-[13px] mt-[4px]">
                Login
              </span>
            </Link>
            <span className="mt-[4px]">/</span>{" "}
            <p className="hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out uppercase text-[13px] mt-[4px]">
              Register
            </p>
          </div>

          <ul className="flex dark:text-[#54595F] text-[#B5B5B5] xl:gap-4 lg:gap-3 md:gap-3 gap-4 text-[16px] mt-[2px]">
            <li className="hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
              <FaFacebookF />
            </li>
            <li className="hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
              <FaTwitter />
            </li>
            <li className="hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
              <FaLinkedinIn />
            </li>
            <li className="hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
              <FaInstagram />
            </li>
            <li className="hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
              <FaYoutube />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
