"use client";

import "../styles.css";
import { useRef, useState, useEffect } from "react";
import { FaCalendarDays, FaRegUser } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import PostImage from "../../ui/PostImage";

const literatureData = [
  {
    img: "https://snu.edu.in/site/assets/files/10464/antique-quill-pen-writes-old-fashioned-calligraphy-generated-by-ai.1600x0.webp",
    title: "Tech on the go, laptop Redefines mobility.",
  },
  {
    img: "https://snu.edu.in/site/assets/files/10464/antique-quill-pen-writes-old-fashioned-calligraphy-generated-by-ai.1600x0.webp",
    title: "Tech on the go, laptop Redefines mobility.",
  },
  {
    img: "https://snu.edu.in/site/assets/files/10464/antique-quill-pen-writes-old-fashioned-calligraphy-generated-by-ai.1600x0.webp",
    title: "Tech on the go, laptop Redefines mobility.",
  },
  {
    img: "https://snu.edu.in/site/assets/files/10464/antique-quill-pen-writes-old-fashioned-calligraphy-generated-by-ai.1600x0.webp",
    title: "Tech on the go, laptop Redefines mobility.",
  },
  {
    img: "https://snu.edu.in/site/assets/files/10464/antique-quill-pen-writes-old-fashioned-calligraphy-generated-by-ai.1600x0.webp",
    title: "Tech on the go, laptop Redefines mobility.",
  },
  {
    img: "https://snu.edu.in/site/assets/files/10464/antique-quill-pen-writes-old-fashioned-calligraphy-generated-by-ai.1600x0.webp",
    title: "Tech on the go, laptop Redefines mobility.",
  },
];

export default function LiteratureSection() {
  const [literaturePosts, setLiteraturePosts] = useState(literatureData);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      if (scrollLeft + clientWidth >= scrollWidth) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      scrollRight();
    }, 5000); // Scroll every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;

      if (scrollLeft === 0) {
        scrollRef.current.scrollTo({
          left: scrollRef.current.scrollWidth - clientWidth,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="py-[60px]">
      <h2 className="relative text-[30px] font-semibold inline-block mb-[33px]">
        Literature
        <span className="line mr-[24px]"></span>
        <div className="flex items-center gap-2">
          <div
            onClick={scrollLeft}
            className="p-2 rounded-full border hover:bg-[#ff1d50] hover:text-white cursor-pointer transition-colors duration-300 ease-in-out"
          >
            <IoArrowBack className="text-[18px]" />
          </div>

          <div
            onClick={scrollRight}
            className="p-2 rounded-full border hover:bg-[#ff1d50] hover:text-white cursor-pointer transition-colors duration-300 ease-in-out"
          >
            <IoArrowForward className="text-[18px]" />
          </div>
        </div>
      </h2>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory -mx-3"
        >
          {literaturePosts.map((item, index) => (
            <div
              className="flex-none px-2 snap-start xl:w-1/4 lg:w-1/3 md:w-1/2 w-full"
              key={index}
            >
              <PostImage
                width={{
                  xl: "full",
                  lg: "full",
                  md: "full",
                  sm: "full",
                  xs: "full",
                }}
                height={{
                  xl: "[350px]",
                  lg: "[350px]",
                  md: "[350px]",
                  sm: "[350px]",
                  xs: "[350px]",
                }}
                padding={{
                  xl: "[20px]",
                  lg: "[20px]",
                  md: "[20px]",
                  sm: "[20px]",
                  xs: "[20px]",
                }}
                colorTag={"[#00D084]"}
                tagPosition={"bottom"}
                tagName={"Article"}
                cover={item.img}
                title={item.title}
                author={"By - Tnews"}
                created={"20 Mar, 2023"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
