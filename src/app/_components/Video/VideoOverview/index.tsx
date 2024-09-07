"use client";

import React, { useEffect, useState } from "react";
import { FaCalendarDays, FaRegUser, FaPlay } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";
import LoadingBlock from "../../LoadingBlock";
import Breadcrumb from "../../ui/Breadcrumb";

import "./styles.css";

const videoOverviewData = [
  {
    tagName: "News",
    img: "https://images.unsplash.com/photo-1531356495-75ccc754cb64?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Paddle your way to adventure, embrace kayaking.",
    created: "29 Mar, 2023",
    createBy: "By - Tnews ",
  },

  {
    tagName: "News",
    img: "https://images.unsplash.com/photo-1531356495-75ccc754cb64?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Paddle your way to adventure, embrace kayaking.",
    created: "29 Mar, 2023",
    createBy: "By - Tnews ",
  },

  {
    tagName: "News",
    img: "https://images.unsplash.com/photo-1531356495-75ccc754cb64?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Paddle your way to adventure, embrace kayaking.",
    created: "29 Mar, 2023",
    createBy: "By - Tnews ",
  },

  {
    tagName: "News",
    img: "https://images.unsplash.com/photo-1531356495-75ccc754cb64?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Paddle your way to adventure, embrace kayaking.",
    created: "29 Mar, 2023",
    createBy: "By - Tnews ",
  },

  {
    tagName: "News",
    img: "https://images.unsplash.com/photo-1531356495-75ccc754cb64?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Paddle your way to adventure, embrace kayaking.",
    created: "29 Mar, 2023",
    createBy: "By - Tnews ",
  },

  {
    tagName: "News",
    img: "https://images.unsplash.com/photo-1531356495-75ccc754cb64?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Paddle your way to adventure, embrace kayaking.",
    created: "29 Mar, 2023",
    createBy: "By - Tnews ",
  },

  {
    tagName: "News",
    img: "https://images.unsplash.com/photo-1531356495-75ccc754cb64?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Paddle your way to adventure, embrace kayaking.",
    created: "29 Mar, 2023",
    createBy: "By - Tnews ",
  },

  {
    tagName: "News",
    img: "https://images.unsplash.com/photo-1531356495-75ccc754cb64?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Paddle your way to adventure, embrace kayaking.",
    created: "29 Mar, 2023",
    createBy: "By - Tnews ",
  },

  {
    tagName: "News",
    img: "https://images.unsplash.com/photo-1531356495-75ccc754cb64?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Paddle your way to adventure, embrace kayaking.",
    created: "29 Mar, 2023",
    createBy: "By - Tnews ",
  },
];

const VideoOverview = () => {
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 1000);
  }, []);

  return (
    <div className="video-overview">
      <Breadcrumb items={[{ label: "home" }, { label: "Video overview" }]} />

      {loadingPage ? (
        <LoadingBlock />
      ) : (
        <section className="pt-[60px] pb-[30px]">
          <div className="container xl:max-w-[1248px] lg:max-w-[960px] max-w-[720px]">
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[20px]">
              {videoOverviewData.map((item, index) => (
                <div key={index}>
                  <div className="mb-[25px] overflow-hidden xl:w-[380px] lg:w-[442px] w-full xl:h-[310px] lg:h-[360px] md:h-[265px] sm:h-[250px] h-[200px] relative box">
                    <img
                      className="xl:w-[380px] lg:w-[442px] w-full xl:h-[310px] lg:h-[360px] md:h-[265px] sm:h-[250px] h-[200px] object-cover"
                      src={item.img}
                      alt="News"
                    />

                    {/* Overlay */}
                    <div className="absolute top-0 xl:w-[380px] lg:w-[442px] w-full xl:h-[310px] lg:h-[360px] md:h-[265px] sm:h-[250px] h-[200px] gradient-bg video flex flex-col p-[20px] justify-start">
                      <div className="lg:mb-0 mb-[15px] px-[8px] leading-[26px] text-[12px] font-bold uppercase text-white bg-[#007BFF] rounded-[3px] w-fit hover:bg-black cursor-pointer transition-colors duration-300 ease-in-out">
                        {item.tagName}
                      </div>
                    </div>

                    {/* Play button */}
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4 bg-white hover:bg-[--primary] hover:text-white rounded-full cursor-pointer">
                      <FaPlay className="text-lg" />
                    </div>
                  </div>
                  <h3 className="text-[20px] leading-[1.8] font-bold mb-[15px] cursor-pointer hover:text-[#ff1d50]">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3 text-[#B5B5B5]">
                    <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                      <FaRegUser />
                      <p className="mt-0.5">{item.createBy}</p>
                    </span>

                    <span>|</span>

                    <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                      <FaCalendarDays />
                      <p className="mt-0.5">{item.created}</p>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-[40px] mb-[30px]">
              <ul className="flex items-center justify-center gap-[10px]">
                <li className="w-[50px] h-[50px] border border-1 rounded-full flex items-center justify-center">
                  <p className=" text-[14px] font-semibold">1</p>
                </li>
                <li className="w-[50px] h-[50px] border border-1 rounded-full flex items-center justify-center">
                  <p className=" text-[14px] font-semibold">2</p>
                </li>
                <li className="w-[50px] h-[50px] border border-1 rounded-full flex items-center justify-center">
                  <p className=" text-[14px] font-semibold">3</p>
                </li>
                <li className="w-[50px] h-[50px] border border-1 rounded-full flex items-center justify-center">
                  <p className=" text-[14px] font-semibold">
                    <IoArrowForward />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default VideoOverview;
