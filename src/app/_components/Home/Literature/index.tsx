"use client";

import "../styles.css";
import { useRef, useState, useEffect } from "react";
import { FaCalendarDays, FaRegUser } from "react-icons/fa6";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import Container from "../../Container/Container";
import { homeStyle } from "@/app/constantStyle";

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
    <Container>
      <div className="py-[60px]">
        <h2 className={homeStyle.heading}>
          Literature
          <span className="line mr-[24px]"></span>
          <div className={homeStyle.literature.arrowIconBox}>
            <div
              onClick={scrollLeft}
              className={homeStyle.literature.arrowIcon}
            >
              <IoArrowBack className="text-[18px]" />
            </div>

            <div
              onClick={scrollRight}
              className={homeStyle.literature.arrowIcon}
            >
              <IoArrowForward className="text-[18px]" />
            </div>
          </div>
        </h2>

        <div className="relative">
          <div ref={scrollRef} className={homeStyle.literature.postList}>
            {literaturePosts.map((item, index) => (
              // Item
              <div className={homeStyle.literature.postItem} key={index}>
                <div className={homeStyle.literature.imgBox}>
                  <img
                    className={homeStyle.literature.img}
                    src={item.img}
                    alt="literature"
                  />

                  {/* Overlay */}
                  <div className={homeStyle.literature.overlay}>
                    <div className={homeStyle.tag}>Literature</div>
                    <h3 className={homeStyle.literature.title}>{item.title}</h3>

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
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
