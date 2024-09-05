"use client";

import "./styles.css";
import {
  headerTopStyle,
  headerMiddleStyle,
  headerBgColor,
  headerBottomStyle,
  menuStyle,
  searchPopupStyle,
  miniCartStyle,
} from "../../constantStyle";

import Container from "../Container/Container";
import { FaCalendarDays } from "react-icons/fa6";
import ThemeContext from "@/context/themeContext";
import { Dispatch, SetStateAction, useContext, useState } from "react";
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
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);

  const openMenu = () => {
    const menu = document.getElementById("menu");
    menu!.classList.add("visible-custom");
  };

  const closeMenu = () => {
    const menu = document.getElementById("menu");
    menu!.classList.remove("visible-custom");

    const allSubmenus = document.querySelectorAll("#subnav-menu");
    allSubmenus.forEach((submenu) => {
      submenu.classList.remove("submenu-open");
      submenu.classList.add("submenu-close");
    });

    const allButtons = document.querySelectorAll("#nav-menu > li button");
    allButtons.forEach((button) => {
      button.textContent = "+";
    });

    const menuNav = document.querySelectorAll("#nav-menu > li");
    menuNav.forEach((item) => {
      item.classList.remove("active");
    });
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
              <button
                className={`search-box  ${headerBottomStyle.btn}`}
                onClick={() => setIsSearchPopupOpen(true)}
              >
                <IoSearch className="text-[26px]" />
              </button>
              <button className={`cart-box ${headerBottomStyle.btn}`}>
                <GrCart className="text-[24px]" />
              </button>
            </div>

            <div className={headerBottomStyle.hamburgerBox} onClick={openMenu}>
              <RxHamburgerMenu className="text-[24px]" />
            </div>
          </div>
        </div>
      </nav>

      {/* Search Box */}
      <div
        className={` ${searchPopupStyle.overlay} ${
          isSearchPopupOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className={searchPopupStyle.wrapper}>
          <button
            onClick={() => setIsSearchPopupOpen(false)}
            className={searchPopupStyle.btnClose}
          >
            <IoCloseOutline className="text-[--primary] text-3xl hover:text-black" />
          </button>

          <div className="relative">
            <input
              type="text"
              className={searchPopupStyle.input}
              placeholder="What are you looking for?"
            />

            <button type="submit" className={searchPopupStyle.btnSubmit}>
              <IoSearch className="text-white md:text-3xl text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mini cart */}
      <div className={miniCartStyle.overlay}>
        <div className="flex justify-end h-full">
          <div className={miniCartStyle.wrapper}>
            <div className="flex justify-end my-4">
              <button className={miniCartStyle.btnClose}>
                <IoCloseOutline className="text-3xl " />
              </button>
            </div>

            <h1 className="text-lg font-bold mb-8">Shopping cart</h1>

            <ul className="cart-list mb-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <li key={index} className={miniCartStyle.itemBox}>
                  <div className="flex justify-between gap-2">
                    <div className={miniCartStyle.imgBox}>
                      <img
                        className="object-cover w-full h-full"
                        src="https://i.pinimg.com/1200x/59/7e/86/597e869bbd47701f5b5f8045857bdf03.jpg"
                        alt=""
                      />
                    </div>

                    <div className={miniCartStyle.infoBox}>
                      <h2 className={miniCartStyle.title}>Car Safety Seat</h2>
                      <div className={miniCartStyle.amount}>
                        <span className="quantity">1</span> x{" "}
                        <span className="price">$940.00</span>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <button>
                        <IoCloseOutline className="text-2xl text-[--text-content]" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 md:text-left text-right">
              <span className="text-base font-bold mr-1">Subtotal: </span>{" "}
              <span className="text-lg">$4398.00</span>
            </h3>

            <div className="flex gap-3 flex-wrap">
              <button className={miniCartStyle.btnAction}>View cart</button>

              <button className={miniCartStyle.btnAction}>Checkout</button>
            </div>
          </div>
        </div>
      </div>

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

export default Header;
