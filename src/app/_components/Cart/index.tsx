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
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          className="form-control outline-none py-[12px] px-[16px] bg-[#EFEFEF] rounded-sm"
                          placeholder="Coupon Code..."
                        />
                        <button className="bg-[#FF1D50] text-white py-[12px] px-[20px] rounded-sm font-bold uppercase">
                          Apply Coupon
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <button className="bg-[#FF1D50] text-white py-[12px] px-[20px] rounded-sm font-bold uppercase">
                          Update cart
                        </button>

                        <button className="bg-[#FF1D50] text-white py-[12px] px-[20px] rounded-sm font-bold uppercase">
                          Continue Shopping
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Cart;
