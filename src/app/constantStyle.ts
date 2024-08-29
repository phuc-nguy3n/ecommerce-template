export const headerBgColor = "bg-[--header-top]";

export const headerTopStyle = {
  flexBox: "flex lg:justify-between justify-center py-[10px]",
  navLeft: "lg:flex hidden text-[--text-content] text-[13px] privacy-list",
  navItem:
    "inline-flex items-center gap-2 cursor-pointer hover:text-[--primary] transition-colors duration-300 ease-in-out relative",
  text: "leading-[18px] font-normal text-[13px] mt-[4px]",
  navRight: "flex items-center text-[13px] text-[--text-content]",
  loginBox: "md:flex hidden items-center gap-2 login-box",
  textLogin:
    "hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out uppercase text-[13px] mt-[4px]",
  iconBox:
    "flex text-[--text-content] xl:gap-4 lg:gap-3 md:gap-3 gap-4 text-[16px] mt-[2px]",
  icon: "hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out",
};

export const headerMiddleStyle = {
  logoBox: "flex justify-center py-[25px] bg-[--header-middle]",
  img: "cursor-pointer lg:block hidden w-[346px] h-[114px]",
  adsBox:
    "container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px] lg:hidden block",
};

export const headerBottomStyle = {
  container:
    "container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px] flex justify-between",
  navbar: "lg:flex hidden items-center gap-10",
  itemBoxNav:
    "group text-[14px] font-medium text-white hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out",
  linkWrapperNav: "inline-flex items-center gap-1",
  textLinkNav: "uppercase py-[17px]",
  arrowIcon: "arrow-icon",
  subNavWrapper: "relative subnav-block",
  subNav:
    "subnav absolute top-0 left-[-18px] w-[230px] border-t-[3px] border-[--primary] p-[18px] pr-[20px] bg-[--subnav] text-[14px] text-[--text-subnav] ",
  itemBoxSubnav:
    "hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out",
  textLinkSubnav:
    "flex items-center gap-1 uppercase leading-[30px] text-nowrap",
  logoBox: "md:flex lg:hidden justify-center py-[10px]",
  logo: "cursor-pointer sm:w-[143px] w-[130px] sm:h-[60px] h-[44px]",
  btn: "hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out",
  hamburgerBox:
    "cursor-pointer bg-[--primary] sm:p-[17px] p-[10px] text-white lg:hidden md:block",
};

export const menuStyle = {
  overlay:
    "menu-wrap fixed top-0 right-0 left-0 bottom-0 w-full h-full bg-black bg-opacity-50 z-[9999]",
  menuWrapper:
    "max-w-[310px] w-full bg-white h-full relative z-[1] opacity-1 border-r-[3px] border-[--primary]",
  closeBox:
    "absolute right-[-16.5px] top-[25px] w-[33px] h-[33px] text-[18px] bg-[--primary] text-white rounded-full flex items-center justify-between",
  logoBox:
    "pt-[40px] pb-[30px] flex justify-center bg-[#EFF3FA] cursor-pointer",
  menuBody: "menu-body overflow-y-scroll pb-[40px] mt-[33px]",
  itemMenu: "flex items-center justify-between py-[12px]",
  linkItemMenu: "flex items-center gap-1 cursor-pointer capitalize",
  linkItemSubMenu:
    "flex items-center gap-1 cursor-pointer py-[12px] capitalize",
};

export const homeStyle = {
  backgroundColor: "bg-[--home-bg]",
  heading: "relative inline-block mb-[33px] font-semibold text-[30px]",
  tag: "px-[8px] rounded-[3px] bg-[#007BFF] hover:bg-black w-fit uppercase font-bold text-[12px] leading-[26px] text-white cursor-pointer transition-colors duration-300 ease-in-out",
  timeBoxOne: "flex items-center gap-3",
  timeBoxTwo:
    "flex items-center justify-start gap-1 font-medium text-[14px] text-[--text-time] hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out ",
  textTimeOne:
    "flex items-center gap-1 font-semibold md:text-[14px] text-[12px] text-[--text-time] hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out",
  news: {
    firstNews: {
      wrapped: "col-span-2 flex items-center xl:order-1 md:order-3",
      imgBox: "box relative overflow-hidden lg:flex-grow-0 flex-grow",
      img: "xl:h-[360px] md:h-[500px] h-[250px] xl:w-[555px] lg:w-[560px] w-full object-cover transform transition-transform duration-500 hover:scale-105",
      overlay:
        "gradient-bg home absolute top-0 flex flex-col xl:h-[360px] md:h-[500px] h-[250px] xl:w-[555px] lg:w-[560px] w-full md:p-[30px] p-[10px]",
      titleOverlay:
        "mb-[10px] font-semibold md:text-[24px] text-[18px] leading-[1.417] text-white hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out  line-clamp-2",
      previewBox:
        "lg:flex flex-1 flex-col justify-between hidden xl:px-[30px] xl:py-[20px] lg:p-[20px] xl:h-[360px] lg:h-[500px] bg-gray-100 dark:bg-[#393939]",
      titlePreview:
        "mb-[15px] font-bold text-[30px] hover:text-[--primary] leading-[1.417] cursor-pointer transition-colors duration-300 ease-in-out line-clamp-4",
      contentPreview: "font-medium text-[#7e848d] leading-[1.75] line-clamp-3",
    },
    secondNews: {
      imgBox:
        "box relative md:col-span-1 col-span-2 overflow-hidden xl:order-2 lg:order-1",
      img: "xl:h-[288px] lg:h-[436px] md:h-[316px] h-[250px] w-full object-cover transform transition-transform duration-500 hover:scale-105",
      overlay:
        "gradient-bg home absolute top-0 flex flex-col xl:h-[288px] lg:h-[436px] md:h-[316px] h-[250px] w-full md:p-[20px] p-[10px]",
      titleOverlay:
        "mb-[7px] font-semibold text-[18px] leading-[1.364] text-white hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out",
    },
    latest: {
      wrapped:
        "xl:p-[20px] lg:px-[20px] lg:py-0 bg-gray-100 dark:bg-[--background]",
      newsList:
        "latest-box grid xl:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:gap-x-[24px] md:gap-x-[24px]",
      contentBox: "flex flex-col justify-between flex-1 text-right order-2",
      title:
        "lg:mb-0 md:mb-[5px] font-semibold text-left text-[14px] leading-[1.4] hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out xl:line-clamp-3 line-clamp-2",
      imgBox: "relative box w-[100px] h-[100px] overflow-hidden order-1",
      img: "h-full w-full object-cover transform transition-transform duration-500 hover:scale-105",
      overlay:
        "gradient-bg absolute flex flex-col top-0 h-[100px] w-full p-[8px]",
    },
  },
};
