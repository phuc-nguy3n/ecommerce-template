import React from "react";
import { FaCalendarDays, FaRegUser } from "react-icons/fa6";

import "./styles.css";

const videoPost = [
  {
    img: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cat-tastic updates, keeping you feline fine",
  },

  {
    img: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cat-tastic updates, keeping you feline fine",
  },

  {
    img: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cat-tastic updates, keeping you feline fine",
  },

  {
    img: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cat-tastic updates, keeping you feline fine",
  },
];

export default function VideoSection() {
  return (
    <div className="bg-black py-[60px] mb-[1px]">
      <div className="container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px]">
        <h2 className="relative text-white text-[30px] font-semibold inline-block mb-[33px]">
          Videos
          <span className="line"></span>
        </h2>

        <div className="grid lg:grid-cols-12 grid-cols-4">
          <ul className="xl:col-span-4 lg:col-span-2 col-span-4 lg:pr-[15px] md:pr-0 lg:mb-0 mb-[24px] video-list">
            <div className="lg:block grid grid-cols-4 lg:gap-0 gap-[24px] xl:space-y-[20px] lg:space-y-[24px]">
              {videoPost.map((item, index) => (
                <li className="flex lg:gap-4 gap-0" key={index}>
                  <div className="flex-2 lg:flex-grow-0 flex-grow lg:mb-0 mb-[24px]">
                    <img
                      className="lg:w-[100px] md:w-full h-[100px] object-cover"
                      src={item.img}
                      alt="video"
                    />
                  </div>
                  <div className="flex-1 xl:block hidden">
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <div className="px-[8px] text-white bg-[#FF1D50] rounded-sm font-semibold w-fit hover:bg-black cursor-pointer transition-colors duration-300 ease-in-out">
                          Video
                        </div>

                        <h2 className="text-[17px] leading-[1.4] mt-0.5 font-semibold text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
                          {item.title}
                        </h2>

                        <span className="flex items-center mt-2.5  gap-2 text-gray-400 text-[14px] hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out w-fit">
                          <FaCalendarDays />
                          <p className="mt-0.5">20 March, 2024</p>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </div>
          </ul>

          <div className="xl:col-span-8 lg:col-span-10 col-span-4">
            <div className="lg:pl-[54px] pl-[0]">
              <div className="xl:mb-[32px] lg:mb-[28px] mb-[32px]">
                <img
                  className="h-[376px] w-full object-cover"
                  src="https://images.unsplash.com/photo-1555980483-93e7b3529e1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="video"
                />
              </div>

              <h3 className="text-white md:text-[24px] text-[18px] font-semibold xl:mb-[15px] lg:mb-[10px] mb-[15px]">
                Cat-tastic updates, keeping you feline fine
              </h3>

              <div className="flex gap-5">
                <div className="px-2 py-1 text-white bg-blue-400 rounded-sm font-medium w-fit">
                  VIDEO
                </div>
                <div className="flex items-center gap-3 text-[#B5B5B5]">
                  <span className="text-[14px] font-semibold flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                    <FaRegUser />
                    <p className="mt-0.5">By - Tnews</p>
                  </span>

                  <span>|</span>

                  <span className="text-[14px] font-semibold flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                    <FaCalendarDays />
                    <p className="mt-0.5">20 Mar, 2023 </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
