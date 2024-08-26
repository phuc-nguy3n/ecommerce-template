import { FaCalendarDays, FaRegUser } from "react-icons/fa6";

const newsPosts = [
  {
    img: "https://i1-english.vnecdn.net/2024/08/08/pexels-janetrangdoan-793785-17-2461-3354-1723116059.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=sCxkrG1CiwG__ftuOeH70A",
    tagName: "News",
    title: "Life, a canvas, paint your Masterpiece.",
  },
  {
    img: "https://i1-english.vnecdn.net/2024/08/08/pexels-janetrangdoan-793785-17-2461-3354-1723116059.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=sCxkrG1CiwG__ftuOeH70A",
    tagName: "News",
    title: "Life, a canvas, paint your Masterpiece.",
  },
  {
    img: "https://i1-english.vnecdn.net/2024/08/08/pexels-janetrangdoan-793785-17-2461-3354-1723116059.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=sCxkrG1CiwG__ftuOeH70A",
    tagName: "News",
    title: "Life, a canvas, paint your Masterpiece.",
  },
  {
    img: "https://i1-english.vnecdn.net/2024/08/08/pexels-janetrangdoan-793785-17-2461-3354-1723116059.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=sCxkrG1CiwG__ftuOeH70A",
    tagName: "News",
    title: "Life, a canvas, paint your Masterpiece.",
  },
  {
    img: "https://i1-english.vnecdn.net/2024/08/08/pexels-janetrangdoan-793785-17-2461-3354-1723116059.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=sCxkrG1CiwG__ftuOeH70A",
    tagName: "News",
    title: "Life, a canvas, paint your Masterpiece.",
  },
];

const RightSide = () => {
  return (
    <div className="bg-gray-100 dark:bg-[#1e1e1e] xl:p-[20px] lg:px-[20px] lg:py-0">
      <ul className="latest-box grid xl:grid-cols-1 lg:grid-cols-2 md:grid-cols-2  lg:gap-x-[24px] md:gap-x-[24px]">
        {newsPosts.map((item, index) => (
          <li className="flex gap-4 py-4" key={index}>
            <div className="flex flex-col justify-between flex-1 text-right order-2">
              <div className="flex flex-col items-start">
                <div className="xl:hidden block xl:mb-0 mb-[9px] px-[8px] leading-[26px] text-[12px] font-bold uppercase text-white bg-[#007BFF] rounded-[3px]  w-fit hover:bg-black cursor-pointer transition-colors duration-300 ease-in-out">
                  {item.tagName}
                </div>

                <h3 className="text-left text-[14px] lg:mb-0 md:mb-[5px] leading-[1.4] font-semibold hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out ">
                  {item.title}
                </h3>
              </div>

              <span className="text-[14px] text-gray-400 hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out flex items-center gap-1 justify-start">
                <FaCalendarDays />{" "}
                <p className="mt-[2px] font-medium">20 Mar, 2024</p>
              </span>
            </div>
            <div className="w-[100px] h-[100px] overflow-hidden relative box order-1">
              <img
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                src={item.img}
                alt="news"
              />

              <div className="absolute top-0 w-[100px] h-[100px] gradient-bg flex flex-col p-[10px]">
                <div className="xl:flex hidden px-[8px] leading-[26px] text-[12px] font-bold uppercase text-white bg-[#007BFF] rounded-[3px] w-fit hover:bg-black cursor-pointer transition-colors duration-300 ease-in-out ">
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
