import React from "react";
import { FaCalendarDays, FaRegUser } from "react-icons/fa6";

const articlePost = [
  {
    img: "https://i1-english.vnecdn.net/2024/08/08/USDollarbanknotesareseeninthis-4502-6611-1723090850.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=7e9-AFqpheXxYawyLRiMew",
    title: "Chinese flying car producer raises $150M",
  },
  {
    img: "https://i1-english.vnecdn.net/2024/08/08/USDollarbanknotesareseeninthis-4502-6611-1723090850.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=7e9-AFqpheXxYawyLRiMew",
    title: "Chinese flying car producer raises $150M",
  },
  {
    img: "https://i1-english.vnecdn.net/2024/08/08/USDollarbanknotesareseeninthis-4502-6611-1723090850.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=7e9-AFqpheXxYawyLRiMew",
    title: "Chinese flying car producer raises $150M",
  },
];

export default function ArticlesSection() {
  return (
    <div>
      <h2 className="relative text-[30px] font-semibold inline-block mb-[33px]">
        Articles
        <span className="line"></span>
      </h2>

      <div className="grid xl:grid-cols-3 grid-cols-2 gap-5">
        <div className="xl:col-span-2 md:col-span-1 col-span-2">
          <div className="h-[430px] overflow-hidden relative box">
            <img
              className="h-full w-full object-cover transform transition-transform duration-500 hover:scale-105"
              src="https://i1-english.vnecdn.net/2024/08/08/USDollarbanknotesareseeninthis-4502-6611-1723090850.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=7e9-AFqpheXxYawyLRiMew"
              alt="News"
            />

            <div className="absolute top-0 w-full h-[430px] gradient-bg flex gap-2 flex-col md:p-[30px] p-[20px]">
              <div className="px-[8px] leading-[26px] text-[12px] font-bold uppercase  text-white bg-[#8750A6] rounded-[3px]  w-fit hover:bg-black cursor-pointer transition-colors duration-300 ease-in-out">
                Article
              </div>
              <h3 className="text-white md:text-[24px] text-[18px] font-semibold hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
                Your life, upgraded - gadgets Make it extraordinary
              </h3>

              <div className="flex items-center gap-3 text-[#B5B5B5]">
                <span className="text-[14px] font-semibold flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                  <FaRegUser />
                  <p className="mt-0.5">By - Tnews</p>
                </span>

                <span>|</span>

                <span className="text-[14px] font-semibold flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                  <FaCalendarDays />
                  <p className="mt-0.5">20 Mar, 2023 </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 md:col-span-1 col-span-2 flex flex-col gap-5">
          {articlePost.map((item, index) => (
            <div className="flex gap-3" key={index}>
              <div className="md:w-[250px] w-[130px]  h-[130px] overflow-hidden">
                <img
                  className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-105"
                  src={item.img}
                  alt="aricle"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="mb-[9px] px-[8px] leading-[26px] text-[12px] font-bold uppercasetext-white bg-[#8750A6] rounded-[3px] w-fit text-white hover:bg-black cursor-pointer transition-colors duration-300 ease-in-out">
                    Article
                  </div>
                  <h3 className="font-bold hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
                    {item.title}
                  </h3>
                </div>

                <span className="flex items-center gap-2 text-gray-400 text-[14px] hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out w-fit font-medium">
                  <FaCalendarDays /> <p className="mt-0.5">20 Mar, 2024</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
