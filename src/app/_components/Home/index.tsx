"use client";

import React, { useEffect, useState } from "react";
import NewsSection from "./News";
import ArticlesSection from "./Articles";
import LiteratureSection from "./Literature";
import VideoSection from "./Videos";
import Container from "../Container/Container";
import LoadingBlock from "../LoadingBlock";

const HomePage = () => {
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 1000);
  }, []);

  return (
    <div className="bg-white dark:bg-[#1e1e1e]">
      {loadingPage ? (
        <LoadingBlock isLoading={loadingPage} />
      ) : (
        <>
          <Container>
            <NewsSection />
            <ArticlesSection />
            <LiteratureSection />
          </Container>
          <VideoSection />
        </>
      )}
    </div>
  );
};

export default HomePage;
