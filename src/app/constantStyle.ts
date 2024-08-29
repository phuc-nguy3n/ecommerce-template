export const headerBgColor =
  "bg-[--top-header-light]  dark:bg-[--top-header-dark]";

export const headerTopStyle = {
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

export const headerMiddleStyle = {
  logoBox:
    "flex justify-center py-[25px] dark:bg-[--middle-header-dark] bg-[--middle-header-light]",
  img: "cursor-pointer lg:block hidden w-[346px] h-[114px]",
  adsBox:
    "container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px] lg:hidden block",
};

export const headerBottomStyle = {
  container:
    "container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px] flex justify-between",
  navbar: "lg:flex hidden items-center gap-10",
  itemBoxNav:
    "group text-[14px] font-medium text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out",
  linkWrapperNav: "inline-flex items-center gap-1",
  textLinkNav: "uppercase py-[17px]",
  arrowIcon: "arrow-icon",
  subNavWrapper: "relative subnav-block",
  subNav:
    "w-[230px] subnav absolute top-[18px] left-[-18px] p-[18px] pr-[20px] border-t-[3px] border-[#ff1d50] text-[#080809] dark:text-white text-[14px] bg-[#fff] dark:bg-[#282828]",
  itemBoxSubnav:
    "hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out",
  textLinkSubnav:
    "flex items-center gap-1 uppercase leading-[30px] text-nowrap",
  logoBox: "md:flex lg:hidden justify-center py-[10px]",
  logo: "cursor-pointer sm:w-[143px] w-[130px] sm:h-[60px] h-[44px]",
  btn: "hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out",
  hamburgerBox:
    "cursor-pointer bg-[#ff1d50] sm:p-[17px] p-[10px] text-white lg:hidden md:block",
};

export const menuStyle = {
  overlay:
    "menu-wrap fixed top-0 right-0 left-0 bottom-0 w-full h-full bg-black bg-opacity-50 z-[9999]",
  menuWrapper:
    "max-w-[310px] w-full bg-white h-full relative z-[1] opacity-1 border-r-[3px] border-[#FF1D50]",
  closeBox:
    "absolute right-[-16.5px] top-[25px] w-[33px] h-[33px] text-[18px] bg-[#FF1D50] text-white rounded-full flex items-center justify-between",
  logoBox:
    "pt-[40px] pb-[30px] flex justify-center bg-[#EFF3FA] cursor-pointer",
  menuBody: "menu-body overflow-y-scroll pb-[40px] mt-[33px]",
  itemMenu: "flex items-center justify-between py-[12px]",
  linkItemMenu: "flex items-center gap-1 cursor-pointer capitalize",
  linkItemSubMenu:
    "flex items-center gap-1 cursor-pointer py-[12px] capitalize",
};
