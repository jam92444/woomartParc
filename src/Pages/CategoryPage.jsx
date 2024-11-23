import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import assets from "../assets/constants";
import ProductCard from "../components/ProductCard";
import Title from "../components/Title";

const CategoryPage = () => {
  const { category } = useParams();

  const products = assets.products;
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const filtered = products.filter(
      (product) => product.category === category
    );
    setProductData(filtered);
  }, [category, products]);

  return (
    <div>
      <div className="w-full flex items-center justify-center h-[200px] text-center bg-[url('https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/04/accessories-page-title.jpg')] bg-no-repeat bg-cover bg-center">
        <p className="capitalize text-2xl md:text-5xl text-white font-bold ">
          {category}
        </p>
      </div>
      <div className="mt-8 mb-8 px-2 ">
        <Title
          text1={"Hurry up to buy"}
          text2={"Popular Products"}
          text3={"How can you evaluate content without design"}
        />
      </div>

      <div className="bg-white grid px-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5    ">
        {productData.map((item, index) => (
          <ProductCard
            id={item.id}
            key={index}
            category={item.category}
            productName={item.productName}
            brand={item.brand}
            image={item.imageUrl}
            price={item.price ? item.price : item.Price}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
