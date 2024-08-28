"use client";

import Link from "next/link";

const HeaderBody = () => {
  const logoBoxStyle =
    "flex justify-center py-[25px] dark:bg-[--middle-header-dark] bg-[--middle-header-light]";
  const imgStyle = "cursor-pointer lg:block hidden w-[346px] h-[114px]";
  const adsBoxStyle =
    "container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px] lg:hidden block";

  return (
    <div className={logoBoxStyle}>
      <Link href="/">
        <img src="/logo.png" alt="logo" className={imgStyle} />
      </Link>

      <div className={adsBoxStyle}>
        <h1 className="h-[60px] bg-[#f3f4f6] font-bold text-[34px] flex items-center justify-center">
          700 x 60
        </h1>
      </div>
    </div>
  );
};

export default HeaderBody;
