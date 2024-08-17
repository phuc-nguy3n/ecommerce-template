"use client";
import "./styles.css";
import React from "react";
import Breadcrumb from "../ui/Breadcrumb";
import { MdOutlineArrowOutward } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <Breadcrumb items={[{ label: "home" }, { label: "contact us" }]} />

      <div className="p-[100px]">
        <div className="container xl:max-w-[1248px] lg:max-w-[960px] max-w-[720px]">
          <div className="grid grid-cols-12 gap-[24px]">
            <div className="col-span-5">
              <div className="mr-[14px]">
                <div className="title-area mb-[30px]">
                  <h2 className="leading-[1.5] tracking-wide text-[34px] mb-[22px] font-bold">
                    Get in Touch
                  </h2>

                  <p className="leading-[1.75] text-[#54595F] tracking-wide">
                    Aliquam erat volutpat. Morbi sed lectus volutpat nulla
                    laoreet maximus vel ac nulla. Maecenas ullamcorper felis
                  </p>
                </div>

                <div className="contact-feature-wrap">
                  <div className="contact-feature flex gap-[25px] mb-[40px]">
                    <div className="box-icon w-[50px]">
                      <img
                        className="w-[50px] h-[50px] object-cover"
                        src="/contact_1_1.svg"
                        alt=""
                      />
                    </div>
                    <div className="box-content max-w-[235px]">
                      <h3 className="box-title mb-[5px] tracking-wide font-bold">
                        Our Address
                      </h3>
                      <p className="box-text leading-[1.75] text-[#54595F] tracking-wide">
                        Street Parker Rd. Allentown, New Mexico 31134
                      </p>
                    </div>
                  </div>

                  <div className="contact-feature flex gap-[25px] mb-[40px]">
                    <div className="box-icon w-[50px]">
                      <img
                        className="w-[50px] h-[50px] object-cover"
                        src="/contact_1_2.svg"
                        alt=""
                      />
                    </div>
                    <div className="box-content max-w-[235px]">
                      <h3 className="box-title mb-[5px] tracking-wide font-bold">
                        Email Address
                      </h3>
                      <p className="box-text leading-[1.75] text-[#54595F] tracking-wide">
                        <a href="/#" className="block">
                          needhelp@gmail.com
                        </a>
                        <a href="/#" className="block">
                          info@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-feature flex gap-[25px] mb-[40px]">
                    <div className="box-icon w-[50px]">
                      <img
                        className="w-[50px] h-[50px] object-cover"
                        src="/contact_1_3.svg"
                        alt=""
                      />
                    </div>
                    <div className="box-content max-w-[235px]">
                      <h3 className="box-title mb-[5px] tracking-wide font-bold">
                        Phone Number
                      </h3>
                      <p className="box-text leading-[1.75] text-[#54595F] tracking-wide">
                        <a href="/#" className="block">
                          +123 (405) 555-0128
                        </a>
                        <a href="/#" className="block">
                          (702) 555-0122
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-7">
              <div className="quote-form-box p-[50px] bg-[#F5F5F5]">
                <h4 className="form-title text-[26px] font-bold mb-[20px]">
                  Send Message
                </h4>
                <form className="contact-form">
                  <div className="grid grid-cols-2 gap-[24px]">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e]"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e]"
                        placeholder="Email Address"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e]"
                        placeholder="Phone Number"
                      />
                    </div>

                    <div className="form-group">
                      <select className="form-control w-full  h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e]">
                        <option value="" disabled selected hidden>
                          Select Subject
                        </option>
                        <option value="Writing Article">Writing Article</option>
                        <option value="Become Author">Become Author</option>
                        <option value="Gest Posting">Gest Posting</option>
                        <option
                          className="text-[#54596e]"
                          value="Personal Question"
                        >
                          Personal Question
                        </option>
                      </select>
                    </div>

                    <div className="form-group col-span-2">
                      <textarea
                        className="form-control w-full min-h-[120px] py-[16px] px-[25px] outline-none rounded-md"
                        placeholder="Your Message"
                      ></textarea>
                    </div>

                    <div className="col-span-2 ">
                      <button className="uppercase py-[16px] px-[26px] bg-[#FF1D50] text-white text-[14px] rounded-md font-bold flex items-center">
                        About more{" "}
                        <MdOutlineArrowOutward className="text-[18px] ml-[5px]" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62705.98534010511!2d106.60659949364172!3d10.801807357004208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752949eb3e795f%3A0xa435dd1685ea2fbc!2zQ8O0bmcgVmnDqm4gSG9hzIBuZyBWxINuIFRodcyj!5e0!3m2!1svi!2s!4v1723869653329!5m2!1svi!2s"
          width="100%"
          height="600"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
