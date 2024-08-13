import ArticlesSection from "./_components/Sections/Articles";
import LiteratureSection from "./_components/Sections/Literature";
import NewsSection from "./_components/Sections/News";
import VideoSection from "./_components/Sections/Videos";

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#1e1e1e]">
      <div className="container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px]">
        <NewsSection />
        <ArticlesSection />
        <LiteratureSection />
      </div>
      <VideoSection />
    </div>
  );
}
