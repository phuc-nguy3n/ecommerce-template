"use client";

import "./styles.css";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../ui/Breadcrumb";
import LoadingBlock from "../LoadingBlock";
import Container from "../Container/Container";
import { FaCalendarDays, FaShareNodes } from "react-icons/fa6";
import {
  FaEye,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaRegComments,
  FaRegUser,
  FaTwitter,
  FaFolder,
  FaArrowRight,
  FaArrowLeft,
  FaPencilAlt,
} from "react-icons/fa";
import { IoArrowBack, IoArrowForward, IoSearch } from "react-icons/io5";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { MdPrint } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const ConferenceDetails = () => {
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 1000);
  }, []);

  return (
    <div>
      {/* breadcrumb */}
      <Breadcrumb
        items={[
          { label: "home" },
          { label: "conferences" },
          { label: "spring" },
        ]}
      />

      {loadingPage ? (
        <LoadingBlock isLoading={loadingPage} />
      ) : (
        <div className="pt-[60px] pb-[30px]">
          <Container>
            <div className="grid grid-cols-7 gap-[30px]">
              <div className="lg:col-span-5 col-span-7 mb-[40px]">
                {/* Tag name */}
                <div className="px-[8px] leading-[26px] text-[12px] font-bold uppercase text-white bg-[#007BFF] rounded-[3px] w-fit hover:bg-black cursor-pointer transition-colors duration-300 ease-in-out">
                  References
                </div>

                {/* Heading */}
                <h2 className="mt-[10px] mb-[18px] lg:text-[33px] md:text-[27px] leading-[1.5] font-bold">
                  2024-07 Mount Zion – the Kingdom of God (Fountain Valley)
                </h2>

                {/* Info */}
                <div className="flex items-center gap-3 text-[#54595F] mb-[24px] flex-wrap">
                  <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                    <FaRegUser />
                    <p className="mt-0.5 capitalize">Funkie</p>
                  </span>

                  <span className="text-[#EFEFEF]">|</span>

                  <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                    <FaCalendarDays />
                    <p className="mt-0.5 capitalize">23, March 2024</p>
                  </span>

                  <span className="text-[#EFEFEF]">|</span>

                  <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                    <FaRegComments className="text-[16px]" />
                    <p className="mt-0.5 capitalize">Comments (24)</p>
                  </span>

                  <span className="text-[#EFEFEF]">|</span>

                  <span className="text-[14px] font-medium flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                    <HiOutlineBookOpen className="text-[16px]" />
                    <p className="mt-0.5 capitalize">5 Mins Read</p>
                  </span>
                </div>

                {/* Img large */}
                <div className="mb-[35px] xl:h-[380px] lg:h-[312px] md:h-[358px] h-[200px]">
                  <img
                    className="object-cover w-full h-full"
                    src="https://i.pinimg.com/1200x/e7/ad/77/e7ad77df3c648d7db34bc187e9a5c74a.jpg"
                    alt=""
                  />
                </div>

                <div className="mb-[30px] flex gap-[30px] relative">
                  {/* Media */}
                  <div className="max-w-[40px] sm:block hidden">
                    <div className="sticky lg:top-[80px] top-[90px] left-0">
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

                  <div className="flex-grow">
                    {/* Media mobile */}
                    <div className="sm:hidden block mb-[20px]">
                      <div className="flex flex-wrap">
                        <span className="text-[12px] leading-[20px] text-[#080809] font-bold mb-[15px] block capitalize mr-[10px]">
                          Share Post:
                        </span>

                        <div className="flex gap-x-[10px] ">
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

                    {/* Action bar */}
                    <div className="flex items-center justify-between mb-[24px] flex-wrap gap-[10px]">
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
                          <span className="mt-[1px]">1k</span>{" "}
                          <AiFillLike className="text-[#FF1D50] text-[18px]" />
                        </button>

                        <button className="text-[14px] text-[#54595F] font-semibold bg-[#f5f5f5] border border-1 border-[#EFEFEF] rounded-[4px] px-[10px] py-[4px] flex items-center gap-[7px]">
                          <span className="mt-[1px]">515</span>{" "}
                          <FaEye className="text-[#FF1D50] text-[18px]" />
                        </button>

                        <button className="text-[14px] text-[#54595F] font-semibold bg-[#f5f5f5] border border-1 border-[#EFEFEF] rounded-[4px] px-[10px] py-[4px] flex items-center gap-[7px]">
                          <span className="mt-[1px]">100</span>{" "}
                          <FaShareNodes className="text-[#FF1D50] text-[18px]" />
                        </button>
                      </div>
                    </div>

                    <div className="main-content">
                      {/* List file */}
                      <div className="relative overflow-x-auto shadow-sm border sm:rounded-md mb-[20px]">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                              <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                  Name
                                  <a href="#">
                                    <svg
                                      className="w-3 h-3 ms-1.5"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                    </svg>
                                  </a>
                                </div>
                              </th>
                              <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                  Size
                                  <a href="#">
                                    <svg
                                      className="w-3 h-3 ms-1.5"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                    </svg>
                                  </a>
                                </div>
                              </th>
                              <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                  Date
                                  <a href="#">
                                    <svg
                                      className="w-3 h-3 ms-1.5"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                    </svg>
                                  </a>
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <td
                                scope="row"
                                className="px-6 py-8 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                <div className="flex items-center">
                                  <FaFolder className="text-4xl text-yellow-300" />
                                  <span className="ml-3 max-w-[350px] whitespace-normal word-break break-all line-clamp-2">
                                    Spring Conference
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4">10</td>
                              <td className="px-6 py-4">January 2024</td>
                            </tr>

                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <td
                                scope="row"
                                className="px-6 py-8 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                <div className="flex items-center">
                                  <FaFolder className="text-4xl text-yellow-300" />
                                  <span className="ml-3 max-w-[350px] whitespace-normal word-break break-all line-clamp-2">
                                    Spring Conference
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4">10</td>
                              <td className="px-6 py-4">January 2024</td>
                            </tr>

                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <td
                                scope="row"
                                className="px-6 py-8 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                <div className="flex items-center">
                                  <FaFolder className="text-4xl text-yellow-300" />
                                  <span className="ml-3 max-w-[350px] whitespace-normal word-break break-all line-clamp-2">
                                    Spring Conference
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4">10</td>
                              <td className="px-6 py-4">January 2024</td>
                            </tr>

                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <td
                                scope="row"
                                className="px-6 py-8 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                <div className="flex items-center">
                                  <FaFolder className="text-4xl text-yellow-300" />
                                  <span className="ml-3 max-w-[350px] whitespace-normal word-break break-all line-clamp-2">
                                    Spring Conference
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4">10</td>
                              <td className="px-6 py-4">January 2024</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comment form */}
                <div className="comment-form mb-[40px]">
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

                {/* Conferences navigation */}
                <div className="blog-navigation flex items-center justify-between border border-x-0 border-y-1 border-[#EFEFEF] sm:py-[30px] py-[16px] mb-[30px]">
                  <div className="nav-btn pev flex items-center max-w-[350px] sm:gap-[20px] gap-[10px]">
                    <div className="md:min-w-[80px] min-w-[50px]">
                      <img
                        className="md:w-[80px] w-[50px] md:h-[80px] h-[50px] object-cover rounded-full"
                        src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>

                    <div className="sm:mr-[31px] mr-0">
                      <h5 className="text-[13px] mb-[12px] font-bold md:line-clamp-2  hidden">
                        Winter Conferences
                      </h5>
                      <p className="flex items-center font-medium text-[#54595F]">
                        <FaArrowLeft className="mr-[7px] text-[#FF1D50]" /> Prev
                      </p>
                    </div>
                  </div>

                  <div className="w-[1px] h-[80px] bg-[#EFEFEF]"></div>

                  <div className="nav-btn pev flex items-center max-w-[350px] sm:gap-[20px] gap-[10px]">
                    <div className="md:min-w-[80px] min-w-[50px] order-2">
                      <img
                        className="md:w-[80px] w-[50px] md:h-[80px] h-[50px] object-cover rounded-full"
                        src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>

                    <div className="sm:ml-[31px] ml-0">
                      <h5 className="text-[13px] mb-[12px] font-bold text-right md:line-clamp-2  hidden">
                        Summer conferences
                      </h5>
                      <p className="flex items-center font-medium text-[#54595F] justify-end">
                        Next{" "}
                        <FaArrowRight className="ml-[7px] text-[#FF1D50]" />
                      </p>
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
                          <div className="mb-[18px] overflow-hidden xl:w-[266px] lg:w-[303px] md:w-[318px] w-full xl:h-[187px] lg:h-[192px] md:h-[218px] sm:h-[190px] h-[200px] relative box">
                            <img
                              className="w-full h-full object-cover"
                              src="https://images.unsplash.com/photo-1723479319633-43fa297d3853?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt=""
                            />

                            {/* Overlay */}
                            <div className="absolute top-0 w-full h-full  gradient-bg blog flex flex-col p-[20px] justify-start">
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
                          <div className="mb-[18px] overflow-hidden xl:w-[266px] lg:w-[303px] md:w-[318px] w-full xl:h-[187px] lg:h-[192px] md:h-[218px] sm:h-[190px] h-[200px] relative box">
                            <img
                              className="w-full h-full object-cover"
                              src="https://images.unsplash.com/photo-1723479319633-43fa297d3853?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt=""
                            />

                            {/* Overlay */}
                            <div className="absolute top-0 w-full h-full  gradient-bg blog flex flex-col p-[20px] justify-start">
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
                          <div className="mb-[18px] overflow-hidden xl:w-[266px] lg:w-[303px] md:w-[318px] w-full xl:h-[187px] lg:h-[192px] md:h-[218px] sm:h-[190px] h-[200px] relative box">
                            <img
                              className="w-full h-full object-cover"
                              src="https://images.unsplash.com/photo-1723479319633-43fa297d3853?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt=""
                            />

                            {/* Overlay */}
                            <div className="absolute top-0 w-full h-full  gradient-bg blog flex flex-col p-[20px] justify-start">
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
          </Container>
        </div>
      )}
    </div>
  );
};

export default ConferenceDetails;
