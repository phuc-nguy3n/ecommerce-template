"use client";

import "./styles.css";
import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Breadcrumb from "../ui/Breadcrumb";
import { IoArrowForward, IoSearch } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { LiaCartPlusSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa6";
import ProductPopup from "./_components/ProductPopup";
import LoadingBlock from "../LoadingBlock";
import Link from "next/link";

const productData = [
  {
    name: "Adifom Climacool Speaker",
    price: 112,
    SortDesc: "Introduce product Adidas Speaker",
    rating: 5,
    img: "/products/product-1.png",
  },

  {
    name: "Adifom Climacool Speaker",
    price: 112,
    SortDesc: "Introduce product Adidas Speaker",
    rating: 5,
    img: "/products/product-1.png",
  },

  {
    name: "Adifom Climacool Speaker",
    price: 112,
    SortDesc: "Introduce product Adidas Speaker",
    rating: 5,
    img: "/products/product-1.png",
  },

  {
    name: "Adifom Climacool Speaker",
    price: 112,
    SortDesc: "Introduce product Adidas Speaker",
    rating: 5,
    img: "/products/product-1.png",
  },

  {
    name: "Adifom Climacool Speaker",
    price: 112,
    SortDesc: "Introduce product Adidas Speaker",
    rating: 5,
    img: "/products/product-1.png",
  },

  {
    name: "Adifom Climacool Speaker",
    price: 112,
    SortDesc: "Introduce product Adidas Speaker",
    rating: 5,
    img: "/products/product-1.png",
  },

  {
    name: "Adifom Climacool Speaker",
    price: 112,
    SortDesc: "Introduce product Adidas Speaker",
    rating: 5,
    img: "/products/product-1.png",
  },

  {
    name: "Adifom Climacool Speaker",
    price: 112,
    SortDesc: "Introduce product Adidas Speaker",
    rating: 5,
    img: "/products/product-1.png",
  },

  {
    name: "Adifom Climacool Speaker",
    price: 112,
    SortDesc: "Introduce product Adidas Speaker",
    rating: 5,
    img: "/products/product-1.png",
  },
];

const categoriesData = ["watches", "ipads", "accessories", "laptops", "phones"];

const sortByDate = ["Latest", "Oldest"];

const Shop = () => {
  const [loadingPage, setLoadingPage] = useState(true);
  const [showCategory, setShowCategory] = useState(false);
  const [showSortBy, setShowSortBy] = useState(false);
  const [showProductPopup, setShowProductPopup] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleCheckboxChange = (category: string) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(category)) {
        return prevSelected.filter((item) => item !== category);
      } else {
        return [...prevSelected, category];
      }
    });
  };

  const openProductPopup = () => {
    setShowProductPopup(true);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 1000);
  }, []);

  return (
    <>
      <Breadcrumb items={[{ label: "home" }, { label: "shop" }]} />

      {loadingPage ? (
        <LoadingBlock />
      ) : (
        <div className="pt-[60px] pb-[30px]">
          <div className="container xl:max-w-[1248px] lg:max-w-[960px] md:max-w-[720px]">
            <div className="grid grid-cols-12 gap-[24px]">
              {/* Navbar */}
              <div className="xl:col-span-3 lg:col-span-4 sm:col-span-12 col-span-12 mb-[40px] relative">
                <div className="sticky top-[80px] right-0">
                  {/* Search box */}
                  <div className="flex justify-between rounded-[3px] overflow-hidden mb-[35px]">
                    <div className="form-group relative flex-grow">
                      <input
                        type="text"
                        className="w-full h-[50px] bg-[#F5F5F5] text-[#54595F] text-[16px] pr-[40px] pl-[25px] outline-none"
                        placeholder="Enter Keyword"
                        onChange={handleInputChange}
                        value={searchValue}
                      />
                    </div>
                    <button className="bg-[#FF1D50] w-[56px] h-[50px] flex items-center justify-center">
                      <IoSearch className="text-white text-[18px]" />
                    </button>
                  </div>

                  {/*  Category  */}
                  <div className="category lg:block sm:flex block justify-between gap-[10px]">
                    <div className="lg:w-auto sm:w-1/2 w-full mb-[20px]">
                      <h3
                        onClick={() => {
                          setShowCategory(!showCategory);
                        }}
                        className="lg:px-0 px-[20px] py-[14px] lg:bg-transparent bg-[#F5F5F5] rounded-sm text-[19px] font-bold flex items-center lg:cursor-default cursor-pointer justify-between"
                      >
                        Categories{" "}
                        <IoIosArrowDown className="lg:hidden block" />
                      </h3>

                      <ul
                        className={`category-list mb-[30px] lg:block ${
                          showCategory ? "block" : "hidden"
                        }`}
                      >
                        {categoriesData.map((item, index) => (
                          <li
                            key={index}
                            className="py-[16px] px-[10px]"
                            value={item}
                          >
                            <div className="flex items-center gap-3">
                              <input
                                id={item}
                                type="checkbox"
                                className="accent-[#FF1D50] w-6 h-6"
                                checked={selectedCategories.includes(`${item}`)}
                                onChange={() => handleCheckboxChange(item)}
                                value={item}
                              />{" "}
                              <label htmlFor={item} className="capitalize">
                                {item}
                              </label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:w-auto sm:w-1/2 w-full mb-[20px]">
                      <h3
                        onClick={() => {
                          setShowSortBy(!showSortBy);
                        }}
                        className="lg:px-0 p-[20px] py-[14px] lg:bg-transparent bg-[#F5F5F5] rounded-sm text-[19px] font-bold flex items-center lg:cursor-default cursor-pointer justify-between"
                      >
                        Sort By <IoIosArrowDown className="lg:hidden block" />
                      </h3>

                      <ul
                        className={`sort-list mb-[30px] lg:block ${
                          showSortBy ? "block" : "hidden"
                        }`}
                      >
                        <li className="py-[16px] px-[10px]">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="sort"
                              className="accent-[#FF1D50] w-6 h-6"
                              checked
                            />{" "}
                            <span>Latest</span>
                          </div>
                        </li>

                        <li className="py-[16px] px-[10px]">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="sort"
                              className="accent-[#FF1D50] w-6 h-6"
                            />{" "}
                            <span>Oldest</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Filter btn */}
                  <div
                    className={`${
                      showCategory || showSortBy ? "flex" : "hidden"
                    } flex-grow lg:justify-normal justify-end`}
                  >
                    <button className="lg:py-[7px] lg:px-[24px] py-[12px] px-[30px] bg-[#FF1D50] font-semibold text-white rounded-sm">
                      Filter
                    </button>
                  </div>
                </div>
              </div>

              {/* Products */}
              <div className="xl:col-span-9 lg:col-span-8 sm:col-span-12 col-span-12">
                <div className="mb-[24px] p-[10px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="text-[19px] font-bold">
                        Showing 1–9 of 16 results
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[24px]">
                  {productData.map((product, index) => (
                    <li key={index}>
                      <div className="product-item overflow-hidden">
                        <div className="product-img-box sm:h-[300px] h-[250px] product-img mb-[20px] relative rounded-sm overflow-hidden bg-gray-200">
                          <img
                            className="w-full sm:h-[300px] h-[250px] object-cover z-10"
                            src={product.img}
                            alt=""
                          />

                          <div
                            onClick={openProductPopup}
                            className="overlay-product absolute bg-black bg-opacity-[0.3] w-full h-full rounded-sm top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center cursor-pointer"
                          ></div>
                        </div>
                        <div className="product-content">
                          <h3 className="product-title font-semibold mt-[7px] mb-[8px] text-[17px]">
                            {product.name}
                          </h3>
                          <p className="short-desc text-[#54595F] font-medium">
                            {product.SortDesc}
                          </p>
                          <span className="price text-[#54595F] font-medium">
                            ${product.price}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

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
              </div>
            </div>
          </div>
        </div>
      )}

      {showProductPopup && <ProductPopup setShow={setShowProductPopup} />}
    </>
  );
};

export default Shop;
