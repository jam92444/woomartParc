import React from "react";
import assets from "../assets/constants";

const CategoryBar = () => {
  const Categories = [
    {
      title: "Cases",
      category: "cases",
      products: 51,
      imageUrl: assets.categoryImage01,
    },
    {
      title: "Magsafe",
      category: "magsafe",
      products: 15,
      imageUrl: assets.categoryImage02,
    },
    {
      title: "Cables",
      category: "cables",
      products: 18,
      imageUrl: assets.categoryImage03,
    },
    {
      title: "Charger",
      category: "charger",
      products: 12,
      imageUrl: assets.categoryImage04,
    },
    {
      title: "Straps",
      category: "straps",
      products: 38,
      imageUrl: assets.categoryImage05,
    },
    {
      title: "Power Banks",
      category: "powerbanks",
      products: 18,
      imageUrl: assets.categoryImage06,
    },
  ];
  return (
    <div className="w-full mt-4 py-4 px-8 flex items-center justify-between flex-wrap">
      {Categories.map((item, index) => (
        <div key={index} className="mt-3 cursor-pointer flex flex-col gap-2 items-center flex-wrap ">
          <img
            className="w-28 2xl:w-48 rounded-full"
            src={item.imageUrl}
            alt=""
          />
          <div className="flex flex-col items-center">
            <p className="text-md 2xl:text-2xl md:text-lg font-medium text-gray-900">
              {item.title}
            </p>
            <p className="text-gray-500 2xl:text-lg font-normal text-xs sm:text-sm">
              {item.products} Products
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryBar;
