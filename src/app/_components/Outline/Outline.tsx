import { BiWorld } from "react-icons/bi";
import { BsFileEarmarkMusic } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";

const playlist = [
  {
    title: "2024-07-04-Title1_which_can_be_long",
    Language: "Eng",
  },
  {
    title: "2024-07-04-Title1_which_can_be_long",
    Language: "Eng",
  },
  {
    title: "2024-07-04-Title1_which_can_be_long",
    Language: "Eng",
  },
  {
    title: "2024-07-04-Title1_which_can_be_long",
    Language: "Eng",
  },
  {
    title: "2024-07-04-Title1_which_can_be_long",
    Language: "Eng",
  },
  {
    title: "2024-07-04-Title1_which_can_be_long",
    Language: "Eng",
  },
];

const Outline = () => {
  return (
    <div className="pt-[30px] mb-[30px]">
      <div className="mb-[30px]">
        {/* Search box */}
        <div className="search-box mb-[24px]">
          <div className="container xl:max-w-[1184px] lg:max-w-[960px] max-w-[720px] overflow-hidden px-0">
            <div className="flex items-center gap-3 flex-wrap">
              <form className="flex-grow border rounded-lg">
                <div className="form-control flex items-center py-[14px] gap-[10px] px-[16px]">
                  <label htmlFor="search_input ">
                    <IoSearch className="text-[24px] text-[#FF1D50]" />
                  </label>
                  <input
                    type="text"
                    className="search_input outline-none bg-transparent w-full pr-[24px]"
                    placeholder="Type anything to get result..."
                  />
                </div>
              </form>

              <div className="form-group col-span-1 bg-[#F5F5F5] h-[50px] rounded-md relative">
                <select className="form-control w-full h-[50px] pr-[45px] pl-[15px] outline-none border border-1 text-[16px] rounded-md text-[#54596e] ">
                  <option selected value="English">
                    English
                  </option>
                  <option value="German">German</option>
                  <option value="France">France</option>
                </select>
                <BiWorld className="absolute translate-y-[-50%] top-[50%] right-[10%]" />
              </div>
            </div>
          </div>
        </div>

        <ul className="grid xl:grid-cols-2 grid-cols-1 gap-y-[10px] gap-x-[40px] md:px-[10px] px-0">
          {playlist.map((item, index) => (
            <li key={index}>
              <div className="flex justify-between hover:bg-slate-50 p-[10px] rounded-md ">
                <div className="flex justify-between flex-grow">
                  <div className="flex gap-[16px] items-center">
                    <div className="min-w-[50px] h-[50px] flex justify-center items-center bg-[#FF1D50] rounded-md overflow-hidden cursor-pointer">
                      <BsFileEarmarkMusic className="text-[24px] text-white" />
                    </div>

                    <div className="audio-title-area mt-[-4px] flex flex-col justify-center xl:max-w-[322px] lg:max-w-[600px] md:max-w-[350px] sm:max-w-[450px] max-w-[150px]">
                      <h3 className="audio-title text-[16px] mb-[2px] line-clamp-2 cursor-pointer">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-[16px] ">
                        <span className="text-[#757c83] text-[14px] cursor-pointer">
                          {item.Language}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <button className="h-fit py-2 px-4 border border-[--primary] text-[--primary] rounded-sm md:block hidden">
                      Download
                    </button>
                    <FiDownload className="md:hidden block text-2xl text-[--primary]" />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Outline;
