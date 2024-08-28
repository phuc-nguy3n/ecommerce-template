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
  const style = {
    flexBox: "flex lg:justify-between justify-center py-[10px]",
    navLeft:
      "lg:flex hidden text-[--text-content-light] dark:text-[--text-content-dark] text-[13px] privacy-list",
    navItem:
      "inline-flex items-center gap-2 cursor-pointer hover:text-[--primary] transition-colors duration-300 ease-in-out relative",
    text: "leading-[18px] font-normal text-[13px] mt-[4px]",
    navRight:
      "flex items-center text-[13px] text-[--text-content-light] dark:text-[--text-content-dark]",
    loginBox: "md:flex hidden items-center gap-2 login-box",
    textLogin:
      "hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out uppercase text-[13px] mt-[4px]",
    iconBox:
      "flex text-[--text-content-light] dark:text-[--text-content-dark] xl:gap-4 lg:gap-3 md:gap-3 gap-4 text-[16px] mt-[2px]",
    icon: "hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out",
  };

  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  return (
    <Container>
      <div className={style.flexBox}>
        <ul className={style.navLeft}>
          <li className={style.navItem}>
            <FaCalendarDays className="text-[14px] text-[--primary]" />
            <span className={style.text}>20 AUGUST, 2023</span>
          </li>

          <li className={style.navItem}>
            <span className={style.text}>PRIVACY POLICY</span>
          </li>

          <li className={style.navItem}>
            <span className={style.text}>TERMS & CONDITIONS</span>
          </li>

          <li>
            {darkTheme ? (
              <div
                onClick={() => {
                  setDarkTheme(false);
                  localStorage.removeItem("ecommerce-theme");
                }}
                className={style.navItem}
              >
                <IoMoonSharp className=" text-[14px]" />
                <span className={style.text}>DARK MODE</span>
              </div>
            ) : (
              <div
                onClick={() => {
                  setDarkTheme(true);
                  localStorage.setItem("ecommerce-theme", "true");
                }}
                className={style.navItem}
              >
                <MdSunny className="text-[14px]" />
                <span className={style.text}>LIGHT MODE</span>
              </div>
            )}
          </li>
        </ul>

        <div className={style.navRight}>
          <div className={style.loginBox}>
            <Link href="/login" className="flex items-center gap-2">
              <FaRegUser className="text-[--primary] text-[14px]" />{" "}
              <span className={style.textLogin}>Login</span>
            </Link>
            <span className="mt-[4px]">/</span>{" "}
            <p className={style.textLogin}>Register</p>
          </div>

          <ul className={style.iconBox}>
            {iconList.map((item, index) => (
              <li key={index} className={style.icon}>
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
