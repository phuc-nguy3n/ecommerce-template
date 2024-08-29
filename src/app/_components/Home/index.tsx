"use client";

import React, { useEffect, useState } from "react";
import NewsSection from "./News";
import ArticlesSection from "./Articles";
import LiteratureSection from "./Literature";
import VideoSection from "./Videos";
import LoadingBlock from "../LoadingBlock";
import { homeStyle } from "@/app/constantStyle";

const HomePage = () => {
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 1000);
  }, []);

  return (
    <div className={homeStyle.backgroundColor}>
      {loadingPage ? (
        <LoadingBlock isLoading={loadingPage} />
      ) : (
        <>
          <NewsSection />
          <ArticlesSection />
          <LiteratureSection />
          <VideoSection />
        </>
      )}
    </div>
  );
};

export default HomePage;
