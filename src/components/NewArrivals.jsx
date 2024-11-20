import React, {  useState } from "react";
import Title from "./Title";
import ProductCard from "./ProductCard";
import assets from "../assets/constants";

const NewArrivals = () => {
  const [activeTab, setActiveTab] = useState("Cases");
  console.log(activeTab);
  
  const products = assets.products;

  const titles = ["Cases", "Straps", "Magsafe"];
  const casesProducts = products
    .filter((item) => item.category === "cases")
    .slice(0, 10);
  const strapProducts = products
    .filter((item) => item.category === "straps")
    .slice(0, 10);
  console.log(strapProducts);

  const magsafeProducts = products
    .filter((item) => item.category === "Accessories")
    .slice(0, 10);
  console.log(magsafeProducts);

  return (
    <div className="pl-2 md:pl-0 w-full overflow-x-hidden">
      <Title
        text1={"Hurry up to buy"}
        text2={"New Arrivals"}
        text3={"How can you evaluate content without design"}
      />
      <div className="py-2">
        <div className="flex gap-8 items-center  justify-center">
          {titles.map((item) => (
            <p
              onClick={() => setActiveTab(item)}
              className={`text-gray-400 font-medium uppercase cursor-pointer text-md ${
                activeTab === item
                  ? "border-b-2 border-blue-600 text-black"
                  : ""
              } `}
            >
              {item}
            </p>
          ))}
        </div>
        <div className=" mt-8 grid grid-cols-2 gap-y-1 items-center justify-center sm:grid-cols-3 lg:grid-cols-5">
          {activeTab === "Cases" &&
            casesProducts.map((item, index) => (
              <ProductCard
                key={index}
                productName={item.productName}
                brand={item.brand}
                price={item.Price}
                image={item.imageUrl}
              />
            ))}
            {
              activeTab === "Magsafe" && magsafeProducts.map((item,index)=>(
                <ProductCard key={index} productName={item.productName} price={item.price} brand={item.brand} image={item.imageUrl} />
              ))
            }
            {
              activeTab === "Straps" && strapProducts.map((item,index)=>(
                <ProductCard key={index} productName={item.productName} price={item.price} brand={item.brand} image={item.imageUrl} />
              ))
            }
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;