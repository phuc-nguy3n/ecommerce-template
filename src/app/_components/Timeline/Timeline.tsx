"use client";

import "./styles.css";
import Breadcrumb from "../ui/Breadcrumb";
import React, { useEffect, useState } from "react";

import { MdPlayArrow, MdOutlineArrowOutward } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import LoadingBlock from "../LoadingBlock";

const Timeline = () => {
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 1000);
  }, []);

  return (
    <div>
      <Breadcrumb items={[{ label: "home" }, { label: "timeline" }]} />

      {loadingPage ? (
        <LoadingBlock />
      ) : (
        <>
          <div className="container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px]">
            <div className="py-[100px]">
              <div className="grid grid-cols-12 gap-[24px]">
                <div className="xl:col-span-7 col-span-12">
                  <div className="flex gap-[30px] relative sm:flex-nowrap flex-wrap sm:justify-normal justify-center">
                    {/* Img */}
                    <div className="sm:flex-grow-0 flex-grow">
                      <img
                        className="object-cover xl:w-[350px] lg:w-[533px] md:w-[396px] sm:w-[400px] w-full h-[468px]"
                        src="https://images.unsplash.com/photo-1723242015936-ab12ca2626b3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>

                    {/* Img */}
                    <div className="overflow-hidden rounded-full relative">
                      <img
                        className="object-cover xl:w-[240px] lg:w-[346px] md:w-[257px] w-auto h-[468px]"
                        src="https://images.unsplash.com/photo-1723130028854-1b97ca970bf6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />

                      <div className="sm:hidden block top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  absolute p-[22px] rounded-lg bg-[#FF1D50] cursor-pointer sm:border-0  border-2">
                        <MdPlayArrow className="text-white text-[34px]" />
                      </div>
                    </div>

                    <div className="sm:block hidden absolute top-[90px] xl:right-[20px] right-[-30px] p-[22px] rounded-lg bg-[#FF1D50] cursor-pointer sm:border-0">
                      <MdPlayArrow className="text-white text-[34px]" />
                    </div>
                  </div>
                </div>

                <div className="xl:col-span-5 col-span-12">
                  <div className="title-area mb-[30px]">
                    <span className="uppercase text-[#FF1D50] text-[16px] mb-[18px] font-semibold">
                      About Us
                    </span>

                    <h2 className="leading-[1.5] tracking-wide xl:text-[34px] text-[28px] mb-[22px] font-bold">
                      Over 25 years, we have been delivering real news
                    </h2>

                    <p className="leading-[1.75] text-[#54595F] tracking-wide">
                      Suggests that the entity or organization has a
                      longstanding history of providing trustworthy and reliable
                      news coverage. The phrase "Over 25 years" indicates a
                      long-established presence in the industry, which can
                      instill confidence in the audience.
                    </p>
                  </div>

                  <div className="checklist mb-[35px] ">
                    <ul className="space-y-[11px]">
                      <li className="flex gap-2 font-medium items-center text-[16px]">
                        <FaRegCheckCircle className="text-[#FF1D50]" /> User
                        experience
                      </li>

                      <li className="flex gap-2 font-medium items-center text-[16px]">
                        <FaRegCheckCircle className="text-[#FF1D50]" />
                        Strategy and Art Direction
                      </li>

                      <li className="flex gap-2 font-medium items-center text-[16px]">
                        <FaRegCheckCircle className="text-[#FF1D50]" />
                        Unique layouts Blocks
                      </li>
                    </ul>
                  </div>

                  <button className="uppercase py-[16px] px-[26px] bg-[#FF1D50] text-white text-[14px] rounded-md font-bold flex items-center">
                    About more{" "}
                    <MdOutlineArrowOutward className="text-[18px] ml-[5px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="background-image">
            <div className="container py-[100px] xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px]">
              <div className="flex items-center md:justify-between justify-center md:flex-nowrap flex-wrap">
                <div className="title-area lg:max-w-[728px] md:max-w-[480px] w-full md:text-left text-center">
                  <span className="uppercase text-[#FF1D50] text-[16px] mb-[18px] font-semibold">
                    Get consulting
                  </span>

                  <h2 className="leading-[1.5] tracking-wide lg:text-[42px] md:text-[30px] text-[40px] mb-[22px] font-bold text-white">
                    Experience excellence our magazine's
                  </h2>
                </div>

                <div className="flex">
                  <button className="uppercase py-[16px] px-[26px] bg-[#FF1D50] text-white text-[14px] rounded-md font-bold flex items-center">
                    Contact us{" "}
                    <MdOutlineArrowOutward className="text-[18px] ml-[5px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[-100px]">
            <div className="container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px]">
              <div className="counter-wrap grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:py-[60px] md:py-[40px] py-[40px]  relative z-[3] bg-[#FF1D50]">
                <div className="counter-card border border-white border-r-1 border-t-0 lg:border-b-0 md:border-b-1 border-b-1 border-l-0 border-opacity-[0.5] text-center text-white">
                  <h2 className="text-[60px] font-bold leading-[1.8]">
                    <span>25</span>+
                  </h2>
                  <span className="tracking-wide font-medium lg:pb-0 md:pb-[30px] pb-[30px] inline-block">
                    Years Of Experience
                  </span>
                </div>

                <div className="counter-card border border-white border-r-1 border-t-0 lg:border-b-0 md:border-b-1 border-b-1 border-l-0 border-opacity-[0.5] text-center text-white">
                  <h2 className="text-[60px] font-bold leading-[1.8]">
                    <span>86</span>+
                  </h2>
                  <span className="tracking-wide font-medium lg:pb-0 md:pb-[30px] pb-[30px] inline-block">
                    Get Winning Award
                  </span>
                </div>

                <div className="counter-card border border-white border-r-1 border-t-0 sm:border-b-0 border-b-1  border-l-0 border-opacity-[0.5] text-center text-white">
                  <h2 className="text-[60px] font-bold leading-[1.8]">
                    <span>149</span>+
                  </h2>
                  <span className="tracking-wide font-medium  lg:pb-0 md:pb-[30px] pb-[30px] inline-block">
                    Experience News Writer
                  </span>
                </div>

                <div className="counter-card  text-center text-white">
                  <h2 className="text-[60px] font-bold leading-[1.8]">
                    <span>15</span>+
                  </h2>
                  <span className="tracking-wide font-medium lg:pb-0 md:pb-[30px] pb-[30px] inline-block">
                    Language Translator
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="my-[100px]">
            <div className="container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px]">
              <div className="title-area text-center">
                <span className="uppercase text-[#FF1D50] text-[16px] mb-[18px] font-semibold">
                  Company History
                </span>

                <h2 className="leading-[1.5] tracking-wide text-[34px] mb-[30px] font-bold">
                  Great Company History
                </h2>
              </div>

              <div className="story-box-area flex flex-col">
                {/* Odd */}
                <div className="story-box-wrap flex md:flex-row flex-col md:gap-[86px] gap-[40px] mb-[60px] relative z-[2] h-[183px] flex-1">
                  <div className="story-box flex md:max-w-[500px] relative z-[3] md:flex-nowrap flex-wrap">
                    <div className="box-img md:w-[200px] w-full">
                      <img
                        className="md:w-[200px] w-full md:h-[183px] h-[300px] object-cover"
                        src="https://images.unsplash.com/photo-1723538523199-61e20b5de045?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                    <div className="box-content py-[36px] px-[36px] shadow-sm flex-1 border border-1 border-[#EFEFEF] bg-[#fff]">
                      <h3 className="box-title text-[18px] mb-[5px] tracking-wide font-bold">
                        We Start Company
                      </h3>
                      <p className="leading-[1.75] text-[#54595F] tracking-wide text-[15px]">
                        Forward-thinking and venture born from a vision to
                        Create positive
                      </p>
                    </div>
                  </div>

                  <div className="story-year w-[50px] h-[50px] rounded-full flex items-center justify-between bg-white md:ml-0 ml-[20px]">
                    <span className="flex-grow text-center font-bold text-[15px]">
                      1990
                    </span>
                  </div>
                </div>

                {/* Even */}
                <div className="story-box-wrap flex md:flex-row flex-col md:gap-[86px] gap-[40px] mb-[60px] relative z-[2] h-[183px] flex-1 md:justify-end justify-normal">
                  <div className="story-box flex md:max-w-[500px] relative z-[3] md:flex-nowrap flex-wrap md:order-2">
                    <div className="box-img md:w-[200px] w-full md:order-2">
                      <img
                        className="md:w-[200px] w-full md:h-[183px] h-[300px] object-cover"
                        src="https://images.unsplash.com/photo-1723538523199-61e20b5de045?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                    <div className="box-content py-[36px] px-[36px] shadow-sm flex-1 border border-1 border-[#EFEFEF] bg-[#fff]">
                      <h3 className="box-title text-[18px] mb-[5px] tracking-wide font-bold">
                        We Start Company
                      </h3>
                      <p className="leading-[1.75] text-[#54595F] tracking-wide text-[15px]">
                        Forward-thinking and venture born from a vision to
                        Create positive
                      </p>
                    </div>
                  </div>

                  <div className="story-year w-[50px] h-[50px] rounded-full flex items-center justify-between bg-white md:ml-0 ml-[20px]">
                    <span className="flex-grow text-center font-bold text-[15px]">
                      1990
                    </span>
                  </div>
                </div>

                {/* Odd */}
                <div className="story-box-wrap flex md:flex-row flex-col md:gap-[86px] gap-[40px] mb-[60px] relative z-[2] h-[183px] flex-1">
                  <div className="story-box flex md:max-w-[500px] relative z-[3] md:flex-nowrap flex-wrap">
                    <div className="box-img md:w-[200px] w-full">
                      <img
                        className="md:w-[200px] w-full md:h-[183px] h-[300px] object-cover"
                        src="https://images.unsplash.com/photo-1723538523199-61e20b5de045?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                    <div className="box-content py-[36px] px-[36px] shadow-sm flex-1 border border-1 border-[#EFEFEF] bg-[#fff]">
                      <h3 className="box-title text-[18px] mb-[5px] tracking-wide font-bold">
                        We Start Company
                      </h3>
                      <p className="leading-[1.75] text-[#54595F] tracking-wide text-[15px]">
                        Forward-thinking and venture born from a vision to
                        Create positive
                      </p>
                    </div>
                  </div>

                  <div className="story-year w-[50px] h-[50px] rounded-full flex items-center justify-between bg-white md:ml-0 ml-[20px]">
                    <span className="flex-grow text-center font-bold text-[15px]">
                      1990
                    </span>
                  </div>
                </div>

                {/* Even */}
                <div className="story-box-wrap flex md:flex-row flex-col md:gap-[86px] gap-[40px] mb-[60px] relative z-[2] h-[183px] flex-1 md:justify-end justify-normal">
                  <div className="story-box flex md:max-w-[500px] relative z-[3] md:flex-nowrap flex-wrap md:order-2">
                    <div className="box-img md:w-[200px] w-full md:order-2">
                      <img
                        className="md:w-[200px] w-full md:h-[183px] h-[300px] object-cover"
                        src="https://images.unsplash.com/photo-1723538523199-61e20b5de045?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                    <div className="box-content py-[36px] px-[36px] shadow-sm flex-1 border border-1 border-[#EFEFEF] bg-[#fff]">
                      <h3 className="box-title text-[18px] mb-[5px] tracking-wide font-bold">
                        We Start Company
                      </h3>
                      <p className="leading-[1.75] text-[#54595F] tracking-wide text-[15px]">
                        Forward-thinking and venture born from a vision to
                        Create positive
                      </p>
                    </div>
                  </div>

                  <div className="story-year w-[50px] h-[50px] rounded-full flex items-center justify-between bg-white md:ml-0 ml-[20px]">
                    <span className="flex-grow text-center font-bold text-[15px]">
                      1990
                    </span>
                  </div>
                </div>

                {/* End */}
                <div className="story-box-wrap mb-[60px] relative z-[2] max-w-[635px]">
                  <div className="story-year w-[50px] h-[50px] rounded-full bg-white md:ml-auto ml-[20px] flex items-center">
                    <span className="flex-grow text-center font-bold text-[15px] ">
                      End
                    </span>
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

export default Timeline;
