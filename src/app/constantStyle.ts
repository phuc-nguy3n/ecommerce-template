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
    "flex text-[--text-content] xl:gap-4 lg:gap-3 md:gap-3 gap-4 text-[16px] mt-[2px] login-box",
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
  textLinkNav: "uppercase py-[17px] text-white",
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
    "max-w-[310px] w-full bg-[--background] h-full relative z-[1] opacity-1 border-r-[3px] border-[--primary]",
  closeBox:
    "absolute right-[-16.5px] top-[25px] w-[33px] h-[33px] text-[18px] bg-[--primary] text-white rounded-full flex items-center justify-between",
  logoBox:
    "pt-[40px] pb-[30px] flex justify-center bg-[--menu-logo-box] cursor-pointer",
  menuBody: "menu-body overflow-y-scroll pb-[40px] mt-[33px]",
  itemMenu: "flex items-center justify-between py-[12px]",
  linkItemMenu:
    "flex items-center gap-1 cursor-pointer capitalize text-black dark:text-white",
  linkItemSubMenu:
    "flex items-center gap-1 cursor-pointer py-[12px] capitalize",
};

export const searchPopupStyle = {
  overlay:
    "search-popup fixed top-0 right-0 left-0 bottom-0 w-full h-full bg-black bg-opacity-95 z-[9999] transition-opacity duration-500",
  wrapper: "flex justify-center items-center h-full relative",
  btnClose:
    "p-3 border border-[--primary] rounded-full absolute top-10 right-10 hover:bg-white hover:border-none",
  input:
    "md:w-[600px] w-full rounded-full p-5 md:pl-7 pl-5  md:pr-14 pr-12 bg-transparent border border-[--primary] outline-none text-white md:text-lg text-base",
  btnSubmit: "absolute top-[50%] md:right-5 right-4 -translate-y-[50%]",
};

export const miniCartStyle = {
  overlay:
    "mini-cart-wrap fixed top-0 right-0 left-0 bottom-0 w-full h-full bg-black bg-opacity-50 z-[9999]",
  wrapper: "mini-cart w-[450px] h-full bg-white px-8 pb-40 overflow-y-scroll",
  btnClose:
    "p-2 border border-black rounded-full hover:bg-white hover:border-[--primary] text-black hover:text-[--primary]",
  itemBox: "border border-x-0 border-b-1 border-t-0 border-[#B5B5B5] py-4",
  imgBox: "min-w-[75px] h-[75px] cursor-pointer",
  infoBox: "flex-grow max-w-[260px]",
  title: "text-sm font-semibold mb-2 tracking-wide cursor-pointer line-clamp-2",
  amount: "text-sm text-[--text-content] font-medium line-clamp-1",
  btnAction:
    "uppercase py-[12px] px-[30px] bg-[#FF1D50] text-white text-[14px] rounded-md font-bold flex items-center justify-center md:w-auto w-full",
};

export const footerStyle = {
  wrapper: "pt-12 pb-6 bg-[--footer-bg]",
  logo: "w-[346px] h-[114px]",
  socialMedia: "flex items-center justify-center gap-[10px] flex-wrap",
  icon: "icon-box p-[14px] rounded-full bg-[#363739] cursor-pointer",
  navbar:
    "flex items-center gap-[30px] text-white flex-wrap justify-center uppercase",
  copyrightBox:
    "flex lg:flex-row flex-col lg:gap-0 gap-6 items-center justify-between text-[#838f92] flex-grow w-full text-[12px]",
};

