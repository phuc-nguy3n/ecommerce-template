"use client";

import "./styles.css";
import React, { useState } from "react";
import Breadcrumb from "../ui/Breadcrumb";
import Container from "../Container/Container";
import { RiErrorWarningLine } from "react-icons/ri";

const Checkout = () => {
  const [isDifferentAddresses, setDifferentAddresses] = useState(true);

  return (
    <>
      <Breadcrumb items={[{ label: "home" }, { label: "checkout" }]} />

      <Container>
        <div className="pt-[60px] pb-[30px]">
          {/* info */}
          <div className="woocommerce-info-wrapper mb-[30px]">
            <div className="p-[12px] bg-[#FF1D50] text-white flex items-center gap-3 rounded-sm text-[14px] font-medium mb-[12px]">
              <RiErrorWarningLine className="text-[24px]" />
              <p>
                Returning customer?{" "}
                <a href="/#" className="underline ">
                  Click here to login
                </a>
              </p>
            </div>

            <div className="form-box md:p-[40px] px-[20px] py-[30px] rounded-sm">
              <form className="contact-form">
                <div className="grid grid-cols-2 gap-[24px]">
                  <div className="form-group col-span-2">
                    <label htmlFor="username">Username or email *</label>
                    <input
                      id="username"
                      type="text"
                      className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e] bg-[#F5F5F5] mt-3"
                      placeholder="Username or Email"
                    />
                  </div>

                  <div className="form-group col-span-2">
                    <label htmlFor="password">Password *</label>

                    <input
                      id="password"
                      type="password"
                      className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e] bg-[#F5F5F5] mt-3"
                      placeholder="Password"
                    />
                  </div>

                  <div className="form-control col-span-2 ml-1 flex items-center gap-3 sm:justify-normal justify-center ">
                    <input
                      id="accept"
                      type="checkbox"
                      className="form-control"
                    />
                    <label htmlFor="accept">Remember Me</label>
                  </div>

                  <div className="col-span-2 flex sm:flex-grow-0 flex-grow">
                    <button className="uppercase py-[16px] sm:px-[58px] bg-[#FF1D50] text-white text-[14px] rounded-md font-bold flex items-center justify-center sm:w-auto w-full">
                      Login
                    </button>
                  </div>

                  <div className="form-control col-span-2 sm:text-left text-center">
                    <span className="hover:underline cursor-pointer text-[#54596e]">
                      Lost your password?
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Code discount  */}
          <div className="woocommerce-discount-wrapper mb-[50px]">
            <div className="p-[12px] bg-[#FF1D50] text-white flex items-center gap-3 rounded-sm text-[14px] font-medium mb-[12px]">
              <RiErrorWarningLine className="text-[24px]" />
              <p>
                Have a coupon?{" "}
                <a href="/#" className="underline">
                  Click here to enter your code
                </a>
              </p>
            </div>

            <div className="form-box md:p-[40px] px-[20px] py-[30px] rounded-sm">
              <form className="contact-form">
                <div className="grid grid-cols-2 gap-[24px]">
                  <div className="form-group col-span-2">
                    <label htmlFor="username">Coupon code</label>
                    <input
                      id="username"
                      type="text"
                      className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e] bg-[#F5F5F5] mt-3"
                      placeholder="Enter your coupon code"
                    />
                  </div>

                  <div className="col-span-2 flex sm:flex-grow-0 flex-grow">
                    <button className="uppercase py-[16px] sm:px-[26px] bg-[#FF1D50] text-white text-[14px] rounded-md font-bold flex items-center sm:w-auto w-full justify-center">
                      Apply coupon
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Billing details */}
          <div className="billing-wrapper mb-[50px]">
            <div className="grid grid-cols-12 gap-[20px]">
              <div className="lg:col-span-6 col-span-12">
                <div className="grid grid-cols-12 gap-[20px]">
                  <div className="col-span-12">
                    <h2 className="font-bold md:text-[26px] text-[20px]">
                      Billing Details
                    </h2>
                  </div>

                  <div className="col-span-12">
                    <div className="form-group">
                      <select className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e]">
                        <option value="UK" selected>
                          United Kingdom (UK)
                        </option>
                        <option value="US">United State (US)</option>
                        <option value="GQ">Equatorial Guinea (GQ)</option>
                        <option value="AU">Australia (AU)</option>
                        <option value="DE">Germany</option>
                        <option
                          className="text-[#54596e]"
                          value="Personal Question"
                        >
                          Personal Question
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="md:col-span-6 col-span-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e] bg-[#F5F5F5]"
                        placeholder="First Name"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-6 col-span-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e] bg-[#F5F5F5] "
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div className="col-span-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e] bg-[#F5F5F5]"
                        placeholder="Your Company Name"
                      />
                    </div>
                  </div>

                  <div className="col-span-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e] bg-[#F5F5F5]"
                        placeholder="Street Address"
                      />
                    </div>
                  </div>

                  <div className="col-span-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e] bg-[#F5F5F5] "
                        placeholder="Apartment, suit, unit etc. (optional)"
                      />
                    </div>
                  </div>

                  <div className="col-span-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e] bg-[#F5F5F5] "
                        placeholder="Town / City"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-6 col-span-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e] bg-[#F5F5F5] "
                        placeholder="Country"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-6 col-span-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e] bg-[#F5F5F5] "
                        placeholder="Postcode / Zip"
                      />
                    </div>
                  </div>

                  <div className="col-span-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e] bg-[#F5F5F5] "
                        placeholder="Email Address"
                      />
                    </div>
                  </div>

                  <div className="col-span-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e] bg-[#F5F5F5] "
                        placeholder="Phone number"
                      />
                    </div>
                  </div>

                  <div className="col-span-12">
                    <div className="form-control ml-1 flex items-center gap-3">
                      <input
                        id="create"
                        type="checkbox"
                        className="form-control"
                      />
                      <label htmlFor="create">Create An Account?</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 col-span-12">
                <div className="grid grid-cols-12 gap-[20px]">
                  <div className="col-span-12">
                    <div className="form-control ml-1 flex items-center gap-3 h-[39px]">
                      <input
                        id="ship-to"
                        type="checkbox"
                        className="form-control"
                        checked={isDifferentAddresses}
                        onChange={() =>
                          setDifferentAddresses(!isDifferentAddresses)
                        }
                      />
                      <label htmlFor="ship-to">
                        Ship to a different address?
                      </label>
                    </div>
                  </div>

                  {isDifferentAddresses && (
                    <>
                      <div className="col-span-12">
                        <div className="form-group">
                          <select className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e]">
                            <option value="UK" selected>
                              United Kingdom (UK)
                            </option>
                            <option value="US">United State (US)</option>
                            <option value="GQ">Equatorial Guinea (GQ)</option>
                            <option value="AU">Australia (AU)</option>
                            <option value="DE">Germany</option>
                            <option
                              className="text-[#54596e]"
                              value="Personal Question"
                            >
                              Personal Question
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="md:col-span-6 col-span-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e] bg-[#F5F5F5]"
                            placeholder="First Name"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-6 col-span-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e] bg-[#F5F5F5] "
                            placeholder="Last Name"
                          />
                        </div>
                      </div>

                      <div className="col-span-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e] bg-[#F5F5F5]"
                            placeholder="Your Company Name"
                          />
                        </div>
                      </div>

                      <div className="col-span-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e] bg-[#F5F5F5]"
                            placeholder="Street Address"
                          />
                        </div>
                      </div>

                      <div className="col-span-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e] bg-[#F5F5F5] "
                            placeholder="Apartment, suit, unit etc. (optional)"
                          />
                        </div>
                      </div>

                      <div className="col-span-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e] bg-[#F5F5F5] "
                            placeholder="Town / City"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-6 col-span-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e] bg-[#F5F5F5] "
                            placeholder="Country"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-6 col-span-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e] bg-[#F5F5F5] "
                            placeholder="Postcode / Zip"
                          />
                        </div>
                      </div>

                      <div className="col-span-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e] bg-[#F5F5F5] "
                            placeholder="Email Address"
                          />
                        </div>
                      </div>

                      <div className="col-span-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control w-full h-[50px] px-[25px] outline-none text-[16px] rounded-md text-[#54596e] bg-[#F5F5F5] "
                            placeholder="Phone number"
                          />
                        </div>
                      </div>

                      <div className="col-span-12">
                        <div className="form-group">
                          <textarea
                            className="form-control w-full min-h-[120px] py-[16px] px-[25px] outline-none rounded-md bg-[#F5F5F5]"
                            placeholder="Note about your order, e.g special notes for delivery."
                          ></textarea>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Order */}
          <div className="your-order-wrapper mb-[30px]">
            <h2 className="md:text-[26px] text-[20px] font-bold mb-[20px]">
              Your Order
            </h2>
            <form className="order-form">
              <table className="order-table">
                <thead>
                  <tr>
                    <th className="cart-col-image">Image</th>

                    <th className="cart-col-productname">Product Name</th>

                    <th className="cart-col-price">Price</th>

                    <th className="cart-col-quantity">Quantity</th>

                    <th className="cart-col-total">Total</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="cart-item">
                    <td data-title="Product">
                      <div className="cart-product-image flex md:justify-center justify-end">
                        <img
                          className="w-[90px] h-[90px] cursor-pointer"
                          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                        />
                      </div>
                    </td>

                    <td data-title="Name">
                      <div className="cart-productname cursor-pointer">
                        Car Safety Seat
                      </div>
                    </td>

                    <td data-title="Price">
                      <span className="amount">$18</span>
                    </td>

                    <td data-title="Quantity">
                      <span className="product-quantity font-bold text-black">
                        01
                      </span>
                    </td>

                    <td data-title="Total">
                      <span className="amount">$18</span>
                    </td>
                  </tr>
                </tbody>

                <tfoot className="checkout-ordertable text-[14px]">
                  <tr className="cart-subtotal">
                    <th>Subtotal</th>
                    <td data-title="Subtotal" colSpan={4}>
                      <span className="woocommerce-Price-amount amount font-semibold text-black">
                        $281.05
                      </span>
                    </td>
                  </tr>

                  <tr className="woocommerce-shipping-totals shipping">
                    <th>Shipping</th>
                    <td
                      data-title="Shipping"
                      colSpan={4}
                      className="font-semibold text-black"
                    >
                      Enter your address to view shipping options.
                    </td>
                  </tr>

                  <tr className="order-total">
                    <th>Total</th>
                    <td data-title="Total" colSpan={4}>
                      <span className="woocommerce-Price-amount amount font-bold text-[#FF1D50]">
                        $281.05
                      </span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </form>
          </div>

          {/* Payment method */}
          <div className="payment-method">
            <div className="direct-bank-transfer mb-[30px]">
              <div className="method-item mb-[14px]">
                <label className="flex items-center gap-2 font-semibold text-[#54595F] pb-[5px]">
                  {" "}
                  <input
                    type="radio"
                    className="form-control"
                    name="payment-method"
                    checked
                  />{" "}
                  Direct bank transfer
                </label>

                <p className="info-methob mt-[12px] px-[20px] py-[14px]  border boder-[#EFEFEF] text-[#54595F] bg-[#F5F5F5] rounded-sm text-[14px]">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>

              <div className="method-item mb-[14px]">
                <label className="flex items-center gap-2 font-semibold text-[#54595F] py-[10px] border border-x-0 border-t-0 border-b-1  ">
                  {" "}
                  <input
                    type="radio"
                    className="form-control"
                    name="payment-method"
                  />{" "}
                  Cheque Payment
                </label>
              </div>

              <div className="method-item mb-[14px]">
                <label className="flex items-center gap-2 font-semibold text-[#54595F] py-[10px] border border-x-0 border-t-0 border-b-1  ">
                  {" "}
                  <input
                    type="radio"
                    className="form-control"
                    name="payment-method"
                  />{" "}
                  Credit Cart
                </label>
              </div>

              <div className="method-item mb-[14px]">
                <label className="flex items-center gap-2 font-semibold text-[#54595F] py-[10px] border border-x-0 border-t-0 border-b-1  ">
                  {" "}
                  <input
                    type="radio"
                    className="form-control"
                    name="payment-method"
                  />{" "}
                  Paypal
                </label>
              </div>
            </div>

            <div className="flex sm:flex-grow-0 flex-grow">
              <button className="uppercase py-[16px] sm:px-[26px] sm:w-auto w-full bg-[#FF1D50] text-white text-[14px] rounded-md font-bold flex items-center justify-center mb-[30px]">
                Place order
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
