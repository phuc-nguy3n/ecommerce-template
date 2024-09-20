import { FaCalendarDays } from "react-icons/fa6";
import { homeStyle } from "@/app/constantStyle";

const newsPosts = [
  {
    img: "https://i1-english.vnecdn.net/2024/08/08/pexels-janetrangdoan-793785-17-2461-3354-1723116059.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=sCxkrG1CiwG__ftuOeH70A",
    tagName: "News",
    title:
      "Life, a canvas, paint your Masterpiece. Life, a canvas, paint your Masterpiece.",
  },
  {
    img: "https://i1-english.vnecdn.net/2024/08/08/pexels-janetrangdoan-793785-17-2461-3354-1723116059.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=sCxkrG1CiwG__ftuOeH70A",
    tagName: "News",
    title:
      "Life, a canvas, paint your Masterpiece. Life, a canvas, paint your Masterpiece.",
  },
  {
    img: "https://i1-english.vnecdn.net/2024/08/08/pexels-janetrangdoan-793785-17-2461-3354-1723116059.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=sCxkrG1CiwG__ftuOeH70A",
    tagName: "News",
    title:
      "Life, a canvas, paint your Masterpiece. Life, a canvas, paint your Masterpiece.",
  },
  {
    img: "https://i1-english.vnecdn.net/2024/08/08/pexels-janetrangdoan-793785-17-2461-3354-1723116059.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=sCxkrG1CiwG__ftuOeH70A",
    tagName: "News",
    title:
      "Life, a canvas, paint your Masterpiece. Life, a canvas, paint your Masterpiece.",
  },
  {
    img: "https://i1-english.vnecdn.net/2024/08/08/pexels-janetrangdoan-793785-17-2461-3354-1723116059.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=sCxkrG1CiwG__ftuOeH70A",
    tagName: "News",
    title:
      "Life, a canvas, paint your Masterpiece. Life, a canvas, paint your Masterpiece.",
  },
];

const RightSide = () => {
  return (
    <div className={homeStyle.news.latest.wrapped}>
      <ul className={homeStyle.news.latest.newsList}>
        {newsPosts.map((item, index) => (
          <li className="flex gap-4 py-4 lg:px-0 px-4" key={index}>
            {/* Content box */}
            <div className={homeStyle.news.latest.contentBox}>
              <div className="flex flex-col items-start">
                <div
                  className={`xl:hidden block xl:mb-0 mb-[9px] ${homeStyle.tag}`}
                >
                  {item.tagName}
                </div>

                <h3 className={homeStyle.news.latest.title}>{item.title}</h3>
              </div>

              <span className={homeStyle.timeBoxTwo}>
                <FaCalendarDays /> <p className="mt-[2px]">20 Mar, 2024</p>
              </span>
            </div>

            {/* Img box */}
            <div className={homeStyle.news.latest.imgBox}>
              <img
                className={homeStyle.news.latest.img}
                src={item.img}
                alt="news"
              />

              <div className={homeStyle.news.latest.overlay}>
                <div className={`xl:flex hidden ${homeStyle.tag}`}>
                  {item.tagName}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightSide;
