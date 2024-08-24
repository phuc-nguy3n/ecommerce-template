import "./styles.css";
import Container from "../Container/Container";
import Breadcrumb from "../ui/Breadcrumb";
import { IoIosCheckboxOutline } from "react-icons/io";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";

const Cart = () => {
  return (
    <>
      <Breadcrumb items={[{ label: "home" }, { label: "cart page" }]} />

      <Container>
        <div className="pt-[60px] pb-[30px]">
          <div className="woocommerce-notices-wrapper p-[12px] bg-[#FF1D50] text-white flex items-center gap-3 rounded-sm text-[14px] font-medium mb-[12px]">
            <IoIosCheckboxOutline className="text-[24px]" /> Shipping costs
            updated.
          </div>

          <form className="woocommerce-cart-form text-center">
            <table className="cart-table border border-[#EFEFEF] mb-[45px]">
              <thead>
                <tr>
                  <th className="cart-col-image">Image</th>

                  <th className="cart-col-productname">Product Name</th>

                  <th className="cart-col-price">Price</th>

                  <th className="cart-col-quantity">Quantity</th>

                  <th className="cart-col-total">Total</th>

                  <th className="cart-col-remove">Remove</th>
                </tr>
              </thead>

              <tbody>
                <tr className="cart-item">
                  <td data-title="Product">
                    <div className="cart-productimage cursor-pointer flex justify-center">
                      <img
                        className="w-[91px] h-[91px]"
                        src="https://nb.scene7.com/is/image/NB/u993gg_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440"
                        alt=""
                      />
                    </div>
                  </td>

                  <td data-title="Name">
                    <div className="cart-name cursor-pointer flex justify-center">
                      <p>Car Safety Seat</p>
                    </div>
                  </td>

                  <td data-title="Price">
                    <div className="cart-price flex justify-center">
                      <p>$18</p>
                    </div>
                  </td>

                  <td data-title="Quantity">
                    <div className="cart-quantity cursor-pointer flex justify-center">
                      <button className="quantity-minus border-2 border-[#EFEFEF] rounded-sm p-1">
                        <FiMinus />
                      </button>
                      <input
                        type="number"
                        className="quantity-input outline-none border-2 border-[#EFEFEF] rounded-sm text-center mx-1 font-bold"
                        value={1}
                        min={1}
                        max={99}
                      />
                      <button className="quantity-plus border-2 border-[#EFEFEF] rounded-sm p-1">
                        <FiPlus />
                      </button>
                    </div>
                  </td>

                  <td data-title="Total">
                    <div className="cart-total flex justify-center">
                      <p>$18</p>
                    </div>
                  </td>

                  <td data-title="Remove">
                    <div className="cart-remove flex justify-center">
                      <button>
                        <IoTrashOutline className="text-[20px] text-[#FF1D50]" />
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="cart-item">
                  <td data-title="Product">
                    <div className="cart-productimage cursor-pointer flex justify-center">
                      <img
                        className="w-[91px] h-[91px]"
                        src="https://nb.scene7.com/is/image/NB/u993gg_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440"
                        alt=""
                      />
                    </div>
                  </td>

                  <td data-title="Name">
                    <div className="cart-name cursor-pointer flex justify-center">
                      <p>Car Safety Seat</p>
                    </div>
                  </td>

                  <td data-title="Price">
                    <div className="cart-price flex justify-center">
                      <p>$18</p>
                    </div>
                  </td>

                  <td data-title="Quantity">
                    <div className="cart-quantity cursor-pointer flex justify-center">
                      <button className="quantity-minus border-2 border-[#EFEFEF] rounded-sm p-1">
                        <FiMinus />
                      </button>
                      <input
                        type="number"
                        className="quantity-input outline-none border-2 border-[#EFEFEF] rounded-sm text-center mx-1 font-bold"
                        value={1}
                        min={1}
                        max={99}
                      />
                      <button className="quantity-plus border-2 border-[#EFEFEF] rounded-sm p-1">
                        <FiPlus />
                      </button>
                    </div>
                  </td>

                  <td data-title="Total">
                    <div className="cart-total flex justify-center">
                      <p>$18</p>
                    </div>
                  </td>

                  <td data-title="Remove">
                    <div className="cart-remove flex justify-center">
                      <button>
                        <IoTrashOutline className="text-[20px] text-[#FF1D50]" />
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="cart-item">
                  <td data-title="Product">
                    <div className="cart-productimage cursor-pointer flex justify-center">
                      <img
                        className="w-[91px] h-[91px]"
                        src="https://nb.scene7.com/is/image/NB/u993gg_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440"
                        alt=""
                      />
                    </div>
                  </td>

                  <td data-title="Name">
                    <div className="cart-name cursor-pointer flex justify-center">
                      <p>Car Safety Seat</p>
                    </div>
                  </td>

                  <td data-title="Price">
                    <div className="cart-price flex justify-center">
                      <p>$18</p>
                    </div>
                  </td>

                  <td data-title="Quantity">
                    <div className="cart-quantity cursor-pointer flex justify-center">
                      <button className="quantity-minus border-2 border-[#EFEFEF] rounded-sm p-1">
                        <FiMinus />
                      </button>
                      <input
                        type="number"
                        className="quantity-input outline-none border-2 border-[#EFEFEF] rounded-sm text-center mx-1 font-bold"
                        value={1}
                        min={1}
                        max={99}
                      />
                      <button className="quantity-plus border-2 border-[#EFEFEF] rounded-sm p-1">
                        <FiPlus />
                      </button>
                    </div>
                  </td>

                  <td data-title="Total">
                    <div className="cart-total flex justify-center">
                      <p>$18</p>
                    </div>
                  </td>

                  <td data-title="Remove">
                    <div className="cart-remove flex justify-center">
                      <button>
                        <IoTrashOutline className="text-[20px] text-[#FF1D50]" />
                      </button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td colSpan={6} className="actions px-[20px]">
                    <div className="flex items-center lg:justify-between justify-center flex-wrap gap-[20px]">
                      <div className="flex items-center gap-2 lg:flex-grow-0 flex-grow flex-wrap">
                        <input
                          type="text"
                          className="form-control outline-none py-[12px] px-[16px] bg-[#EFEFEF] rounded-sm flex-1"
                          placeholder="Coupon Code..."
                        />
                        <button className="bg-[#FF1D50] text-white py-[12px] px-[20px] rounded-sm font-bold uppercase sm:w-auto w-full">
                          Apply Coupon
                        </button>
                      </div>

                      <div className="flex items-center gap-2 btn-box sm:flex-grow-0 flex-grow flex-wrap">
                        <button className="bg-[#FF1D50] text-white py-[12px] px-[20px] rounded-sm font-bold uppercase sm:w-auto w-full">
                          Update cart
                        </button>

                        <button className="bg-[#FF1D50] text-white py-[12px] px-[20px] rounded-sm font-bold uppercase sm:w-auto w-full">
                          Continue Shopping
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>

          <div className="grid grid-cols-12">
            <div className="xl:col-start-7 md:col-start-5 xl:col-span-6 md:col-span-8 col-span-12">
              <h2 className="sumary-title text-[25px] font-bold mb-[15px]">
                Cart Totals
              </h2>

              <table className="cart-totals border border-[#EFEFEF] mb-[20px]">
                <tbody>
                  <tr>
                    <td>Cart Subtotal</td>
                    <td data-title="Cart Subtotal">
                      <span className="amount font-bold">$47</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Shipping and Handling</td>
                    <td data-title="Shipping and Handling">
                      <ul className="shipping-methods">
                        <li>
                          <div className="flex gap-2 items-center mb-[5px]">
                            <input
                              id="free-ship"
                              type="radio"
                              className="cursor-pointer"
                              name="shipping-fee"
                            />
                            <label htmlFor="free-ship">
                              <span className="font-semibold text-[16px]">
                                {" "}
                                Free shipping
                              </span>
                            </label>
                          </div>
                        </li>

                        <li>
                          <div className="flex gap-2 items-center mb-[5px]">
                            <input
                              id="flat-rate"
                              type="radio"
                              className="cursor-pointer"
                              name="shipping-fee"
                              checked
                            />
                            <label htmlFor="free-ship">
                              <span className="font-semibold text-[16px]">
                                {" "}
                                Flat rate
                              </span>
                            </label>
                          </div>
                        </li>
                      </ul>
                      <p className="shipping-destination text-[#54595F] mb-[15px]">
                        Shipping options will be updated during checkout.
                      </p>
                      <span className="font-bold pb-[4px] border border-x-0 border-t-0 border-b-1 border-black cursor-pointer">
                        Change address
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>Order Total</td>
                    <td data-title="Cart Subtotal">
                      <span className="amount font-bold text-[#FF1D50]">
                        $47
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="flex justify-end">
                <button className="font-bold uppercase py-[12px] px-[24px] bg-[#FF1D50] text-white rounded-sm mb-[30px]">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
