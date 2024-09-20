"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaCalendarDays, FaRegUser, FaPlay } from "react-icons/fa6";
import { GiSoundWaves } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { homeStyle } from "@/app/constantStyle";

import "./styles.css";
import Container from "../../Container/Container";

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

  {
    tagName: "Video",
    img: "https://images.unsplash.com/photo-1711192702535-eac61a78ecb0?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    video: "https://www.youtube.com/embed/B9VRvOKKwfs?si=Z304b2WPBO4t5rSZ",
    title: "SWITZERLAND",
    created: "20 March, 2024",
    createBy: "By - Relaxation Film",
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
      <div className={homeStyle.video.wrapper}>
        <Container>
          <h2 className={`text-white ${homeStyle.heading}`}>
            Videos
            <span className="line"></span>
          </h2>

          <div className="grid lg:grid-cols-12 grid-cols-4">
            {/* Video list */}
            <ul className={homeStyle.video.postList}>
              <div className={homeStyle.video.itemBox}>
                {videoPosts.map((item, index) => (
                  // Item
                  <li
                    className="lg:flex flex-none lg:w-auto w-1/4 lg:gap-4 gap-0"
                    key={index}
                  >
                    <div className={homeStyle.video.imgBox}>
                      <img
                        className={homeStyle.video.imgBox}
                        src={item.img}
                        alt="video"
                      />

                      {/* Overlay */}
                      <div
                        onClick={() => handleVideoActive(index)}
                        className={homeStyle.video.overlay}
                      >
                        <div className={homeStyle.video.playDisplayBox}>
                          {item.active ? (
                            <button
                              className={`btn-sound-wave md:top-[80%] top-[50%] md:left-[-30px] left-[-10px] ${homeStyle.video.btn}`}
                            >
                              <GiSoundWaves className="text-[28px] text-white" />
                            </button>
                          ) : (
                            <>
                              <div className="animate-fadeOutExpand bg-white w-[30px] h-[30px] rounded-full"></div>

                              <button
                                className={`btn-play bg-white top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 ${homeStyle.video.btn}`}
                              >
                                <FaPlay />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="flex-1 xl:block hidden">
                      <div className="flex flex-col justify-between h-full">
                        <div className={homeStyle.tag}>{item.tagName}</div>

                        <h2 className={homeStyle.video.titleSecond}>
                          {item.title}
                        </h2>

                        <span className={`mt-2.5 ${homeStyle.timeBoxTwo}`}>
                          <FaCalendarDays />
                          <p className="mt-0.5">{item.created}</p>
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
            </ul>

            {/* Video active */}
            <div className="xl:col-span-8 lg:col-span-10 col-span-4">
              <div className="lg:pl-[54px] pl-[0]">
                {/* Img box */}
                <div className={homeStyle.video.imgBoxMain}>
                  <img
                    className={homeStyle.video.imgMain}
                    src={videoActive?.img}
                    alt="video"
                  />
                  {/* Overlay */}
                  <div className={homeStyle.video.overlayMain}>
                    <div className={homeStyle.video.overlayWrapperMain}>
                      <div className="animate-fadeOutExpand bg-white w-[50px] h-[50px] rounded-full"></div>

                      <button
                        onClick={handlePlayVideo}
                        className={homeStyle.video.btnActive}
                      >
                        <FaPlay className="text-[24px] " />
                      </button>
                    </div>
                  </div>
                </div>

                <h3 className={homeStyle.video.titleMain}>
                  {videoActive?.title}
                </h3>

                <div className="flex gap-5">
                  <div className={homeStyle.tag}>{videoActive?.tagName}</div>
                  <div className={homeStyle.timeBoxOne}>
                    <span className={homeStyle.textTimeOne}>
                      <FaRegUser />
                      <p className="mt-0.5">{videoActive?.createBy}</p>
                    </span>

                    <span className="text-[--text-time]">|</span>

                    <span className={homeStyle.textTimeOne}>
                      <FaCalendarDays />
                      <p className="mt-0.5">{videoActive?.created}</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
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
    <div
      onClick={handleCloseVideo}
      className="fixed top-0 right-0 left-0 bottom-0 w-full bg-black bg-opacity-50 z-[9999] overflow-hidden"
    >
      <div className="flex justify-center items-center h-screen px-3">
        <div className="w-full max-w-[900px] relative">
          {/* Container với tỷ lệ khung hình 16:9 */}
          <div className="pb-[56.25%] h-0 relative">
            <div className="flex items-center justify-center mb-3 absolute -top-[32px] right-[0] z-10 ">
              <button onClick={handleCloseVideo} className="p-1rounded-full">
                <CgClose className="flex-grow lg:text-[24px] text-[20px] text-white" />
              </button>
            </div>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
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
    </div>
  );
};
