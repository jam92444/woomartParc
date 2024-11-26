import React, { useState, useEffect, useContext } from "react";
import { FaBars, FaCross } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { GoGitCompare, GoSearch } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import logo from "../assets/logo.svg";
import { CategoryIcons, menuItem } from "../assets/constants";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/AppContext";

const Navbar = () => {
  const [isActive, setIsActive] = useState("Categories");
  const [open, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { navigate, setLoginOpen, user } = useContext(ShopContext);
  const menuItems = [
    {
      title: "Cases",
      path: "/category/cases",
    },
    {
      title: "Straps",
      path: "/category/straps",
    },
    {
      title: "Power Banks",
      path: "/category/powerbanks",
    },
    {
      title: "Cables",
      path: "/category/cables",
    },
    {
      title: "Charger",
      path: "/category/charger",
    },
    {
      title: "More",
      path: "/",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 ${scrolled ? "bg-white shadow-md" : ""}`}
    >
      <div className="py-2 px-6 flex items-center justify-between font-medium">
        <div
          onClick={() => setIsOpen(!open)}
          className="lg:hidden xl:hidden 2xl:hidden text-lg font-light hover:text-gray-500"
        >
          <FaBars />
        </div>
        {/* logo */}
        <div onClick={() => navigate("/")}>
          <img className="w-[180px]" src={logo} alt="Logo" />
        </div>
        {/* menuitems */}
        <div className="hidden lg:block">
          <ul className="flex text-sm items-center py-3 gap-10 text-gray-900">
            {menuItems.map((items, index) => (
              <li key={index} className="hover:text-blue-600">
                <a href={items.path}>{items.title}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* loginandmore */}
        <div className="flex items-center gap-5">
          <div className="relative hover:text-gray-500 hidden cursor-pointer lg:block">
            <GoSearch className="text-xl" />
          </div>
          <div className="relative hover:text-gray-500 hidden cursor-pointer lg:block">
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
          {user.userName && user ? (
            <p
              onClick={() => navigate("/login")}
              className="hover:text-gray-500 bg-black rounded-full text-white p-1 place-content-center w-10 h-10 text-sm text-center hidden cursor-pointer sm:flex items-center justify-center lg:block"
            >
              {user.userName[0]}
            </p>
          ) : (
            <p
              onClick={() => navigate("/login")}
              className="hover:text-gray-500 text-sm hidden cursor-pointer lg:block"
            >
              Login /Register
            </p>
          )}
        </div>
      </div>

      {/* mobile screen navigation bar */}
      {open && (
        <div className="absolute flex top-0 left-0 w-full bg-transparent lg:hidden">
          <div className="w-[300px] bg-white border-r-2 min-h-[100vh] shadow-lg flex flex-col gap-2">
            <div
              className="font-bold px-4 py-2 flex items-end justify-end"
              onClick={() => setIsOpen(!open)}
            >
              <RxCross1 />
            </div>
            <div className="px-4 py-5 flex items-center justify-between">
              <input
                type="text"
                placeholder="Search for products"
                className="outline-0 w-[90%] text-sm font-medium text-gray-900"
              />
              <GoSearch className="text-xl" />
            </div>
            <div className="bg-gray-100 shadow-[inset_-2px_2px_9px_4px_#edf2f7] font-semibold uppercase flex justify-between text-center text-sm items-center">
              {isActive === "Categories" ? (
                <p className="p-2 py-4 w-full overflow-y-scroll bg-gray-300 align-middle border-b-2 border-b-blue-600">
                  Categories
                </p>
              ) : (
                <p
                  className="p-2 py-4 w-full align-middle text-gray-500"
                  onClick={() => setIsActive("Categories")}
                >
                  Categories
                </p>
              )}
              {isActive === "Menu" ? (
                <p className="p-2 py-4 w-full bg-gray-300 align-middle border-b-2 border-b-blue-600">
                  Menu
                </p>
              ) : (
                <p
                  className="p-2 py-4 w-full align-middle text-gray-500"
                  onClick={() => setIsActive("Menu")}
                >
                  Menu
                </p>
              )}
            </div>
            <div>
              <ul className="flex w-full overflow-y-scroll items-start flex-col gap-4">
                {isActive === "Categories" &&
                  CategoryIcons.map((items, index) => (
                    <li
                      className="border-b w-full transition-all cursor-pointer hover:text-blue-600 flex items-center p-2"
                      key={index}
                    >
                      <a href="/" className="flex py-0 items-center gap-3">
                        <img className="w-7" src={items.icon} alt="" />
                        <p>{items.category}</p>
                      </a>
                    </li>
                  ))}
                {isActive === "Menu" &&
                  menuItem.map((items, index) => (
                    <li
                      className="border-b border-b-gray-200 hover:text-blue-600 w-full cursor-pointer flex items-center py-2 px-[-10px]"
                      key={index}
                    >
                      <a
                        href={items?.path}
                        className="flex py-0 items-center gap-3"
                      >
                        <img className="w-7" src={items?.icon} alt="" />
                        <p>{items?.title}</p>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
