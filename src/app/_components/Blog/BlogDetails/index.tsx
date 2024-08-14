import { IoIosArrowForward, IoMdMail } from "react-icons/io";
import {
  FaCalendarDays,
  FaRegUser,
  FaRegComments,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaShareNodes,
} from "react-icons/fa6";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { FaPinterestP, FaEye } from "react-icons/fa";
import { MdPrint } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

import "./styles.css";

const BlogDetails = () => {
  return (
    <div className="blog-details bg-[#f5f5f5]">
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
            <div className="p-[30px] mb-[40px] bg-white col-span-2">
              <div className="px-[8px] leading-[26px] text-[12px] font-bold uppercase text-white bg-[#007BFF] rounded-[3px] w-fit hover:bg-black cursor-pointer transition-colors duration-300 ease-in-out">
                Sports
              </div>

              <h2 className="mt-[10px] mb-[18px] text-[34px] leading-[1.5] font-bold">
                From haute couture to street chic, Fashion Celebrates every
              </h2>

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

              <div className="mb-[35px]">
                <img
                  className="object-cover w-[700px] h-[380px]"
                  src="https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Blog details"
                />
              </div>

              <div className="mb-[30px] flex gap-[30px] relative">
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
                        <FaTwitter className="text-[#0270AD]" />
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
                      <p className="mb-[22px] relative z-[3]">
                        Fuel your competitive spirit, chase victory, and let
                        sports be your legacy Encapsulates the essence.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-[30px] mb-[40px] bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
