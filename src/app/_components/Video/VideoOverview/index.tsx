"use client";

import React, { useEffect, useState } from "react";
import { FaCalendarDays, FaPlay } from "react-icons/fa6";
import { LuVote } from "react-icons/lu";
import { IoArrowForward } from "react-icons/io5";
import { BiLike, BiWorld } from "react-icons/bi";
import LoadingBlock from "../../LoadingBlock";
import Breadcrumb from "../../ui/Breadcrumb";

import "./styles.css";
import { CgClose } from "react-icons/cg";
import { homeStyle } from "@/app/constantStyle";
import { FaRegUser } from "react-icons/fa";

const videoOverviewData = [
  {
    tagName: "Video",
    img: "https://images.unsplash.com/photo-1531356495-75ccc754cb64?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Paddle your way to adventure, embrace kayaking.",
    src: "/video/file_example_MP4_480_1_5MG.mp4",
    voted: 20,
    created: "29 Mar, 2023",
    createBy: "By - Tnews ",
  },

  {
    tagName: "Video",
    img: "https://images.unsplash.com/photo-1531356495-75ccc754cb64?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Paddle your way to adventure, embrace kayaking.",
    src: "/video/12221555_3840_2160_30fps.mp4",
    voted: 17,
    created: "29 Mar, 2023",
    createBy: "By - Tnews ",
  },

  {
    tagName: "Video",
    img: "https://images.unsplash.com/photo-1531356495-75ccc754cb64?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Paddle your way to adventure, embrace kayaking.",
    src: "/video/19935237-uhd_3840_2160_30fps.mp4",
    voted: 15,
    created: "29 Mar, 2023",
    createBy: "By - Tnews ",
  },
];

const VideoOverview = () => {
  const [loadingPage, setLoadingPage] = useState(true);
  const [video, setVideo] = useState<string>();
  const [indexVideo, setIndexVideo] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setVideo(videoOverviewData[indexVideo].src);
    }
  }, [indexVideo]);

  const handleOpenVideo = (isOpen: boolean, index: number | null) => {
    const videoElement = document.querySelector(".video-frame");

    if (isOpen && index !== null) {
      setIndexVideo(index);

      videoElement?.classList.add("active");
      document.body.style.overflow = "hidden";
    } else {
      videoElement?.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="video-overview">
      <Breadcrumb items={[{ label: "home" }, { label: "Video overview" }]} />

      {loadingPage ? (
        <LoadingBlock />
      ) : (
        <section className="pt-[60px] pb-[30px]">
          <div className="container xl:max-w-[1248px] lg:max-w-[960px] max-w-[720px]">
            <div className="md:flex block  items-center mb-5 flex-wrap">
              <span className="flex items-center mr-3 text-lg md:mb-0 mb-3">
                Select language:{" "}
              </span>
              <div className="form-group bg-[#F5F5F5] h-[50px] rounded-md relative  sm:flex-grow-0 flex-grow">
                <select
                  defaultValue="English"
                  className="form-control language w-full h-[50px] pr-[45px] pl-[15px] outline-none border border-1 text-[16px] rounded-md text-[#54596e] "
                >
                  <option value="English">English</option>
                  <option value="German">German</option>
                  <option value="France">France</option>
                </select>
                <BiWorld className="absolute translate-y-[-50%] top-[50%] right-[10%]" />
              </div>
            </div>

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
                    <div
                      onClick={() => {
                        handleOpenVideo(true, index);
                      }}
                      className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4 bg-white hover:bg-[--primary] hover:text-white rounded-full cursor-pointer"
                    >
                      <FaPlay className="text-lg" />
                    </div>
                  </div>

                  <h3 className="px-[25px] md:text-[20px] text-basic leading-[1.8] font-bold cursor-pointer hover:text-[#ff1d50] md:line-clamp-3 line-clamp-2 flex-2">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-end p-[25px] flex-1">
                    <div className={homeStyle.timeBoxOne}>
                      <span className={homeStyle.textTimeOne}>
                        <FaRegUser />
                        <p className="mt-0.5">By - Tnews</p>
                      </span>

                      <span className="text-[--text-time]">|</span>

                      <span className={homeStyle.textTimeOne}>
                        <FaCalendarDays />
                        <p className="mt-0.5">20 Mar, 2023 </p>
                      </span>
                    </div>
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

          {/* Video frame */}
          <div className="video-frame fixed top-0 right-0 left-0 bottom-0 w-full bg-black bg-opacity-50 z-[9999] overflow-hidden">
            <div className="flex justify-center items-center h-screen px-3">
              <div className="w-full max-w-[900px] relative">
                <div className="flex items-center justify-end mb-3">
                  <button
                    onClick={() => handleOpenVideo(false, null)}
                    className="text-[18px] text-gray-200 hover:text-white py-2"
                  >
                    <CgClose className="flex-grow text-[24px]" />
                  </button>
                </div>

                {/* Container với tỷ lệ khung hình 16:9 */}
                <div className="relative pb-[56.25%] h-0">
                  <video key={video} className="w-full" controls>
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default VideoOverview;
