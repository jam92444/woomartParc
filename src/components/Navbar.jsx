import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { GoGitCompare, GoSearch } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState("Categories");
  const menuItems = [
    "Cases",
    "Straps",
    "Power Banks",
    "Cables",
    "MagSafe",
    "Charger",
    "More",
  ];
  return (
    <div className="relative">
      <div className="z-50 py-6 px-4 flex items-center justify-between font-medium">
        <div className=" lg:hidden xl:hidden 2xl:hidden text-lg font-light hover:text-gray-500">
          <FaBars />
        </div>
        {/* logo  */}
        <div>
          <img className="w-[180px]" src={logo} alt="" />
        </div>
        {/* menuitems  */}
        <div className="hidden lg:block">
          <ul className="flex text-sm items-center py-3 gap-10 text-gray-900">
            {menuItems.map((items, index) => (
              <li key={index} className="hover:text-blue-600">
                <a href="/">{items}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* loginandmore */}
        <div className="flex items-center gap-5">
          <p className=" hover:text-gray-500 text-sm hidden lg:block">
            Login /Register
          </p>
          <div className="relative hover:text-gray-500 hidden lg:block">
            <GoSearch className="text-xl" />
          </div>
          <div className="relative hover:text-gray-500 hidden lg:block">
            <GoGitCompare className="text-xl" />
            <div className="absolute top-[-10px] right-[-10px] text-xs bg-blue-500 text-white w-4 h-4 flex items-center justify-center rounded-full">
              <p>0</p>
            </div>
          </div>
          <div className="relative hover:text-gray-500 hidden lg:block">
            <FiHeart className="text-xl" />
            <div className="absolute top-[-10px] right-[-10px] text-xs bg-blue-500 text-white w-4 h-4 flex items-center justify-center rounded-full">
              <p>0</p>
            </div>
          </div>
          <div className="relative hover:text-gray-500">
            <IoCartOutline className="text-xl" />
            <div className="absolute top-[-10px] right-[-10px] text-xs bg-blue-500 text-white w-4 h-4 flex items-center justify-center rounded-full">
              <p>0</p>
            </div>
          </div>
          <p className="text-sm hover:text-gray-500 hidden lg:block">$0.00</p>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full bg-transparent h-[100vh] lg:hidden ">
        <div className="w-[300px] bg-white h-[100vh] border-r-2 shadow-lg flex flex-col gap-2">
          <div className="px-4 py-5 flex items-center justify-between">
            <input
              type="text"
              placeholder="Search for products"
              className="outline-0 w-[90%] text-sm font-medium text-gray-900"
            />
            <GoSearch className="text-xl" />
          </div>
          <div className=" bg-gray-100 shadow-[inset_-2px_2px_9px_4px_#edf2f7] font-semibold uppercase flex justify-between text-center text-sm items-center">
            {isActive === "Categories" ? (
              <p className=" p-2 py-4 w-full align-middle border-b-2 border-b-blue-600">
                Categories
              </p>
            ) : (
              <p
                className=" p-2 py-4 w-full align-middle text-gray-500"
                onClick={() => setIsActive("Categories")}
              >
                Categories
              </p>
            )}
            {isActive === "Menu" ? (
              <p className=" p-2 py-4 w-full align-middle border-b-2 border-b-blue-600">
                Menu
              </p>
            ) : (
              <p
                className=" p-2 py-4 w-full align-middle text-gray-500 "
                onClick={() => setIsActive("Menu")}
              >
                Menu
              </p>
            )}
          </div>
          <div>option</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
