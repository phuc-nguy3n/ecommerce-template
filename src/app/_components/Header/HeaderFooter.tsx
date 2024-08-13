import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";

const HeaderFooter = () => {
  return (
    <nav className="bg-black">
      <div className="container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px] flex justify-between">
        <ul className="lg:flex hidden items-center gap-10">
          <li className="py-[17px] text-[14px] font-medium text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out inline-flex items-center gap-1">
            <span>HOME</span> <IoIosArrowDown />
          </li>

          <li className="py-[17px] text-[14px] font-medium text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
            ABOUT US
          </li>

          <li className="py-[17px] text-[14px] font-medium text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out inline-flex items-center gap-1">
            <span>CATEGORY</span> <IoIosArrowDown />
          </li>

          <li className="py-[17px] text-[14px] font-medium text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out inline-flex items-center gap-1">
            <span>PAGES</span> <IoIosArrowDown />
          </li>

          <li className="py-[17px] text-[14px] font-medium text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out inline-flex items-center gap-1">
            <span>BLOG</span> <IoIosArrowDown />
          </li>

          <li className="py-[17px] text-[14px] font-medium text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
            CONTACT
          </li>
        </ul>

        <div className="md:flex lg:hidden justify-center py-[10px]">
          <img src="/logo-white.svg" alt="logo" className="cursor-pointer" />
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

          <div className="menu-box cursor-pointer bg-[#ff1d50] p-[17px] text-white">
            <RxHamburgerMenu className="text-[24px] " />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderFooter;
