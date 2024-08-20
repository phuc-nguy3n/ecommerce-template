"use client";

import "./styles.css";

import { FaRegCirclePlay } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoMdPause, IoMdPlay } from "react-icons/io";
import { SlOptions, SlOptionsVertical } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { RiRepeat2Fill, RiShuffleFill, RiPlayListFill } from "react-icons/ri";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { PiSpeakerHighFill } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { BsFileEarmarkMusic } from "react-icons/bs";

import Breadcrumb from "../_components/Breadcrumb";

import { useState, useRef } from "react";

const audioDetails = {
  name: "DPR Archives",
  by: "DPR",
  cover: "https://i.scdn.co/image/ab67616d0000b27335028642fcc7d80a4e96f31b",
  playlist: [
    {
      id: 1,
      name: "Billboard uwu",
      desc: "DPR LIVE",
      img: "https://images.unsplash.com/photo-1720758917825-018735fe6e6e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      src: "/audio/Billboard uwu.mp3",
      playing: false,
    },

    {
      id: 2,
      name: "Cardboard Box Adventure",
      desc: "Purple Cat",
      img: "https://images.unsplash.com/photo-1720758898452-c70f7f274e0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      src: "/audio/Cardboard Box Adventure.mp3",
      playing: false,
    },

    {
      id: 3,
      name: "Coming to you seoul",
      desc: "DPR CREAM",
      img: "https://images.unsplash.com/photo-1723581013950-3ddcfd8f7553?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      src: "/audio/Coming to you seoul.mp3",
      playing: false,
    },

    {
      id: 4,
      name: "Eyes of cream",
      desc: "DPR CREAM",
      img: "https://images.unsplash.com/photo-1724021751488-c11d49c4736c?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      src: "/audio/Eyes of cream.mp3",
      playing: false,
    },

    {
      id: 5,
      name: "Eyes of dpr",
      desc: "DPR",
      img: "https://images.unsplash.com/photo-1723912565879-93c63ae5bd9d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      src: "/audio/Eyes of dpr.mp3",
      playing: false,
    },

    {
      id: 6,
      name: "Eyes of ian",
      desc: "DPR IAN",
      img: "https://images.unsplash.com/photo-1706920992323-2b58546b6f97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      src: "/audio/Eyes of ian.mp3",
      playing: false,
    },

    {
      id: 7,
      name: "Eyes of live",
      desc: "DPR LIVE",
      img: "https://images.unsplash.com/photo-1605989039117-36c1ee1c7f8b?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      src: "/audio/Eyes of live.mp3",
      playing: false,
    },

    {
      id: 8,
      name: "Eyes of rem",
      desc: "DPR REM",
      img: "https://images.unsplash.com/photo-1616960310894-3d43a1a00662?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      src: "/audio/Eyes of rem.mp3",
      playing: false,
    },

    {
      id: 9,
      name: "Our last dream",
      desc: "DPR",
      img: "https://images.unsplash.com/photo-1723727597907-e0fc569af410?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      src: "/audio/Our last dream.mp3",
      playing: false,
    },

    {
      id: 10,
      name: "The Red Dot",
      desc: "Purple Cat",
      img: "https://images.unsplash.com/photo-1723875311456-2996e42a2fda?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      src: "/audio/The Red Dot.mp3",
      playing: false,
    },
  ],
};

let backgroundImg = {
  backgroundImage: `url(${audioDetails.cover})`,
};

