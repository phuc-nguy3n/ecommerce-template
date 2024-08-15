import { IoIosArrowForward, IoMdMail } from "react-icons/io";
import {
  FaCalendarDays,
  FaRegUser,
  FaRegComments,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaShareNodes,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa6";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { FaPinterestP, FaEye, FaReply, FaPencilAlt } from "react-icons/fa";
import { MdPrint } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { PiQuotesLight } from "react-icons/pi";
import { FiMail } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { IoSearch, IoArrowBack, IoArrowForward } from "react-icons/io5";

import "./styles.css";

const BlogDetails = () => {
  return (
    <div className="blog-details bg-[#f5f5f5]">
      {/* breadcrumb */}
      <div className="breadcrumb py-[18px] bg-[#EFEFEF]">
        <div className="container xl:max-w-[1248px] lg:max-w-[960px] max-w-[720px]">
          <ul className="breadcumb-menu flex gap-2">
            <li className="inline-flex items-center gap-2 uppercase cursor-pointer font-semibold">
              Home <IoIosArrowForward />
            </li>
            <li className="uppercase  font-semibold text-[#FF1D50]">
              Blog details
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-[60px] pb-[30px]">
        <div className="container xl:max-w-[1248px] lg:max-w-[960px] max-w-[720px]">
          <div className="grid grid-cols-3 gap-[24px]">
            {/* Blog details post */}
            <div className="p-[30px] mb-[40px] bg-white col-span-2">
              {/* Tag name */}
              <div className="px-[8px] leading-[26px] text-[12px] font-bold uppercase text-white bg-[#007BFF] rounded-[3px] w-fit hover:bg-black cursor-pointer transition-colors duration-300 ease-in-out">
                Sports
              </div>

              {/* Blog Title */}
              <h2 className="mt-[10px] mb-[18px] text-[34px] leading-[1.5] font-bold">
                From haute couture to street chic, Fashion Celebrates every
              </h2>

              {/* Blog info */}
              <div className="flex items-center gap-3 text-[#54595F] mb-[24px]">
                <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                  <FaRegUser />
                  <p className="mt-0.5">By - Tnews</p>
                </span>

                <span className="text-[#EFEFEF]">|</span>

                <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                  <FaCalendarDays />
                  <p className="mt-0.5">21 June, 2023</p>
                </span>

                <span className="text-[#EFEFEF]">|</span>

                <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                  <FaRegComments className="text-[16px]" />
                  <p className="mt-0.5">Comments (3)</p>
                </span>

                <span className="text-[#EFEFEF]">|</span>

                <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                  <HiOutlineBookOpen className="text-[16px]" />
                  <p className="mt-0.5">5 Mins Read</p>
                </span>
              </div>

              {/* Blog img */}
              <div className="mb-[35px]">
                <img
                  className="object-cover w-[721px] h-[380px]"
                  src="https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Blog details"
                />
              </div>

              <div className="mb-[30px] flex gap-[30px] relative">
                {/* Share media */}
                <div className="max-w-[40px]">
                  <div className="sticky top-[80px] left-0">
                    <span className="text-[12px] leading-[20px] text-[#080809] font-bold mb-[15px] block capitalize">
                      Share Post:
                    </span>

                    <div>
                      <div className="w-[40px] h-[40px] mb-[10px] border border-1 rounded-full flex justify-center items-center cursor-pointer">
                        <FaFacebookF className="text-[#1D4292]" />
                      </div>

                      <div className="w-[40px] h-[40px] mb-[10px] border border-1 rounded-full flex justify-center items-center cursor-pointer">
                        <FaTwitter className="text-[#1C96E8]" />
                      </div>

                      <div className="w-[40px] h-[40px] mb-[10px] border border-1 rounded-full flex justify-center items-center cursor-pointer">
                        <FaLinkedinIn className="text-[#0270AD]" />
                      </div>

                      <div className="w-[40px] h-[40px] mb-[10px] border border-1 rounded-full flex justify-center items-center cursor-pointer">
                        <FaPinterestP className="text-[#B7081B]" />
                      </div>

                      <div className="w-[40px] h-[40px] mb-[10px] border border-1 rounded-full flex justify-center items-center cursor-pointer">
                        <FaInstagram className="text-[#AE2EB5]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Blog content */}
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-[24px]">
                    <div className="flex items-center gap-[10px]">
                      <button className="text-[14px] text-[#54595F] font-semibold bg-[#f5f5f5] border border-1 border-[#EFEFEF] rounded-[4px] px-[10px] py-[4px] flex items-center gap-[7px]">
                        Print:{" "}
                        <MdPrint className="text-[#FF1D50] text-[18px]" />
                      </button>

                      <button className="text-[14px] text-[#54595F] font-semibold bg-[#f5f5f5] border border-1 border-[#EFEFEF] rounded-[4px] px-[10px] py-[4px] flex items-center gap-[7px]">
                        Email:{" "}
                        <IoMdMail className="text-[#FF1D50] text-[18px]" />
                      </button>
                    </div>

                    <div className="flex items-center gap-[10px]">
                      <button className="text-[14px] text-[#54595F] font-semibold bg-[#f5f5f5] border border-1 border-[#EFEFEF] rounded-[4px] px-[10px] py-[4px] flex items-center gap-[7px] ml-auto">
                        15k{" "}
                        <AiFillLike className="text-[#FF1D50] text-[18px]" />
                      </button>

                      <button className="text-[14px] text-[#54595F] font-semibold bg-[#f5f5f5] border border-1 border-[#EFEFEF] rounded-[4px] px-[10px] py-[4px] flex items-center gap-[7px]">
                        126k <FaEye className="text-[#FF1D50] text-[18px]" />
                      </button>

                      <button className="text-[14px] text-[#54595F] font-semibold bg-[#f5f5f5] border border-1 border-[#EFEFEF] rounded-[4px] px-[10px] py-[4px] flex items-center gap-[7px]">
                        12k{" "}
                        <FaShareNodes className="text-[#FF1D50] text-[18px]" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="mb-[18px] leading-[1.75] text-[#54595F] tracking-wide">
                      Fuel your competitive spirit, chase victory, and let
                      sports be your legacy encapsulates the essence of
                      embracing sports as a means to challenge oneself, strive
                      for success, and leave a lasting impact. This phrase urges
                      individuals to tap into their inner drive and motivation.
                    </p>

                    <p className="mb-[18px] leading-[1.75] text-[#54595F] tracking-wide">
                      Igniting their competitive spirit. It encourages them to
                      set ambitious goals, not settling for mediocrity but
                      pushing themselves to excel in their chosen sport or
                      athletic endeavor. The pursuit of victory becomes the
                      driving force, motivating athletes to give their all,
                    </p>

                    <p className="mb-[18px] leading-[1.75] text-[#54595F] tracking-wide">
                      Surpass their limitations, and achieve remarkable feats.
                      It emphasizes the importance of hard work, dedication, and
                      Perseverance in the face of challenges and obstacles that
                      may arise along the way.
                    </p>

                    <div className="my-[24px] py-[8px]">
                      <div className="h-[66px] flex items-center justify-center bg-[#eeeeee]">
                        <h2 className="text-[30px] font-bold"> 826 x 90</h2>
                      </div>
                    </div>

                    <p className="leading-[1.75] text-[#54595F] tracking-wide">
                      The slogan reminds athletes that their participation in
                      sports has the potential to leave a lasting legacy. It
                      suggests that their accomplishments, records, and impact
                      can inspire future generations, shaping the sport itself
                      and influencing others to follow in their footsteps. By
                      embracing sports and embracing the pursuit of victory,
                      individuals have the opportunity to create a legacy that
                      will be remembered and celebrated long after their own
                      participation.
                    </p>

                    <div className="my-[24px] py-[8px]">
                      <img
                        className="object-cover  w-[700px] h-[300px]"
                        src="https://images.unsplash.com/photo-1723474549831-0d70d6c5f2b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>

                    <h3 className="text-[25px] font-bold leading-[1.4] mb-[15px] tracking-wide">
                      Achieve greatness, fueled by innovation
                    </h3>

                    <p className="mb-[18px] leading-[1.75] text-[#54595F] tracking-wide">
                      Achieve greatness, fueled by innovation" encapsulates the
                      idea that by embracing and harnessing innovative
                      approaches and technologies, individuals can reach
                      extraordinary heights of success and achievement. It
                      implies that the combination of pushing boundaries,
                      thinking outside the box, and adopting cutting-edge
                      advancements can Propel individuals to surpass their
                      limitations and accomplish remarkable feats.
                    </p>

                    <p className="leading-[1.75] text-[#54595F] tracking-wide">
                      This phrase suggests that innovation serves as the driving
                      force behind progress and improvement in various fields,
                      including sports, business, arts, and personal
                      development. It conveys the message that by embracing new
                      ideas.
                    </p>

                    <blockquote className="text-[20px] leading-[1.5] p-[50px] relative bg-[#F5F5F5] overflow-hidden my-[30px] text-[#080809]">
                      <p className="mb-[22px] relative z-[3] text-[19px]">
                        Fuel your competitive spirit, chase victory, and let
                        sports be your legacy Encapsulates the essence.
                      </p>
                      <cite className="block text-[13px] relative leading-[1.3] font-semibold not-italic text-[#54595F] pl-[40px] ml-[10px]">
                        Robert Milton
                      </cite>
                      <PiQuotesLight className="absolute bottom-[50px] right-[50px] text-[50px] text-[#54595F]" />
                    </blockquote>

                    <div className="grid grid-cols-2 py-1 gap-[20px] mb-[24px]">
                      <div>
                        <img
                          className="object-cover w-[315px] h-[280px]"
                          src="https://images.unsplash.com/photo-1723714807771-23b5447e2f65?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                        />
                      </div>

                      <div>
                        <img
                          className="object-cover w-[315px] h-[280px]"
                          src="https://images.unsplash.com/photo-1721332149267-ef9b10eaacd9?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                        />
                      </div>
                    </div>

                    <h3 className="text-[25px] font-bold leading-[1.4] mb-[15px] tracking-wide">
                      Power your game with innovative features.
                    </h3>

                    <p className="mb-[18px] leading-[1.75] text-[#54595F] tracking-wide">
                      Power your game with innovative features" signifies the
                      utilization of advanced and cutting-edge elements to
                      enhance your performance and elevate your gameplay. It
                      suggests that by embracing these innovative features, you
                      can tap into a new level of power, skill, and
                      effectiveness in your chosen sport.
                    </p>

                    <p className="leading-[1.75] text-[#54595F] tracking-wide">
                      This phrase implies that the incorporation of
                      groundbreaking technologies, techniques, and
                      functionalities can provide you with a competitive edge
                      and push the boundaries of what is achievable in your
                      game.
                    </p>
                  </div>

                  <div className="blog-tag flex items-center mt-[35px]">
                    <h6 className="font-bold mr-[20px] pt-[3px] text-[15px]">
                      Related Tag :
                    </h6>
                    <div className="flex items-center">
                      <button className="leading-[1] text-[15px] capitalize py-[9px] px-[16px] mr-[6px] border border-1 rounded-[4px]">
                        Sports
                      </button>
                      <button className="leading-[1] text-[15px] capitalize py-[9px] px-[16px] mr-[6px] border border-1 rounded-[4px]">
                        Politics
                      </button>
                      <button className="leading-[1] text-[15px] capitalize py-[9px] px-[16px] mr-[6px] border border-1 rounded-[4px]">
                        Business
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog navigation */}
              <div className="blog-navigation flex items-center justify-between border border-x-0 border-y-1 border-[#EFEFEF] py-[30px]">
                <div className="nav-btn pev flex items-center max-w-[350px] gap-[20px]">
                  <div className="min-w-[80px]">
                    <img
                      className="w-[80px] h-[80px] object-cover rounded-full"
                      src="https://images.unsplash.com/photo-1723477450561-791fd67efa56?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>

                  <div>
                    <h5 className="text-[13px] mb-[12px] font-bold">
                      Game on! Embrace the spirit of sportsmanship
                    </h5>
                    <p className="flex items-center font-medium text-[#54595F]">
                      <FaArrowLeft className="mr-[7px] text-[#FF1D50]" /> Prev
                    </p>
                  </div>
                </div>

                <div className="w-[1px] h-[80px] bg-[#EFEFEF]"></div>

                <div className="nav-btn pev flex items-center max-w-[350px] gap-[20px]">
                  <div className="min-w-[80px] order-2">
                    <img
                      className="w-[80px] h-[80px] object-cover rounded-full"
                      src="https://images.unsplash.com/photo-1721297013262-7265cc89a763?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>

                  <div>
                    <h5 className="text-[13px] mb-[12px] font-bold text-right">
                      Push your limits, redefine what's possible
                    </h5>
                    <p className="flex items-center font-medium text-[#54595F] justify-end">
                      Next <FaArrowRight className="ml-[7px] text-[#FF1D50]" />
                    </p>
                  </div>
                </div>
              </div>

              {/* Blog author */}
              <div className="blog-author p-[40px] mt-[40px] mb-[30px] bg-[#F5F5F5] flex gap-[30px]">
                <div className="min-w-[110px]">
                  <img
                    className="w-[110px] h-[110px] object-cover rounded-full"
                    src="https://images.unsplash.com/photo-1723212396541-e3b97ac55599?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>

                <div className="media">
                  <div className="author-top flex items-start justify-between">
                    <div>
                      <h3 className="font-bold tracking-wide mb-[4px]">
                        Ronald Richards
                      </h3>
                      <span className="text-[14px] font-medium text-[#FF1D50]">
                        Founder & CEO
                      </span>
                    </div>

                    <div className="social-links flex items-center gap-[14px]">
                      <div className="text-[19px] cursor-pointer">
                        <FaFacebookF className="text-[#54595F]" />
                      </div>

                      <div className="text-[19px] cursor-pointer">
                        <FaTwitter className="text-[#54595F]" />
                      </div>

                      <div className="text-[19px] cursor-pointer">
                        <FaLinkedinIn className="text-[#54595F]" />
                      </div>

                      <div className="text-[19px] cursor-pointer">
                        <FaInstagram className="text-[#54595F]" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-[11px] leading-[1.75] text-[#54595F] tracking-wide">
                    Adventurer and passionate travel blogger. With a backpack
                    full of stories and a camera in hand, she takes her readers
                    on exhilarating journeys around the world.
                  </p>
                </div>
              </div>

              {/* Blog comment */}
              <div className="mb-[30px]">
                <h2 className="mb-[25px] text-[30px] leading-[1.278] text-black font-bold">
                  Comments (03)
                </h2>

                <ul className="comment-list">
                  <li className="comment-item">
                    <div className="post-item flex pb-[30px] mb-[30px] relative border border-b-1 border-b-[#EFEFEF] border-x-0 border-t-0">
                      <div className="flex items-center gap-[20px]">
                        <div className="min-w-[80px]">
                          <img
                            className="w-[80px] h-[80px] object-cover rounded-full"
                            src="https://images.unsplash.com/photo-1719937206589-d13b6b008196?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                          />
                        </div>

                        <div className="flex-grow">
                          <span className="text-[16px] font-medium flex items-center gap-1 cursor-pointer text-[#54595F] hover:text-[#ff1d50] transition-colors duration-300 ease-in-out mb-[5px]">
                            <FaCalendarDays />
                            <p className="mt-0.5 uppercase">21 June, 2023</p>
                          </span>
                          <h3 className="text-[16px] mb-[15px] font-bold tracking-wide">
                            Brooklyn Simmons
                          </h3>
                          <p className="mb-[17px] leading-[1.75] text-[#54595F] tracking-wide">
                            Your sport blog is simply fantastic! The in-depth
                            analysis, engaging writing style, and up-to-date
                            coverage of various sports events make it a
                            must-visit for any sports enthusiast.
                          </p>
                          <button className="uppercase bg-black text-white py-[5px] px-[14px] flex items-center gap-1 font-bold rounded-[4px] text-[14px]">
                            <FaReply /> Reply
                          </button>
                        </div>
                      </div>
                    </div>

                    <ul className="children ml-[80px]">
                      <li className="comment-item">
                        <div className="post-item flex pb-[30px] mb-[30px] relative border border-b-1 border-b-[#EFEFEF] border-x-0 border-t-0">
                          <div className="flex items-center gap-[20px]">
                            <div className="min-w-[80px]">
                              <img
                                className="w-[80px] h-[80px] object-cover rounded-full"
                                src="https://images.unsplash.com/photo-1723239406061-cec5bdf12afd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                              />
                            </div>

                            <div className="flex-grow">
                              <span className="text-[16px] font-medium flex items-center gap-1 cursor-pointer text-[#54595F] hover:text-[#ff1d50] transition-colors duration-300 ease-in-out mb-[5px]">
                                <FaCalendarDays />
                                <p className="mt-0.5 uppercase">
                                  21 June, 2023
                                </p>
                              </span>
                              <h3 className="text-[16px] mb-[15px] font-bold tracking-wide">
                                Brooklyn Simmons
                              </h3>
                              <p className="mb-[17px] leading-[1.75] text-[#54595F] tracking-wide">
                                Your sport blog is simply fantastic! The
                                in-depth analysis, engaging writing style, and
                                up-to-date coverage of various sports events
                                make it a must-visit for any sports enthusiast.
                              </p>
                              <button className="uppercase bg-black text-white py-[5px] px-[14px] flex items-center gap-1 font-bold rounded-[4px] text-[14px]">
                                <FaReply /> Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="comment-item">
                    <div className="post-item flex pb-[30px] mb-[30px] relative">
                      <div className="flex items-center gap-[20px]">
                        <div className="min-w-[80px]">
                          <img
                            className="w-[80px] h-[80px] object-cover rounded-full"
                            src="https://images.unsplash.com/photo-1720048171419-b515a96a73b8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                          />
                        </div>

                        <div className="flex-grow">
                          <span className="text-[16px] font-medium flex items-center gap-1 cursor-pointer text-[#54595F] hover:text-[#ff1d50] transition-colors duration-300 ease-in-out mb-[5px]">
                            <FaCalendarDays />
                            <p className="mt-0.5 uppercase">21 June, 2023</p>
                          </span>
                          <h3 className="text-[16px] mb-[15px] font-bold tracking-wide">
                            Brooklyn Simmons
                          </h3>
                          <p className="mb-[17px] leading-[1.75] text-[#54595F] tracking-wide">
                            Your sport blog is simply fantastic! The in-depth
                            analysis, engaging writing style, and up-to-date
                            coverage of various sports events make it a
                            must-visit for any sports enthusiast.
                          </p>
                          <button className="uppercase bg-black text-white py-[5px] px-[14px] flex items-center gap-1 font-bold rounded-[4px] text-[14px]">
                            <FaReply /> Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Comment form */}
              <div className="comment-form">
                <div className="form-title">
                  <h3 className="mb-[10px] text-[30px] leading-[1.3] font-bold tracking-wide">
                    Leave a Comment
                  </h3>
                  <p className="mb-[25px] text-[14px] text-[#6c757d]">
                    Your email address will not be published. Required fields
                    are marked *
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
            </div>
            <div className="p-[30px] mb-[40px] bg-white relative">
              <div className="sticky top-[80px] right-0">
                {/* Search box */}
                <div className="flex justify-between rounded-[3px] overflow-hidden mb-[35px]">
                  <div className="form-group relative">
                    <input
                      type="text"
                      className="w-full h-[50px] bg-[#F5F5F5] text-[#54595F] text-[16px] rounded-[5px] pr-[40px] pl-[25px] outline-none"
                      placeholder="Enter Keyword"
                    />
                  </div>
                  <button className="bg-[#FF1D50] w-[56px] h-[50px] flex items-center justify-center">
                    <IoSearch className="text-white text-[18px]" />
                  </button>
                </div>

                {/*  Category  */}
                <div className="category">
                  <h3 className="border border-b-1 border-t-0 border-x-0 pb-[17px] mb-[30px] text-[19px] font-bold">
                    Categories
                  </h3>

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

                  <ul className="recent-post mb-[35px]">
                    <li className="flex gap-4 py-4">
                      <div className="flex flex-col justify-between flex-1 text-right order-2">
                        <div className="flex flex-col items-start">
                          <h3 className="text-left text-[14px] lg:mb-0 md:mb-[5px] leading-[1.4] font-bold hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out ">
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
                      <div className="flex flex-col justify-between flex-1 text-right order-2">
                        <div className="flex flex-col items-start">
                          <h3 className="text-left text-[14px] lg:mb-0 md:mb-[5px] leading-[1.4] font-bold hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out ">
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
                      <div className="flex flex-col justify-between flex-1 text-right order-2">
                        <div className="flex flex-col items-start">
                          <h3 className="text-left text-[14px] lg:mb-0 md:mb-[5px] leading-[1.4] font-bold hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out ">
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

                  <div className="w-[318px] h-[350px] mb-[35px]">
                    <img
                      className="w-[318px] h-[350px] object-cover"
                      src="https://images.unsplash.com/photo-1722603037481-6f6f7bf852fa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>

                  <h3 className="border border-b-1 border-t-0 border-x-0 pb-[17px] mb-[30px] text-[19px] font-bold">
                    Popular Tags
                  </h3>

                  <div className="tag-cloud ">
                    <button className="py-[9px] px-[16px] border border-1 rounded-[4px] mr-[7px] mb-[7px]">
                      Sports
                    </button>

                    <button className="py-[9px] px-[16px] border border-1 rounded-[4px] mr-[7px] mb-[7px]">
                      Politics
                    </button>

                    <button className="py-[9px] px-[16px] border border-1 rounded-[4px] mr-[7px] mb-[7px]">
                      Business
                    </button>

                    <button className="py-[9px] px-[16px] border border-1 rounded-[4px] mr-[7px] mb-[7px]">
                      Music
                    </button>

                    <button className="py-[9px] px-[16px] border border-1 rounded-[4px] mr-[7px] mb-[7px]">
                      Foood
                    </button>

                    <button className="py-[9px] px-[16px] border border-1 rounded-[4px] mr-[7px] mb-[7px]">
                      Technology
                    </button>

                    <button className="py-[9px] px-[16px] border border-1 rounded-[4px] mr-[7px] mb-[7px]">
                      Travels
                    </button>

                    <button className="py-[9px] px-[16px] border border-1 rounded-[4px] mr-[7px] mb-[7px]">
                      Health
                    </button>

                    <button className="py-[9px] px-[16px] border border-1 rounded-[4px] mr-[7px] mb-[7px]">
                      Fashions
                    </button>

                    <button className="py-[9px] px-[16px] border border-1 rounded-[4px] mr-[7px] mb-[7px]">
                      Animal
                    </button>

                    <button className="py-[9px] px-[16px] border border-1 rounded-[4px] mr-[7px] mb-[7px]">
                      Weather
                    </button>

                    <button className="py-[9px] px-[16px] border border-1 rounded-[4px] mr-[7px] mb-[7px]">
                      Movies
                    </button>
                  </div>
                </div>
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
                <div className="flex-none px-3 snap-start xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full">
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

                <div className="flex-none px-3 snap-start xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full">
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

                <div className="flex-none px-3 snap-start xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full">
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

                <div className="flex-none px-3 snap-start xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full">
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
  );
};

export default BlogDetails;
