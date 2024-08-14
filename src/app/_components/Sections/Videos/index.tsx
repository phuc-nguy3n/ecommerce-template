"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaCalendarDays, FaRegUser, FaPlay } from "react-icons/fa6";
import { GiSoundWaves } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

import "./styles.css";

type VideoType = {
  tagName: string;
  img: string;
  video: string;
  title: string;
  created: string;
  createBy: string;
  active: boolean;
};

type VideoFrameProps = {
  video: string | undefined;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const videoData: VideoType[] = [
  {
    tagName: "Video",
    img: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    video: "https://www.youtube.com/embed/M2_tjzmbwQY?si=ZUz_XebhBQPrtY_Q",
    title: "Cat-tastic updates, keeping you feline fine",
    created: "20 March, 2024",
    createBy: "By - Tnews",
    active: true,
  },

  {
    tagName: "Video",
    img: "https://images.unsplash.com/photo-1721679241473-d00437cb5a44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    video: "https://www.youtube.com/embed/wWB9ECzd8SA?si=a5j2-5-j67dKISuL",
    title: "Men are from Mars, women are from Venus",
    created: "20 March, 2024",
    createBy: "By - Ketie",
    active: false,
  },

  {
    tagName: "Video",
    img: "https://images.unsplash.com/photo-1723231462029-1e1f3ae64385?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    video: "https://www.youtube.com/embed/MHO-tL3TC1A?si=ix7mkMv-YhCZ7I2f",
    title: "Exciting football match between two teams",
    created: "20 March, 2024",
    createBy: "By - Funkie",
    active: false,
  },

  {
    tagName: "Video",
    img: "https://images.unsplash.com/photo-1723242017539-39cd15eb75fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    video: "https://www.youtube.com/embed/TM9SGdrOMsk?si=440JcdpX1_rFVszM",
    title: "Beautiful city night view",
    created: "20 March, 2024",
    createBy: "By - Tamkie",
    active: false,
  },
];

export default function VideoSection() {
  const [videoPosts, setVideoPosts] = useState(videoData);
  const [videoActive, setVideoActive] = useState<VideoType | undefined>(
    videoPosts.find((post) => post.active)
  );
  const [isOpenFrameVideo, setOpenFrameVideo] = useState(false);

  useEffect(() => {
    const video = videoPosts.find((post) => post.active);
    setVideoActive(video);
  }, [videoPosts]);

  const handleVideoActive = (index: number) => {
    const updatedPosts = videoPosts.map((post, i) => ({
      ...post,
      active: i === index,
    }));
    setVideoPosts(updatedPosts);
  };

  const handlePlayVideo = () => {
    document.body.style.overflow = "hidden";
    setOpenFrameVideo(true);
  };

  return (
    <>
      <div className="bg-black py-[60px] mb-[1px]">
        <div className="container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px]">
          <h2 className="relative text-white text-[30px] font-semibold inline-block mb-[33px]">
            Videos
            <span className="line"></span>
          </h2>

          <div className="grid lg:grid-cols-12 grid-cols-4">
            <ul className="xl:col-span-4 lg:col-span-2 col-span-4 lg:pr-[15px] md:pr-0 lg:mb-0 mb-[24px] video-list">
              <div className="lg:block grid grid-cols-4 lg:gap-0 sm:gap-[24px] gap-[10px] xl:space-y-[20px] lg:space-y-[24px]">
                {videoPosts.map((item, index) => (
                  <li className="flex lg:gap-4 gap-0" key={index}>
                    <div className="flex-2 lg:flex-grow-0 flex-grow h-[100px] lg:mb-0 mb-[24px] relative overflow-hidden box">
                      <img
                        className="lg:w-[100px] md:w-full h-[100px] object-cover transform transition-transform duration-500 hover:scale-105"
                        src={item.img}
                        alt="video"
                      />

                      <div
                        onClick={() => handleVideoActive(index)}
                        className="absolute top-0 w-full h-[100px] flex flex-col p-[30px] bg-black bg-opacity-[0.3] items-center justify-center"
                      >
                        <div className="relative w-full h-full flex items-center justify-center">
                          {item.active ? (
                            <button className="btn-sound-wave pl-3 pr-2 py-2.5 rounded-full absolute top-[80%] left-[-30px]">
                              <GiSoundWaves className="text-[28px] text-white" />
                            </button>
                          ) : (
                            <>
                              <div className="animate-fadeOutExpand bg-white w-[30px] h-[30px] rounded-full"></div>

                              <button className="btn-play bg-white pl-3 pr-2 py-2.5 rounded-full  absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
                                <FaPlay />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 xl:block hidden">
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <div className="px-[8px] text-white bg-[#FF1D50] rounded-sm font-semibold w-fit hover:bg-black cursor-pointer transition-colors duration-300 ease-in-out">
                            {item.tagName}
                          </div>

                          <h2 className="text-[17px] leading-[1.4] mt-0.5 font-semibold text-white hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
                            {item.title}
                          </h2>

                          <span className="flex items-center mt-2.5  gap-2 text-gray-400 text-[14px] hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out w-fit">
                            <FaCalendarDays />
                            <p className="mt-0.5">{item.created}</p>
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
                <div className="xl:mb-[32px] lg:mb-[28px] mb-[32px] relative">
                  <img
                    className="h-[376px] w-full object-cover"
                    src={videoActive?.img}
                    alt="video"
                  />

                  <div className="absolute top-0 w-full h-[376px] flex flex-col p-[30px] bg-black bg-opacity-[0.3] items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center btn-box">
                      <div className="animate-fadeOutExpand bg-white w-[50px] h-[50px] rounded-full"></div>

                      <button
                        onClick={handlePlayVideo}
                        className="bg-white pl-4 pr-3 py-[14px] rounded-full btn-play absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 hover:text-white hover:bg-[#ff1d50] transition-colors duration-300 ease-in-out"
                      >
                        <FaPlay className="text-[24px] " />
                      </button>
                    </div>
                  </div>
                </div>

                <h3 className="text-white md:text-[24px] text-[18px] font-semibold xl:mb-[15px] lg:mb-[10px] mb-[15px]">
                  {videoActive?.title}
                </h3>

                <div className="flex gap-5">
                  <div className="px-2 py-1 text-white bg-[#FF1D50] rounded-sm font-semibold w-fit hover:bg-black cursor-pointer transition-colors duration-300 ease-in-out rounded-sm font-medium w-fit">
                    {videoActive?.tagName}
                  </div>
                  <div className="flex items-center gap-3 text-[#B5B5B5]">
                    <span className="text-[14px] font-semibold flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                      <FaRegUser />
                      <p className="mt-0.5">{videoActive?.createBy}</p>
                    </span>

                    <span>|</span>

                    <span className="text-[14px] font-semibold flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                      <FaCalendarDays />
                      <p className="mt-0.5">{videoActive?.created}</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpenFrameVideo && (
        <VideoFrame video={videoActive?.video} setOpen={setOpenFrameVideo} />
      )}
    </>
  );
}

const VideoFrame: React.FC<VideoFrameProps> = ({ video, setOpen }) => {
  const handleCloseVideo = () => {
    document.body.style.overflow = "auto";
    setOpen(false);
  };

  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 w-full bg-black bg-opacity-50 z-[9999] overflow-hidden">
      <div className="flex justify-center items-center h-screen px-3">
        <div className="w-full max-w-[900px] ">
          <div className="flex items-center justify-end ">
            <button
              onClick={handleCloseVideo}
              className="text-[18px] text-gray-200 hover:text-white py-2"
            >
              <CgClose className="flex-grow text-[24px]" />
            </button>
          </div>

          <iframe
            className="w-full h-[500px]"
            src={video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