export const homeStyle = {
  backgroundColor: "bg-[--home-bg]",
  heading:
    "relative inline-block md:mb-[33px] mb-[24px] font-semibold text-[30px]",
  tag: "px-[8px] rounded-[3px] bg-[#007BFF] hover:bg-black w-fit uppercase font-bold text-[12px] leading-[26px] text-white cursor-pointer transition-colors duration-300 ease-in-out",
  timeBoxOne: "flex items-center gap-3",
  timeBoxTwo:
    "flex items-center justify-start gap-1 font-medium md:text-[14px] text-[12px] text-[--text-time] hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out ",
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
        "mb-[10px] font-semibold md:text-[24px] text-[16px] leading-[1.417] text-white hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out line-clamp-2",
      previewBox:
        "lg:flex flex-1 flex-col justify-between hidden xl:px-[30px] xl:py-[20px] lg:p-[20px] xl:h-[360px] lg:h-[500px] bg-gray-100 dark:bg-[#393939]",
      titlePreview:
        "mb-[15px] font-bold text-[24px] hover:text-[--primary] leading-[1.417] cursor-pointer transition-colors duration-300 ease-in-out line-clamp-4 text-black dark:text-white",
      contentPreview: "font-medium text-[#7e848d] leading-[1.75] line-clamp-5",
    },
    secondNews: {
      imgBox:
        "box relative md:col-span-1 col-span-2 overflow-hidden xl:order-2 lg:order-1",
      img: "xl:h-[288px] lg:h-[436px] md:h-[316px] h-[250px] w-full object-cover transform transition-transform duration-500 hover:scale-105",
      overlay:
        "gradient-bg home absolute top-0 flex flex-col h-full w-full md:p-[20px] p-[10px]",
      titleOverlay:
        "mb-[7px] font-semibold md:text-[18px] text-[16px] leading-[1.364] text-white hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out line-clamp-2",
    },
    latest: {
      wrapped: "xl:p-[20px] lg:px-[20px] lg:py-0 bg-gray-100 dark:bg-[#393939]",
      newsList:
        "latest-box grid xl:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:gap-x-[24px] md:gap-x-[24px]",
      contentBox: "flex flex-col justify-between flex-1 text-right order-2",
      title:
        "lg:mb-0 md:mb-[5px] font-semibold text-left text-[14px] leading-[1.4] hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out xl:line-clamp-3 line-clamp-2 text-black dark:text-white",
      imgBox: "relative box  w-[100px] h-[100px] overflow-hidden order-1",
      img: "h-full w-full object-cover transform transition-transform duration-500 hover:scale-105",
      overlay:
        "gradient-bg absolute flex flex-col top-0 h-[100px] w-full p-[8px]",
    },
  },
  article: {
    wrapper: "grid grid-cols-12 md:gap-5 gap-7",
    imgBox:
      "box relative md:h-[430px] md:h-[300px] h-[250px] w-full overflow-hidden",
    img: "h-full w-full object-cover transform transition-transform duration-500 hover:scale-105",
    overlay:
      "gradient-bg home absolute top-0 flex flex-col gap-2 md:h-[430px] md:h-[300px] h-[250px] w-full md:p-[30px] p-[10px]",
    titleMain:
      "font-semibold lg:text-[20px] md:text-[18px] text-[16px] text-white hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out line-clamp-2",
    seCondImgBox:
      "md:h-[130px] h-[100px] lg:min-w-[150px] lg:w-[150px] md:min-w-[130px] md:w-[130px] min-w-[100px] w-[100px] overflow-hidden",
    secondImg:
      "w-full h-full object-cover transform transition-transform duration-500 hover:scale-105",
    contentBox: "flex flex-col justify-between",
    titleSecond:
      "font-bold lg:text-[16px] text-[14px] hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out lg:line-clamp-2 md:line-clamp-3 line-clamp-2",
  },

  literature: {
    arrowIconBox: "flex items-center gap-2",
    arrowIcon:
      "p-2 rounded-full border hover:bg-[--primary] hover:text-white cursor-pointer transition-colors duration-300 ease-in-out",
    postList:
      "flex -mx-3 overflow-x-hidden scroll-smooth snap-x snap-mandatory",
    postItem:
      "flex-none xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full px-3 snap-start cursor-pointer",
    imgBox: "box relative md:h-[350px] h-[250px] overflow-hidden",
    img: "h-full w-full object-cover transform transition-transform duration-500 hover:scale-105",
    overlay:
      "gradient-bg home absolute top-0 flex flex-col gap-2 md:h-[350px] h-[250px] w-full md:p-[20px] p-[10px]",
    title:
      "font-semibold text-[16px] text-white hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out line-clamp-2",
  },

  video: {
    wrapper: "mb-[1px] py-[60px] bg-black",
    postList:
      "video-list max-h-[485px] overflow-x-hidden lg:overflow-y-scroll md:overflow-y-auto xl:col-span-4 lg:col-span-2 col-span-4 lg:mb-0 mb-[24px] lg:pr-[15px] md:pr-0",
    itemBox:
      "vidieo-group lg:block lg:overflow-auto overflow-x-scroll flex  lg:gap-0 sm:gap-[24px] gap-[10px] xl:space-y-[20px] lg:space-y-[24px]",
    imgBox:
      "flex-2 lg:flex-grow-0 flex-grow lg:w-[100px] w-full md:h-[100px] h-[80px] lg:mb-0 mb-[24px] relative overflow-hidden box",
    img: "w-full md:h-[100px] h-[80px] object-cover transform transition-transform duration-500 hover:scale-105",
    overlay:
      "absolute top-0 w-full md:h-[100px] h-[80px] flex flex-col md:p-[30px] p-[10px] bg-black bg-opacity-[0.3] items-center justify-center",
    playDisplayBox: "relative w-full h-full flex items-center justify-center",
    btn: "pl-3 pr-2 py-2.5 rounded-full absolute",
    titleSecond:
      "text-[17px] leading-[1.4] mt-0.5 font-semibold text-white hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out line-clamp-2",
    imgBoxMain: "xl:mb-[32px] lg:mb-[28px] mb-[32px] relative",
    imgMain: "md:h-[376px] h-[250px] w-full object-cover",
    overlayMain:
      "absolute top-0 w-full md:h-[376px] h-[250px] flex flex-col p-[30px] bg-black bg-opacity-[0.3] items-center justify-center",
    overlayWrapperMain:
      "relative w-full h-full flex items-center justify-center btn-box",
    btnActive:
      "bg-white pl-4 pr-3 py-[14px] rounded-full btn-play absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 hover:text-white hover:bg-[--primary] transition-colors duration-300 ease-in-out",
    titleMain:
      "text-white md:text-[24px] text-[18px] font-semibold xl:mb-[15px] lg:mb-[10px] mb-[15px] lg:line-clamp-1 md:line-clamp-2",
  },
};

export const audioStyle = {
  tag: "px-[8px] rounded-[3px] bg-[#007BFF] hover:bg-black w-fit uppercase font-bold text-[12px] leading-[26px] text-white cursor-pointer transition-colors duration-300 ease-in-out",
  listPost:
    "grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[20px]",
  imgBox:
    "md:mb-[25px] mb-[16px] overflow-hidden w-full sm:h-[250px] h-[200px] relative box",
  img: "w-full sm:h-[250px] h-[200px] object-cover",
  overlay:
    "cursor-pointer absolute top-0 w-full sm:h-[250px] h-[200px] gradient-bg video flex flex-col p-[20px] justify-start",
  title:
    "md:text-[20px] text-[14px] leading-[1.8] font-bold md:mb-[8px] cursor-pointer hover:text-[--primary] text-center line-clamp-3",
  timeBox: "flex items-center gap-3 justify-center",
  textTime:
    "flex items-center gap-1 font-semibold md:text-[14px] text-[12px] text-[--text-time] hover:text-[--primary] cursor-pointer transition-colors duration-300 ease-in-out",
};
