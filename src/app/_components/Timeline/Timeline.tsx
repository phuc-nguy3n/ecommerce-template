"use client";

import "./styles.css";
import React from "react";
import Breadcrumb from "../ui/Breadcrumb";

import { MdPlayArrow, MdOutlineArrowOutward } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";

const Timeline = () => {
  return (
    <div>
      <Breadcrumb items={[{ label: "home" }, { label: "audio" }]} />

      <div className="container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px]">
        <div className="py-[100px]">
          <div className="grid grid-cols-12 gap-[24px]">
            <div className="col-span-7">
              <div className="flex gap-[30px] relative">
                {/* Img */}
                <div className="w-[350px]">
                  <img
                    className="object-cover w-[350px] h-[468px]"
                    src="https://images.unsplash.com/photo-1723242015936-ab12ca2626b3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>

                {/* Img */}
                <div className="w-[240px] overflow-hidden rounded-full ">
                  <img
                    className="object-cover w-[240px] h-[468px]"
                    src="https://images.unsplash.com/photo-1723130028854-1b97ca970bf6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>

                <div className="absolute top-[90px] right-[20px] p-[22px] rounded-lg bg-[#FF1D50]">
                  <MdPlayArrow className="text-white text-[34px]" />
                </div>
              </div>
            </div>

            <div className="col-span-5">
              <div className="title-area mb-[30px]">
                <span className="uppercase text-[#FF1D50] text-[16px] mb-[18px] font-semibold">
                  About Us
                </span>

                <h2 className="leading-[1.5] tracking-wide text-[34px] mb-[22px] font-bold">
                  Over 25 years, we have been delivering real news
                </h2>

                <p className="leading-[1.75] text-[#54595F] tracking-wide">
                  Suggests that the entity or organization has a longstanding
                  history of providing trustworthy and reliable news coverage.
                  The phrase "Over 25 years" indicates a long-established
                  presence in the industry, which can instill confidence in the
                  audience.
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
          <div className="flex items-center justify-between">
            <div className="title-area max-w-[728px]">
              <span className="uppercase text-[#FF1D50] text-[16px] mb-[18px] font-semibold">
                Get consulting
              </span>

              <h2 className="leading-[1.5] tracking-wide text-[42px] mb-[22px] font-bold text-white">
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
          <div className="counter-wrap grid grid-cols-4 py-[60px] relative z-[3] bg-[#FF1D50]">
            <div className="counter-card border border-white border-r-1 border-t-0 border-b-0 border-l-0 border-opacity-[0.5] text-center text-white">
              <h2 className="text-[60px] font-bold leading-[1.8]">
                <span>25</span>+
              </h2>
              <span className="tracking-wide font-medium">
                Years Of Experience
              </span>
            </div>

            <div className="counter-card border border-white border-r-1 border-t-0 border-b-0 border-l-0 border-opacity-[0.5] text-center text-white">
              <h2 className="text-[60px] font-bold leading-[1.8]">
                <span>86</span>+
              </h2>
              <span className="tracking-wide font-medium">
                Get Winning Award
              </span>
            </div>

            <div className="counter-card border border-white border-r-1 border-t-0 border-b-0 border-l-0 border-opacity-[0.5] text-center text-white">
              <h2 className="text-[60px] font-bold leading-[1.8]">
                <span>149</span>+
              </h2>
              <span className="tracking-wide font-medium">
                Experience News Writer
              </span>
            </div>

            <div className="counter-card  text-center text-white">
              <h2 className="text-[60px] font-bold leading-[1.8]">
                <span>15</span>+
              </h2>
              <span className="tracking-wide font-medium">
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
            <div className="story-box-wrap flex gap-[86px] mb-[60px] relative z-[2] h-[183px]">
              <div className="story-box flex max-w-[500px] relative z-[3]">
                <div className="box-img w-[200px]">
                  <img
                    className="w-[200px] h-[183px] object-cover"
                    src="https://images.unsplash.com/photo-1723538523199-61e20b5de045?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div className="box-content py-[36px] px-[36px] shadow-sm flex-1 border border-1 border-[#EFEFEF] bg-[#fff]">
                  <h3 className="box-title text-[18px] mb-[5px] tracking-wide font-bold">
                    We Start Company
                  </h3>
                  <p className="leading-[1.75] text-[#54595F] tracking-wide text-[15px]">
                    Forward-thinking and venture born from a vision to Create
                    positive
                  </p>
                </div>
              </div>

              <div className="story-year w-[50px] h-[50px] rounded-full flex items-center justify-between bg-white">
                <span className="flex-grow text-center font-bold text-[15px]">
                  1990
                </span>
              </div>
            </div>

            <div className="story-box-wrap flex gap-[86px] mb-[60px] relative z-[2] h-[183px] ml-auto">
              <div className="story-box flex max-w-[500px] relative z-[3] order-2">
                <div className="box-img w-[200px] order-2">
                  <img
                    className="w-[200px] h-[183px] object-cover"
                    src="https://images.unsplash.com/photo-1723538523199-61e20b5de045?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div className="box-content py-[36px] px-[36px] shadow-sm flex-1 border border-1 border-[#EFEFEF] bg-[#fff] order-1">
                  <h3 className="box-title text-[18px] mb-[5px] tracking-wide font-bold">
                    We Start Company
                  </h3>
                  <p className="leading-[1.75] text-[#54595F] tracking-wide text-[15px]">
                    Forward-thinking and venture born from a vision to Create
                    positive
                  </p>
                </div>
              </div>

              <div className="story-year w-[50px] h-[50px] rounded-full flex items-center justify-between bg-white order-1">
                <span className="flex-grow text-center font-bold text-[15px]">
                  1994
                </span>
              </div>
            </div>

            <div className="story-box-wrap flex gap-[86px] mb-[60px] relative z-[2] h-[183px]">
              <div className="story-box flex max-w-[500px] relative z-[3]">
                <div className="box-img w-[200px]">
                  <img
                    className="w-[200px] h-[183px] object-cover"
                    src="https://images.unsplash.com/photo-1723538523199-61e20b5de045?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div className="box-content py-[36px] px-[36px] shadow-sm flex-1 border border-1 border-[#EFEFEF] bg-[#fff]">
                  <h3 className="box-title text-[18px] mb-[5px] tracking-wide font-bold">
                    We Start Company
                  </h3>
                  <p className="leading-[1.75] text-[#54595F] tracking-wide text-[15px]">
                    Forward-thinking and venture born from a vision to Create
                    positive
                  </p>
                </div>
              </div>

              <div className="story-year w-[50px] h-[50px] rounded-full flex items-center justify-between bg-white">
                <span className="flex-grow text-center font-bold text-[15px]">
                  2000
                </span>
              </div>
            </div>

            <div className="story-box-wrap flex gap-[86px] mb-[60px] relative z-[2] h-[183px] ml-auto">
              <div className="story-box flex max-w-[500px] relative z-[3] order-2">
                <div className="box-img w-[200px] order-2">
                  <img
                    className="w-[200px] h-[183px] object-cover"
                    src="https://images.unsplash.com/photo-1723538523199-61e20b5de045?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div className="box-content py-[36px] px-[36px] shadow-sm flex-1 border border-1 border-[#EFEFEF] bg-[#fff] order-1">
                  <h3 className="box-title text-[18px] mb-[5px] tracking-wide font-bold">
                    We Start Company
                  </h3>
                  <p className="leading-[1.75] text-[#54595F] tracking-wide text-[15px]">
                    Forward-thinking and venture born from a vision to Create
                    positive
                  </p>
                </div>
              </div>

              <div className="story-year w-[50px] h-[50px] rounded-full flex items-center justify-between bg-white order-1">
                <span className="flex-grow text-center font-bold text-[15px]">
                  2010
                </span>
              </div>
            </div>

            <div className="story-box-wrap mb-[60px] relative z-[2] max-w-[635px]">
              <div className="story-year w-[50px] h-[50px] rounded-full bg-white ml-auto flex items-center">
                <span className="flex-grow text-center font-bold text-[15px] ">
                  End
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
