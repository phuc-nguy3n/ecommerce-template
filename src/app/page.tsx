// Home
import ArticlesSection from "./_components/Home/Articles";
import LiteratureSection from "./_components/Home/Literature";
import NewsSection from "./_components/Home/News";
import VideoSection from "./_components/Home/Videos";

// Video
import VideoOverview from "./_components/Video/VideoOverview";

// Article
import ArticleOverView from "./_components/Article/ArticleOverview";

// Blog
import BlogVideoDetails from "./_components/Blog/BlogDetails/BlogVideo";
import BlogArticleDetails from "./_components/Blog/BlogDetails/BlogArticle";

// Audio
import AudioOverView from "./_components/Audio/AudioOverview";

export default function Home() {
  return (
    // Home page
    // <div className="bg-white dark:bg-[#1e1e1e]">
    //   <div className="container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px]">
    //     <NewsSection />
    //     <ArticlesSection />
    //     <LiteratureSection />
    //   </div>
    //   <VideoSection />
    // </div>

    // Video overview page
    // <VideoOverview />

    // Article overview page
    // <ArticleOverView />

    // Blog details
    // <BlogVideoDetails />
    // <BlogArticleDetails />

    // Audio
    <AudioOverView />
  );
}
