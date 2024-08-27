import { FaRegUser } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

const LeftSide = () => {
  return (
    <div className="grid grid-cols-2 xl:gap-6 lg:gap-x-6 md:gap-x-6 gap-y-10">
      {/* First news */}
      <div className="flex items-center col-span-2 xl:order-1 lg:order-3 md:order-3">
        <div className="flex-2 xl:flex-grow lg:flex-grow-0 flex-grow overflow-hidden relative box">
          <img
            className="xl:h-[360px] h-[500px] xl:w-full lg:w-[560px] w-full object-cover transform transition-transform duration-500 hover:scale-105"
            src="https://images.unsplash.com/photo-1531356495-75ccc754cb64?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="News"
          />

          {/* Overlay */}
          <div className="absolute top-0 xl:w-full lg:w-[560px] w-full xl:h-[360px] lg:h-[500px] h-[500px] gradient-bg home flex flex-col p-[30px]">
            <div className="lg:mb-0 mb-[15px] px-[8px] leading-[26px] text-[12px] font-bold uppercase text-white bg-[#007BFF] rounded-[3px] w-fit hover:bg-black cursor-pointer transition-colors duration-300 ease-in-out">
              News
            </div>

            <div className="lg:hidden">
              <h2 className="text-white font-semibold md:text-[24px] text-[18px] leading-[1.417] mb-[10px] cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
                Following the Moon, they are in Close space. Choose the best
              </h2>

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

        {/* Preview */}
        <div className="lg:flex hidden xl:px-[30px] xl:py-[20px] lg:p-[20px] xl:h-[360px] lg:h-[500px] flex-1 flex-col justify-between bg-gray-100 dark:bg-[#393939]">
          <div>
            <h2 className="font-bold text-[30px] leading-[1.417] mb-[15px] cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
              Following the Moon, they are in Close space. Choose the best
            </h2>

            <p className="text-[#7e848d] leading-[1.75] font-medium">
              Quisque eget ex rutrum, consequat odio in, tempor purus. Mauris
              neque quam
            </p>
          </div>

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

      {/* Second news */}
      <div className="md:col-span-1 col-span-2 flex-2 flex-grow overflow-hidden relative box lg:order-1 xl:order-2">
        <img
          className="xl:h-[288px] lg:h-[436px] md:h-[316px] h-[500px] w-full object-cover transform transition-transform duration-500 hover:scale-105"
          src="https://images.unsplash.com/photo-1531356495-75ccc754cb64?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="News"
        />

        {/* Overlay */}
        <div className="absolute top-0 w-full xl:h-[288px] lg:h-[436px] md:h-[316px] h-[500px] gradient-bg home flex flex-col p-[20px]">
          <div className="mb-[15px] px-[8px] leading-[26px] text-[12px] font-bold uppercase  text-white bg-[#007BFF] rounded-[3px]  w-fit hover:bg-black cursor-pointer transition-colors duration-300 ease-in-out">
            News
          </div>

          <h3 className="text-white mb-[7px] font-semibold text-[18px] leading-[1.364] hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
            Game on! Stay ahead with Sports updates
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

      {/* Third news */}
      <div className="md:col-span-1 col-span-2 flex-2 flex-grow overflow-hidden relative box lg:order-2 xl:order-3">
        <img
          className="xl:h-[288px] lg:h-[436px] md:h-[316px] h-[500px] w-full object-cover transform transition-transform duration-500 hover:scale-105"
          src="https://images.unsplash.com/photo-1531356495-75ccc754cb64?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="News"
        />

        {/* Overlay */}
        <div className="absolute top-0 w-full xl:h-[288px] lg:h-[436px] md:h-[316px] h-[500px] gradient-bg home flex flex-col p-[20px]">
          <div className="mb-[15px] px-[8px] leading-[26px] text-[12px] font-bold uppercase  text-white bg-[#007BFF] rounded-[3px]  w-fit hover:bg-black cursor-pointer transition-colors duration-300 ease-in-out">
            News
          </div>

          <h3 className="text-white mb-[7px] font-semibold text-[18px] leading-[1.364] hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out">
            Game on! Stay ahead with Sports updates
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
  );
};

export default LeftSide;
