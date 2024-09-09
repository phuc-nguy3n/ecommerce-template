"use client";

import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { LuVote } from "react-icons/lu";
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
            <ul className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[20px] ">
              {videoOverviewData.map((item, index) => (
                <li
                  key={index}
                  className="rounded-md overflow-hidden border flex flex-col"
                >
                  <div className="mb-[25px] overflow-hidden xl:w-[380px] lg:w-[442px] w-full h-[200px] relative box">
                    <img
                      className="xl:w-[380px] lg:w-[442px] w-full h-[200px] object-cover"
                      src={item.img}
                      alt="News"
                    />

                    {/* Overlay */}
                    <div className="absolute top-0 xl:w-[380px] lg:w-[442px] w-full h-[200px] gradient-bg video flex flex-col p-[20px] justify-start">
                      <div className="lg:mb-0 mb-[15px] px-[8px] leading-[26px] text-[12px] font-bold uppercase text-white bg-[#007BFF] rounded-[3px] w-fit hover:bg-black cursor-pointer transition-colors duration-300 ease-in-out">
                        {item.tagName}
                      </div>
                    </div>

                    {/* Play button */}
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4 bg-white hover:bg-[--primary] hover:text-white rounded-full cursor-pointer">
                      <FaPlay className="text-lg" />
                    </div>
                  </div>

                  <h3 className="px-[25px] md:text-[20px] text-basic leading-[1.8] font-bold cursor-pointer hover:text-[#ff1d50] md:line-clamp-3 line-clamp-2 flex-2">
                    {item.title}
                  </h3>
                  <div className="flex justify-end items-end p-[25px] flex-1">
                    <button className="py-2 px-4 flex items-center bg-white rounded-sm border gap-1">
                      <LuVote /> vote
                    </button>
                  </div>
                </li>
              ))}
            </ul>

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
