import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, image, price, productName, brand ,category}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/category/${category}/products/${id}`)}
      className="relative w-40 md:w-56 z-20 flexflex-col gap-2 cursor-pointer p-2"
    >
      <div className="relative card md:h-56  overflow-hidden rounded-lg">
        <img
          className="w-40 md:w-56  flex items-center justify-center px-1 py-2 md:py-0"
          src={image}
          alt=""
        />
        <p className="absolute bg-blue-600 text-xs md:text-sm font-semibold text-white py-2 bottom-[-100px] addtoCart duration-500 align-center w-full text-center">
          ADD TO CART
        </p>
        <div className="absolute hovereff flex rounded-lg flex-col gap-3 bg-white shadow-[2px_0px_1px_1px_#00000024] px-2 py-3 top-0 right-[-200px] duration-500  md:text-2xl">
          <IoIosGitCompare />
          <IoSearchOutline />
          <CiHeart className="" />
        </div>
      </div>
      <div className="w-full text-center h-[100px] px-2 my-2 ">
        <p className="text-sm font-medium text-gray-800">{productName}</p>
        <p className="text-sm font-medium text-gray-400">{brand}</p>
        <p className="text-sm font-semibold text-blue-600">${price}.00</p>
      </div>
    </div>
  );
};

export default ProductCard;
