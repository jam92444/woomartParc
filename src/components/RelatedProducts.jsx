import React, { useEffect, useState } from "react";
import "./RelatedCardSlider.css";
import assets from "../assets/constants";
import ProductCard from "./ProductCard";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
const RelatedProducts = (category1) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const AllProducts = assets.products;
  const category = category1.category1;

  useEffect(() => {
    const filteredProducts = AllProducts.filter(
      (item) => item?.category === category
    ).slice(0, 10);
    setRelatedProducts(filteredProducts);
  }, [AllProducts, category]);

  // State for the slider's current position
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveSlider = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? relatedProducts.length - 1 : prevIndex - 1
      );
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        prevIndex === relatedProducts.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div className="mt-8 mb-8">
        <div className="">
            <h1 className="text-lg  sm:text-2xl font-medium text-gray-800">Related Products </h1>
        </div>
      <div className="slider-container">
        <div className="slider relative">
          <div
            className="absolute top-1/3 left-0 z-50 text-sm  text-gray-500"
            onClick={() => moveSlider("left")}
          >
            <FaLessThan />
          </div>
          <div
            className="product-cards z-20"
            style={{ transform: `translateX(-${currentIndex * 320}px)` }}
          >
            {relatedProducts.map((product, index) => (
              <ProductCard
                brand={product.brand}
                productName={product.productName}
                image={product.imageUrl}
                price={product.price ? product.price : product.Price}
                key={index}
                id={product.id}
              />
            ))}
          </div>
          <div
            className="absolute top-1/3 right-0 z-50 text-sm text-gray-500 "
            onClick={() => moveSlider("right")}
          >
            <FaGreaterThan />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
