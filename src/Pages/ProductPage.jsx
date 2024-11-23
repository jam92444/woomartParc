import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import assets from "../assets/constants";
import { FaStar } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const ProductPage = () => {
  const { category, id } = useParams();
  const [filterProduct, setFilterProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const maxQuantity = 10;
  const increment = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  const products = assets.products;
  useEffect(() => {
    const foundProduct = products.find((item) => item.id === Number(id));

    if (foundProduct) {
      setFilterProduct(foundProduct);
    } else {
      setFilterProduct(null);
    }
  }, [id, products]);

  if (filterProduct === null) {
    return (
      <div className="px-8 py-6">
        <p>Product not found</p>
      </div>
    );
  }
  const handleAddToCart = () => {
    const cartItem = {
      productId: filterProduct.id,
      name: filterProduct.name,
      quantity: quantity,
      price: filterProduct.price,
    };
    console.log("Added to cart:", cartItem);
  };

  return (
    <div className="px-8 py-6">
      <div className="flex  items-center gap-2 text-gray-400 text-md">
        <p>{`Home / ${category ? category : filterProduct.category} / `}</p>{" "}
        <span className="text-gray-800 font-semibold">
          {" "}
          {`${filterProduct.productName}`}
        </span>
      </div>
      <div className="w-full flex flex-col md:flex-row items-start justify-between">
        <div className="w-3/6 flex items-center justify-center overflow-hidden">
          <img
            className="w-2/3 hover:scale-125 transition-all"
            src={filterProduct.imageUrl}
            alt=""
          />
        </div>
        <div className="w-3/6 mt-10 flex flex-col gap-2 sm:gap-5 items-start bg-white">
          <p className="text-lg sm:text-3xl font-medium text-gray-800">
            {filterProduct.productName}
          </p>
          <div className="flex items-center gap-4">
            {/* price  */}
            <p className="text-blue-600 text-lg sm:text-3xl font-semibold ">
              ${filterProduct.price ? filterProduct.price : filterProduct.Price}
            </p>
            <p className="flex items-end gap-1 text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <p className="text-gray-400 text-xs sm:text-sm">
                (1 customer review)
              </p>
            </p>
          </div>
          {/* color */}
          <div className="flex items-center font-medium gap-4 text-gray-900">
            <p className="text-sm sm:text-lg">Color:</p>{" "}
            <img className="w-10  border rounded-md border-gray-300
            " src={filterProduct.imageUrl} alt="" />
          </div>
          {/* stock  */}
          <p className="flex items-center text-md font-semibold">
            <TiTick className="text-blue-600 text-xl sm:text-2xl " />
            &nbsp;163 in stock
          </p>
          {/* add to cart and buy now button  */}
          <div className="flex items-center gap-2 sm:gap-4 ">
            <div className="cursor-pointer flex items-center justify-center  border rounded-lg  ">
              <button onClick={decrement} className=" hover:text-red-600 w-7 text-2xl flex items-center justify-center  font-medium"  disabled={quantity === 1}>
                -
              </button>
              <p className="border border-gray-300 border-t-0 border-b-0 px-4 py-2">{quantity}</p>
              <button onClick={increment} className=" hover:text-red-600 w-7 flex items-center justify-center  font-medium" disabled={quantity === maxQuantity}>
                +
              </button>
            </div>
            <button onClick={handleAddToCart} className=" px-4 sm:px-10 py-3 text-sm rounded-lg font-semibold text-white bg-blue-700">ADD TO CART</button>
            <button className=" px-4 sm:px-10 py-3 text-sm rounded-lg font-semibold text-white bg-black">BUY NOW</button>
          </div>
        <p className="w-full h-[1px] bg-gray-100"></p>

          <div>
            <p className="font-semibold text-sm mb-2">Guaranteed Safe Checkout</p>
            <img
              src="https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/04/guaranteed-safe-checkout-bordered.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
