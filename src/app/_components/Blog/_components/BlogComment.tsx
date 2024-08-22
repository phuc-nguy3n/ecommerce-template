import React from "react";
import { FaCalendarDays, FaReply } from "react-icons/fa6";

const BlogComment = () => {
  return (
    <div className="mb-[30px]">
      <h2 className="mb-[25px] md:text-[30px] text-[22px] leading-[1.278] text-black font-bold">
        Comments (03)
      </h2>

      <ul className="comment-list">
        <li className="comment-item">
          <div className="post-item flex pb-[30px] mb-[30px] relative border border-b-1 border-b-[#EFEFEF] border-x-0 border-t-0">
            <div className="sm:flex block items-start gap-[20px]">
              <div className="min-w-[80px] sm:mb-0 mb-[16px]">
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
                  Your sport blog is simply fantastic! The in-depth analysis,
                  engaging writing style, and up-to-date coverage of various
                  sports events make it a must-visit for any sports enthusiast.
                </p>
                <button className="uppercase bg-black text-white py-[5px] px-[14px] flex items-center gap-1 font-bold rounded-[4px] text-[14px]">
                  <FaReply /> Reply
                </button>
              </div>
            </div>
          </div>

          <ul className="children sm:ml-[80px] ml-[30px]">
            <li className="comment-item">
              <div className="post-item flex pb-[30px] mb-[30px] relative border border-b-1 border-b-[#EFEFEF] border-x-0 border-t-0">
                <div className="sm:flex block items-start gap-[20px]">
                  <div className="min-w-[80px] sm:mb-0 mb-[15px]">
                    <img
                      className="w-[80px] h-[80px] object-cover rounded-full"
                      src="https://images.unsplash.com/photo-1723239406061-cec5bdf12afd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                      analysis, engaging writing style, and up-to-date coverage
                      of various sports events make it a must-visit for any
                      sports enthusiast.
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
            <div className="sm:flex block items-start gap-[20px]">
              <div className="min-w-[80px] sm:mb-0 mb-[16px]">
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
                  Your sport blog is simply fantastic! The in-depth analysis,
                  engaging writing style, and up-to-date coverage of various
                  sports events make it a must-visit for any sports enthusiast.
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
  );
};

export default BlogComment;
