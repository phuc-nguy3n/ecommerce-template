import { FaRegUser } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import "./styles.css";

const chartList = [
  {
    img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    img: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    img: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
];

const ChartDownload = () => {
  return (
    <div className="pt-[30px] my-[30px]">
      <div className="flex items-start gap-[10px]">
        <div className="flex-grow">
          <h2 className="w-full relative line flex items-center sec-title has-line mb-[33px] xl:text-[34px] text-[28px] capitalize font-semibold leading-[1.5]">
            Related Post
          </h2>
        </div>

        <div className="flex gap-2">
          <div className="p-2 rounded-full border bg-white hover:bg-[#ff1d50] hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
            <IoArrowBack className="text-[18px]" />
          </div>

          <div className="p-2 rounded-full border bg-white hover:bg-[#ff1d50] hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
            <IoArrowForward className="text-[18px]" />
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory -mx-3">
          {chartList.map((item, index) => (
            <div
              key={index}
              className="flex-none px-3 snap-start lg:w-1/3 md:w-1/2 sm:w-1/2 w-full"
            >
              <a href="#" className="w-full h-[200px] block">
                <img
                  className="rounded-t-lg w-full h-full object-cover"
                  src={item.img}
                  alt=""
                />
              </a>
              <div className="p-5 bg-white border border-gray-200 rounded-b-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 lg:text-xl text-lg font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                    {item.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Download
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartDownload;
