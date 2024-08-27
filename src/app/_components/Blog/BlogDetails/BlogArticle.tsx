"use client";

import "./styles.css";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../_components/Breadcrumb";
import TagName from "../_components/TagName";
import BlogTitle from "../_components/BlogTitle";
import BlogInfo from "../_components/BlogInfo";
import ShareMedia from "../_components/ShareMedia";
import ActionBar from "../_components/ActionBar";
import Paragraph from "../_components/Paragraph";
import BlogSubTitle from "../_components/BlogSubTitle";
import Quote from "../_components/Quote";
import RelatedTag from "../_components/RelatedTag";
import BlogNavigation from "../_components/BlogNavigation";
import BlogAuthor from "../_components/BlogAuthor";
import BlogComment from "../_components/BlogComment";
import { FaArrowRight, FaCalendarDays, FaRegUser } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { IoArrowBack, IoArrowForward, IoSearch } from "react-icons/io5";
import ShareMediaMobile from "../_components/ShareMediaMobile";
import LoadingBlock from "../../LoadingBlock";

const BlogArticleDetails = () => {
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 1000);
  }, []);

  return (
    <div>
      <Breadcrumb
        items={[{ label: "home" }, { label: "blog artcle details" }]}
      />
      {loadingPage ? (
        <LoadingBlock />
      ) : (
        <div className="pt-[60px] pb-[30px]">
          <div className="container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px]">
            <div className="grid grid-cols-7 gap-[30px]">
              {/* Main  */}
              <div className="lg:col-span-5 col-span-7 mb-[40px]">
                <TagName text={"sports"} />
                <BlogTitle
                  title={
                    "Fuel your competitive spirit chase victory and Let sports be your legacy"
                  }
                />
                <BlogInfo
                  createdBy={"By - Tnews"}
                  createdDate={"21 June, 2023"}
                  comments={3}
                  readingTime={5}
                />

                {/* Main img */}
                <div className="mb-[35px]">
                  <img
                    className="object-cover xl:w-[838px] lg:w-[631px] md:w-[656px] sm:w-[703px] w-full xl:h-[500px] lg:h-[343px] md:h-[388px] sm:h-[400px] h-[400px]"
                    src="https://images.unsplash.com/photo-1721170628208-dffed6eb3514?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>

                <div className="mb-[30px] flex gap-[30px] relative">
                  <ShareMedia />

                  {/* Blog content */}
                  <div className="flex-grow">
                    {/* Share media mobile  */}
                    <ShareMediaMobile />

                    <ActionBar liked={1300} viewed={6000} shared={200} />

                    <div className="main-content-blog">
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
                        <img
                          className="object-cover xl:w-[768px] lg:w-[633px] md:w-[586px] sm:w-[608px] w-full lg:h-[80px] sm:h-[70px] h-[80px]"
                          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                        />
                      </div>

                      <Paragraph
                        text={
                          "The slogan reminds athletes that their participation in sports has the potential to leave a lasting legacy. It suggests that their accomplishments, records, and impact can inspire future generations, shaping the sport itself and influencing others to follow in their footsteps. By embracing sports and embracing the pursuit of victory, individuals have the opportunity to create a legacy that will be remembered and celebrated long after their own participation."
                        }
                      />

                      {/* Second img */}
                      <div className="mb-[35px]">
                        <img
                          className="object-cover xl:w-[768px] lg:w-[561px] md:w-[586px] sm:w-[608px] w-full xl:h-[350px] lg:h-[300px] md:h-[270px] sm:h-[280px] h-[280px]"
                          src="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                        />
                      </div>

                      <BlogSubTitle
                        text={"Achieve greatness, fueled by innovation"}
                      />

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

                      <div className="my-[30px] xl:w-[768px] w-full flex md:flex-nowrap flex-wrap">
                        <div className="xl:w-5/12 lg:w-7/12 md:w-6/12 w-full">
                          <img
                            className="object-cover xl:w-[310px] lg:w-[313px] md:w-[281px] w-full h-[320px]"
                            src="https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                          />
                        </div>

                        <div className="xl:w-7/12 lg:w-5/12 md:w-6/12 w-full md:ml-[24px] ml-0">
                          <h3 className="text-[20px] font-bold mb-[16px] md:mt-0 mt-[16px]">
                            Take your game to new heights.
                          </h3>
                          <Paragraph
                            text={
                              "business, arts, and personal development. It conveys the message that by embracing new ideas, techniques, and technologies, individuals can unlock their full potential"
                            }
                          />
                          <ul className="pl-[17px] list-disc space-y-[14px]">
                            <li className="leading-[1.6] text-[#54595F] tracking-wide">
                              <b>Workout Modes:</b> Access pre-programmed
                              workout modes Tailored specifically to different
                            </li>
                            <li className="leading-[1.6] text-[#54595F] tracking-wide">
                              <b>Workout Modes:</b> Access pre-programmed
                              workout modes Tailored specifically to different
                            </li>
                            <li className="leading-[1.6] text-[#54595F] tracking-wide">
                              <b>Workout Modes:</b> Access pre-programmed
                              workout modes Tailored specifically to different
                            </li>
                          </ul>
                        </div>
                      </div>

                      <BlogSubTitle
                        text={"Power your game with innovative features."}
                      />

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
                    </div>
                    <RelatedTag tagList={["Sports", "Politics", "Business"]} />
                  </div>
                </div>

                {/* Blog navigation */}
                <BlogNavigation
                  pevBlog={{
                    img: "https://images.unsplash.com/photo-1723477450561-791fd67efa56?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Game on! Embrace the spirit of sportsmanship",
                  }}
                  nextBlog={{
                    img: "https://images.unsplash.com/photo-1721297013262-7265cc89a763?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Push your limits, redefine what's possible",
                  }}
                />

                {/* Blog author */}
                <BlogAuthor
                  img={
                    "https://images.unsplash.com/photo-1723212396541-e3b97ac55599?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  name={"Ronald Richards"}
                  position={"Founder & CEO"}
                  bio={
                    "Adventurer and passionate travel blogger. With a backpack full of stories and a camera in hand, she takes her readers on exhilarating journeys around the world."
                  }
                />

                {/* Blog comment */}
                <BlogComment />

                {/* Comment form */}
                <div className="comment-form">
                  <div className="form-title">
                    <h3 className="mb-[10px] sm:text-[30px] text-[22px] leading-[1.3] font-bold tracking-wide">
                      Leave a Comment
                    </h3>
                    <p className="mb-[25px] text-[14px] text-[#6c757d]">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-[24px]">
                    <div className="form-group relative sm:col-span-1 col-span-2">
                      <input
                        type="text"
                        className="w-full h-[50px] bg-[#F5F5F5] text-[#54595F] text-[16px] rounded-[5px] pr-[40px] pl-[25px] outline-none"
                        placeholder="Your Name *"
                      />

                      <FaRegUser className="absolute top-[50%] right-[6%] translate-y-[-50%] text-[#ff1d50]" />
                    </div>

                    <div className="form-group relative sm:col-span-1 col-span-2">
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

                    <div className="col-span-2">
                      <button className="uppercase text-white bg-[#ff1d50] font-bold text-[14px] py-[16px] px-[26px] rounded-[4px]">
                        Post comment
                      </button>
                    </div>
                  </div>
                </div>

                {/* Related Post */}
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
                      <div className="flex-none px-3 snap-start xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
                        <div>
                          <div className="mb-[18px] overflow-hidden xl:w-[266px] lg:w-[303px] md:w-[318px] w-full xl:h-[187px] lg:h-[192px] md:h-[218px] sm:h-[190px] h-[400px] relative box">
                            <img
                              className="xl:w-[266px] lg:w-[303px] md:w-[318px] w-full xl:h-[187px] lg:h-[192px] md:h-[218px] sm:h-[190px] h-[400px] object-cover"
                              src="https://images.unsplash.com/photo-1723479319633-43fa297d3853?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt=""
                            />

                            {/* Overlay */}
                            <div className="absolute top-0 xl:w-[266px] lg:w-[303px] md:w-[318px] w-full xl:h-[187px] lg:h-[192px] md:h-[218px] sm:h-[190px] h-[400px] gradient-bg flex flex-col p-[20px] justify-start">
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

                      <div className="flex-none px-3 snap-start xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
                        <div>
                          <div className="mb-[18px] overflow-hidden xl:w-[266px] lg:w-[303px] md:w-[318px] w-full xl:h-[187px] lg:h-[192px] md:h-[218px] sm:h-[190px] h-[400px] relative box">
                            <img
                              className="xl:w-[266px] lg:w-[303px] md:w-[318px] w-full xl:h-[187px] lg:h-[192px] md:h-[218px] sm:h-[190px] h-[400px] object-cover"
                              src="https://images.unsplash.com/photo-1723479319633-43fa297d3853?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt=""
                            />

                            {/* Overlay */}
                            <div className="absolute top-0 xl:w-[266px] lg:w-[303px] md:w-[318px] w-full xl:h-[187px] lg:h-[192px] md:h-[218px] sm:h-[190px] h-[400px] gradient-bg flex flex-col p-[20px] justify-start">
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

                      <div className="flex-none px-3 snap-start xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
                        <div>
                          <div className="mb-[18px] overflow-hidden xl:w-[266px] lg:w-[303px] md:w-[318px] w-full xl:h-[187px] lg:h-[192px] md:h-[218px] sm:h-[190px] h-[400px] relative box">
                            <img
                              className="xl:w-[266px] lg:w-[303px] md:w-[318px] w-full xl:h-[187px] lg:h-[192px] md:h-[218px] sm:h-[190px] h-[400px] object-cover"
                              src="https://images.unsplash.com/photo-1723479319633-43fa297d3853?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt=""
                            />

                            {/* Overlay */}
                            <div className="absolute top-0 xl:w-[266px] lg:w-[303px] md:w-[318px] w-full xl:h-[187px] lg:h-[192px] md:h-[218px] sm:h-[190px] h-[400px] gradient-bg flex flex-col p-[20px] justify-start">
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

              {/* Navbar */}
              <div className="lg:col-span-2 col-span-7 mb-[40px] relative">
                <div className="sticky top-[80px] right-0">
                  {/* Search box */}
                  <div className="flex justify-between rounded-[3px] overflow-hidden mb-[35px]">
                    <div className="form-group relative flex-grow">
                      <input
                        type="text"
                        className="w-full h-[50px] bg-[#F5F5F5] text-[#54595F] text-[16px] pr-[40px] pl-[25px] outline-none"
                        placeholder="Enter Keyword"
                      />
                    </div>
                    <button className="bg-[#FF1D50] w-[56px] h-[50px] flex items-center justify-center">
                      <IoSearch className="text-white text-[18px]" />
                    </button>
                  </div>

                  <div className="category">
                    <h3 className="border border-b-1 border-t-0 border-x-0 pb-[17px] mb-[30px] text-[19px] font-bold">
                      Categories
                    </h3>

                    {/*  Category list  */}
                    <ul className="category-list space-y-[10px] mb-[30px]">
                      <li className="flex justify-between items-center bg-[#F5F5F5] py-[16px] px-[26px] rounded-[4px] font-bold">
                        <p>Sport</p>{" "}
                        <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center">
                          <FaArrowRight className="text-black " />
                        </div>
                      </li>

                      <li className="flex justify-between items-center bg-[#F5F5F5] py-[16px] px-[26px] rounded-[4px] font-bold">
                        <p>Business</p>{" "}
                        <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center">
                          <FaArrowRight className="text-black " />
                        </div>
                      </li>

                      <li className="flex justify-between items-center bg-[#F5F5F5] py-[16px] px-[26px] rounded-[4px] font-bold">
                        <p>Politics</p>{" "}
                        <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center">
                          <FaArrowRight className="text-black " />
                        </div>
                      </li>

                      <li className="flex justify-between items-center bg-[#F5F5F5] py-[16px] px-[26px] rounded-[4px] font-bold">
                        <p>Health</p>{" "}
                        <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center">
                          <FaArrowRight className="text-black " />
                        </div>
                      </li>

                      <li className="flex justify-between items-center bg-[#F5F5F5] py-[16px] px-[26px] rounded-[4px] font-bold">
                        <p>Technology</p>{" "}
                        <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center">
                          <FaArrowRight className="text-black " />
                        </div>
                      </li>

                      <li className="flex justify-between items-center bg-[#F5F5F5] py-[16px] px-[26px] rounded-[4px] font-bold">
                        <p>Entertaiment</p>{" "}
                        <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center">
                          <FaArrowRight className="text-black " />
                        </div>
                      </li>
                    </ul>

                    <h3 className="border border-b-1 border-t-0 border-x-0 pb-[17px] mb-[30px] text-[19px] font-bold">
                      Recent Posts
                    </h3>

                    {/* Recent Posts List */}
                    <ul className="recent-post mb-[35px]">
                      <li className="flex gap-4 py-4">
                        <div className="flex flex-col lg:justify-between justify-center lg:gap-0 gap-[10px] flex-1 text-right order-2">
                          <div className="flex flex-col items-start">
                            <h3 className="text-left text-[14px] lg:mb-0 md:mb-[5px] leading-[1.4] font-bold hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out line-clamp-2">
                              Fitness: Your journey to Better, stronger you.
                            </h3>
                          </div>

                          <span className="text-[14px] text-gray-400 hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out flex items-center gap-1 justify-start">
                            <FaCalendarDays />{" "}
                            <p className="mt-[2px] font-medium">20 Mar, 2024</p>
                          </span>
                        </div>
                        <div className="w-[80px] h-[80px] overflow-hidden relative box order-1">
                          <img
                            className="w-[80px] h-[80px] object-cover transform transition-transform duration-500 hover:scale-105"
                            src="https://plus.unsplash.com/premium_photo-1723291846204-4aa828a8b08a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                          />
                        </div>
                      </li>

                      <li className="flex gap-4 py-4">
                        <div className="flex flex-col lg:justify-between justify-center lg:gap-0 gap-[10px] flex-1 text-right order-2">
                          <div className="flex flex-col items-start">
                            <h3 className="text-left text-[14px] lg:mb-0 md:mb-[5px] leading-[1.4] font-bold hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out line-clamp-2">
                              Fitness: Your journey to Better, stronger you.
                            </h3>
                          </div>

                          <span className="text-[14px] text-gray-400 hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out flex items-center gap-1 justify-start">
                            <FaCalendarDays />{" "}
                            <p className="mt-[2px] font-medium">20 Mar, 2024</p>
                          </span>
                        </div>
                        <div className="w-[80px] h-[80px] overflow-hidden relative box order-1">
                          <img
                            className="w-[80px] h-[80px] object-cover transform transition-transform duration-500 hover:scale-105"
                            src="https://plus.unsplash.com/premium_photo-1723291846204-4aa828a8b08a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                          />
                        </div>
                      </li>

                      <li className="flex gap-4 py-4">
                        <div className="flex flex-col lg:justify-between justify-center lg:gap-0 gap-[10px] flex-1 text-right order-2">
                          <div className="flex flex-col items-start">
                            <h3 className="text-left text-[14px] lg:mb-0 md:mb-[5px] leading-[1.4] font-bold hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out line-clamp-2">
                              Fitness: Your journey to Better, stronger you.
                            </h3>
                          </div>

                          <span className="text-[14px] text-gray-400 hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out flex items-center gap-1 justify-start">
                            <FaCalendarDays />{" "}
                            <p className="mt-[2px] font-medium">20 Mar, 2024</p>
                          </span>
                        </div>
                        <div className="w-[80px] h-[80px] overflow-hidden relative box order-1">
                          <img
                            className="w-[80px] h-[80px] object-cover transform transition-transform duration-500 hover:scale-105"
                            src="https://plus.unsplash.com/premium_photo-1723291846204-4aa828a8b08a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                          />
                        </div>
                      </li>
                    </ul>

                    {/* Ads */}
                    <div className="mb-[35px]">
                      <img
                        className="xl:w-[316px] lg:w-[234px] md:w-[656px] w-full xl:h-[350px] lg:h-[286px] md:h-[773px] sm:h-[700px] h-[550px] object-cover"
                        src="https://images.unsplash.com/photo-1722603037481-6f6f7bf852fa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>

                    <h3 className="border border-b-1 border-t-0 border-x-0 pb-[17px] mb-[30px] text-[19px] font-bold">
                      Popular Tags
                    </h3>

                    {/* Popular Tags List */}
                    <div className="tag-cloud flex gap-[10px] flex-wrap">
                      <button className="py-[9px] px-[16px] border border-1 rounded-[4px]">
                        Sports
                      </button>

                      <button className="py-[9px] px-[16px] border border-1 rounded-[4px]">
                        Politics
                      </button>

                      <button className="py-[9px] px-[16px] border border-1 rounded-[4px]">
                        Business
                      </button>

                      <button className="py-[9px] px-[16px] border border-1 rounded-[4px]">
                        Music
                      </button>

                      <button className="py-[9px] px-[16px] border border-1 rounded-[4px]">
                        Foood
                      </button>

                      <button className="py-[9px] px-[16px] border border-1 rounded-[4px]">
                        Technology
                      </button>

                      <button className="py-[9px] px-[16px] border border-1 rounded-[4px]">
                        Travels
                      </button>

                      <button className="py-[9px] px-[16px] border border-1 rounded-[4px]">
                        Health
                      </button>

                      <button className="py-[9px] px-[16px] border border-1 rounded-[4px]">
                        Fashions
                      </button>

                      <button className="py-[9px] px-[16px] border border-1 rounded-[4px]">
                        Animal
                      </button>

                      <button className="py-[9px] px-[16px] border border-1 rounded-[4px]">
                        Weather
                      </button>

                      <button className="py-[9px] px-[16px] border border-1 rounded-[4px]">
                        Movies
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogArticleDetails;
