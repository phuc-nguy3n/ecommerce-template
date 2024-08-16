import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

type BlogAuthorProps = {
  img: string;
  name: string;
  position: string;
  bio: string;
  fb?: string;
  x?: string;
  linkedin?: string;
  instagram?: string;
};

const BlogAuthor: React.FC<BlogAuthorProps> = ({
  img,
  name,
  position,
  bio,
  fb,
  x,
  linkedin,
  instagram,
}) => {
  return (
    <div className="blog-author p-[40px] mt-[40px] mb-[30px] bg-[#F5F5F5] flex gap-[30px]">
      <div className="min-w-[110px]">
        <img
          className="w-[110px] h-[110px] object-cover rounded-full"
          src={img}
          alt=""
        />
      </div>

      <div className="media">
        <div className="author-top flex items-start justify-between">
          <div>
            <h3 className="font-bold tracking-wide mb-[4px]">{name}</h3>
            <span className="text-[14px] font-medium text-[#FF1D50] capitalize">
              {position}
            </span>
          </div>

          <div className="social-links flex items-center gap-[14px]">
            <div className="text-[19px] cursor-pointer">
              <FaFacebookF className="text-[#54595F]" />
            </div>

            <div className="text-[19px] cursor-pointer">
              <FaTwitter className="text-[#54595F]" />
            </div>

            <div className="text-[19px] cursor-pointer">
              <FaLinkedinIn className="text-[#54595F]" />
            </div>

            <div className="text-[19px] cursor-pointer">
              <FaInstagram className="text-[#54595F]" />
            </div>
          </div>
        </div>
        <p className="mt-[11px] leading-[1.75] text-[#54595F] tracking-wide">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default BlogAuthor;
