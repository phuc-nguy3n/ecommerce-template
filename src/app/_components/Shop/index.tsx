import { FaArrowRight } from "react-icons/fa6";
import Breadcrumb from "../ui/Breadcrumb";
import "./styles.css";
import React from "react";
import { IoArrowForward, IoSearch } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { SortDesc } from "lucide-react";

const productData = [
  {
    name: "Adifom Climacool Speaker",
    price: 112,
    SortDesc: "Introduce product Adidas Speaker",
    rating: 5,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d328b1a46fa7493ea693ff0c55a756da_9366/Giay_Adifom_Climacool_Be_IF3904_01_standard.jpg",
  },

  {
    name: "Adifom Climacool Speaker",
    price: 112,
    SortDesc: "Introduce product Adidas Speaker",
    rating: 5,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d328b1a46fa7493ea693ff0c55a756da_9366/Giay_Adifom_Climacool_Be_IF3904_01_standard.jpg",
  },

  {
    name: "Adifom Climacool Speaker",
    price: 112,
    SortDesc: "Introduce product Adidas Speaker",
    rating: 5,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d328b1a46fa7493ea693ff0c55a756da_9366/Giay_Adifom_Climacool_Be_IF3904_01_standard.jpg",
  },

  {
    name: "Adifom Climacool Speaker",
    price: 112,
    SortDesc: "Introduce product Adidas Speaker",
    rating: 5,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d328b1a46fa7493ea693ff0c55a756da_9366/Giay_Adifom_Climacool_Be_IF3904_01_standard.jpg",
  },

  {
    name: "Adifom Climacool Speaker",
    price: 112,
    SortDesc: "Introduce product Adidas Speaker",
    rating: 5,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d328b1a46fa7493ea693ff0c55a756da_9366/Giay_Adifom_Climacool_Be_IF3904_01_standard.jpg",
  },

  {
    name: "Adifom Climacool Speaker",
    price: 112,
    SortDesc: "Introduce product Adidas Speaker",
    rating: 5,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d328b1a46fa7493ea693ff0c55a756da_9366/Giay_Adifom_Climacool_Be_IF3904_01_standard.jpg",
  },

  {
    name: "Adifom Climacool Speaker",
    price: 112,
    SortDesc: "Introduce product Adidas Speaker",
    rating: 5,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d328b1a46fa7493ea693ff0c55a756da_9366/Giay_Adifom_Climacool_Be_IF3904_01_standard.jpg",
  },

  {
    name: "Adifom Climacool Speaker",
    price: 112,
    SortDesc: "Introduce product Adidas Speaker",
    rating: 5,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d328b1a46fa7493ea693ff0c55a756da_9366/Giay_Adifom_Climacool_Be_IF3904_01_standard.jpg",
  },

  {
    name: "Adifom Climacool Speaker",
    price: 112,
    SortDesc: "Introduce product Adidas Speaker",
    rating: 5,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d328b1a46fa7493ea693ff0c55a756da_9366/Giay_Adifom_Climacool_Be_IF3904_01_standard.jpg",
  },
];

const Shop = () => {
  return (
    <>
      <Breadcrumb items={[{ label: "home" }, { label: "shop" }]} />

      <div className="pt-[60px] pb-[30px]">
        <div className="container xl:max-w-[1248px] lg:max-w-[960px] max-w-[720px]">
          <div className="grid grid-cols-12 gap-[24px]">
            <div className="col-span-3 mb-[40px] relative">
              <div className="sticky top-[80px] right-0">
                {/* Search box */}
                <div className="flex justify-between rounded-[3px] overflow-hidden mb-[35px]">
                  <div className="form-group relative">
                    <input
                      type="text"
                      className="w-full h-[50px] bg-[#F5F5F5] text-[#54595F] text-[16px] rounded-[5px] pr-[40px] pl-[25px] outline-none"
                      placeholder="Enter Keyword"
                    />
                  </div>
                  <button className="bg-[#FF1D50] w-[56px] h-[50px] flex items-center justify-center">
                    <IoSearch className="text-white text-[18px]" />
                  </button>
                </div>

                {/*  Category  */}
                <div className="category">
                  <h3 className="mb-[20px] text-[19px] font-bold">
                    Categories
                  </h3>

                  <ul className="category-list mb-[30px]">
                    <li className="py-[16px] px-[10px]">
                      <div className="flex  items-center gap-3">
                        <input
                          type="checkbox"
                          className=" accent-[#FF1D50] w-6 h-6"
                        />{" "}
                        <span>Watches</span>
                      </div>
                    </li>

                    <li className="py-[16px] px-[10px]">
                      <div className="flex  items-center gap-3">
                        <input
                          type="checkbox"
                          className=" accent-[#FF1D50] w-6 h-6"
                        />{" "}
                        <span>TV & Home</span>
                      </div>
                    </li>

                    <li className="py-[16px] px-[10px]">
                      <div className="flex  items-center gap-3">
                        <input
                          type="checkbox"
                          className=" accent-[#FF1D50] w-6 h-6"
                        />{" "}
                        <span>Ipads</span>
                      </div>
                    </li>

                    <li className="py-[16px] px-[10px]">
                      <div className="flex  items-center gap-3">
                        <input
                          type="checkbox"
                          className=" accent-[#FF1D50] w-6 h-6"
                        />{" "}
                        <span>Accessories</span>
                      </div>
                    </li>

                    <li className="py-[16px] px-[10px]">
                      <div className="flex  items-center gap-3">
                        <input
                          type="checkbox"
                          className=" accent-[#FF1D50] w-6 h-6"
                        />{" "}
                        <span>Laptops</span>
                      </div>
                    </li>

                    <li className="py-[16px] px-[10px]">
                      <div className="flex  items-center gap-3">
                        <input
                          type="checkbox"
                          className=" accent-[#FF1D50] w-6 h-6"
                        />{" "}
                        <span>Phones</span>
                      </div>
                    </li>
                  </ul>

                  <h3 className="mb-[20px] text-[19px] font-bold">Sort By</h3>

                  <ul className="sort-list mb-[30px]">
                    <li className="py-[16px] px-[10px]">
                      <div className="flex  items-center gap-3">
                        <input
                          type="radio"
                          name="sort"
                          className=" accent-[#FF1D50] w-6 h-6"
                          checked
                        />{" "}
                        <span>Latest</span>
                      </div>
                    </li>

                    <li className="py-[16px] px-[10px]">
                      <div className="flex  items-center gap-3">
                        <input
                          type="radio"
                          name="sort"
                          className=" accent-[#FF1D50] w-6 h-6"
                        />{" "}
                        <span>Oldest</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-9">
              <div className="mb-[24px] p-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="text-[19px] font-bold">
                      Showing 1–9 of 16 results
                    </p>
                  </div>
                </div>
              </div>

              <ul className="grid grid-cols-3 gap-[24px]">
                {productData.map((product, index) => (
                  <li key={index}>
                    <div className="product overflow-hidden">
                      <div className="product-img mb-[20px]">
                        <img
                          className="w-full h-[300px] object-cover rounded-sm"
                          src={product.img}
                          alt=""
                        />
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
    </>
  );
};

export default Shop;
