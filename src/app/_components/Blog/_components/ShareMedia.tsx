"use client";

import React, { FC, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";

type Props = {
  postURL: string;
};

const ShareMedia: FC<Props> = ({ postURL }) => {
  useEffect(() => {
    // Initialize the Facebook SDK
    const loadFacebookSDK = () => {
      (window as any).fbAsyncInit = function () {
        (window as any).FB.init({
          appId: "487454990763929",
          cookie: true,
          xfbml: true,
          version: "v13.0",
        });
      };

      // Load the SDK asynchronously
      const script = document.createElement("script");
      script.src = "https://connect.facebook.net/en_US/sdk.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    loadFacebookSDK();
  }, []);

  const handleShareOnFB = () => {
    (window as any).FB.ui(
      {
        method: "share",
        href: postURL,
      },
      (response: any) => {
        if (response && !response.error_message) {
          alert("Post was shared successfully.");
        } else {
          alert("Error while sharing post.");
        }
      }
    );
  };

  const handleShare = (socialMedia: string) => {
    const xShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      postURL
    )}`;
    const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      postURL
    )}}`;
    const pinterestShareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
      postURL
    )}}`;

    if (socialMedia === "x")
      window.open(xShareUrl, "_blank", "width=600,height=400");
    else if (socialMedia === "linkedIn")
      window.open(linkedInShareUrl, "_blank", "width=600,height=400");
    else if (socialMedia === "pinterest")
      window.open(pinterestShareUrl, "_blank", "width=600,height=400");
  };

  return (
    <div className="max-w-[40px]">
      <div className="sticky top-[80px] left-0">
        <span className="text-[12px] leading-[20px] text-[#080809] font-bold mb-[15px] block capitalize">
          Share Post:
        </span>

        <div>
          <div
            onClick={handleShareOnFB}
            className="w-[40px] h-[40px] mb-[10px] border border-1 rounded-full flex justify-center items-center cursor-pointer"
          >
            <FaFacebookF className="text-[#1D4292]" />
          </div>

          <div
            onClick={() => handleShare("x")}
            className="w-[40px] h-[40px] mb-[10px] border border-1 rounded-full flex justify-center items-center cursor-pointer"
          >
            <FaXTwitter className="text-black" />
          </div>

          <div
            onClick={() => handleShare("linkedIn")}
            className="w-[40px] h-[40px] mb-[10px] border border-1 rounded-full flex justify-center items-center cursor-pointer"
          >
            <FaLinkedinIn className="text-[#0270AD]" />
          </div>

          <div
            onClick={() => handleShare("pinterest")}
            className="w-[40px] h-[40px] mb-[10px] border border-1 rounded-full flex justify-center items-center cursor-pointer"
          >
            <FaPinterestP className="text-[#B7081B]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareMedia;
