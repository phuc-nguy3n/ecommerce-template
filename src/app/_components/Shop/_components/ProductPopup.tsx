"use client";

import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlineClose, MdOutlineStar } from "react-icons/md";

const ProductPopup = ({ setShow }: any) => {
  const closeProductPopup = () => {
    setShow(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <div
      id="popup-fixed"
      className="flex fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-black bg-opacity-[0.7] items-center z-[1000] overflow-y-scroll"
    >
      <div className="absolute lg:top-[50%] left-[50%] top-0 translate-x-[-50%] lg:translate-y-[-50%] w-full">
        <div className="container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px]">
          <div className="grid grid-cols-12 bg-white py-[20px] gap-[20px] my-[20px] relative">
            <div
              onClick={closeProductPopup}
              className="cursor-pointer mb-[10px] text-[20px] absolute top-[10px] right-[10px] p-2 bg-slate-50 rounded-full"
            >
              <MdOutlineClose />
            </div>

            {/* Img */}
            <div className="lg:col-span-6 col-span-12">
              <div className="w-full md:h-[580px] sm:h-[450px] h-[350px] lg:pl-[10px] px-[10px]">
                <img
                  className="w-full h-full object-cover rounded-sm"
                  src="https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GA/ga0/ga-010-1a/assets/GA-010-1A_kv.jpg.transform/main-visual-pc/image.jpg"
                  alt=""
                />
              </div>
            </div>

            {/* Desc */}
            <div className="lg:col-span-6 col-span-12">
              <div className="w-full lg:pl-[30px] lg:pr-[10px] px-[20px] md:max-h-[580px]">
                <div className="price space-x-2 flex">
                  <span className="price-sale font-bold text-[18px]">
                    $532.85
                  </span>{" "}
                  <span className="price-original line-through text-[#b5b5b5] text-[18px] font-light">
                    $502.99
                  </span>
                </div>

                <div className="title-area mb-[20px]">
                  <h2 className="font-bold md:text-[34px] text-[28px]">
                    Smartwatch Series 3
                  </h2>
                  <div className="rating-box flex items-center gap-2 flex-wrap">
                    <div className="star-rating flex items-center gap-[2px]">
                      <MdOutlineStar className="text-[#FF1D50]" />
                      <MdOutlineStar className="text-[#FF1D50]" />
                      <MdOutlineStar className="text-[#FF1D50]" />
                      <MdOutlineStar className="text-[#FF1D50]" />
                      <MdOutlineStar className="text-[#FF1D50]" />
                    </div>

                    <p className="text-[#54595F]">(4 customer reviews)</p>
                  </div>
                </div>
                <div className="product-desc lg:max-h-[430px] lg:overflow-y-scroll">
                  <p className="text-[#54595F] mb-[30px]">
                    Embrace tech and style with the Smartwatch Series 3, your
                    daily companion. Stay connected, track fitness, and make a
                    statement effortlessly elevate your game today.Experience
                    convenience at your wrist and redefine.
                  </p>

                  <div className="check-list mb-[30px]">
                    <ul className="space-y-[14px]">
                      <li className="flex items-center gap-2">
                        <BiBadgeCheck className="text-[#FF1D50] text-[22px]" />
                        <p className="font-medium">
                          Lifetime structural, one year finish warranty
                        </p>
                      </li>

                      <li className="flex items-center gap-2">
                        <BiBadgeCheck className="text-[#FF1D50] text-[22px]" />
                        <p className="font-medium">
                          Mapped from “Center Caps” under ” tment” tab
                        </p>
                      </li>

                      <li className="flex items-center gap-2">
                        <BiBadgeCheck className="text-[#FF1D50] text-[22px]" />
                        <p className="font-medium">
                          Fully copatible with OEM equimpent
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="product-meta space-y-2 mb-[30px]">
                    <div className="sku-wrapper">
                      <span className="font-bold mr-2">SKU:</span>
                      <span className="text-[#54595F]">
                        smartwatch-series-3
                      </span>
                    </div>

                    <div className="posted-in">
                      <span className="font-bold mr-2">Category:</span>
                      <span className="text-[#54595F]">Gadget</span>
                    </div>

                    <div className="tags">
                      <span className="font-bold mr-2">Tags:</span>
                      <span className="text-[#54595F]">Gadget, Smartwatch</span>
                    </div>
                  </div>

                  <div className="actions flex items-center gap-3 justify-end flex-wrap overflow-hidden">
                    <div className="quantity relative sm:flex-grow-0 flex-grow">
                      <input
                        type="number"
                        step={1}
                        min={1}
                        max={100}
                        name="quantity"
                        value={1}
                        className="outline-none border boder-[#b5b5b5] sm:w-[112px] h-[50px] px-[21px] rounded-sm w-full"
                      />

                      <div className="absolute top-0 sm:left-[74px] left-[91%] btn-box  flex-col bg-white h-[50px] border boder-[#b5b5b5] w-fit rounded-r-sm sm:flex hidden">
                        <button className="px-[10px] pt-[10px]">
                          <IoIosArrowUp />
                        </button>
                        <button className="px-[10px] pb-[10px]">
                          <IoIosArrowDown />
                        </button>
                      </div>
                    </div>
                    <button className="add-cart-btn bg-[#FF1D50] py-[13px] px-[26px] rounded-sm text-white uppercase font-bold text-[14px] sm:w-auto w-full">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