const AudioOverView = () => {
  const [playlist, setPlaylist] = useState(audioDetails.playlist);
  const [audioIndex, setAudioIndex] = useState<number>(0);
  const [audioPlaying, setAudioPlaying] = useState<any>("");

  const audioRef = useRef<any>(null);

  const handleAudioPlaying = (index: number) => {
    const updatedPlaylist = playlist.map((item, idx) => ({
      ...item,
      playing: idx === index,
    }));
    const audio = updatedPlaylist.find((item) => item.playing === true);

    setPlaylist(updatedPlaylist);
    setAudioPlaying(audio);
    setAudioIndex(index);

    if (audio && audioRef.current) {
      audioRef.current.src = audio.src;
      handlePlayAudio(true);
    }
  };

  const handlePlayAudio = (isPlay: boolean) => {
    if (isPlay) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const handleCloseAudioBar = () => {
    const updatedPlaylist = playlist.map((item) => ({
      ...item,
      playing: false,
    }));

    setPlaylist(updatedPlaylist);
    setAudioPlaying("");
    handlePlayAudio(false);
  };

  const handleTogglePlaying = () => {
    setAudioPlaying({ ...audioPlaying, playing: !audioPlaying.playing });
    handlePlayAudio(!audioPlaying.playing);
  };

  const handleGoToAudio = (typeAudio: string) => {
    let audIndex = audioIndex;
    if (typeAudio === "prev") {
      audIndex -= 1;
      if (audIndex >= 0) {
        handleAudioPlaying(audIndex);
      } else {
        handleAudioPlaying(0);
      }
    } else if (typeAudio === "next") {
      audIndex += 1;
      if (audIndex <= playlist.length - 1) {
        handleAudioPlaying(audIndex);
      } else {
        handleAudioPlaying(playlist.length - 1);
      }
    }
  };

  return (
    <div className="relative">
      <Breadcrumb items={[{ label: "home" }, { label: "audio" }]} />

      {/* Hero */}
      <div className="hero" style={backgroundImg}></div>

      {/* Main */}
      <div className="pt-[60px] pb-[30px] mt-[-100px]">
        <div className="container xl:max-w-[1248px] lg:max-w-[960px] max-w-[720px] relative">
          <div className="flex justify-between items-center gap-[100px] mb-[80px]">
            <div className="img-box overflow-hidden rounded-xl">
              <img
                className="w-[300px] h-[300px] object-cover"
                src={audioDetails.cover}
                alt=""
              />
            </div>

            <div className="flex-grow">
              <div className="title-area flex justify-between">
                <div>
                  <h2 className="title capitalize text-[28px] font-semibold mb-[12px]">
                    {audioDetails.name}
                  </h2>
                  <div className="recor-box flex items-center text-[#54595F] gap-[10px] mb-[12px]">
                    <span>Recording</span>
                    <span>
                      <GoDotFill className="text-[10px]" />
                    </span>
                    <span>{audioDetails.playlist.length} Recording</span>
                  </div>
                  <div className="created-by flex gap-[8px]">
                    <span className="text-[#54595F]">By: </span>
                    <p className="font-medium">{audioDetails.by}</p>
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
            {/* Search box */}
            <div className="search-box mb-[24px]">
              <div className="container xl:max-w-[1184px] lg:max-w-[960px] max-w-[720px]  overflow-hidden px-0">
                <div className="flex items-center gap-3">
                  <form className="flex-grow border rounded-lg">
                    <div className="form-control flex items-center py-[14px] gap-[10px] px-[16px]">
                      <label htmlFor="search_input ">
                        <IoSearch className="text-[24px] text-[#FF1D50]" />
                      </label>
                      <input
                        type="text"
                        className="search_input outline-none bg-transparent w-full pr-[24px]"
                        placeholder="Type anything to get result..."
                      />
                    </div>
                  </form>

                  <div className="form-group col-span-1 bg-[#F5F5F5] h-[50px] rounded-md relative">
                    <select className="form-control w-full h-[50px] pr-[45px] pl-[15px] outline-none border border-1 text-[16px] rounded-md text-[#54596e] ">
                      <option selected value="English">
                        English
                      </option>
                      <option value="German">German</option>
                      <option value="France">France</option>
                    </select>
                    <BiWorld className="absolute translate-y-[-50%] top-[50%] right-[10%]" />
                  </div>
                </div>
              </div>
            </div>

            <ul className="audio-list grid grid-cols-2 gap-y-[10px] gap-x-[40px] px-[10px]">
              {playlist.map((item, index) => (
                <li className={`audio-${index}`}>
                  <div className="audio-item flex justify-between hover:bg-slate-50 p-[10px] rounded-md">
                    <div className="flex gap-[16px]">
                      <div className="audio-icon w-[50px] h-[50px] flex justify-center items-center bg-[#FF1D50] rounded-md overflow-hidden relative cursor-pointer">
                        <BsFileEarmarkMusic className="text-[24px] text-white" />

                        {/* Play box */}
                        <div
                          onClick={() => {
                            handleAudioPlaying(index);
                          }}
                          className={`play-box overlay absolute w-[30px] h-[30px] bg-white rounded-full  ${
                            item.playing ? "flex" : "hidden"
                          } items-center justify-center`}
                        >
                          {item.playing ? <IoMdPause /> : <IoMdPlay />}
                        </div>
                      </div>
                      <div className="audio-title-area mt-[-4px] flex flex-col justify-center">
                        <h3 className="audio-title text-[16px] mb-[2px] line-clamp-1 cursor-pointer">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-[16px] ">
                          <span className="text-[#757c83] text-[14px] cursor-pointer">
                            {item.desc}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center items-center gap-[16px]">
                      <div className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
                        <FaRegHeart className="text-[20px]" />
                      </div>

                      <span className="options-box">
                        <SlOptions className="cursor-pointer text-[20px]" />
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* audio control */}

          <div
            className={`sticky-bar ${
              audioPlaying ? "block" : "hidden"
            } sticky z-30 bg-white bottom-[10px] rounded-lg overflow-hidden`}
          >
            <div className="flex items-center cover">
              <div className="flex-1 flex items-center">
                <div className="cover-img w-[72px] h-[72px] min-w-[72px] flex justify-center items-center">
                  <BsFileEarmarkMusic className="text-[28px] text-[#FF1D50]" />
                </div>
                <div className="cover-content pl-[12px]">
                  <h3 className="audio-title text-[14px] font-medium mb-[2px] line-clamp-1 cursor-pointer">
                    {audioPlaying?.name}
                  </h3>
                  <div className="flex items-center gap-[16px] ">
                    <span className="text-[#757c83] text-[14px] cursor-pointer">
                      {audioPlaying?.desc}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-[2] play-control flex items-center justify-center">
                <button className="p-2 mr-[24px]">
                  <RiRepeat2Fill className="text-[20px]" />
                </button>

                <button
                  onClick={() => {
                    handleGoToAudio("prev");
                  }}
                  className="p-2"
                >
                  <MdSkipPrevious className="text-[24px]" />
                </button>

                <button
                  className="p-3 rounded-full shadow-sm play-btn"
                  onClick={handleTogglePlaying}
                >
                  {audioPlaying?.playing ? (
                    <IoMdPause className="text-[24px]" />
                  ) : (
                    <IoMdPlay className="text-[24px]" />
                  )}
                </button>

                {/* Audio element */}
                <audio ref={audioRef} />

                <button
                  onClick={() => {
                    handleGoToAudio("next");
                  }}
                  className="p-2"
                >
                  <MdSkipNext className="text-[24px]" />
                </button>

                <button className="p-2 ml-[22px]">
                  <RiShuffleFill className="text-[20px]" />
                </button>

                <button className="p-2 ml-[24px]" onClick={handleCloseAudioBar}>
                  <AiOutlineClose className="text-[20px] text-[#FF1D50]" />
                </button>
              </div>
              <div className="flex-1 flex items-center justify-end">
                <div className="duration mr-[24px]">00:00 / 25:07</div>
                <div className="">
                  <button className="p-2">
                    <PiSpeakerHighFill className="text-[20px]" />
                  </button>
                </div>

                <div className="">
                  <button className="p-2">
                    <SlOptionsVertical className="text-[16px]" />
                  </button>
                </div>

                <div className="">
                  <button className="p-2 mr-[18px]">
                    <RiPlayListFill className="text-[20px]" />
                  </button>
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
