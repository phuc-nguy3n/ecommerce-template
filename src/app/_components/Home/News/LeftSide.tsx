import { FaRegUser } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { homeStyle } from "@/app/constantStyle";

const LeftSide = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* First news */}
      <div className={homeStyle.news.firstNews.wrapped}>
        <div className={homeStyle.news.firstNews.imgBox}>
          <img
            className={homeStyle.news.firstNews.img}
            src="data:image/jpeg;base64,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"
            alt="News"
          />

          {/* Overlay */}
          <div className={homeStyle.news.firstNews.overlay}>
            <div className={`lg:mb-0 mb-[15px] ${homeStyle.tag}`}>News</div>

            <div className="lg:hidden">
              <h2 className={homeStyle.news.firstNews.titleOverlay}>
                Following the Moon, they are in Close space. Choose the best
                Choose the best Sports updates
              </h2>

              <div className={homeStyle.timeBoxOne}>
                <span className={homeStyle.textTimeOne}>
                  <FaRegUser />
                  <p className="mt-0.5">By - Tnews</p>
                </span>

                <span className="text-[--text-time]">|</span>

                <span className={homeStyle.textTimeOne}>
                  <FaCalendarDays />
                  <p className="mt-0.5">20 Mar, 2023 </p>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className={homeStyle.news.firstNews.previewBox}>
          <div>
            <h2 className={homeStyle.news.firstNews.titlePreview}>
              Following the Moon, they are in Close space. Choose the best
              Choose the best Choose the best Choose the best
            </h2>

            <p className={homeStyle.news.firstNews.contentPreview}>
              Quisque eget ex rutrum, consequat odio in, tempor purus. Mauris
              neque quam
            </p>
          </div>

          <div className={homeStyle.timeBoxOne}>
            <span className={homeStyle.textTimeOne}>
              <FaRegUser />
              <p className="mt-0.5">By - Tnews</p>
            </span>

            <span className="text-[--text-time]">|</span>

            <span className={homeStyle.textTimeOne}>
              <FaCalendarDays />
              <p className="mt-0.5">20 Mar, 2023 </p>
            </span>
          </div>
        </div>
      </div>

      {/* Second news */}
      <div className={homeStyle.news.secondNews.imgBox}>
        <img
          className={homeStyle.news.secondNews.img}
          src="https://images.unsplash.com/photo-1531356495-75ccc754cb64?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="News"
        />

        {/* Overlay */}
        <div className={homeStyle.news.secondNews.overlay}>
          <div className={`mb-[15px] ${homeStyle.tag}`}>News</div>

          <h3 className={homeStyle.news.secondNews.titleOverlay}>
            Game on! Stay ahead with Sports updates Sports updates Sports
            updates Sports updates
          </h3>

          <div className={homeStyle.timeBoxOne}>
            <span className={homeStyle.textTimeOne}>
              <FaRegUser />
              <p className="mt-0.5">By - Tnews</p>
            </span>

            <span className="text-[--text-time]">|</span>

            <span className={homeStyle.textTimeOne}>
              <FaCalendarDays />
              <p className="mt-0.5">20 Mar, 2023 </p>
            </span>
          </div>
        </div>
      </div>

      {/* Third news */}
      <div className={homeStyle.news.secondNews.imgBox}>
        <img
          className={homeStyle.news.secondNews.img}
          src="https://images.unsplash.com/photo-1531356495-75ccc754cb64?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="News"
        />

        {/* Overlay */}
        <div className={homeStyle.news.secondNews.overlay}>
          <div className={`mb-[15px] ${homeStyle.tag}`}>News</div>

          <h3 className={homeStyle.news.secondNews.titleOverlay}>
            Game on! Stay ahead with Sports updates Sports updates Sports
            updates Sports updates
          </h3>

          <div className={homeStyle.timeBoxOne}>
            <span className={homeStyle.textTimeOne}>
              <FaRegUser />
              <p className="mt-0.5">By - Tnews</p>
            </span>

            <span className="text-[--text-time]">|</span>

            <span className={homeStyle.textTimeOne}>
              <FaCalendarDays />
              <p className="mt-0.5">20 Mar, 2023 </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
