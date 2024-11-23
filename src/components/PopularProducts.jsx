import React, { useEffect } from "react";
import Title from "./Title";
import assets from "../assets/constants";
import ProductCard from "./ProductCard";

const PopularProducts = () => {
  const products = assets.products;
  const popularProducts = products
    .filter((item) => item?.popular === true)
    .slice(0, 5);

  return (
    <div>
      <div className="px-4 py-4 text-center">
        <Title
          text1={"Learn how to get a discount"}
          text2={"Most Popular Products"}
          text3={
            "Proponents of content strategy may shun of dummy copy designers"
          }
        />
      </div>
      <div className="bg-white grid px-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5    ">
        {popularProducts.map((item, index) => (
          <ProductCard
            key={index}
            category={item.category}
            id={item.id}
            productName={item.productName}
            price={item.Price ? item.Price : item.price}
            brand={item.brand}
            image={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
