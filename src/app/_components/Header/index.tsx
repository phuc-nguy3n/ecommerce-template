"use client";

import "./styles.css";
import { headerTopStyle, headerMiddleStyle } from "./constantStyle";

import Container from "../Container/Container";
import { FaCalendarDays } from "react-icons/fa6";
import ThemeContext from "@/context/themeContext";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { IoCloseOutline, IoMoonSharp, IoSearch } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegUser,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

type SubNavbarItemType = {
  name: string;
  url: string;
};

export type NavbarItemType = {
  name: string;
  url: string;
  submenu: SubNavbarItemType[];
};

type MenuMobileProps = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

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

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

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
    <header className="bg-[--top-header-light]  dark:bg-[--top-header-dark]">
      {/* Header top */}
      <Container>
        <div className={headerTopStyle.flexBox}>
          <ul className={headerTopStyle.navLeft}>
            <li className={headerTopStyle.navItem}>
              <FaCalendarDays className="text-[14px] text-[--primary]" />
              <span className={headerTopStyle.text}>20 AUGUST, 2023</span>
            </li>

            <li className={headerTopStyle.navItem}>
              <span className={headerTopStyle.text}>PRIVACY POLICY</span>
            </li>

            <li className={headerTopStyle.navItem}>
              <span className={headerTopStyle.text}>TERMS & CONDITIONS</span>
            </li>

            <li>
              {darkTheme ? (
                <div
                  onClick={() => {
                    setDarkTheme(false);
                    localStorage.removeItem("ecommerce-theme");
                  }}
                  className={headerTopStyle.navItem}
                >
                  <IoMoonSharp className=" text-[14px]" />
                  <span className={headerTopStyle.text}>DARK MODE</span>
                </div>
              ) : (
                <div
                  onClick={() => {
                    setDarkTheme(true);
                    localStorage.setItem("ecommerce-theme", "true");
                  }}
                  className={headerTopStyle.navItem}
                >
                  <MdSunny className="text-[14px]" />
                  <span className={headerTopStyle.text}>LIGHT MODE</span>
                </div>
              )}
            </li>
          </ul>

          <div className={headerTopStyle.navRight}>
            <div className={headerTopStyle.loginBox}>
              <Link href="/login" className="flex items-center gap-2">
                <FaRegUser className="text-[--primary] text-[14px]" />{" "}
                <span className={headerTopStyle.textLogin}>Login</span>
              </Link>
              <span className="mt-[4px]">/</span>{" "}
              <p className={headerTopStyle.textLogin}>Register</p>
            </div>

            <ul className={headerTopStyle.iconBox}>
              {iconList.map((item, index) => (
                <li key={index} className={headerTopStyle.icon}>
                  {item.icon}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Header middle */}
      <div className={headerMiddleStyle.logoBox}>
        <Link href="/">
          <img src="/logo.png" alt="logo" className={headerMiddleStyle.img} />
        </Link>

        <div className={headerMiddleStyle.adsBox}>
          <h1 className="h-[60px] bg-[#f3f4f6] font-bold text-[34px] flex items-center justify-center">
            700 x 60
          </h1>
        </div>
      </div>

      {/* <HeaderFooter /> */}
      <nav
        className={`bg-black sticky-header ${
          isVisible ? "header-visible" : ""
        }`}
      >
        <div className="container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px] flex justify-between">
          <ul className="lg:flex hidden items-center gap-10">
            {navbar.map((item: NavbarItemType, index: number) => (
              <li
                key={index}
                className="group py-[17px] text-[14px] font-medium text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out"
              >
                {item.url ? (
                  <Link
                    className="inline-flex items-center gap-1"
                    href={item.url}
                  >
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
                              <IoIosArrowForward className="icon-subnav" />{" "}
                              {item.name}
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
            ))}
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
    </header>
  );
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

        <div className="pt-[40px] pb-[30px] flex justify-center bg-[#EFF3FA]">
          <div className="cursor-pointer">
            <img src="/logo.png" alt="logo" className="w-[143px] h-[60px]" />
          </div>
        </div>

        <div className="menu-body overflow-y-scroll pb-[40px] mt-[33px]">
          <ul className="nav-menu px-[40px]">
            {navbar.map((item, index) => (
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
                      activeMenu === item.name
                        ? "submenu-open"
                        : "submenu-close"
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
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
