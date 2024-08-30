import "../styles.css";
import React from "react";
import { FaCalendarDays, FaRegUser } from "react-icons/fa6";
import Container from "../../Container/Container";
import { homeStyle } from "@/app/constantStyle";

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
    <Container>
      <h2 className={homeStyle.heading}>
        Articles
        <span className="line"></span>
      </h2>

      <div className={homeStyle.article.wrapper}>
        {/* Main article */}
        <div className="xl:col-span-7 md:col-span-6 col-span-12">
          {/* Img box */}
          <div className={homeStyle.article.imgBox}>
            <img
              className={homeStyle.article.img}
              src="https://i1-english.vnecdn.net/2024/08/08/USDollarbanknotesareseeninthis-4502-6611-1723090850.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=7e9-AFqpheXxYawyLRiMew"
              alt="article"
            />

            {/* Overlay */}
            <div className={homeStyle.article.overlay}>
              <div className={homeStyle.tag}>Article</div>
              <h3 className={homeStyle.article.titleMain}>
                Your life, upgraded - gadgets Make it extraordinary
              </h3>

              <div className={homeStyle.timeBoxOne}>
                <span className={homeStyle.textTimeOne}>
                  <FaRegUser />
                  <p className="mt-0.5">By - Tnews</p>
                </span>

                <span className="text-[--text-time]">|</span>

                <span className={homeStyle.textTimeOne}>
                  <FaCalendarDays />
                  <p className="mt-0.5">20 Mar, 2023 </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Some articles */}
        <ul className="xl:col-span-5 md:col-span-6 col-span-12 flex flex-col gap-5">
          {articlePost.map((item, index) => (
            <li className="flex gap-3" key={index}>
              {/* Img box */}
              <div className={homeStyle.article.seCondImgBox}>
                <img
                  className={homeStyle.article.secondImg}
                  src={item.img}
                  alt="aricle"
                />
              </div>

              {/* Content box */}
              <div className={homeStyle.article.contentBox}>
                <div className="title-area">
                  <div className={`mb-[9px] ${homeStyle.tag}`}>Article</div>
                  <h3 className={homeStyle.article.titleSecond}>
                    {item.title}
                  </h3>
                </div>

                <span className={homeStyle.timeBoxTwo}>
                  <FaCalendarDays /> <p className="mt-0.5">20 Mar, 2024</p>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
