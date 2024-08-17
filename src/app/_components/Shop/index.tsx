import { FaArrowRight } from "react-icons/fa6";
import Breadcrumb from "../ui/Breadcrumb";
import "./styles.css";
import React from "react";
import { IoArrowForward, IoSearch } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";

const productData = [
  {
    name: "Adifom Climacool Speaker",
    price: 112,
    rating: 5,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d328b1a46fa7493ea693ff0c55a756da_9366/Giay_Adifom_Climacool_Be_IF3904_01_standard.jpg",
  },

  {
    name: "Shopper Canvas Bag",
    price: 132,
    rating: 5,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/08cebdfba14f4b49b9b0d3ec4ae0d427_9366/Tui_Shopper_Canvas_Luoi_Monogram_Nhieu_mau_IT7373_01_standard.jpg",
  },

  {
    name: "Track Pant Montreal",
    price: 132,
    rating: 5,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ca2d92942d984356babdf86a7fa2a118_9366/Quan_Track_Pant_Montreal_Mau_vang_IP0629_21_model.jpg",
  },

  {
    name: "Track Top Beckenbauer Classics Adicolor",
    price: 132,
    rating: 5,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/51ef14ed0db644589d08dd8a3a3c3369_9366/Ao_Track_Top_Beckenbauer_Classics_Adicolor_Mau_xanh_da_troi_IP0418_21_model.jpg",
  },

  {
    name: "Classic Street Premium Adibreak",
    price: 132,
    rating: 5,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dbe14039dd7d4e109d15bf305c3bb16c_9366/Ao_Thun_Classic_Street_Premium_Adibreak_Nhieu_mau_IS0615_21_model.jpg",
  },

  {
    name: "Track Top Neuclassics",
    price: 132,
    rating: 5,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/31573dbb3b374e7b9e59c355b831f0dc_9366/Ao_Track_Top_Neuclassics_Nhieu_mau_IU2505_21_model.jpg",
  },

  {
    name: "AG ROUND BAG",
    price: 132,
    rating: 5,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/be68248c60c948dbad26957d5cd59f8a_9366/AG_ROUND_BAG_Mau_xanh_da_troi_IN2778_01_standard.jpg",
  },

  {
    name: "Adicross Low",
    price: 132,
    rating: 5,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4b96690e64b742bd869eaf8d01820cea_9366/Giay_Golf_DJinh_Lien_Adicross_Low_trang_GW2118_01_standard.jpg",
  },

  {
    name: "AEROREADY Cap",
    price: 132,
    rating: 5,
    img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/a5f84a32438341d9ac02af2e008ccc2a_9366/Mu_Bong_Chay_3_Soc_AEROREADY_Nhieu_mau_IC6569_01_standard.jpg",
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
                  <h3 className="border border-b-1 border-t-0 border-x-0 pb-[17px] mb-[30px] text-[19px] font-bold">
                    Categories
                  </h3>

                  <ul className="category-list space-y-[10px] mb-[30px]">
                    <li className="flex justify-between items-center bg-[#F5F5F5] py-[16px] px-[26px] rounded-[4px] font-bold">
                      <p>Sport</p>{" "}
                      <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center">
                        <FaArrowRight className="text-black " />
                      </div>
                    </li>

                    <li className="flex justify-between items-center bg-[#F5F5F5] py-[16px] px-[26px] rounded-[4px] font-bold">
                      <p>Business</p>{" "}
                      <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center">
                        <FaArrowRight className="text-black " />
                      </div>
                    </li>

                    <li className="flex justify-between items-center bg-[#F5F5F5] py-[16px] px-[26px] rounded-[4px] font-bold">
                      <p>Politics</p>{" "}
                      <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center">
                        <FaArrowRight className="text-black " />
                      </div>
                    </li>

                    <li className="flex justify-between items-center bg-[#F5F5F5] py-[16px] px-[26px] rounded-[4px] font-bold">
                      <p>Health</p>{" "}
                      <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center">
                        <FaArrowRight className="text-black " />
                      </div>
                    </li>

                    <li className="flex justify-between items-center bg-[#F5F5F5] py-[16px] px-[26px] rounded-[4px] font-bold">
                      <p>Technology</p>{" "}
                      <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center">
                        <FaArrowRight className="text-black " />
                      </div>
                    </li>

                    <li className="flex justify-between items-center bg-[#F5F5F5] py-[16px] px-[26px] rounded-[4px] font-bold">
                      <p>Entertaiment</p>{" "}
                      <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center">
                        <FaArrowRight className="text-black " />
                      </div>
                    </li>
                  </ul>

                  <h3 className="border border-b-1 border-t-0 border-x-0 pb-[17px] mb-[30px] text-[19px] font-bold">
                    Filter By Price
                  </h3>

                  <div className="price-slider-wrapper mb-[35px]">
                    <div className="price-label text-[#54595F] mb-[10px]">
                      Price: <span className="from">$10</span>
                      {" - "}
                      <span className="to">$73</span>
                    </div>

                    <div className="price-slider mt-[15px] mb-[25px] cursor-pointer h-[6px] relative w-full bg-[#FF1D50]">
                      <div className="ui-slider-range absolute top-0  z-[1] block bg-[#080809] h-full w-[50%]"></div>
                      <span className="w-[16px] h-[16px] rounded-full cursor-pointer absolute top-[50%] left-0 translate-y-[-50%] z-[2] bg-[#ffffff]  border-[3px] border-[#080809]"></span>
                      <span className="w-[16px] h-[16px] rounded-full cursor-pointer absolute top-[50%] left-[50%] translate-y-[-50%] z-[2] bg-[#ffffff]  border-[3px] border-[#080809]"></span>
                    </div>

                    <button className="py-[8px] px-[32px] text-white font-semibold bg-[#FF1D50] text-[14px]">
                      Filter
                    </button>
                  </div>

                  <h3 className="border border-b-1 border-t-0 border-x-0 pb-[17px] mb-[30px] text-[19px] font-bold">
                    Tags
                  </h3>

                  <div className="tag-cloud ">
                    <button className="py-[9px] px-[16px] border border-1 rounded-[4px] mr-[7px] mb-[7px]">
                      Sports
                    </button>

                    <button className="py-[9px] px-[16px] border border-1 rounded-[4px] mr-[7px] mb-[7px]">
                      Politics
                    </button>

                    <button className="py-[9px] px-[16px] border border-1 rounded-[4px] mr-[7px] mb-[7px]">
                      Business
                    </button>

                    <button className="py-[9px] px-[16px] border border-1 rounded-[4px] mr-[7px] mb-[7px]">
                      Music
                    </button>

                    <button className="py-[9px] px-[16px] border border-1 rounded-[4px] mr-[7px] mb-[7px]">
                      Foood
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-9">
              <div className="sort-bar mb-[24px] p-[10px] bg-[#F5F5F5] rounded-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="pl-[16px] text-[#54596e]">
                      Showing 1–9 of 16 results
                    </p>
                  </div>

                  <div>
                    <select className="form-control min-w-[250px] h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e]">
                      <option value="" disabled selected hidden>
                        Defaul Sorting
                      </option>
                      <option value="popularity">Sort by popularity</option>
                      <option value="average rating">
                        Sort by average rating
                      </option>
                      <option value="Gest Posting">Sort by latest</option>
                      <option value="low to high">
                        Sort by price: low to high
                      </option>
                      <option value="high to low">
                        Sort by price: high to low
                      </option>
                      <option
                        className="text-[#54596e]"
                        value="Personal Question"
                      >
                        Personal Question
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <ul className="grid grid-cols-3 gap-[24px]">
                {productData.map((product, index) => (
                  <li key={index}>
                    <div className="product overflow-hidden">
                      <div className="product-img mb-[25px]">
                        <img
                          className="w-full h-[300px] object-cover rounded-sm"
                          src={product.img}
                          alt={product.name}
                        />
                      </div>
                      <div className="product-content text-center">
                        <div className="star-rating space-x-1">
                          {Array(product.rating)
                            .fill(0)
                            .map((_, i) => (
                              <FaStar
                                key={i}
                                className="text-[#FF1D50] inline-block"
                              />
                            ))}
                        </div>
                        <h3 className="product-title font-semibold mt-[8px] mb-[10px] text-[17px]">
                          {product.name}
                        </h3>
                        <span className="price text-[#54595F] font-medium">
                          ${product.price.toFixed(2)}
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
