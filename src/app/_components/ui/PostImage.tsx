import { FaRegUser } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

const PostImage = ({
  width = { xl: "", lg: "", md: "", sm: "", xs: "" },
  height = { xl: "", lg: "", md: "", sm: "", xs: "" },
  padding = { xl: "", lg: "", md: "", sm: "", xs: "" },
  titleSize = {
    xl: "[18px]",
    lg: "[18px]",
    md: "[18px]",
    sm: "[18px]",
    xs: "[18px]",
  },
  cover = "https://images.unsplash.com/photo-1531356495-75ccc754cb64?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  tagPosition = "top",
  colorTag = "[#007BFF]",
  tagName = "",
  title = "",
  author = "",
  created = "",
}) => {
  const widthStyle = `xl:w-${width.xl} lg:w-${width.lg} md:w-${width.md} sm:w-${width.sm} w-${width.xs}`;
  const heightStyle = `xl:h-${height.xl} lg:h-${height.lg} md:h-${height.md} sm:h-${height.sm} h-${height.xs}`;
  const paddingStyle = `xl:p-${padding.xl} lg:p-${padding.lg} md:p-${padding.md} sm:p-${padding.sm} p-${padding.xs}`;
  const titleSizeStyle = `xl:text-${titleSize.xl} lg:text-${titleSize.lg} md:text-${titleSize.md} sm:text-${titleSize.sm} text-${titleSize.xs} `;

  return (
    <div className={`relative box overflow-hidden ${widthStyle}`}>
      {/* Img */}
      <img
        className={`${heightStyle} w-full object-cover`}
        src={cover}
        alt={tagName}
      />

      {/* Overlay */}
      <div
        className={`${paddingStyle} ${heightStyle} ${
          tagPosition === "top" && "justify-start"
        } ${
          tagPosition === "bottom" && "justify-end"
        } absolute top-0 w-full flex flex-col  gradient-bg`}
      >
        <div
          className={`px-[8px] leading-[26px] text-[12px] font-bold uppercase text-white bg-${colorTag} rounded-[3px] w-fit hover:bg-black cursor-pointer transition-colors duration-300 ease-in-out`}
        >
          {tagName}
        </div>

        <h3
          className={`${
            title ? "block" : "hidden"
          } ${titleSizeStyle} text-white mt-[15px] mb-[7px] font-semibold leading-[1.364] hover:text-[#ff1d50] cursor-pointer transition-colors duration-300 ease-in-out`}
        >
          {title}
        </h3>

        {/* Info */}
        <div
          className={`${
            author && created ? "flex" : "hidden"
          }  items-center gap-3 text-[#B5B5B5]`}
        >
          <span className="text-[14px] font-semibold flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
            <FaRegUser />
            <p className="mt-0.5">{author}</p>
          </span>

          <span>|</span>

          <span className="text-[14px] font-semibold flex items-center gap-1 cursor-pointer hover:text-[#ff1d50] transition-colors duration-300 ease-in-out">
            <FaCalendarDays />
            <p className="mt-0.5">{created}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostImage;
