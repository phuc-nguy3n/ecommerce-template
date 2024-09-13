"use client";

import { useEffect, useState } from "react";
import Breadcrumb from "../ui/Breadcrumb";
import LoadingBlock from "../LoadingBlock";
import Container from "../Container/Container";
import { audioStyle } from "@/app/constantStyle";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";

const conferencesList = [
  {
    cover:
      "https://images.unsplash.com/photo-1723653432195-c07aa0dbc844?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "2019-04 Die Geheimnisse des Reiches der Himmel",
  },
  {
    cover:
      "https://images.unsplash.com/photo-1723653432195-c07aa0dbc844?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "2019-04 Die Geheimnisse des Reiches der Himmel",
  },
  {
    cover:
      "https://images.unsplash.com/photo-1723653432195-c07aa0dbc844?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "2019-04 Die Geheimnisse des Reiches der Himmel",
  },
  {
    cover:
      "https://images.unsplash.com/photo-1723653432195-c07aa0dbc844?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "2019-04 Die Geheimnisse des Reiches der Himmel",
  },
  {
    cover:
      "https://images.unsplash.com/photo-1723653432195-c07aa0dbc844?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "2019-04 Die Geheimnisse des Reiches der Himmel",
  },
  {
    cover:
      "https://images.unsplash.com/photo-1723653432195-c07aa0dbc844?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "2019-04 Die Geheimnisse des Reiches der Himmel",
  },
];

const ConferencesOverview = () => {
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 1000);
  }, []);

  return (
    <div className="relative">
      <Breadcrumb items={[{ label: "home" }, { label: "conferences" }]} />

      {loadingPage ? (
        <LoadingBlock />
      ) : (
        <div className="pt-[60px] pb-[30px]">
          <Container>
            <ul className={audioStyle.listPost}>
              {conferencesList.map((item, index) => (
                <li key={index}>
                  <div className={audioStyle.imgBox}>
                    <img className={audioStyle.img} src={item.cover} alt="" />

                    {/* Overlay */}
                    <Link
                      href="/conferences/details"
                      className={audioStyle.overlay}
                    >
                      <div className={audioStyle.tag}>Audio</div>
                    </Link>
                  </div>

                  <Link href="/conferences/details">
                    <h3 className={audioStyle.title}>{item.title}</h3>
                  </Link>

                  <div className={audioStyle.timeBox}>
                    <span className={audioStyle.textTime}>
                      <FaRegUser />
                      <p className="mt-0.5">By - Tnews</p>
                    </span>

                    <span className="text-[--text-time]">|</span>

                    <span className={audioStyle.textTime}>
                      <FaCalendarDays />
                      <p className="mt-0.5">29 Mar, 2023</p>
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Paginate */}
            <div className="mt-[40px] mb-[30px]">
              <ul className="flex items-center justify-center gap-[10px]">
                <li className="w-[50px] h-[50px] border border-1 rounded-full flex items-center justify-center">
                  <p className=" text-[14px] font-semibold">1</p>
                </li>
                <li className="w-[50px] h-[50px] border border-1 rounded-full flex items-center justify-center">
                  <p className=" text-[14px] font-semibold">2</p>
                </li>
                <li className="w-[50px] h-[50px] border border-1 rounded-full flex items-center justify-center">
                  <p className=" text-[14px] font-semibold">3</p>
                </li>
                <li className="w-[50px] h-[50px] border border-1 rounded-full flex items-center justify-center">
                  <p className=" text-[14px] font-semibold">
                    <IoArrowForward />
                  </p>
                </li>
              </ul>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default ConferencesOverview;
