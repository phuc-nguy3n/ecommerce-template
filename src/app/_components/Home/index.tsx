import React from "react";
import Container from "../Container/Container";
import NewsSection from "./News";
import ArticlesSection from "./Articles";
import LiteratureSection from "./Literature";
import VideoSection from "./Videos";

const HomePage = () => {
  return (
    <div className="bg-white dark:bg-[#1e1e1e]">
      <Container>
        <NewsSection />
        <ArticlesSection />
        <LiteratureSection />
      </Container>
      <VideoSection />
    </div>
  );
};

export default HomePage;
