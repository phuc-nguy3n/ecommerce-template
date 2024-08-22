import React from "react";
import { TbLogin2 } from "react-icons/tb";
import { FaRegNewspaper } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { FaBlog } from "react-icons/fa6";

import "./styles.css";

const Login = () => {
  return (
    <div className="login-background lg:py-[100px] py-[60px]">
      <div className="container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px]">
        <div className="grid grid-cols-12 gap-[24px]">
          <div className="xl:col-span-5 col-span-12">
            <div className="mr-[14px]">
              <div className="title-area mb-[30px] xl:text-left text-center">
                <h2 className="leading-[1.5] tracking-wide xl:text-[34px] text-[28px] mb-[22px] font-bold">
                  Everything you want
                </h2>

                <p className="leading-[1.75] text-[#54595F] tracking-wide">
                  Aliquam erat volutpat. Morbi sed lectus volutpat nulla laoreet
                  maximus vel ac nulla. Maecenas ullamcorper felis
                </p>
              </div>

              <div className="login-feature-wrap xl:block flex justify-between xl:gap-0 flex-wrap">
                <div className="login-feature flex xl:flex-row flex-col xl:items-start items-center gap-[25px] mb-[40px] xl:w-auto lg:w-1/3 sm:w-1/2 w-full">
                  <div className="box-icon min-w-[50px]">
                    <FaRegNewspaper className="text-[50px] text-[#FF1D50]" />
                  </div>
                  <div className="box-content max-w-[235px] xl:text-left text-center">
                    <h3 className="box-title mb-[5px] tracking-wide font-bold">
                      News
                    </h3>
                    <p className="box-text leading-[1.75] text-[#54595F] tracking-wide">
                      Continuously updated trends, politics, life, health...
                    </p>
                  </div>
                </div>

                <div className="login-feature flex xl:flex-row flex-col xl:items-start items-center gap-[25px] mb-[40px] xl:w-auto lg:w-1/3 sm:w-1/2 w-full">
                  <div className="box-icon min-w-[50px]">
                    <RiShoppingBag4Line className="text-[50px] text-[#FF1D50]" />
                  </div>
                  <div className="box-content max-w-[235px] xl:text-left text-center">
                    <h3 className="box-title mb-[5px] tracking-wide font-bold">
                      Shopping
                    </h3>
                    <p className="box-text leading-[1.75] text-[#54595F] tracking-wide">
                      Shop online with many promotions
                    </p>
                  </div>
                </div>

                <div className="login-feature flex xl:flex-row flex-col xl:items-start items-center gap-[25px] mb-[40px] xl:w-auto lg:w-1/3 sm:w-1/2 w-full">
                  <div className="box-icon min-w-[50px]">
                    <FaBlog className="text-[50px] text-[#FF1D50]" />
                  </div>
                  <div className="box-content max-w-[235px] xl:text-left text-center">
                    <h3 className="box-title mb-[5px] tracking-wide font-bold">
                      Blog
                    </h3>
                    <p className="box-text leading-[1.75] text-[#54595F] tracking-wide">
                      You are free to share your experiences
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-7 col-span-12">
            <div className="quote-form-box md:px-[50px] md:py-[50px] px-[20px] py-[30px] bg-[#F5F5F5]">
              <h4 className="form-title xl:text-[26px] text-[20px] xl:text-left text-center font-bold mb-[20px]">
                Login
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
                    <select className="form-control w-full  h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e]">
                      <option value="" disabled selected hidden>
                        Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Femaler">Femaler</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group md:col-span-1 col-span-2">
                    <input
                      type="password"
                      className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e]"
                      placeholder="Password"
                    />
                  </div>

                  <div className="form-group md:col-span-1 col-span-2">
                    <input
                      type="password"
                      className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e]"
                      placeholder="Confirm Password"
                    />
                  </div>

                  <div className="col-span-2 flex xl:justify-normal justify-center">
                    <button className="uppercase py-[16px] px-[26px] bg-[#FF1D50] text-white text-[14px] rounded-md font-bold flex items-center">
                      Login <TbLogin2 className="text-[18px] ml-[5px]" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
