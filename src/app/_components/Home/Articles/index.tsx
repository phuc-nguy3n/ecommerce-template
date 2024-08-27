import React from "react";
import { FaCalendarDays, FaRegUser } from "react-icons/fa6";
import "../styles.css";
import PostImage from "../../ui/PostImage";

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
          <PostImage
            width={{
              xl: "full",
              lg: "full",
              md: "full",
              sm: "full",
              xs: "full",
            }}
            height={{
              xl: "[430px]",
              lg: "[430px]",
              md: "[430px]",
              sm: "[430px]",
              xs: "[430px]",
            }}
            padding={{
              xl: "[30px]",
              lg: "[30px]",
              md: "[30px]",
              sm: "[30px]",
              xs: "[20px]",
            }}
            titleSize={{
              xl: "[24px]",
              lg: "[24px]",
              md: "[24px]",
              sm: "[24px]",
              xs: "[18px]",
            }}
            colorTag={"[#8750A6]"}
            tagPosition={"bottom"}
            tagName={"Article"}
            cover={
              "https://i1-english.vnecdn.net/2024/08/08/USDollarbanknotesareseeninthis-4502-6611-1723090850.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=7e9-AFqpheXxYawyLRiMew"
            }
            title={"Your life, upgraded - gadgets Make it extraordinary"}
            author={"By - Tnews"}
            created={"20 Mar, 2023"}
          />
        </div>
        <div className="xl:col-span-1 md:col-span-1 col-span-2 flex flex-col gap-5">
          {articlePost.map((item, index) => (
            <div className="flex gap-3" key={index}>
              <div className="md:w-[250px] w-[130px] h-[130px] overflow-hidden">
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
