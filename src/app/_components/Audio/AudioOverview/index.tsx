"use client";

import "./styles.css";

import { FaRegCirclePlay } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";

import Breadcrumb from "../_components/Breadcrumb";

import { useState, useRef, useEffect } from "react";

const audioData = [
  {
    img: "https://images.unsplash.com/photo-1625019030820-e4ed970a6c95?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameFile: "Aug 11, 2024 - Offerings & Consitution of the KingDom",
    recorBy: "The Church in Fourtain Valley",
    src: "/audio/2024Somko-06a_Weissagungen_DEU.mp3",
  },
  {
    img: "https://images.unsplash.com/photo-1625019030820-e4ed970a6c95?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameFile: "Aug 11, 2024 - Offerings & Consitution of the KingDom",
    recorBy: "The Church in Fourtain Valley",
    src: "/audio/2024Somko-06a_Weissagungen_DEU.mp3",
  },

  {
    img: "https://images.unsplash.com/photo-1625019030820-e4ed970a6c95?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameFile: "Aug 11, 2024 - Offerings & Consitution of the KingDom",
    recorBy: "The Church in Fourtain Valley",
    src: "/audio/2024Somko-06a_Weissagungen_DEU.mp3",
  },

  {
    img: "https://images.unsplash.com/photo-1625019030820-e4ed970a6c95?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameFile: "Aug 11, 2024 - Offerings & Consitution of the KingDom",
    recorBy: "The Church in Fourtain Valley",
    src: "/audio/2024Somko-06a_Weissagungen_DEU.mp3",
  },

  {
    img: "https://images.unsplash.com/photo-1625019030820-e4ed970a6c95?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameFile: "Aug 11, 2024 - Offerings & Consitution of the KingDom",
    recorBy: "The Church in Fourtain Valley",
    src: "/audio/2024Somko-06a_Weissagungen_DEU.mp3",
  },

  {
    img: "https://images.unsplash.com/photo-1625019030820-e4ed970a6c95?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameFile: "Aug 11, 2024 - Offerings & Consitution of the KingDom",
    recorBy: "The Church in Fourtain Valley",
    src: "/audio/2024Somko-06a_Weissagungen_DEU.mp3",
  },
];

const AudioOverView = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateTime = () => {
        setCurrentTime(audio.currentTime);
      };

      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("loadedmetadata", () => {
        setDuration(audio.duration);
      });

      return () => {
        audio.removeEventListener("timeupdate", updateTime);
      };
    }
  }, []);

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = Number(event.target.value);
    }
  };

  return (
    <div>
      <Breadcrumb items={[{ label: "home" }, { label: "audio" }]} />

      <div className="pt-[60px] pb-[30px]">
        <div className="container xl:max-w-[1248px] lg:max-w-[960px] max-w-[720px]">
          <div className="flex justify-between items-center gap-[100px] mb-[80px]">
            <div className="img-box overflow-hidden rounded-xl">
              <img
                className="w-[300px] h-[300px] object-cover"
                src="https://images.unsplash.com/photo-1723653263152-f20aae931b99?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>

            <div className="flex-grow">
              <div className="title-area flex justify-between">
                <div>
                  <h2 className="title capitalize text-[28px] font-semibold mb-[12px]">
                    Sunday Meetings
                  </h2>
                  <div className="recor-box flex items-center text-[#54595F] gap-[10px] mb-[12px]">
                    <span>Recording</span>
                    <span>
                      <GoDotFill className="text-[10px]" />
                    </span>
                    <span>96 Recording</span>
                  </div>
                  <div className="created-by flex gap-[8px]">
                    <span className="text-[#54595F]">By: </span>
                    <p className="font-medium">The Church in Fountain Valley</p>
                  </div>

                  <div className="play-box flex gap-[8px] mt-[44px] items-center cursor-pointer">
                    <FaRegCirclePlay className="text-[40px] text-[#FF1D50]" />{" "}
                    <span className="font-semibold">Play all</span>
                  </div>
                </div>

                <span className="options-box mt-[8px]">
                  <SlOptions className="cursor-pointer text-[20px]" />
                </span>
              </div>
            </div>
          </div>

          <div className="mb-[30px]">
            <div className="flex items-center gap-[24px] mb-[40px]">
              <span className="text-[#757c83]">Select language</span>{" "}
              <div className="form-group col-span-1 bg-[#F5F5F5] h-[50px] rounded-md relative">
                <select className="form-control w-full h-[50px] pr-[45px] pl-[15px] outline-none border border-1 text-[16px] rounded-md text-[#54596e] ">
                  <option selected value="English">
                    English
                  </option>
                  <option value="German">German</option>
                  <option value="France">France</option>
                </select>
                <IoIosArrowDown className="absolute translate-y-[-50%] top-[50%] right-[10%]" />
              </div>
            </div>
            <ul className="audio-list grid grid-cols-2 gap-y-[10px] gap-x-[40px] px-[10]x">
              {audioData.map((item, index) => (
                <li key={index}>
                  <div className="audio-item flex justify-between hover:bg-slate-50 p-[10px] rounded-md">
                    <div className="flex gap-[16px]">
                      <div className="audio-icon w-[70px] h-[50px] flex justify-center items-center bg-[#FF1D50] rounded-md overflow-hidden relative cursor-pointer">
                        <img
                          className="w-[70px] h-[50px] object-cover"
                          src={item.img}
                          alt=""
                        />

                        <div className="play-box overlay absolute w-[30px] h-[30px] bg-white rounded-full hidden items-center justify-center">
                          <IoMdPlay />
                        </div>
                      </div>
                      <div className="audio-title-area mt-[-4px] flex flex-col justify-center">
                        <h3 className="audio-title text-[16px] mb-[2px] line-clamp-1 cursor-pointer">
                          {item.nameFile}
                        </h3>
                        <div className="flex items-center gap-[16px] ">
                          <span className="text-[#757c83] text-[14px] cursor-pointer">
                            {item.recorBy}
                          </span>{" "}
                          {isPlaying && (
                            <div className="flex items-center gap-2">
                              <input
                                type="range"
                                min="0"
                                max={duration.toFixed(2)}
                                value={currentTime}
                                onChange={handleTimeChange}
                                className="progress-bar w-[150px] h-[4px] bg-gray-300 rounded"
                              />
                              <span className="text-sm text-gray-500">
                                {new Date(currentTime * 1000)
                                  .toISOString()
                                  .substr(14, 5)}{" "}
                                /{" "}
                                {new Date(duration * 1000)
                                  .toISOString()
                                  .substr(14, 5)}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center items-center gap-[16px]">
                      <div className="play-btn w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
                        <FaRegHeart className="text-[20px]" />
                      </div>

                      <span className="options-box">
                        <SlOptions className="cursor-pointer text-[20px]" />
                      </span>
                      <audio
                        ref={audioRef}
                        src="/audio/2024Somko-06a_Weissagungen_DEU.mp3"
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioOverView;
