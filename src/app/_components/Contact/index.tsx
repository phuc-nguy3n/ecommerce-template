"use client";
import "./styles.css";
import Breadcrumb from "../ui/Breadcrumb";
import { MdOutlineArrowOutward } from "react-icons/md";
import Accordion from "../Accordion/Accordion";
import ChartDownload from "../ChartDownload/ChartDownload";
import Outline from "../Outline/Outline";

const Contact = () => {
  return (
    <>
      <Breadcrumb items={[{ label: "home" }, { label: "contact us" }]} />

      <div className="lg:py-[100px] py-[60px] bg-[--bg-theme]">
        <div className="container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px]">
          <div className="grid grid-cols-12 gap-[24px]">
            <div className="xl:col-span-5 col-span-12">
              <div className="mr-[14px]">
                <div className="title-area mb-[30px]">
                  <h2 className="leading-[1.5] tracking-wide xl:text-[34px] text-[28px] mb-[22px] font-bold xl:text-left text-center">
                    Get in Touch
                  </h2>

                  <p className="leading-[1.75] text-[#54595F] tracking-wide xl:text-left text-center">
                    Aliquam erat volutpat. Morbi sed lectus volutpat nulla
                    laoreet maximus vel ac nulla. Maecenas ullamcorper felis
                  </p>
                </div>

                {/* Info */}
                <div className="contact-feature-wrap xl:block flex justify-between xl:gap-0 flex-wrap">
                  {/* Item */}
                  <div className="contact-feature flex xl:flex-row flex-col xl:items-start items-center gap-[25px] mb-[40px] xl:w-auto lg:w-1/3 sm:w-1/2 w-full">
                    <div className="box-icon min-w-[50px]">
                      <img
                        className="w-[50px] h-[50px] object-cover"
                        src="/contact_1_1.svg"
                        alt=""
                      />
                    </div>
                    <div className="box-content max-w-[235px] xl:text-left text-center">
                      <h3 className="box-title mb-[5px] tracking-wide font-bold ">
                        Our Address
                      </h3>
                      <p className="box-text leading-[1.75] text-[#54595F] tracking-wide">
                        Street Parker Rd. Allentown, New Mexico
                      </p>
                    </div>
                  </div>

                  {/* Item */}
                  <div className="contact-feature flex xl:flex-row flex-col xl:items-start items-center gap-[25px] mb-[40px] xl:w-auto lg:w-1/3 sm:w-1/2 w-full">
                    <div className="box-icon min-w-[50px]">
                      <img
                        className="w-[50px] h-[50px] object-cover"
                        src="/contact_1_2.svg"
                        alt=""
                      />
                    </div>
                    <div className="box-content max-w-[235px] xl:text-left text-center">
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

                  {/* Item */}
                  <div className="contact-feature flex xl:flex-row flex-col xl:items-start items-center gap-[25px] mb-[40px] xl:w-auto lg:w-1/3 sm:w-1/2 w-full">
                    <div className="box-icon min-w-[50px]">
                      <img
                        className="w-[50px] h-[50px] object-cover"
                        src="/contact_1_3.svg"
                        alt=""
                      />
                    </div>
                    <div className="box-content max-w-[235px] xl:text-left text-center">
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

            {/* Form contact */}
            <div className="xl:col-span-7 col-span-12 mb-[40px]">
              <div className="quote-form-box md:px-[50px] md:py-[50px] px-[20px] py-[30px] bg-[#F5F5F5]">
                <h4 className="form-title xl:text-[26px] text-[20px] xl:text-left text-center font-bold mb-[20px]">
                  Send Message
                </h4>
                <form className="contact-form">
                  <div className="grid grid-cols-2 gap-[24px]">
                    <div className="form-group md:col-span-1 col-span-2">
                      <input
                        type="text"
                        className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e]"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="form-group md:col-span-1 col-span-2">
                      <input
                        type="text"
                        className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e]"
                        placeholder="Email Address"
                      />
                    </div>

                    <div className="form-group md:col-span-1 col-span-2">
                      <input
                        type="text"
                        className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e]"
                        placeholder="Phone Number"
                      />
                    </div>

                    <div className="form-group md:col-span-1 col-span-2">
                      <select
                        defaultValue="Select Subject"
                        className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e]"
                      >
                        <option value="Select Subject" disabled hidden>
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

                    <div className="col-span-2 flex xl:justify-normal justify-center">
                      <button className="uppercase py-[16px] px-[26px] bg-[#FF1D50] text-white text-[14px] rounded-md font-bold flex items-center">
                        Submit now{" "}
                        <MdOutlineArrowOutward className="text-[18px] ml-[5px]" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <Accordion />

          <ChartDownload />

          <Outline />
        </div>
      </div>

      <div className="contact-map xl:h-[600px] md:h-[360px] h-[260px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62705.98534010511!2d106.60659949364172!3d10.801807357004208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752949eb3e795f%3A0xa435dd1685ea2fbc!2zQ8O0bmcgVmnDqm4gSG9hzIBuZyBWxINuIFRodcyj!5e0!3m2!1svi!2s!4v1723869653329!5m2!1svi!2s"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
