"use client";

import "./styles.css";
import React, { useState, useEffect } from "react";
import Breadcrumb from "../ui/Breadcrumb";
import Container from "../Container/Container";
import { RiErrorWarningLine } from "react-icons/ri";
import LoadingBlock from "../LoadingBlock";

const paymentMethodsData = [
  {
    id: 1,
    name: "Direct bank transfer",
    content:
      "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
  },
  {
    id: 2,
    name: "Cheque Payment",
    content:
      "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.",
  },
  { id: 3, name: "Credit Cart", content: "Pay with cash upon delivery." },
  {
    id: 4,
    name: "Paypal",
    content:
      "Pay via PayPal; you can pay with your credit card if you don't have a PayPal account.",
  },
];

const Checkout = () => {
  const [loadingPage, setLoadingPage] = useState(true);
  const [isDifferentAddresses, setDifferentAddresses] = useState(true);
  const [paymentMethods, setPaymentMethods] = useState(paymentMethodsData);
  const [selectedMethod, setSelectedMethod] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 1000);
  }, []);

  return (
    <>
      <Breadcrumb items={[{ label: "home" }, { label: "checkout" }]} />

      {loadingPage ? (
        <LoadingBlock />
      ) : (
        <Container>
          <div className="pt-[60px] pb-[30px]">
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
                {paymentMethods.map((method) => (
                  <div key={method.id} className="method-item mb-[14px]">
                    <label
                      className={`flex items-center gap-2 font-semibold text-[#54595F] py-[10px] ${
                        selectedMethod !== method.id
                          ? "border border-x-0 border-t-0 border-b-1"
                          : ""
                      }`}
                    >
                      {" "}
                      <input
                        type="radio"
                        className="form-control"
                        name="payment-method"
                        checked={selectedMethod === method.id}
                        onClick={() => setSelectedMethod(method.id)}
                      />{" "}
                      {method.name}
                    </label>

                    <p
                      className={`${
                        selectedMethod === method.id ? "block" : "hidden"
                      } info-methob mt-[12px] px-[20px] py-[14px] border boder-[#EFEFEF] text-[#54595F] bg-[#F5F5F5] rounded-sm text-[14px]`}
                    >
                      {method.content}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex sm:flex-grow-0 flex-grow">
                <button className="uppercase py-[16px] sm:px-[26px] sm:w-auto w-full bg-[#FF1D50] text-white text-[14px] rounded-md font-bold flex items-center justify-center mb-[30px]">
                  Place order
                </button>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default Checkout;
