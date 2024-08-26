import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="pt-12 pb-6 bg-black dark:bg-[#282828]">
      <div className="container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px]">
        <div className="flex flex-col justify-center items-center gap-10">
          <a href="/#">
            <img src="/logo.png" alt="logo" className="w-[346px] h-[114px]" />
          </a>

          <div className="flex items-center gap-[10px] flex-wrap">
            <div className="icon-box p-[14px] rounded-full bg-[#363739] cursor-pointer">
              <FaFacebookF className="text-white" />
            </div>

            <div className="icon-box p-[14px] rounded-full bg-[#363739] cursor-pointer">
              <FaTwitter className="text-white" />
            </div>

            <div className="icon-box p-[14px] rounded-full bg-[#363739] cursor-pointer">
              <FaLinkedinIn className="text-white" />
            </div>

            <div className="icon-box p-[14px] rounded-full bg-[#363739] cursor-pointer">
              <FaInstagram className="text-white" />
            </div>

            <div className="icon-box p-[14px] rounded-full bg-[#363739] cursor-pointer">
              <FaYoutube className="text-white" />
            </div>
          </div>

          <nav className="flex items-center gap-[30px] text-white flex-wrap justify-center">
            <a href="/#" className="uppercase">
              home
            </a>
            <a href="/#" className="uppercase">
              features
            </a>
            <a href="/#" className="uppercase">
              category
            </a>
            <a href="/#" className="uppercase">
              posts
            </a>
            <a href="/#" className="uppercase">
              gadgets
            </a>
            <a href="/#" className="uppercase">
              contact
            </a>
          </nav>

          <div className="flex lg:flex-row flex-col lg:gap-0 gap-6 items-center justify-between text-[#838f92] flex-grow w-full text-[12px]">
            <p className="text-center lg:order-1 order-2">
              Copyright © 2024 HIMMLISCHES JERUSALEM. All rights reserved.
            </p>
            <div className="lg:order-2 order-1">
              <ul className="flex sm:flex-row flex-col items-center gap-y-2">
                <li className="capitalize">
                  <a href="/#" className="px-[16px]">
                    Home
                  </a>
                </li>
                <li className="capitalize">
                  <a href="/#" className="px-[16px]">
                    About Us
                  </a>
                </li>
                <li className="capitalize">
                  <a href="/#" className="px-[16px]">
                    Faq
                  </a>
                </li>
                <li className="capitalize">
                  <a href="/#" className="px-[16px]">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
