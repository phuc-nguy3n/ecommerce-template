"use client";

import "./styles.css";
import {
  headerTopStyle,
  headerMiddleStyle,
  headerBgColor,
  headerBottomStyle,
  menuStyle,
} from "../../constantStyle";

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

type NavbarItemType = {
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

const navbar: NavbarItemType[] = [
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

  const openMenu = () => {
    const menu = document.getElementById("menu");
    menu!.classList.add("visible-custom");
  };

  const closeMenu = () => {
    const menu = document.getElementById("menu");
    menu!.classList.remove("visible-custom");
  };

  const toggleSubmenu = (index: number) => {
    const menuNav = document.querySelectorAll("#nav-menu > li");

    if (index >= 0 && index < menuNav.length) {
      const selectedItem = menuNav[index];
      const button = selectedItem.querySelector("button");
      const submenu = selectedItem.querySelector("#subnav-menu");
      const isActive = selectedItem.classList.toggle("active");

      if (isActive) {
        button!.textContent = "-";
        submenu?.classList.add("submenu-open");
        submenu?.classList.remove("submenu-close");
      } else {
        button!.textContent = "+";
        submenu?.classList.add("submenu-close");
        submenu?.classList.remove("submenu-open");
      }
    } else {
      console.log("Chỉ mục không hợp lệ");
    }
  };

  const handleScroll = () => {
    const targetElement = document.querySelector("#header-bottom");

    if (window.scrollY > 500) {
      targetElement!.classList.add("header-visible");
    } else {
      targetElement!.classList.remove("header-visible");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <header className={headerBgColor}>
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

      {/* <HeaderBottom /> */}
      <nav id="header-bottom" className="bg-black sticky-header">
        <div className={headerBottomStyle.container}>
          {/* Navbar */}
          <ul className={headerBottomStyle.navbar}>
            {navbar.map((item: NavbarItemType, index: number) => (
              // Item navbar
              <li key={index} className={headerBottomStyle.itemBoxNav}>
                {item.url ? (
                  <Link
                    className={headerBottomStyle.linkWrapperNav}
                    href={item.url}
                  >
                    <span className={headerBottomStyle.textLinkNav}>
                      {item.name}
                    </span>{" "}
                    {item.submenu.length > 0 ? (
                      <IoIosArrowDown className={headerBottomStyle.arrowIcon} />
                    ) : (
                      ""
                    )}
                  </Link>
                ) : (
                  <div className={headerBottomStyle.linkWrapperNav}>
                    <span className={headerBottomStyle.textLinkNav}>
                      {item.name}
                    </span>{" "}
                    {item.submenu.length > 0 ? (
                      <IoIosArrowDown className={headerBottomStyle.arrowIcon} />
                    ) : (
                      ""
                    )}
                  </div>
                )}

                {item.submenu.length > 0 ? (
                  <div className={headerBottomStyle.subNavWrapper}>
                    {/* Subnav */}
                    <ul className={headerBottomStyle.subNav}>
                      {item.submenu.map((item: any, index: any) => (
                        // Item subnav
                        <li
                          className={headerBottomStyle.itemBoxSubnav}
                          key={index}
                        >
                          <Link href={item.url}>
                            <p className={headerBottomStyle.textLinkSubnav}>
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

          <div className={headerBottomStyle.logoBox}>
            <img
              src="/logo.png"
              alt="logo"
              className={headerBottomStyle.logo}
            />
          </div>

          <div className="flex items-center lg:gap-10 sm:gap-[20px] gap-[14px]">
            <div className="flex sm:gap-4 gap-2 text-white ml-[5px]">
              <div className={`search-box  ${headerBottomStyle.btn}`}>
                <IoSearch className="text-[26px]" />
              </div>
              <div className={`cart-box ${headerBottomStyle.btn}`}>
                <GrCart className="text-[24px]" />
              </div>
            </div>

            <div className={headerBottomStyle.hamburgerBox} onClick={openMenu}>
              <RxHamburgerMenu className="text-[24px]" />
            </div>
          </div>
        </div>
      </nav>

      {/* Menu */}
      <div id="menu" className={menuStyle.overlay}>
        <div className={menuStyle.menuWrapper}>
          {/* Close button */}
          <button className={menuStyle.closeBox} onClick={closeMenu}>
            <IoCloseOutline className="flex-grow text-[24px]" />
          </button>

          {/* Logo */}
          <Link href="/" onClick={closeMenu} className={menuStyle.logoBox}>
            <img src="/logo.png" alt="logo" className="w-[143px] h-[60px]" />
          </Link>

          {/* Menu list */}
          <div className={menuStyle.menuBody}>
            <ul id="nav-menu" className="nav-menu px-[40px]">
              {navbar.map((item, index) => (
                // Item menu
                <li key={index}>
                  <div className={menuStyle.itemMenu}>
                    {item.submenu.length > 0 ? (
                      <>
                        <span
                          className={`${menuStyle.linkItemMenu} 
                          
                          `}
                          onClick={() => toggleSubmenu(index)}
                        >
                          <IoIosArrowForward /> {item.name}
                        </span>
                        <button
                          id={`toggle-submenu-${index}`}
                          className="submenu-btn text-[18px] bg-[#F5F5F5] px-2 rounded-full"
                          onClick={() => toggleSubmenu(index)}
                        >
                          +
                        </button>
                      </>
                    ) : (
                      <Link
                        href={item.url}
                        onClick={closeMenu}
                        className={menuStyle.linkItemMenu}
                      >
                        <IoIosArrowForward /> {item.name}
                      </Link>
                    )}
                  </div>

                  {/* Submenu */}
                  {item.submenu.length > 0 && (
                    <ul id="subnav-menu" className={`subnav-menu `}>
                      {item.submenu.map((subItem, subIndex) => (
                        // Item submenu
                        <li className="pl-[20px]" key={subIndex}>
                          <Link
                            href={subItem.url}
                            onClick={closeMenu}
                            className={menuStyle.linkItemSubMenu}
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
    </header>
  );
};

const MenuMobile: React.FC<MenuMobileProps> = ({ isOpen, setOpen }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleSubmenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  return (
    <div className={`${menuStyle.overlay} ${isOpen ? "visible-custom" : ""}`}>
      <div className={menuStyle.menuWrapper}>
        {/* Close button */}
        <button
          className={menuStyle.closeBox}
          onClick={() => {
            setOpen(false);
          }}
        >
          <IoCloseOutline className="flex-grow text-[24px]" />
        </button>

        {/* Logo */}
        <Link
          href="/"
          onClick={() => {
            setOpen(false);
          }}
          className={menuStyle.logoBox}
        >
          <img src="/logo.png" alt="logo" className="w-[143px] h-[60px]" />
        </Link>

        {/* Menu list */}
        <div className={menuStyle.menuBody}>
          <ul className="nav-menu px-[40px]">
            {navbar.map((item, index) => (
              // Item menu
              <li key={index}>
                <div className={menuStyle.itemMenu}>
                  {item.submenu.length > 0 ? (
                    <>
                      <span
                        className={`${menuStyle.linkItemMenu} ${
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
                      className={menuStyle.linkItemMenu}
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
                      // Item submenu
                      <li className="pl-[20px]" key={subIndex}>
                        <Link
                          href={subItem.url}
                          onClick={() => {
                            setOpen(false);
                            setActiveMenu(null);
                          }}
                          className={menuStyle.linkItemSubMenu}
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
