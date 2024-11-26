import React, { useContext } from "react";
import { ShopContext } from "../context/AppContext";

const OrderCompleted = () => {
    const {navigate } = useContext(ShopContext)
  return (
    <div>
      <div className="w-full flex items-center justify-center h-[200px] text-center bg-[url('https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/04/accessories-page-title.jpg')] bg-no-repeat bg-cover bg-center">
        <p className="uppercase text-md flex items-center gap-4 md:text-2xl text-white font-normal ">
          &#127881; Your Order Has Been Recieved
        </p>
      </div>
      <div>
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
          <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                Order summary
              </h2>
              <div className="mt-6 space-y-4 border-b border-t border-gray-200 py-8 dark:border-gray-700 sm:mt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Billing &amp; Delivery information
                </h4>
                <dl>
                  <dt className="text-base font-medium text-gray-900 dark:text-white">
                    Individual
                  </dt>
                  <dd className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                    Bonnie Green - +1 234 567 890, San Francisco, California,
                    United States, 3454, Scott Street
                  </dd>
                </dl>
              </div>
              <div className="mt-6 sm:mt-8">
                <div className="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
                  <table className="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      <tr>
                        <td className="whitespace-nowrap py-4 md:w-[384px]">
                          <div className="flex items-center gap-4">
                            <a
                              href="#"
                              className="flex items-center aspect-square w-10 h-10 shrink-0"
                            >
                              <img
                                className="h-auto w-full max-h-full dark:hidden"
                                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                                alt="imac image"
                              />
                              <img
                                className="hidden h-auto w-full max-h-full dark:block"
                                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                                alt="imac image"
                              />
                            </a>
                            <a href="#" className="hover:underline">
                              Apple iMac 27”
                            </a>
                          </div>
                        </td>
                        <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                          x1
                        </td>
                        <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                          $1,499
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 space-y-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Order summary
                  </h4>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-gray-500 dark:text-gray-400">
                          Original price
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          $6,592.00
                        </dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-gray-500 dark:text-gray-400">
                          Savings
                        </dt>
                        <dd className="text-base font-medium text-green-500">
                          -$299.00
                        </dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-gray-500 dark:text-gray-400">
                          Store Pickup
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          $99
                        </dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-gray-500 dark:text-gray-400">
                          Tax
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          $799
                        </dd>
                      </dl>
                    </div>
                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt className="text-lg font-bold text-gray-900 dark:text-white">
                        Total
                      </dt>
                      <dd className="text-lg font-bold text-gray-900 dark:text-white">
                        $7,191.00
                      </dd>
                    </dl>
                  </div>
                  <div className="gap-4 sm:flex sm:items-end justify-end">
                    <button
                      type="button"
                      onClick={()=>navigate('/')}
                      className="rounded-lg hover:text-blue-600  border border-gray-200 bg-blue-600 px-5  py-2.5 text-sm w-fit font-bold hover:bg-gray-100 text-white  focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-black dark:focus:ring-gray-700"
                    >
                      Return to Shopping
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default OrderCompleted;
