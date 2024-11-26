"use client";

import "./styles.css";

import { FaRegCirclePlay } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoMdPause, IoMdPlay } from "react-icons/io";
import { LuUpload } from "react-icons/lu";
import { SlOptions, SlOptionsVertical } from "react-icons/sl";
import {
  RiRepeat2Fill,
  RiRepeatOneFill,
  RiShuffleFill,
  RiPlayListFill,
} from "react-icons/ri";
import {
  MdSkipPrevious,
  MdSkipNext,
  MdOutlineClose,
  MdOutlineStar,
} from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { PiSpeakerHighFill } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { BiBadgeCheck, BiWorld } from "react-icons/bi";
import { BsFileEarmarkMusic } from "react-icons/bs";
import Breadcrumb from "../_components/Breadcrumb";
import LoadingBlock from "../../LoadingBlock";
import React, { useState, useEffect, useRef } from "react";

const audioDetails = {
  name: "Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard",
  by: "DPR",
  cover: "https://i.scdn.co/image/ab67616d0000b27335028642fcc7d80a4e96f31b",
  playlist: [
    {
      id: 1,
      name: "Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard_Billboard",
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

const playlistPopupData = [
  {
    id: 1,
    name: "Aug 11, 2024 - Offerings & The Constitution of the Kingdom",
    desc: "The Church in Fountain Valley",
  },
  {
    id: 2,
    name: "Aug 11, 2024 - Offerings & The Constitution of the Kingdom",
    desc: "The Church in Fountain Valley",
  },
  {
    id: 3,
    name: "Aug 11, 2024 - Offerings & The Constitution of the Kingdom",
    desc: "The Church in Fountain Valley",
  },
  {
    id: 4,
    name: "Aug 11, 2024 - Offerings & The Constitution of the Kingdom",
    desc: "The Church in Fountain Valley",
  },
  {
    id: 5,
    name: "Aug 11, 2024 - Offerings & The Constitution of the Kingdom",
    desc: "The Church in Fountain Valley",
  },
];

let backgroundImg = {
  backgroundImage: `url(${audioDetails.cover})`,
};

const AudioDetails = () => {
  const [loadingPage, setLoadingPage] = useState(true);
  const [playlist, setPlaylist] = useState(audioDetails.playlist);
  const [audioIndex, setAudioIndex] = useState<number>(0);
  const [audioPlaying, setAudioPlaying] = useState<any>("");
  const [openedOptionIndex, setOpenedOptionIndex] = useState<null | number>(
    null
  );

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isVolumnDisplay, setVolumnDisplay] = useState(false);
  const [volume, setVolume] = useState<any>(1);
  const [isRepeat, setRepeat] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [showOption, setShowOption] = useState(false);
  const [showPlaylistPopup, setShowPlaylistPopup] = useState(false);

  const [maxTextBreadcrumb, setMaxTextBreadcrumb] = useState(30);

  const [maxTextLength, setMaxTextLength] = useState(30);

  useEffect(() => {
    updateLengthBreadcrumb();

    window.addEventListener("resize", updateLengthBreadcrumb);

    return () => window.removeEventListener("resize", updateLengthBreadcrumb);
  }, []);

  useEffect(() => {
    updateMaxLength();

    window.addEventListener("resize", updateMaxLength);

    return () => window.removeEventListener("resize", updateMaxLength);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleOptions = (index: number) => {
    if (openedOptionIndex === index) {
      setOpenedOptionIndex(null);
    } else {
      setOpenedOptionIndex(index);
    }
  };

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

  const handlePlayAll = () => {
    if (!audioPlaying) {
      handleAudioPlaying(0);
    } else {
      return;
    }
  };

  const handlePlayAudio = (isPlay: boolean) => {
    if (isPlay) {
      audioRef.current!.play();
    } else {
      audioRef.current!.pause();
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
    if (isShuffling) {
      handlePlayRandom();
    } else {
      let audIndex = audioIndex;
      if (typeAudio === "prev") {
        audIndex -= 1;
        if (audIndex > 0) {
          handleAudioPlaying(audIndex);
        } else {
          handleAudioPlaying(0);
        }
      } else if (typeAudio === "next") {
        audIndex += 1;
        if (audIndex < playlist.length - 1) {
          handleAudioPlaying(audIndex);
        }
        return;
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const changCurrentTime = (e: any) => {
    const currentTime = Number(e.target.value);
    audioRef.current!.currentTime = currentTime;
    setCurrentTime(currentTime);
  };

  const handleVolumeChange = (e: any) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleEnded = () => {
    if (isRepeat) {
      audioRef.current!.currentTime = 0;
      audioRef.current!.play();
    } else if (isShuffling) {
      handlePlayRandom();
    } else if (audioIndex < playlist.length - 1) {
      handleGoToAudio("next");
    } else {
      handleAudioPlaying(0);
    }
  };

  const handlePlayRandom = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * playlist.length);
    } while (randomIndex === audioIndex);
    handleAudioPlaying(randomIndex);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  const updateLengthBreadcrumb = () => {
    if (window.innerWidth <= 480) {
      setMaxTextBreadcrumb(8);
    } else if (window.innerWidth <= 768) {
      setMaxTextBreadcrumb(10);
    } else if (window.innerWidth <= 1024) {
      setMaxTextBreadcrumb(12);
    } else if (window.innerWidth <= 1200) {
      setMaxTextBreadcrumb(14);
    } else {
      setMaxTextBreadcrumb(16);
    }
  };

  const updateMaxLength = () => {
    if (window.innerWidth <= 480) {
      setMaxTextLength(20);
    } else if (window.innerWidth <= 768) {
      setMaxTextLength(30);
    } else if (window.innerWidth <= 1024) {
      setMaxTextLength(60);
    } else if (window.innerWidth <= 1200) {
      setMaxTextLength(90);
    } else {
      setMaxTextLength(130);
    }
  };

  const formatBreadcrumb = (text: string) => {
    return text.length > maxTextBreadcrumb
      ? text.slice(0, maxTextBreadcrumb) + "..."
      : text;
  };

  const formatText = (text: string) => {
    return text.length > maxTextLength
      ? text.slice(0, maxTextLength) + "..."
      : text;
  };

  return (
    <div className="relative">
      <Breadcrumb
        items={[
          { label: "home" },
          { label: "audio" },
          {
            label: formatBreadcrumb(
              "2023-12_Der_grosse_Hohepriester_mitten_unter_den_goldenen_Leuchtern_Degerloch"
            ),
          },
        ]}
      />

      {loadingPage ? (
        <LoadingBlock />
      ) : (
        <>
          {/* Hero */}
          <div className="hero" style={backgroundImg}></div>

          {/* Main */}
          <div className="pt-[60px] pb-[30px] mt-[-100px]">
            <div className="container xl:max-w-[1248px] lg:max-w-[960px] max-w-[720px] relative">
              <div
                className="flex justify-between items-center lg:gap-[40px] gap-[24px] mb-[80px] md:flex-nowrap flex-wrap"
                id="view-details"
              >
                <div className="img-box overflow-hidden rounded-xl md:w-auto w-full">
                  <img
                    className="md:w-[300px]  w-full md:h-[300px] sm:h-[250px] h-[200px] object-cover"
                    src={audioDetails.cover}
                    alt=""
                  />
                </div>

                <div className="md:flex-grow md:w-0 w-full md:mt-0 mt-[30px]">
                  <div className="title-area flex justify-between">
                    <div className="w-[80%]">
                      <h2 className="title capitalize text-[28px] font-semibold mb-[12px] line-clamp-2 break-words">
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

                      <div
                        onClick={handlePlayAll}
                        className="play-box flex gap-[8px] mt-[44px] items-center cursor-pointer"
                      >
                        <FaRegCirclePlay className="text-[40px] text-[#FF1D50]" />{" "}
                        <span className="font-semibold">Play all</span>
                      </div>
                    </div>

                    <span className="options-box mt-[8px] w-[20%] flex justify-end">
                      <SlOptions className="cursor-pointer text-[20px]" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-[30px]">
                {/* Search box */}
                <div className="search-box mb-[24px]">
                  <div className="container xl:max-w-[1184px] lg:max-w-[960px] max-w-[720px]  overflow-hidden px-0">
                    <div className="flex items-center gap-3 flex-wrap">
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
                  </div>
                </div>

                <ul className="audio-list grid grid-cols-1 gap-y-[10px] gap-x-[40px] md:px-[10px] px-0">
                  {playlist.map((item, index) => (
                    <li key={index} className={`audio-${index}`}>
                      <div className="audio-item flex justify-between hover:bg-slate-50 p-[10px] rounded-md">
                        <div className="flex gap-[16px]">
                          <div className="audio-icon min-w-[50px] min-h-[50px] flex justify-center items-center bg-[#FF1D50] rounded-md overflow-hidden relative cursor-pointer">
                            <BsFileEarmarkMusic className="text-[24px] text-white" />
                            <div
                              onClick={() => handleAudioPlaying(index)}
                              className={`play-box overlay absolute w-[30px] h-[30px] bg-white rounded-full  ${
                                item.playing ? "flex" : "hidden"
                              } items-center justify-center`}
                            >
                              {item.playing ? <IoMdPause /> : <IoMdPlay />}
                            </div>
                          </div>
                          <div className="audio-title-area mt-[-4px] flex flex-col justify-center">
                            <h3 className="audio-title text-[16px] mb-[2px] line-clamp-1 cursor-pointer">
                              {formatText(item.name)}
                            </h3>
                            <div className="flex items-center gap-[16px] ">
                              <span className="text-[#757c83] text-[14px] cursor-pointer">
                                {item.desc}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center gap-[16px]">
                          <span
                            className="options-box relative"
                            onClick={() => toggleOptions(index)}
                          >
                            <SlOptions className="cursor-pointer text-[20px]" />
                            {openedOptionIndex === index && (
                              <div className="absolute py-2 px-3 border rounded-sm top-[-40px] left-[-50px] text-[12px] text-[#57595b] z-50 bg-white">
                                Edit
                              </div>
                            )}
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
                } sticky z-30 bg-white bottom-[10px] rounded-lg`}
              >
                <div className="flex items-center cover relative">
                  {/* progress audio */}
                  <div className="progress absolute w-full h-1 top-[-14px] ">
                    <div className="container max-w-[1200px] px-[10px]">
                      <input
                        type="range"
                        className="h-1 w-full outline-none rounded-md"
                        min={0}
                        max={duration}
                        value={currentTime}
                        onChange={(e) => changCurrentTime(e)}
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex items-center md:p-0 p-2 pt-3">
                    <div className="cover-img w-[72px] h-[72px] min-w-[72px] justify-center items-center md:flex hidden">
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
                    <button
                      onClick={() => setRepeat(!isRepeat)}
                      className="p-2 mr-[24px] md:inline-block hidden"
                    >
                      {isRepeat ? (
                        <RiRepeatOneFill className="text-[20px]" />
                      ) : (
                        <RiRepeat2Fill className="text-[20px]" />
                      )}
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
                        <IoMdPause className="text-[18px]" />
                      ) : (
                        <IoMdPlay className="text-[18px]" />
                      )}
                    </button>

                    {/* Audio element */}
                    <audio
                      ref={audioRef}
                      onLoadedMetadata={handleLoadedMetadata}
                      onTimeUpdate={handleTimeUpdate}
                      onEnded={handleEnded}
                    />

                    <button
                      onClick={() => {
                        handleGoToAudio("next");
                      }}
                      className="p-2"
                    >
                      <MdSkipNext className="text-[24px]" />
                    </button>

                    <button
                      onClick={() => setIsShuffling(!isShuffling)}
                      className="p-2 md:ml-[22px] ml-0 md:inline-block hidden"
                    >
                      <RiShuffleFill
                        className={`text-[20px] ${
                          isShuffling ? "text-[#FF1D50]" : ""
                        } `}
                      />
                    </button>

                    <button
                      className="md:p-2 p-0 md:ml-[24px] ml-0"
                      onClick={handleCloseAudioBar}
                    >
                      <AiOutlineClose className="text-[20px] text-[#FF1D50] md:inline-block hidden" />
                    </button>
                  </div>

                  <div className="flex-1 flex items-center justify-end">
                    <div className="duration xl:block hidden mr-[24px]">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                    <div className="relative">
                      <div
                        className={`absolute -rotate-90 left-[50%] translate-x-[-50%] top-[-96px] py-[4px] px-[12px] bg-white border rounded-lg ${
                          isVolumnDisplay ? "block" : "hidden"
                        }`}
                      >
                        <input
                          className="mt-[7px]"
                          type="range"
                          min={0}
                          max={1}
                          step={0.01}
                          value={volume}
                          onChange={handleVolumeChange}
                        />
                      </div>

                      <button
                        onClick={() => {
                          setVolumnDisplay(!isVolumnDisplay);
                        }}
                        className="p-2 md:inline-block hidden"
                      >
                        <PiSpeakerHighFill className="text-[20px]" />
                      </button>
                    </div>

                    <div className="relative">
                      <button
                        onClick={() => {
                          setShowOption(!showOption);
                        }}
                        className="p-2"
                      >
                        <SlOptionsVertical className="text-[16px] md:inline-block hidden" />
                      </button>

                      <div
                        className={`${
                          showOption ? "block" : "hidden"
                        } absolute top-[-145px] left-[-120px] min-w-[120px] bg-white border rounded-md overflow-hidden text-[#57595b] text-[13px]`}
                      >
                        <ul className="option-board py-[10px] ">
                          <li className="px-[12px] py-[4px] hover:bg-slate-100 cursor-pointer">
                            <span>Favorite</span>
                          </li>
                          <li className="px-[12px] py-[4px] hover:bg-slate-100 cursor-pointer">
                            <span>Add to playlist</span>
                          </li>
                          <li className="px-[12px] py-[4px] hover:bg-slate-100 cursor-pointer">
                            <a
                              href={audioPlaying.src}
                              download={`${audioPlaying.name}.mp3`}
                            >
                              Download
                            </a>
                          </li>
                          <li className="px-[12px] py-[4px] hover:bg-slate-100 cursor-pointer">
                            <span>Share</span>
                          </li>
                        </ul>
                        <hr></hr>
                        <div className="view-details pb-[10px] cursor-pointer">
                          <a
                            href="#view-details"
                            className="px-[12px] pb-[4px] pt-[10px] block hover:bg-slate-100"
                          >
                            View details
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <button
                        onClick={() => setShowPlaylistPopup(!showPlaylistPopup)}
                        className="p-2 mr-[18px]"
                      >
                        <RiPlayListFill className="text-[20px]" />
                      </button>

                      <div
                        className={`playlist-popup absolute  md:top-[-295px] top-[-288px] md:left-[-345px] left-[-245px] md:w-[400px] w-[300px] h-[268px] py-[8px] bg-white border rounded-md ${
                          showPlaylistPopup ? "block" : "hidden"
                        }`}
                      >
                        <div className="playlist-head py-[16px] px-[24px] flex justify-between items-center">
                          <h3 className="font-semibold">Next Lineup</h3>
                          <div className="text-[#FF1D50] cursor-pointer">
                            <span className="font-medium">Clear</span>
                            <div className="h-[2px] bg-[#FF1D50]"></div>
                          </div>
                        </div>
                        <ul className="playlist-body py-[8px] px-[16px] max-h-[200px] overflow-y-scroll">
                          {playlistPopupData.map((item, index) => (
                            <li key={index}>
                              <div className="flex p-[8px] rounded-md hover:bg-slate-100">
                                <div className="cover-img w-[48px] h-[48px] min-w-[48px] flex justify-center items-center relative">
                                  <BsFileEarmarkMusic className="text-[40px] text-[#FF1D50]" />

                                  <div className="play-box overlay absolute w-[30px] h-[30px] bg-black rounded-full hidden items-center justify-center cursor-pointer">
                                    <IoMdPlay className="text-white" />
                                  </div>
                                </div>
                                <div className="list__content mt-[8px] pl-[2px]">
                                  <h4 className="audio-title text-[13px] line-clamp-1 cursor-pointer font-medium">
                                    {formatText(item.name)}
                                  </h4>

                                  <span className="text-[#757c83] text-[13px] cursor-pointer">
                                    {item.desc}
                                  </span>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AudioDetails;
