import Container from "../Container/Container";
import "./styles.css";

const Order = () => {
  return (
    <Container>
      <div className="pt-[60px] pb-[30px]">
        <div className="grid grid-cols-12 gap-4">
          <div className="xl:col-span-8 md:col-span-6 col-span-12">
            <div className="your-order-wrapper text-black">
              <form className="order-form">
                <div className="p-[15px]  border border-[#EFEFEF]">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="mb-2">Order number</h3>
                      <p className="font-medium lg:text-xl">#123456-1234567</p>
                    </div>

                    <div className="text-right">
                      <h3 className="mb-2">Total</h3>
                      <p className="font-medium lg:text-xl text-lg text-[#FF1D50]">
                        $18
                      </p>
                    </div>
                  </div>
                </div>
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
                        <div className="cart-product-image flex justify-end">
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
                </table>
              </form>
            </div>
          </div>
          <div className="xl:col-span-4 md:col-span-6 col-span-12">
            <div className="order-details bg-[#EFEFEF] p-5">
              <h2 className="md:text-[26px] text-[20px] font-bold mb-2">
                Order Details
              </h2>
              <div className="payment-status space-y-4 border border-b-black border-t-0 border-x-0 py-4">
                <div className="flex justify-between items-center">
                  <h3 className="mb-2">Status</h3>
                  <p className="font-medium lg:text-xl">Complete</p>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="mb-2">Item Code</h3>
                  <p className="font-medium lg:text-xl">123456-1234567</p>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="mb-2">Payment</h3>
                  <p className="font-medium lg:text-xl">VISA (Direct Bank)</p>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="mb-2">Total</h3>
                  <p className="font-medium lg:text-xl">$18</p>
                </div>
              </div>
              <div className="address py-4 space-y-4">
                <h3>Funkie</h3>
                <div className="currency flex gap-2 items-center">
                  Germany (EUR €)
                </div>
                <p className="address">
                  Alte Schoenhauser Str. 4, 10119 Berlin, Germany
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Order;
