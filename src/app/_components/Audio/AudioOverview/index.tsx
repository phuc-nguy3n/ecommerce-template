"use client";

import "./styles.css";

import {
  FaCalendarDays,
  FaRegComments,
  FaRegUser,
  FaRegCirclePlay,
  FaRegCirclePause,
} from "react-icons/fa6";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { FiMail } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { IoArrowBack, IoArrowForward, IoSearch } from "react-icons/io5";
import { MdAudiotrack } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";

import Breadcrumb from "../_components/Breadcrumb";
import ShareMedia from "../_components/ShareMedia";
import ActionBar from "../_components/ActionBar";

import { useState, useRef, useEffect } from "react";

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
          <div className="flex flex-col items-center w">
            {/* Title */}
            <h2 className="mt-[10px] mb-[18px] text-[34px] leading-[1.5] text-center font-bold tracking-wide">
              Tech made simple, your everyday made extraordinary with the power
              of digital VR glass.
            </h2>

            {/* Info */}
            <div className="flex items-center gap-4 text-[#54595F] mb-[24px]">
              <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                <FaRegUser />
                <p className="mt-0.5 capitalize">By - Tnews</p>
              </span>

              <span className="text-[#EFEFEF]">|</span>

              <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                <FaCalendarDays />
                <p className="mt-0.5 capitalize">21 June, 2023</p>
              </span>

              <span className="text-[#EFEFEF]">|</span>

              <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                <FaRegComments className="text-[16px]" />
                <p className="mt-0.5 capitalize">Comments (3)</p>
              </span>

              <span className="text-[#EFEFEF]">|</span>

              <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                <HiOutlineBookOpen className="text-[16px]" />
                <p className="mt-0.5 capitalize">5 Mins Read</p>
              </span>
            </div>

            {/* Img */}
            <div className="mb-[35px] w-[1184px]">
              <img
                className="object-cover w-[1184px] h-[600px]"
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>

          <div className="container max-w-[1000px]">
            <div className="mb-[30px] flex gap-[30px] relative">
              {/* Share media */}
              <ShareMedia />

              {/* Content */}
              <div className="flex-grow">
                <ActionBar liked={1300} viewed={6000} shared={200} />

                <div className="grid grid-cols-4 gap-[24px] mb-[35px]">
                  <div className="form-group col-span-1 bg-[#F5F5F5] h-[50px] rounded-md">
                    <select className="form-control w-full h-[50px] px-[25px] outline-none  text-[16px] rounded-md text-[#54596e] ">
                      <option value="" disabled selected hidden>
                        Language
                      </option>
                      <option value="English">English</option>
                      <option value="German">German</option>
                      <option value="France">France</option>
                    </select>
                  </div>

                  <div className="flex rounded-[3px] overflow-hidden col-span-3">
                    <div className="form-group relative flex-grow">
                      <input
                        type="text"
                        className="w-full h-[50px] bg-[#F5F5F5] text-[#54595F] text-[16px] pr-[40px] pl-[25px] outline-none "
                        placeholder="Name or Description"
                      />
                    </div>
                    <button className="bg-[#FF1D50] w-[66px] h-[50px] flex items-center justify-center">
                      <IoSearch className="text-white text-[18px]" />
                    </button>
                  </div>
                </div>

                <ul className="mb-[30px] audio-list px-[10px]">
                  <li>
                    <div className="audio-item flex justify-between">
                      <div className="flex gap-[16px]">
                        <div className="audio-icon w-[50px] h-[50px] flex justify-center items-center bg-[#FF1D50] rounded-md">
                          <MdAudiotrack className="text-[40px] text-white" />
                        </div>
                        <div className="audio-title-area mt-[-4px]">
                          <h3 className="audio-title text-[20px] font-semibold mb-[2px]">
                            Something just like this
                          </h3>
                          <div className="flex items-center gap-[16px]">
                            <span className="text-[#757c83]">English</span>{" "}
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
                        <div
                          className="play-btn w-[50px] h-[50px] flex justify-center items-center cursor-pointer"
                          onClick={handlePlayPause}
                        >
                          {isPlaying ? (
                            <FaRegCirclePause className="text-[40px] text-[#FF1D50]" />
                          ) : (
                            <FaRegCirclePlay className="text-[40px] text-[#FF1D50]" />
                          )}
                        </div>

                        <span className="options-box">
                          <SlOptionsVertical className="cursor-pointer text-[20px]" />
                        </span>
                        <audio
                          ref={audioRef}
                          src="/audio/2024Somko-06a_Weissagungen_DEU.mp3"
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Comment form */}
            <div className="comment-form">
              <div className="form-title">
                <h3 className="mb-[10px] text-[30px] leading-[1.3] font-bold tracking-wide">
                  Leave a Comment
                </h3>
                <p className="mb-[25px] text-[14px] text-[#6c757d]">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>

              <div className="grid grid-cols-2 gap-[24px]">
                <div className="form-group relative">
                  <input
                    type="text"
                    className="w-full h-[50px] bg-[#F5F5F5] text-[#54595F] text-[16px] rounded-[5px] pr-[40px] pl-[25px] outline-none"
                    placeholder="Your Name *"
                  />

                  <FaRegUser className="absolute top-[50%] right-[6%] translate-y-[-50%] text-[#ff1d50]" />
                </div>

                <div className="form-group relative">
                  <input
                    type="email"
                    className="w-full h-[50px] bg-[#F5F5F5] text-[#54595F] text-[16px] rounded-[5px] pr-[40px] pl-[25px] outline-none"
                    placeholder="Your Email *"
                  />

                  <FiMail className="absolute top-[50%] right-[6%] translate-y-[-50%] text-[#ff1d50]" />
                </div>

                <div className="form-group relative col-span-2">
                  <input
                    type="text"
                    className="w-full h-[50px] bg-[#F5F5F5] text-[#54595F] text-[16px] rounded-[5px] pr-[40px] pl-[25px] outline-none"
                    placeholder="Website *"
                  />

                  <BsGlobe2 className="absolute top-[50%] right-[3%] translate-y-[-50%] text-[#ff1d50]" />
                </div>

                <div className="form-group relative col-span-2">
                  <textarea
                    className="w-full min-h-[154px] py-[16px] bg-[#F5F5F5] text-[#54595F] text-[16px] pr-[40px] pl-[25px] rounded-[5px] outline-none"
                    placeholder="Write a Comment *"
                  ></textarea>

                  <FaPencilAlt className="absolute top-[16px] right-[3%] text-[#ff1d50]" />
                </div>

                <div>
                  <button className="uppercase text-white bg-[#ff1d50] font-bold text-[14px] py-[16px] px-[26px] rounded-[4px]">
                    Post comment
                  </button>
                </div>
              </div>
            </div>

            {/* Related-post */}
            <div className="pt-[30px] mb-[30px]">
              <div className="flex items-start gap-[10px]">
                <div className="flex-grow">
                  <h2 className="w-full relative line flex items-center sec-title has-line mb-[33px] text-[24px] capitalize font-semibold leading-[1.5]">
                    Related Post
                  </h2>
                </div>

                <div className="flex gap-2">
                  <div className="p-2 rounded-full border hover:bg-[#ff1d50] hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                    <IoArrowBack className="text-[18px]" />
                  </div>

                  <div className="p-2 rounded-full border hover:bg-[#ff1d50] hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
                    <IoArrowForward className="text-[18px]" />
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory -mx-3">
                  <div className="flex-none px-3 snap-start xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full">
                    <div>
                      <div className="mb-[18px] overflow-hidden xl:w-[278px] lg:w-[285px] md:w-[318px] w-full xl:h-[187px] lg:h-[192px] md:h-[218px] sm:h-[190px] h-[400px] relative box">
                        <img
                          className="xl:w-[278px] lg:w-[285px] md:w-[318px w-full xl:h-[187px] lg:h-[192px] md:h-[218px] sm:h-[190px] h-[400px] object-cover"
                          src="https://images.unsplash.com/photo-1723479319633-43fa297d3853?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                        />

                        {/* Overlay */}
                        <div className="absolute top-0 xl:w-[278px] lg:w-[285px] md:w-[318px] w-full xl:h-[187px] lg:h-[192px] md:h-[218px] sm:h-[190px] h-[400px] gradient-bg flex flex-col p-[20px] justify-start">
                          <div className="lg:mb-0 mb-[15px] px-[8px] leading-[26px] text-[12px] font-bold uppercase text-white bg-[#007BFF] rounded-[3px] w-fit hover:bg-black cursor-pointer transition-colors duration-300 ease-in-out">
                            News
                          </div>
                        </div>
                      </div>
                      <h3 className="text-[18px] leading-[1.8] font-bold mb-[10px] cursor-pointer hover:text-[#ff1d50]">
                        Power to the people for a Better future!
                      </h3>
                      <div className="flex items-center gap-3 text-[#B5B5B5]">
                        <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                          <FaRegUser />
                          <p className="mt-0.5">By - Tnews</p>
                        </span>

                        <span>|</span>

                        <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                          <FaCalendarDays />
                          <p className="mt-0.5">20 Mar, 2023</p>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-none px-3 snap-start xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full">
                    <div>
                      <div className="mb-[18px] overflow-hidden xl:w-[278px] lg:w-[285px] md:w-[318px] w-full xl:h-[187px] lg:h-[192px] md:h-[218px] sm:h-[190px] h-[400px] relative box">
                        <img
                          className="xl:w-[278px] lg:w-[285px] md:w-[318px w-full xl:h-[187px] lg:h-[192px] md:h-[218px] sm:h-[190px] h-[400px] object-cover"
                          src="https://images.unsplash.com/photo-1723479319633-43fa297d3853?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                        />

                        {/* Overlay */}
                        <div className="absolute top-0 xl:w-[278px] lg:w-[285px] md:w-[318px] w-full xl:h-[187px] lg:h-[192px] md:h-[218px] sm:h-[190px] h-[400px] gradient-bg flex flex-col p-[20px] justify-start">
                          <div className="lg:mb-0 mb-[15px] px-[8px] leading-[26px] text-[12px] font-bold uppercase text-white bg-[#007BFF] rounded-[3px] w-fit hover:bg-black cursor-pointer transition-colors duration-300 ease-in-out">
                            News
                          </div>
                        </div>
                      </div>
                      <h3 className="text-[18px] leading-[1.8] font-bold mb-[10px] cursor-pointer hover:text-[#ff1d50]">
                        Power to the people for a Better future!
                      </h3>
                      <div className="flex items-center gap-3 text-[#B5B5B5]">
                        <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                          <FaRegUser />
                          <p className="mt-0.5">By - Tnews</p>
                        </span>

                        <span>|</span>

                        <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                          <FaCalendarDays />
                          <p className="mt-0.5">20 Mar, 2023</p>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-none px-3 snap-start xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full">
                    <div>
                      <div className="mb-[18px] overflow-hidden xl:w-[278px] lg:w-[285px] md:w-[318px] w-full xl:h-[187px] lg:h-[192px] md:h-[218px] sm:h-[190px] h-[400px] relative box">
                        <img
                          className="xl:w-[278px] lg:w-[285px] md:w-[318px w-full xl:h-[187px] lg:h-[192px] md:h-[218px] sm:h-[190px] h-[400px] object-cover"
                          src="https://images.unsplash.com/photo-1723479319633-43fa297d3853?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                        />

                        {/* Overlay */}
                        <div className="absolute top-0 xl:w-[278px] lg:w-[285px] md:w-[318px] w-full xl:h-[187px] lg:h-[192px] md:h-[218px] sm:h-[190px] h-[400px] gradient-bg flex flex-col p-[20px] justify-start">
                          <div className="lg:mb-0 mb-[15px] px-[8px] leading-[26px] text-[12px] font-bold uppercase text-white bg-[#007BFF] rounded-[3px] w-fit hover:bg-black cursor-pointer transition-colors duration-300 ease-in-out">
                            News
                          </div>
                        </div>
                      </div>
                      <h3 className="text-[18px] leading-[1.8] font-bold mb-[10px] cursor-pointer hover:text-[#ff1d50]">
                        Power to the people for a Better future!
                      </h3>
                      <div className="flex items-center gap-3 text-[#B5B5B5]">
                        <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                          <FaRegUser />
                          <p className="mt-0.5">By - Tnews</p>
                        </span>

                        <span>|</span>

                        <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                          <FaCalendarDays />
                          <p className="mt-0.5">20 Mar, 2023</p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioOverView;
