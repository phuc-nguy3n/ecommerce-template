import React from "react";
import NewsSection from "./News";
import ArticlesSection from "./Articles";
import LiteratureSection from "./Literature";
import VideoSection from "./Videos";
import Container from "../_components/Container/Container";

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
