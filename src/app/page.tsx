import Container from "./_components/Container/Container";

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

// TimeLine
import Timeline from "./_components/Timeline/Timeline";

// Contact
import Contact from "./_components/Contact";

// Shop
import Shop from "./_components/Shop";

// Login
import Login from "./_components/Login";

export default function Home() {
  return (
    // Home page
    // <div className="bg-white dark:bg-[#1e1e1e]">
    //   <Container>
    //     <NewsSection />
    //     <ArticlesSection />
    //     <LiteratureSection />
    //   </Container>
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
    // <AudioOverView />

    // Timeline
    <Timeline />

    // Contact us
    // <Contact />

    // Shop
    // <Shop />

    // Login
    // <Login />
  );
}
