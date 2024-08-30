import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import Container from "../Container/Container";
import { footerStyle } from "@/app/constantStyle";

export default function Footer() {
  return (
    <div className={footerStyle.wrapper}>
      <Container>
        <div className="flex flex-col justify-center items-center gap-10">
          <Link href="/">
            <img src="/logo.png" alt="logo" className={footerStyle.logo} />
          </Link>

          <div className={footerStyle.socialMedia}>
            <div className={footerStyle.icon}>
              <FaFacebookF className="text-white" />
            </div>

            <div className={footerStyle.icon}>
              <FaTwitter className="text-white" />
            </div>

            <div className={footerStyle.icon}>
              <FaLinkedinIn className="text-white" />
            </div>

            <div className={footerStyle.icon}>
              <FaInstagram className="text-white" />
            </div>

            <div className={footerStyle.icon}>
              <FaYoutube className="text-white" />
            </div>
          </div>

          <nav className={footerStyle.navbar}>
            <a href="/#">home</a>
            <a href="/#">features</a>
            <a href="/#">category</a>
            <a href="/#">posts</a>
            <a href="/#">gadgets</a>
            <a href="/#">contact</a>
          </nav>

          <div className={footerStyle.copyrightBox}>
            <p className="text-center lg:order-1 order-2">
              Copyright © 2024 HIMMLISCHES JERUSALEM. All rights reserved.
            </p>
            <div className="lg:order-2 order-1">
              <ul className="flex sm:flex-row flex-col items-center gap-y-2">
                <li className="capitalize">
                  <a href="/#" className="px-[16px]">
                    Home
                  </a>
                </li>
                <li className="capitalize">
                  <a href="/#" className="px-[16px]">
                    About Us
                  </a>
                </li>
                <li className="capitalize">
                  <a href="/#" className="px-[16px]">
                    Faq
                  </a>
                </li>
                <li className="capitalize">
                  <a href="/#" className="px-[16px]">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
