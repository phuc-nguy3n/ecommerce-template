"use client";

import "../styles.css";
import Container from "../../Container/Container";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const NewsSection = () => {
  return (
    <Container>
      <div className="py-[60px]">
        <div className="grid grid-cols-4 gap-[24px]">
          <div className="xl:col-span-3 col-span-4">
            <h2 className="relative text-[30px] font-semibold inline-block mb-[33px]">
              News
              <span className="line"></span>
            </h2>
            <LeftSide />
          </div>
          <div className="xl:col-span-1 lg:col-span-4 col-span-4">
            <h2 className="relative text-[30px] font-semibold inline-block mb-[33px]">
              Latest
              <span className="line"></span>
            </h2>
            <RightSide />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewsSection;
