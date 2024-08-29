"use client";

import "../styles.css";
import Container from "../../Container/Container";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { homeStyle } from "@/app/constantStyle";

const NewsSection = () => {
  return (
    <Container>
      <div className="py-[60px]">
        <div className="grid grid-cols-4 gap-[24px]">
          <div className="xl:col-span-3 col-span-4">
            <h2 className={homeStyle.heading}>
              News
              <span className="line"></span>
            </h2>
            <LeftSide />
          </div>
          <div className="xl:col-span-1 lg:col-span-4 col-span-4">
            <h2 className={homeStyle.heading}>
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
