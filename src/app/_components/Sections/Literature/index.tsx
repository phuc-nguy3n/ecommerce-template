import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { FaCalendarDays, FaRegUser } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

const literaturePost = [
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
  return (
    <div className="py-[60px]">
      <h2 className="relative text-[30px] font-semibold inline-block mb-[33px]">
        Literature
        <span className="line mr-[24px]"></span>
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full border hover:bg-[#ff1d50] hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
            <IoArrowBack className="text-[18px]" />
          </div>

          <div className="p-2 rounded-full border hover:bg-[#ff1d50] hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
            <IoArrowForward className="text-[18px]" />
          </div>
        </div>
      </h2>

      <div className="relative">
        <div className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory -mx-3">
          {literaturePost.map((item, index) => (
            <div
              className="flex-none px-3 snap-start xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full"
              key={index}
            >
              <div className="h-[350px] relative box overflow-hidden">
                <img
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  src={item.img}
                  alt="sport"
                />

                <div className="absolute top-0 w-full h-[350px] gradient-bg flex gap-2 flex-col p-[20px]">
                  <div className="px-[8px] text-white bg-[#00D084] rounded-sm font-semibold w-fit hover:bg-black cursor-pointer transition-colors duration-300 ease-in-out">
                    Literature
                  </div>
                  <h3 className="text-white text-[18px] font-semibold hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
                    {item.title}
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
          ))}
        </div>
      </div>
    </div>
  );
}
