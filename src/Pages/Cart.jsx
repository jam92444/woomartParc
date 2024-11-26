import { useContext, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { ShopContext } from "../context/AppContext";

const Cart = () => {
  const { navigate, cartItems, setCartItems } = useContext(ShopContext);
  return (
    <>
      <div>
        <div className="w-full flex items-center justify-center h-[200px] text-center bg-[url('https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/04/accessories-page-title.jpg')] bg-no-repeat bg-cover bg-center">
          <p className="uppercase text-md flex items-center gap-4 md:text-2xl text-gray-300 font-normal ">
            <span className="border-b-2 text-white border-b-blue-600">
              Shopping cart
            </span>
            <FaAngleRight /> <span>Checkout</span>
            <FaAngleRight />
            <span>Order complete</span>
          </p>
        </div>
        <div className="w-full px-8 py-10 flex flex-col sm:flex-row">
          <div className="w-full">
            {/* list  */}
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
              <h2 className="text-xl font-semibold">Your cart</h2>
              <ul className="flex flex-col divide-y dark:divide-gray-300">
                {[1, 1, 1, 1, 1].map(() => (
                  <li className="flex flex-col py-6 border-b sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4">
                      <img
                        className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                        src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                        alt="Polaroid camera"
                      />
                      <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                              Polaroid camera
                            </h3>
                            <p className="text-sm dark:text-gray-600">
                              Classic
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-semibold">59.99€</p>
                            <p className="text-sm line-through dark:text-gray-400">
                              75.50€
                            </p>
                          </div>
                        </div>
                        <div className="flex text-sm divide-x">
                          <button
                            type="button"
                            className="flex items-center px-2 py-1 pl-0 space-x-1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="w-4 h-4 fill-current"
                            >
                              <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                              <rect
                                width="32"
                                height="200"
                                x="168"
                                y="216"
                              ></rect>
                              <rect
                                width="32"
                                height="200"
                                x="240"
                                y="216"
                              ></rect>
                              <rect
                                width="32"
                                height="200"
                                x="312"
                                y="216"
                              ></rect>
                              <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                            </svg>
                            <span>Remove</span>
                          </button>
                          <button
                            type="button"
                            className="flex items-center px-2 py-1 space-x-1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="w-4 h-4 fill-current"
                            >
                              <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                            </svg>
                            <span>Add to favorites</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* check out  */}
          <div className="w-full sm:w-2/3 p-6">
            <div className="flex flex-col  border border-gray-200 shadow-md rounded-md p-6 space-y-4 divide-y sm:p-10 dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
              <h2 className="text-2xl font-semibold">Order items</h2>
              <ul className="flex flex-col pt-4 space-y-2">
                <li className="flex items-start justify-between">
                  <h3>
                    Hard taco, chicken
                    <span className="text-sm dark:text-violet-600">x3</span>
                  </h3>
                  <div className="text-right">
                    <span className="block">$7.50</span>
                    <span className="text-sm dark:text-gray-600">à $2.50</span>
                  </div>
                </li>
              </ul>
              <div className="pt-4 space-y-2">
                <div>
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$21.50</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-3 h-3 mt-1 fill-current dark:text-violet-600"
                    >
                      <path d="M485.887,263.261,248,25.373A31.791,31.791,0,0,0,225.373,16H64A48.055,48.055,0,0,0,16,64V225.078A32.115,32.115,0,0,0,26.091,248.4L279.152,486.125a23.815,23.815,0,0,0,16.41,6.51q.447,0,.9-.017a23.828,23.828,0,0,0,16.79-7.734L486.581,296.479A23.941,23.941,0,0,0,485.887,263.261ZM295.171,457.269,48,225.078V64A16.019,16.019,0,0,1,64,48H225.373L457.834,280.462Z"></path>
                      <path d="M148,96a52,52,0,1,0,52,52A52.059,52.059,0,0,0,148,96Zm0,72a20,20,0,1,1,20-20A20.023,20.023,0,0,1,148,168Z"></path>
                    </svg>
                    <span className="dark:text-gray-600">
                      Spend $20.00, get 20% off
                    </span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span>-$4.30</span>
                </div>
              </div>
              <div className="pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Service fee</span>
                  <span>$0.50</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <span>Delivery fee</span>
                    <span>$4.00</span>
                  </div>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-violet-600"
                  >
                    How do our fees work?
                  </a>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between">
                    <span>Total</span>
                    <span className="font-semibold">$22.70</span>
                  </div>
                  <button
                    type="button"
                    className="w-full py-2 font-semibold bg-blue-600 text-white border rounded dark:bg-violet-600 dark:text-gray-50 dark:border-violet-600"
                    onClick={() => navigate("/checkout")}
                  >
                    Proceed to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
