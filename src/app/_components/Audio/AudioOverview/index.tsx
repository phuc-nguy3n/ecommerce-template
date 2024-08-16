"use client";

import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarDays,
  FaRegComments,
  FaRegUser,
} from "react-icons/fa6";
import Breadcrumb from "../_components/Breadcrumb";
import TagName from "../_components/TagName";
import "./styles.css";
import React from "react";
import { HiOutlineBookOpen } from "react-icons/hi2";
import ShareMedia from "../_components/ShareMedia";
import ActionBar from "../_components/ActionBar";
import Paragraph from "../_components/Paragraph";
import Quote from "../_components/Quote";
import RelatedTag from "../_components/RelatedTag";
import Author from "../_components/Author";
import Comment from "../_components/Comment";
import { FiMail } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import Navigation from "../_components/Navigation";

const AudioOverView = () => {
  return (
    <div>
      <Breadcrumb items={[{ label: "home" }, { label: "audio" }]} />

      <div className="pt-[60px] pb-[30px]">
        <div className="container xl:max-w-[1248px] lg:max-w-[960px] max-w-[720px]">
          <div className="flex flex-col items-center w">
            <TagName text={"technology"} />

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

                <Paragraph
                  text={
                    "Fuel your competitive spirit, chase victory, and let sports be your legacy encapsulates the essence of embracing sports as a means to challenge oneself, strive for success, and leave a lasting impact. This phrase urges individuals to tap into their inner drive and motivation."
                  }
                />

                <Paragraph
                  text={
                    "Igniting their competitive spirit. It encourages them to set ambitious goals, not settling for mediocrity but pushing themselves to excel in their chosen sport or athletic endeavor. The pursuit of victory becomes the driving force, motivating athletes to give their all,"
                  }
                />

                <Paragraph
                  text={
                    "Surpass their limitations, and achieve remarkable feats. It emphasizes the importance of hard work, dedication, and Perseverance in the face of challenges and obstacles that may arise along the way."
                  }
                />

                {/* Ads */}
                <div className="my-[24px] py-[8px]">
                  <div className="cursor-pointer">
                    <img
                      className="w-full h-[120px] object-cover"
                      src="https://images.unsplash.com/photo-1666489022255-99a837a5c506?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                </div>

                <Paragraph
                  text={
                    "The slogan reminds athletes that their participation in sports has the potential to leave a lasting legacy. It suggests that their accomplishments, records, and impact can inspire future generations, shaping the sport itself and influencing others to follow in their footsteps. By embracing sports and embracing the pursuit of victory, individuals have the opportunity to create a legacy that will be remembered and celebrated long after their own participation."
                  }
                />

                {/* Img */}
                <div className="my-[24px] py-[8px]">
                  <div>
                    <img
                      className="w-full h-[500px] object-cover"
                      src="https://images.unsplash.com/photo-1666489022255-99a837a5c506?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                </div>

                {/* Subtitle */}
                <h3 className="text-[25px] font-bold leading-[1.4] mb-[15px] tracking-wide">
                  Achieve greatness, fueled by innovation
                </h3>

                <Paragraph
                  text={
                    'Achieve greatness, fueled by innovation" encapsulates the idea that by embracing and harnessing innovative approaches and technologies, individuals can reach extraordinary heights of success and achievement. It implies that the combination of pushing boundaries, thinking outside the box, and adopting cutting-edge advancements can Propel individuals to surpass their limitations and accomplish remarkable feats.'
                  }
                />

                <Paragraph
                  text={
                    "This phrase suggests that innovation serves as the driving force behind progress and improvement in various fields, including sports, business, arts, and personal development. It conveys the message that by embracing new ideas."
                  }
                />

                <Quote
                  text={
                    "Fuel your competitive spirit, chase victory, and let sports be your legacy Encapsulates the essence."
                  }
                  author={"Robert Milton"}
                />

                {/* Img */}
                <div className="grid grid-cols-2 py-1 gap-[20px] mb-[24px]">
                  <div>
                    <div>
                      <img
                        className="w-full h-[320px] object-cover"
                        src="https://images.unsplash.com/photo-1666489022255-99a837a5c506?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <img
                        className="w-full h-[320px] object-cover"
                        src="https://images.unsplash.com/photo-1666489022255-99a837a5c506?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                {/* Subtitle */}
                <h3 className="text-[25px] font-bold leading-[1.4] mb-[15px] tracking-wide">
                  Power your game with innovative features.
                </h3>

                <Paragraph
                  text={
                    "Power your game with innovative features signifies the utilization of advanced and cutting-edge elements to enhance your performance and elevate your gameplay. It suggests that by embracing these innovative features, you can tap into a new level of power, skill, and effectiveness in your chosen sport."
                  }
                />

                <Paragraph
                  text={
                    "This phrase implies that the incorporation of groundbreaking technologies, techniques, and functionalities can provide you with a competitive edge and push the boundaries of what is achievable in your game."
                  }
                />

                <RelatedTag tagList={["Sports", "Politics", "Business"]} />
              </div>
            </div>

            {/* Navigation */}
            <Navigation
              pevBlog={{
                img: "https://images.unsplash.com/photo-1723477450561-791fd67efa56?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Game on! Embrace the spirit of sportsmanship",
              }}
              nextBlog={{
                img: "https://images.unsplash.com/photo-1721297013262-7265cc89a763?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Push your limits, redefine what's possible",
              }}
            />

            {/* Author */}
            <Author
              img={
                "https://images.unsplash.com/photo-1723212396541-e3b97ac55599?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              name={"Ronald Richards"}
              position={"Founder & CEO"}
              bio={
                "Adventurer and passionate travel blogger. With a backpack full of stories and a camera in hand, she takes her readers on exhilarating journeys around the world."
              }
            />

            {/* Comments */}
            <Comment />

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
